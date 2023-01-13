import { UseAuth, IgnoreAuth, PERMS_METADATA, IGNORE_AUTH_METADATA } from "./auth.decorators";

describe('AuthDecorators', () => {

  @UseAuth('test1', 'test2')
  class Test {
    @IgnoreAuth()
    public static test() { }
  }

  it('should be defined', () => {
    expect(UseAuth).toBeDefined();
    expect(IgnoreAuth).toBeDefined();
  });

  it('should set perms metadata to class', () => {
    const metadata = Reflect.getMetadata(PERMS_METADATA, Test);
    expect(metadata).toEqual(['test1', 'test2']);
  })

  it('should set ignore auth metadata to class method', () => {
    const metadata = Reflect.getMetadata(IGNORE_AUTH_METADATA, Test.test);
    expect(metadata).toBe(true);
  })
});
