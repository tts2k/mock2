import { ConfigModule, ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { PermMode } from "@prisma/client";
import { validate } from "src/env.validation";
import { UserAuth } from "src/user/user.interface";
import { UserService } from "src/user/user.service";
import { JwtStrategy } from "./jwt.strategy";
import { JwtPayload, JwtUserPerm } from "./auth.interface";

const username = 'test';
const usernameAdmin = 'admin';

const user: UserAuth = {
  id: 1,
  username,
  isAdmin: false,
  role: [
    {
      name: 'testRole',
      permissionsOnRole: [
        {
          mode: PermMode.RW,
          permission: {
            name: 'test'
          }
        }
      ]
    },
    {
      name: 'testRole2',
      permissionsOnRole: [
        {
          mode: PermMode.RO,
          permission: {
            name: 'test2'
          }
        }
      ]
    },
    {
      name: 'testRole3',
      permissionsOnRole: [
        {
          mode: PermMode.RO,
          permission: {
            name: 'test'
          }
        }
      ]
    }
  ]
}

const userAdmin: UserAuth = {
  id: 2,
  username: usernameAdmin,
  isAdmin: true,
  role: [
    {
      name: 'testRole',
      permissionsOnRole: [
        {
          mode: PermMode.RW,
          permission: {
            name: 'test'
          }
        }
      ]
    },
  ]
}

describe('JwtStrategy', () => {
  let strategy: JwtStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ validate }),
      ],
      providers: [
        JwtStrategy,
        ConfigService,
        {
          provide: UserService,
          useValue: {
            getUserForAuth: jest.fn().mockImplementation((userId: number) => {
              if (userId === 1)
                return user;
              else if (userId === 2)
                return userAdmin;
            }),
          }
        },
      ],
    }).compile();

    strategy = module.get<JwtStrategy>(JwtStrategy);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  it('should return correct perm on validate', async () => {
    const payload: JwtPayload = { 
      sub: user.id,
      iat: null,
      exp: null,
      type: null,
      username: user.username
    }

    const permMap = new JwtUserPerm();
    permMap.set('test', PermMode.RW);
    permMap.set('test2', PermMode.RO);

    const result = await strategy.validate(payload);
    expect(result).toMatchObject({
      userId: user.id,
      username: user.username,
      isAdmin: user.isAdmin
    })
    expect(result.perms.keys()).toEqual(permMap.keys());
    expect(result.perms.values()).toEqual(permMap.values());
  })

  it('should not add any permission if user is admin', async () =>{
    const payload: JwtPayload = { 
      sub: userAdmin.id,
      iat: null,
      exp: null,
      type: null,
      username: userAdmin.username
    }
    const result = await strategy.validate(payload);
    expect(result).toMatchObject({
      userId: userAdmin.id,
      username: userAdmin.username,
      isAdmin: userAdmin.isAdmin
    })
    expect(result.perms).toBeUndefined
  })
});
