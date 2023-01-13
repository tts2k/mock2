import { createMock, PartialFuncReturn } from "@golevelup/ts-jest";
import { ExecutionContext, MethodNotAllowedException, UnauthorizedException, UseGuards } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { PermMode } from "@prisma/client";
import { IgnoreAuth, IgnorePerms, IGNORE_AUTH_METADATA, IGNORE_PERMS_METADATA, PERMS_METADATA, UseAuth } from "./auth.decorators";
import { JwtUser, JwtUserPerm } from "./auth.interface";
import { JwtAuthGuard } from "./jwt-auth.guard";

const user: JwtUser  = {
  userId: 1,
  username: 'test',
  isAdmin: false,
  perms: new JwtUserPerm([
    ['test', PermMode.RW],
    ['test2', PermMode.RO]
  ])
}

describe('JwtAuthGuard', () => {
  let ctx: ExecutionContext;
  let reflector: Reflector;
  let guard: JwtAuthGuard;

  @UseAuth('test')
  class Test { 
    @UseGuards(JwtAuthGuard)
    public static test() { }

    @UseGuards(JwtAuthGuard)
    @IgnorePerms()
    public static test2() { }

    @IgnoreAuth()
    public static testIgnoreAuth() { }
  }

  class TestNoPerm { 
    @UseGuards(JwtAuthGuard)
    public static testNoPerm() { }
  }

  @UseAuth('test2')
  class TestRO {
    @UseGuards(JwtAuthGuard)
    public static testRO() { }
  }

  beforeEach(() => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => Test.test as PartialFuncReturn<Function>,
      getClass: () => Test,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'GET'
        })
      })
    })

    reflector = createMock<Reflector>({
      get: (metadataKey, target) => {
        return Reflect.getMetadata(metadataKey, target);
      }
    })

    guard = new JwtAuthGuard(reflector);
  })

  it('should skip auth check entirely if IgnoreAuth is set', () => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => Test.testIgnoreAuth as PartialFuncReturn<Function>,
      getClass: () => Test,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'GET'
        })
      })
    })

    const result = guard.handleRequest(undefined, user, undefined, ctx);
    expect(result).toEqual(user);
    expect(reflector.get).toHaveBeenCalledWith(IGNORE_AUTH_METADATA, ctx.getHandler());
    expect(reflector.get).toHaveBeenCalledTimes(1);
  })

  it('should throw err when err is defined', () => {
    const err = new Error('test error');
    expect(() => guard.handleRequest(err, undefined, undefined, ctx)).toThrow(err);
  })

  it('should throw unauthorized error on undefined user', () => {
    expect(() => guard.handleRequest(undefined, undefined, undefined, ctx)).toThrow(UnauthorizedException);
  })

  it('should return user on ignore perms route', () => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => Test.test2 as PartialFuncReturn<Function>,
      getClass: () => Test,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'GET'
        })
      })
    })

    const result = guard.handleRequest(undefined, user, undefined, ctx);
    expect(result).toEqual(user);
    expect(reflector.get).toHaveBeenCalledWith(IGNORE_PERMS_METADATA, ctx.getHandler());
    expect(reflector.get).toHaveBeenCalledTimes(2);
  })

  it('should return user if user is admin', () => {
    const userAdmin = { ...user };
    userAdmin.isAdmin = true;
    delete userAdmin.perms;

    const result = guard.handleRequest(undefined, userAdmin, undefined, ctx);
    expect(result).toEqual(userAdmin);
    expect(ctx.switchToHttp).toHaveBeenCalledTimes(0);
  })

  it('should skip perm check on route without UseAuth', () => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => TestNoPerm.testNoPerm as PartialFuncReturn<Function>,
      getClass: () => TestNoPerm,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'GET'
        })
      })
    })

    const result = guard.handleRequest(undefined, user, undefined, ctx);
    expect(result).toEqual(user);
    expect(reflector.get).toHaveBeenCalledWith(IGNORE_PERMS_METADATA, ctx.getHandler());
    expect(reflector.get).toHaveBeenCalledWith(IGNORE_AUTH_METADATA, ctx.getHandler());
    expect(reflector.get).toHaveBeenCalledWith(PERMS_METADATA, ctx.getClass());
    expect(reflector.get).toHaveBeenCalledTimes(3);
    expect(ctx.switchToHttp).toHaveBeenCalledTimes(0);
  })

  it('should throw UnauthorizedException when user does not have the perm to access', () => {
    const localUser = { ...user };
    localUser.perms = new Map();

    expect(() => guard.handleRequest(undefined, localUser, undefined, ctx)).toThrow(UnauthorizedException);
    expect(ctx.switchToHttp).toHaveBeenCalledTimes(0);
  })

  it('should throw UnauthorizedException when route requires RW but user only has RO', () => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => TestRO.testRO as PartialFuncReturn<Function>,
      getClass: () => TestRO,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'DELETE'
        })
      })
    })

    expect(() => guard.handleRequest(undefined, user, undefined, ctx)).toThrow(UnauthorizedException);
    expect(ctx.switchToHttp).toHaveBeenCalledTimes(1);
  })

  it('should throw MethodNotAllowedException when it has to process unknown HTTP method', () => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => Test.test as PartialFuncReturn<Function>,
      getClass: () => Test,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'HEAD'
        })
      })
    })

    expect(() => guard.handleRequest(undefined, user, undefined, ctx)).toThrow(MethodNotAllowedException);
  })

  it('should return the user properly if user has enough permission (RO)', () => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => TestRO.testRO as PartialFuncReturn<Function>,
      getClass: () => TestRO,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'GET'
        })
      })
    })

    const result = guard.handleRequest(undefined, user, undefined, ctx);
    expect(result).toEqual(user);
    expect(ctx.switchToHttp).toHaveBeenCalledTimes(1);
  })

  it('should return the user properly if user has enough permission (RW)', () => {
    ctx = createMock<ExecutionContext>({
      getHandler: () => Test.test as PartialFuncReturn<Function>,
      getClass: () => Test,
      switchToHttp: () => ({
        getRequest: () => ({
          method: 'DELETE'
        })
      })
    })

    const result = guard.handleRequest(undefined, user, undefined, ctx);
    expect(result).toEqual(user);
    expect(ctx.switchToHttp).toHaveBeenCalledTimes(1);
  })
});
