import { UseAuth, IgnoreAuth, PERMS_METADATA, IGNORE_AUTH_METADATA, IgnorePerms, IGNORE_PERMS_METADATA } from "./auth.decorators";

describe('AuthDecorators', () => {

  @UseAuth('test1', 'test2')
  class Test {
    @IgnoreAuth()
    public static test() { }

    @IgnorePerms()
    public static testIgnorePerms() { }
  }

  it('should be defined', () => {
    expect(UseAuth).toBeDefined();
    expect(IgnoreAuth).toBeDefined();
    expect(IgnorePerms).toBeDefined();
  });

  it('should set perms metadata to class', () => {
    const metadata = Reflect.getMetadata(PERMS_METADATA, Test);
    expect(metadata).toEqual(['test1', 'test2']);
  })

  it('should set ignore auth metadata to class method', () => {
    const metadata = Reflect.getMetadata(IGNORE_AUTH_METADATA, Test.test);
    expect(metadata).toBe(true);
  })

  it('should set ignore perms metadata to class method', () => {
    const metadata = Reflect.getMetadata(IGNORE_PERMS_METADATA, Test.testIgnorePerms);
    expect(metadata).toBe(true);
  })
});
