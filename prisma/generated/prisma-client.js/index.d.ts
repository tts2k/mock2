
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  username: string
  email: string
  role: Role
  password: string
  active: boolean
  verifyEmail: boolean
  verifyContact: boolean
  name: string | null
  avatar: string | null
  phoneNumber: string
  userId: number
  addressId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Address
 * 
 */
export type Address = {
  id: number
  street: string | null
  district: string | null
  city: string | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: number
  refreshToken: string
  deviceId: string
  expires: Date
  userId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: number
  name: string
  sku: string
  price: Prisma.Decimal | null
  discount: number | null
  qty: number | null
  avgRating: number
  brandId: number | null
  description: string | null
  specification: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ProductColor
 * 
 */
export type ProductColor = {
  id: number
  name: string
  color: string
  images: string[]
  productId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Coupon
 * 
 */
export type Coupon = {
  id: number
  code: string
  expires: Date
  productId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ProductSnapshot
 * 
 */
export type ProductSnapshot = {
  id: number
  productId: number
  orderId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Brand
 * 
 */
export type Brand = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model CategoriesOnProducts
 * 
 */
export type CategoriesOnProducts = {
  productId: number
  categoryId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Review
 * 
 */
export type Review = {
  id: number
  content: string
  userId: number
  productId: number
  rating: Rating
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Order
 * 
 */
export type Order = {
  id: number
  orderDetailId: number
  orderStatus: OrderStatus
  userId: number | null
  paymentsId: number
  shippingMethodId: number
  shippingAddressId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Cart
 * 
 */
export type Cart = {
  id: number
}

/**
 * Model ProductsOnCart
 * 
 */
export type ProductsOnCart = {
  productId: number
  cardId: number
  qty: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShippingMethod
 * 
 */
export type ShippingMethod = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Payment
 * 
 */
export type Payment = {
  id: number
  name: string
  type: PaymentType
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Notification
 * 
 */
export type Notification = {
  id: number
  title: string
  content: string
  url: string
  type: NotificationType
  createdAt: Date
  updatedAt: Date
}

/**
 * Model NotificationSent
 * 
 */
export type NotificationSent = {
  id: number
  notificationId: number
  recipentId: number
  isRead: boolean
  readTime: Date | null
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const NotificationType: {
  ORDER_STATUS: 'ORDER_STATUS',
  REVIEW: 'REVIEW'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const OrderStatus: {
  IN_CART: 'IN_CART',
  PROCESSING: 'PROCESSING',
  SHIPPING: 'SHIPPING',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentType: {
  CASH: 'CASH',
  ONLINE: 'ONLINE'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const Rating: {
  ONE_STAR: 'ONE_STAR',
  TWO_STARS: 'TWO_STARS',
  THREE_STARS: 'THREE_STARS',
  FOUR_STARS: 'FOUR_STARS',
  FIVE_STARS: 'FIVE_STARS'
};

export type Rating = (typeof Rating)[keyof typeof Rating]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.productColor`: Exposes CRUD operations for the **ProductColor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductColors
    * const productColors = await prisma.productColor.findMany()
    * ```
    */
  get productColor(): Prisma.ProductColorDelegate<GlobalReject>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<GlobalReject>;

  /**
   * `prisma.productSnapshot`: Exposes CRUD operations for the **ProductSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSnapshots
    * const productSnapshots = await prisma.productSnapshot.findMany()
    * ```
    */
  get productSnapshot(): Prisma.ProductSnapshotDelegate<GlobalReject>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.categoriesOnProducts`: Exposes CRUD operations for the **CategoriesOnProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriesOnProducts
    * const categoriesOnProducts = await prisma.categoriesOnProducts.findMany()
    * ```
    */
  get categoriesOnProducts(): Prisma.CategoriesOnProductsDelegate<GlobalReject>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<GlobalReject>;

  /**
   * `prisma.productsOnCart`: Exposes CRUD operations for the **ProductsOnCart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsOnCarts
    * const productsOnCarts = await prisma.productsOnCart.findMany()
    * ```
    */
  get productsOnCart(): Prisma.ProductsOnCartDelegate<GlobalReject>;

  /**
   * `prisma.shippingMethod`: Exposes CRUD operations for the **ShippingMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingMethods
    * const shippingMethods = await prisma.shippingMethod.findMany()
    * ```
    */
  get shippingMethod(): Prisma.ShippingMethodDelegate<GlobalReject>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<GlobalReject>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<GlobalReject>;

  /**
   * `prisma.notificationSent`: Exposes CRUD operations for the **NotificationSent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSents
    * const notificationSents = await prisma.notificationSent.findMany()
    * ```
    */
  get notificationSent(): Prisma.NotificationSentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Address: 'Address',
    Session: 'Session',
    Product: 'Product',
    ProductColor: 'ProductColor',
    Coupon: 'Coupon',
    ProductSnapshot: 'ProductSnapshot',
    Brand: 'Brand',
    Category: 'Category',
    CategoriesOnProducts: 'CategoriesOnProducts',
    Review: 'Review',
    Order: 'Order',
    Cart: 'Cart',
    ProductsOnCart: 'ProductsOnCart',
    ShippingMethod: 'ShippingMethod',
    Payment: 'Payment',
    Notification: 'Notification',
    NotificationSent: 'NotificationSent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    reviews: number
    orders: number
    sessions: number
    NotificationSent: number
  }

  export type UserCountOutputTypeSelect = {
    reviews?: boolean
    orders?: boolean
    sessions?: boolean
    NotificationSent?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type AddressCountOutputType
   */


  export type AddressCountOutputType = {
    user: number
    order: number
  }

  export type AddressCountOutputTypeSelect = {
    user?: boolean
    order?: boolean
  }

  export type AddressCountOutputTypeGetPayload<S extends boolean | null | undefined | AddressCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AddressCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AddressCountOutputTypeArgs)
    ? AddressCountOutputType 
    : S extends { select: any } & (AddressCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AddressCountOutputType ? AddressCountOutputType[P] : never
  } 
      : AddressCountOutputType




  // Custom InputTypes

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     * 
    **/
    select?: AddressCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    categories: number
    reviews: number
    snapshots: number
    productsOnCart: number
    coupons: number
    colors: number
  }

  export type ProductCountOutputTypeSelect = {
    categories?: boolean
    reviews?: boolean
    snapshots?: boolean
    productsOnCart?: boolean
    coupons?: boolean
    colors?: boolean
  }

  export type ProductCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductCountOutputTypeArgs)
    ? ProductCountOutputType 
    : S extends { select: any } & (ProductCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
      : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     * 
    **/
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type BrandCountOutputType
   */


  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect = {
    products?: boolean
  }

  export type BrandCountOutputTypeGetPayload<S extends boolean | null | undefined | BrandCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BrandCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BrandCountOutputTypeArgs)
    ? BrandCountOutputType 
    : S extends { select: any } & (BrandCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BrandCountOutputType ? BrandCountOutputType[P] : never
  } 
      : BrandCountOutputType




  // Custom InputTypes

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     * 
    **/
    select?: BrandCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect = {
    products?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    productSnapshots: number
  }

  export type OrderCountOutputTypeSelect = {
    productSnapshots?: boolean
  }

  export type OrderCountOutputTypeGetPayload<S extends boolean | null | undefined | OrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrderCountOutputTypeArgs)
    ? OrderCountOutputType 
    : S extends { select: any } & (OrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrderCountOutputType ? OrderCountOutputType[P] : never
  } 
      : OrderCountOutputType




  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     * 
    **/
    select?: OrderCountOutputTypeSelect | null
  }



  /**
   * Count Type CartCountOutputType
   */


  export type CartCountOutputType = {
    productsOnCart: number
  }

  export type CartCountOutputTypeSelect = {
    productsOnCart?: boolean
  }

  export type CartCountOutputTypeGetPayload<S extends boolean | null | undefined | CartCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CartCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CartCountOutputTypeArgs)
    ? CartCountOutputType 
    : S extends { select: any } & (CartCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CartCountOutputType ? CartCountOutputType[P] : never
  } 
      : CartCountOutputType




  // Custom InputTypes

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     * 
    **/
    select?: CartCountOutputTypeSelect | null
  }



  /**
   * Count Type ShippingMethodCountOutputType
   */


  export type ShippingMethodCountOutputType = {
    Order: number
  }

  export type ShippingMethodCountOutputTypeSelect = {
    Order?: boolean
  }

  export type ShippingMethodCountOutputTypeGetPayload<S extends boolean | null | undefined | ShippingMethodCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShippingMethodCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ShippingMethodCountOutputTypeArgs)
    ? ShippingMethodCountOutputType 
    : S extends { select: any } & (ShippingMethodCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ShippingMethodCountOutputType ? ShippingMethodCountOutputType[P] : never
  } 
      : ShippingMethodCountOutputType




  // Custom InputTypes

  /**
   * ShippingMethodCountOutputType without action
   */
  export type ShippingMethodCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethodCountOutputType
     * 
    **/
    select?: ShippingMethodCountOutputTypeSelect | null
  }



  /**
   * Count Type PaymentCountOutputType
   */


  export type PaymentCountOutputType = {
    orders: number
  }

  export type PaymentCountOutputTypeSelect = {
    orders?: boolean
  }

  export type PaymentCountOutputTypeGetPayload<S extends boolean | null | undefined | PaymentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PaymentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PaymentCountOutputTypeArgs)
    ? PaymentCountOutputType 
    : S extends { select: any } & (PaymentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PaymentCountOutputType ? PaymentCountOutputType[P] : never
  } 
      : PaymentCountOutputType




  // Custom InputTypes

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     * 
    **/
    select?: PaymentCountOutputTypeSelect | null
  }



  /**
   * Count Type NotificationCountOutputType
   */


  export type NotificationCountOutputType = {
    NotificationSent: number
  }

  export type NotificationCountOutputTypeSelect = {
    NotificationSent?: boolean
  }

  export type NotificationCountOutputTypeGetPayload<S extends boolean | null | undefined | NotificationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? NotificationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (NotificationCountOutputTypeArgs)
    ? NotificationCountOutputType 
    : S extends { select: any } & (NotificationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof NotificationCountOutputType ? NotificationCountOutputType[P] : never
  } 
      : NotificationCountOutputType




  // Custom InputTypes

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     * 
    **/
    select?: NotificationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    role: Role | null
    password: string | null
    active: boolean | null
    verifyEmail: boolean | null
    verifyContact: boolean | null
    name: string | null
    avatar: string | null
    phoneNumber: string | null
    userId: number | null
    addressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    role: Role | null
    password: string | null
    active: boolean | null
    verifyEmail: boolean | null
    verifyContact: boolean | null
    name: string | null
    avatar: string | null
    phoneNumber: string | null
    userId: number | null
    addressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    role: number
    password: number
    active: number
    verifyEmail: number
    verifyContact: number
    name: number
    avatar: number
    phoneNumber: number
    userId: number
    addressId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    password?: true
    active?: true
    verifyEmail?: true
    verifyContact?: true
    name?: true
    avatar?: true
    phoneNumber?: true
    userId?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    password?: true
    active?: true
    verifyEmail?: true
    verifyContact?: true
    name?: true
    avatar?: true
    phoneNumber?: true
    userId?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    password?: true
    active?: true
    verifyEmail?: true
    verifyContact?: true
    name?: true
    avatar?: true
    phoneNumber?: true
    userId?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    role: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name: string | null
    avatar: string | null
    phoneNumber: string
    userId: number
    addressId: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    active?: boolean
    verifyEmail?: boolean
    verifyContact?: boolean
    name?: boolean
    avatar?: boolean
    phoneNumber?: boolean
    userId?: boolean
    address?: boolean | AddressArgs
    addressId?: boolean
    reviews?: boolean | ReviewFindManyArgs
    orders?: boolean | OrderFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    NotificationSent?: boolean | NotificationSentFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    address?: boolean | AddressArgs
    reviews?: boolean | ReviewFindManyArgs
    orders?: boolean | OrderFindManyArgs
    sessions?: boolean | SessionFindManyArgs
    NotificationSent?: boolean | NotificationSentFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'address' ? AddressGetPayload<S['include'][P]> :
        P extends 'reviews' ? Array < ReviewGetPayload<S['include'][P]>>  :
        P extends 'orders' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'NotificationSent' ? Array < NotificationSentGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'address' ? AddressGetPayload<S['select'][P]> :
        P extends 'reviews' ? Array < ReviewGetPayload<S['select'][P]>>  :
        P extends 'orders' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'NotificationSent' ? Array < NotificationSentGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    address<T extends AddressArgs= {}>(args?: Subset<T, AddressArgs>): Prisma__AddressClient<AddressGetPayload<T> | Null>;

    reviews<T extends ReviewFindManyArgs= {}>(args?: Subset<T, ReviewFindManyArgs>): PrismaPromise<Array<ReviewGetPayload<T>>| Null>;

    orders<T extends OrderFindManyArgs= {}>(args?: Subset<T, OrderFindManyArgs>): PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    sessions<T extends SessionFindManyArgs= {}>(args?: Subset<T, SessionFindManyArgs>): PrismaPromise<Array<SessionGetPayload<T>>| Null>;

    NotificationSent<T extends NotificationSentFindManyArgs= {}>(args?: Subset<T, NotificationSentFindManyArgs>): PrismaPromise<Array<NotificationSentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    street: string | null
    district: string | null
    city: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    street: string | null
    district: string | null
    city: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    district: number
    city: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    district?: true
    city?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    district?: true
    city?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    district?: true
    city?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: Array<AddressScalarFieldEnum>
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: number
    street: string | null
    district: string | null
    city: string | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    id?: boolean
    street?: boolean
    district?: boolean
    city?: boolean
    user?: boolean | UserFindManyArgs
    order?: boolean | OrderFindManyArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }


  export type AddressInclude = {
    user?: boolean | UserFindManyArgs
    order?: boolean | OrderFindManyArgs
    _count?: boolean | AddressCountOutputTypeArgs
  } 

  export type AddressGetPayload<S extends boolean | null | undefined | AddressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Address :
    S extends undefined ? never :
    S extends { include: any } & (AddressArgs | AddressFindManyArgs)
    ? Address  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'order' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AddressArgs | AddressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'order' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Address ? Address[P] : never
  } 
      : Address


  type AddressCountArgs = Merge<
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }
  >

  export interface AddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): PrismaPromise<Array<AddressGetPayload<T>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserFindManyArgs= {}>(args?: Subset<T, UserFindManyArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    order<T extends OrderFindManyArgs= {}>(args?: Subset<T, OrderFindManyArgs>): PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Address base type for findUnique actions
   */
  export type AddressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }

  /**
   * Address: findUnique
   */
  export interface AddressFindUniqueArgs extends AddressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address base type for findFirst actions
   */
  export type AddressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * Address: findFirst
   */
  export interface AddressFindFirstArgs extends AddressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     * 
    **/
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     * 
    **/
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     * 
    **/
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     * 
    **/
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     * 
    **/
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     * 
    **/
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     * 
    **/
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     * 
    **/
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     * 
    **/
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     * 
    **/
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     * 
    **/
    where?: AddressWhereInput
  }


  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     * 
    **/
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AddressInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    deviceId: string | null
    expires: Date | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    deviceId: string | null
    expires: Date | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    refreshToken: number
    deviceId: number
    expires: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    refreshToken?: true
    deviceId?: true
    expires?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    deviceId?: true
    expires?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    refreshToken?: true
    deviceId?: true
    expires?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: number
    refreshToken: string
    deviceId: string
    expires: Date
    userId: number | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    refreshToken?: boolean
    deviceId?: boolean
    expires?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type SessionInclude = {
    user?: boolean | UserArgs
  } 

  export type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Session :
    S extends undefined ? never :
    S extends { include: any } & (SessionArgs | SessionFindManyArgs)
    ? Session  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (SessionArgs | SessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Session ? Session[P] : never
  } 
      : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): PrismaPromise<Array<SessionGetPayload<T>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session: findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session: findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    discount: number | null
    qty: number | null
    avgRating: number | null
    brandId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    discount: number | null
    qty: number | null
    avgRating: number | null
    brandId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    sku: string | null
    price: Decimal | null
    discount: number | null
    qty: number | null
    avgRating: number | null
    brandId: number | null
    description: string | null
    specification: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sku: string | null
    price: Decimal | null
    discount: number | null
    qty: number | null
    avgRating: number | null
    brandId: number | null
    description: string | null
    specification: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    price: number
    discount: number
    qty: number
    avgRating: number
    brandId: number
    description: number
    specification: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    qty?: true
    avgRating?: true
    brandId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    qty?: true
    avgRating?: true
    brandId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    price?: true
    discount?: true
    qty?: true
    avgRating?: true
    brandId?: true
    description?: true
    specification?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    price?: true
    discount?: true
    qty?: true
    avgRating?: true
    brandId?: true
    description?: true
    specification?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    price?: true
    discount?: true
    qty?: true
    avgRating?: true
    brandId?: true
    description?: true
    specification?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: number
    name: string
    sku: string
    price: Decimal | null
    discount: number | null
    qty: number | null
    avgRating: number
    brandId: number | null
    description: string | null
    specification: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    name?: boolean
    sku?: boolean
    price?: boolean
    discount?: boolean
    qty?: boolean
    avgRating?: boolean
    brandId?: boolean
    description?: boolean
    specification?: boolean
    categories?: boolean | CategoriesOnProductsFindManyArgs
    reviews?: boolean | ReviewFindManyArgs
    snapshots?: boolean | ProductSnapshotFindManyArgs
    productsOnCart?: boolean | ProductsOnCartFindManyArgs
    coupons?: boolean | CouponFindManyArgs
    colors?: boolean | ProductColorFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }


  export type ProductInclude = {
    categories?: boolean | CategoriesOnProductsFindManyArgs
    reviews?: boolean | ReviewFindManyArgs
    snapshots?: boolean | ProductSnapshotFindManyArgs
    productsOnCart?: boolean | ProductsOnCartFindManyArgs
    coupons?: boolean | CouponFindManyArgs
    colors?: boolean | ProductColorFindManyArgs
    brand?: boolean | BrandArgs
    _count?: boolean | ProductCountOutputTypeArgs
  } 

  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'categories' ? Array < CategoriesOnProductsGetPayload<S['include'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['include'][P]>>  :
        P extends 'snapshots' ? Array < ProductSnapshotGetPayload<S['include'][P]>>  :
        P extends 'productsOnCart' ? Array < ProductsOnCartGetPayload<S['include'][P]>>  :
        P extends 'coupons' ? Array < CouponGetPayload<S['include'][P]>>  :
        P extends 'colors' ? Array < ProductColorGetPayload<S['include'][P]>>  :
        P extends 'brand' ? BrandGetPayload<S['include'][P]> | null :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'categories' ? Array < CategoriesOnProductsGetPayload<S['select'][P]>>  :
        P extends 'reviews' ? Array < ReviewGetPayload<S['select'][P]>>  :
        P extends 'snapshots' ? Array < ProductSnapshotGetPayload<S['select'][P]>>  :
        P extends 'productsOnCart' ? Array < ProductsOnCartGetPayload<S['select'][P]>>  :
        P extends 'coupons' ? Array < CouponGetPayload<S['select'][P]>>  :
        P extends 'colors' ? Array < ProductColorGetPayload<S['select'][P]>>  :
        P extends 'brand' ? BrandGetPayload<S['select'][P]> | null :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    categories<T extends CategoriesOnProductsFindManyArgs= {}>(args?: Subset<T, CategoriesOnProductsFindManyArgs>): PrismaPromise<Array<CategoriesOnProductsGetPayload<T>>| Null>;

    reviews<T extends ReviewFindManyArgs= {}>(args?: Subset<T, ReviewFindManyArgs>): PrismaPromise<Array<ReviewGetPayload<T>>| Null>;

    snapshots<T extends ProductSnapshotFindManyArgs= {}>(args?: Subset<T, ProductSnapshotFindManyArgs>): PrismaPromise<Array<ProductSnapshotGetPayload<T>>| Null>;

    productsOnCart<T extends ProductsOnCartFindManyArgs= {}>(args?: Subset<T, ProductsOnCartFindManyArgs>): PrismaPromise<Array<ProductsOnCartGetPayload<T>>| Null>;

    coupons<T extends CouponFindManyArgs= {}>(args?: Subset<T, CouponFindManyArgs>): PrismaPromise<Array<CouponGetPayload<T>>| Null>;

    colors<T extends ProductColorFindManyArgs= {}>(args?: Subset<T, ProductColorFindManyArgs>): PrismaPromise<Array<ProductColorGetPayload<T>>| Null>;

    brand<T extends BrandArgs= {}>(args?: Subset<T, BrandArgs>): Prisma__BrandClient<BrandGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product: findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product: findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductInclude | null
  }



  /**
   * Model ProductColor
   */


  export type AggregateProductColor = {
    _count: ProductColorCountAggregateOutputType | null
    _avg: ProductColorAvgAggregateOutputType | null
    _sum: ProductColorSumAggregateOutputType | null
    _min: ProductColorMinAggregateOutputType | null
    _max: ProductColorMaxAggregateOutputType | null
  }

  export type ProductColorAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductColorSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductColorMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductColorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductColorCountAggregateOutputType = {
    id: number
    name: number
    color: number
    images: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductColorAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductColorSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductColorMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductColorMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductColorCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    images?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductColorAggregateArgs = {
    /**
     * Filter which ProductColor to aggregate.
     * 
    **/
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductColors
    **/
    _count?: true | ProductColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductColorMaxAggregateInputType
  }

  export type GetProductColorAggregateType<T extends ProductColorAggregateArgs> = {
        [P in keyof T & keyof AggregateProductColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductColor[P]>
      : GetScalarType<T[P], AggregateProductColor[P]>
  }




  export type ProductColorGroupByArgs = {
    where?: ProductColorWhereInput
    orderBy?: Enumerable<ProductColorOrderByWithAggregationInput>
    by: Array<ProductColorScalarFieldEnum>
    having?: ProductColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductColorCountAggregateInputType | true
    _avg?: ProductColorAvgAggregateInputType
    _sum?: ProductColorSumAggregateInputType
    _min?: ProductColorMinAggregateInputType
    _max?: ProductColorMaxAggregateInputType
  }


  export type ProductColorGroupByOutputType = {
    id: number
    name: string
    color: string
    images: string[]
    productId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductColorCountAggregateOutputType | null
    _avg: ProductColorAvgAggregateOutputType | null
    _sum: ProductColorSumAggregateOutputType | null
    _min: ProductColorMinAggregateOutputType | null
    _max: ProductColorMaxAggregateOutputType | null
  }

  type GetProductColorGroupByPayload<T extends ProductColorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductColorGroupByOutputType[P]>
            : GetScalarType<T[P], ProductColorGroupByOutputType[P]>
        }
      >
    >


  export type ProductColorSelect = {
    id?: boolean
    name?: boolean
    color?: boolean
    images?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductArgs
  }


  export type ProductColorInclude = {
    product?: boolean | ProductArgs
  } 

  export type ProductColorGetPayload<S extends boolean | null | undefined | ProductColorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductColor :
    S extends undefined ? never :
    S extends { include: any } & (ProductColorArgs | ProductColorFindManyArgs)
    ? ProductColor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductColorArgs | ProductColorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof ProductColor ? ProductColor[P] : never
  } 
      : ProductColor


  type ProductColorCountArgs = Merge<
    Omit<ProductColorFindManyArgs, 'select' | 'include'> & {
      select?: ProductColorCountAggregateInputType | true
    }
  >

  export interface ProductColorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProductColor that matches the filter.
     * @param {ProductColorFindUniqueArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductColorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductColorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductColor'> extends True ? Prisma__ProductColorClient<ProductColorGetPayload<T>> : Prisma__ProductColorClient<ProductColorGetPayload<T> | null, null>

    /**
     * Find one ProductColor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductColorFindUniqueOrThrowArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductColorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductColorFindUniqueOrThrowArgs>
    ): Prisma__ProductColorClient<ProductColorGetPayload<T>>

    /**
     * Find the first ProductColor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindFirstArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductColorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductColorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductColor'> extends True ? Prisma__ProductColorClient<ProductColorGetPayload<T>> : Prisma__ProductColorClient<ProductColorGetPayload<T> | null, null>

    /**
     * Find the first ProductColor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindFirstOrThrowArgs} args - Arguments to find a ProductColor
     * @example
     * // Get one ProductColor
     * const productColor = await prisma.productColor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductColorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductColorFindFirstOrThrowArgs>
    ): Prisma__ProductColorClient<ProductColorGetPayload<T>>

    /**
     * Find zero or more ProductColors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductColors
     * const productColors = await prisma.productColor.findMany()
     * 
     * // Get first 10 ProductColors
     * const productColors = await prisma.productColor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productColorWithIdOnly = await prisma.productColor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductColorFindManyArgs>(
      args?: SelectSubset<T, ProductColorFindManyArgs>
    ): PrismaPromise<Array<ProductColorGetPayload<T>>>

    /**
     * Create a ProductColor.
     * @param {ProductColorCreateArgs} args - Arguments to create a ProductColor.
     * @example
     * // Create one ProductColor
     * const ProductColor = await prisma.productColor.create({
     *   data: {
     *     // ... data to create a ProductColor
     *   }
     * })
     * 
    **/
    create<T extends ProductColorCreateArgs>(
      args: SelectSubset<T, ProductColorCreateArgs>
    ): Prisma__ProductColorClient<ProductColorGetPayload<T>>

    /**
     * Create many ProductColors.
     *     @param {ProductColorCreateManyArgs} args - Arguments to create many ProductColors.
     *     @example
     *     // Create many ProductColors
     *     const productColor = await prisma.productColor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductColorCreateManyArgs>(
      args?: SelectSubset<T, ProductColorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductColor.
     * @param {ProductColorDeleteArgs} args - Arguments to delete one ProductColor.
     * @example
     * // Delete one ProductColor
     * const ProductColor = await prisma.productColor.delete({
     *   where: {
     *     // ... filter to delete one ProductColor
     *   }
     * })
     * 
    **/
    delete<T extends ProductColorDeleteArgs>(
      args: SelectSubset<T, ProductColorDeleteArgs>
    ): Prisma__ProductColorClient<ProductColorGetPayload<T>>

    /**
     * Update one ProductColor.
     * @param {ProductColorUpdateArgs} args - Arguments to update one ProductColor.
     * @example
     * // Update one ProductColor
     * const productColor = await prisma.productColor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductColorUpdateArgs>(
      args: SelectSubset<T, ProductColorUpdateArgs>
    ): Prisma__ProductColorClient<ProductColorGetPayload<T>>

    /**
     * Delete zero or more ProductColors.
     * @param {ProductColorDeleteManyArgs} args - Arguments to filter ProductColors to delete.
     * @example
     * // Delete a few ProductColors
     * const { count } = await prisma.productColor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductColorDeleteManyArgs>(
      args?: SelectSubset<T, ProductColorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductColors
     * const productColor = await prisma.productColor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductColorUpdateManyArgs>(
      args: SelectSubset<T, ProductColorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductColor.
     * @param {ProductColorUpsertArgs} args - Arguments to update or create a ProductColor.
     * @example
     * // Update or create a ProductColor
     * const productColor = await prisma.productColor.upsert({
     *   create: {
     *     // ... data to create a ProductColor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductColor we want to update
     *   }
     * })
    **/
    upsert<T extends ProductColorUpsertArgs>(
      args: SelectSubset<T, ProductColorUpsertArgs>
    ): Prisma__ProductColorClient<ProductColorGetPayload<T>>

    /**
     * Count the number of ProductColors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorCountArgs} args - Arguments to filter ProductColors to count.
     * @example
     * // Count the number of ProductColors
     * const count = await prisma.productColor.count({
     *   where: {
     *     // ... the filter for the ProductColors we want to count
     *   }
     * })
    **/
    count<T extends ProductColorCountArgs>(
      args?: Subset<T, ProductColorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductColorAggregateArgs>(args: Subset<T, ProductColorAggregateArgs>): PrismaPromise<GetProductColorAggregateType<T>>

    /**
     * Group by ProductColor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductColorGroupByArgs['orderBy'] }
        : { orderBy?: ProductColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductColorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductColor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductColorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductColor base type for findUnique actions
   */
  export type ProductColorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * Filter, which ProductColor to fetch.
     * 
    **/
    where: ProductColorWhereUniqueInput
  }

  /**
   * ProductColor: findUnique
   */
  export interface ProductColorFindUniqueArgs extends ProductColorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductColor findUniqueOrThrow
   */
  export type ProductColorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * Filter, which ProductColor to fetch.
     * 
    **/
    where: ProductColorWhereUniqueInput
  }


  /**
   * ProductColor base type for findFirst actions
   */
  export type ProductColorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * Filter, which ProductColor to fetch.
     * 
    **/
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductColors.
     * 
    **/
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductColors.
     * 
    **/
    distinct?: Enumerable<ProductColorScalarFieldEnum>
  }

  /**
   * ProductColor: findFirst
   */
  export interface ProductColorFindFirstArgs extends ProductColorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductColor findFirstOrThrow
   */
  export type ProductColorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * Filter, which ProductColor to fetch.
     * 
    **/
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductColors.
     * 
    **/
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductColors.
     * 
    **/
    distinct?: Enumerable<ProductColorScalarFieldEnum>
  }


  /**
   * ProductColor findMany
   */
  export type ProductColorFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * Filter, which ProductColors to fetch.
     * 
    **/
    where?: ProductColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductColors to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductColorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductColors.
     * 
    **/
    cursor?: ProductColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductColors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductColors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductColorScalarFieldEnum>
  }


  /**
   * ProductColor create
   */
  export type ProductColorCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * The data needed to create a ProductColor.
     * 
    **/
    data: XOR<ProductColorCreateInput, ProductColorUncheckedCreateInput>
  }


  /**
   * ProductColor createMany
   */
  export type ProductColorCreateManyArgs = {
    /**
     * The data used to create many ProductColors.
     * 
    **/
    data: Enumerable<ProductColorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductColor update
   */
  export type ProductColorUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * The data needed to update a ProductColor.
     * 
    **/
    data: XOR<ProductColorUpdateInput, ProductColorUncheckedUpdateInput>
    /**
     * Choose, which ProductColor to update.
     * 
    **/
    where: ProductColorWhereUniqueInput
  }


  /**
   * ProductColor updateMany
   */
  export type ProductColorUpdateManyArgs = {
    /**
     * The data used to update ProductColors.
     * 
    **/
    data: XOR<ProductColorUpdateManyMutationInput, ProductColorUncheckedUpdateManyInput>
    /**
     * Filter which ProductColors to update
     * 
    **/
    where?: ProductColorWhereInput
  }


  /**
   * ProductColor upsert
   */
  export type ProductColorUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * The filter to search for the ProductColor to update in case it exists.
     * 
    **/
    where: ProductColorWhereUniqueInput
    /**
     * In case the ProductColor found by the `where` argument doesn't exist, create a new ProductColor with this data.
     * 
    **/
    create: XOR<ProductColorCreateInput, ProductColorUncheckedCreateInput>
    /**
     * In case the ProductColor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductColorUpdateInput, ProductColorUncheckedUpdateInput>
  }


  /**
   * ProductColor delete
   */
  export type ProductColorDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
    /**
     * Filter which ProductColor to delete.
     * 
    **/
    where: ProductColorWhereUniqueInput
  }


  /**
   * ProductColor deleteMany
   */
  export type ProductColorDeleteManyArgs = {
    /**
     * Filter which ProductColors to delete
     * 
    **/
    where?: ProductColorWhereInput
  }


  /**
   * ProductColor without action
   */
  export type ProductColorArgs = {
    /**
     * Select specific fields to fetch from the ProductColor
     * 
    **/
    select?: ProductColorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductColorInclude | null
  }



  /**
   * Model Coupon
   */


  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type CouponSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: number | null
    code: string | null
    expires: Date | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: number | null
    code: string | null
    expires: Date | null
    productId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    expires: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type CouponSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    expires?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    expires?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    expires?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs = {
    /**
     * Filter which Coupon to aggregate.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs = {
    where?: CouponWhereInput
    orderBy?: Enumerable<CouponOrderByWithAggregationInput>
    by: Array<CouponScalarFieldEnum>
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }


  export type CouponGroupByOutputType = {
    id: number
    code: string
    expires: Date
    productId: number | null
    createdAt: Date
    updatedAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect = {
    id?: boolean
    code?: boolean
    expires?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductArgs
  }


  export type CouponInclude = {
    product?: boolean | ProductArgs
  } 

  export type CouponGetPayload<S extends boolean | null | undefined | CouponArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Coupon :
    S extends undefined ? never :
    S extends { include: any } & (CouponArgs | CouponFindManyArgs)
    ? Coupon  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (CouponArgs | CouponFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> | null :  P extends keyof Coupon ? Coupon[P] : never
  } 
      : Coupon


  type CouponCountArgs = Merge<
    Omit<CouponFindManyArgs, 'select' | 'include'> & {
      select?: CouponCountAggregateInputType | true
    }
  >

  export interface CouponDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CouponFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CouponFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Coupon'> extends True ? Prisma__CouponClient<CouponGetPayload<T>> : Prisma__CouponClient<CouponGetPayload<T> | null, null>

    /**
     * Find one Coupon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CouponFindUniqueOrThrowArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CouponFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CouponFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Coupon'> extends True ? Prisma__CouponClient<CouponGetPayload<T>> : Prisma__CouponClient<CouponGetPayload<T> | null, null>

    /**
     * Find the first Coupon that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CouponFindFirstOrThrowArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CouponFindManyArgs>(
      args?: SelectSubset<T, CouponFindManyArgs>
    ): PrismaPromise<Array<CouponGetPayload<T>>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
    **/
    create<T extends CouponCreateArgs>(
      args: SelectSubset<T, CouponCreateArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Create many Coupons.
     *     @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     *     @example
     *     // Create many Coupons
     *     const coupon = await prisma.coupon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CouponCreateManyArgs>(
      args?: SelectSubset<T, CouponCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
    **/
    delete<T extends CouponDeleteArgs>(
      args: SelectSubset<T, CouponDeleteArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CouponUpdateArgs>(
      args: SelectSubset<T, CouponUpdateArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CouponDeleteManyArgs>(
      args?: SelectSubset<T, CouponDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CouponUpdateManyArgs>(
      args: SelectSubset<T, CouponUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
    **/
    upsert<T extends CouponUpsertArgs>(
      args: SelectSubset<T, CouponUpsertArgs>
    ): Prisma__CouponClient<CouponGetPayload<T>>

    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CouponClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Coupon base type for findUnique actions
   */
  export type CouponFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon: findUnique
   */
  export interface CouponFindUniqueArgs extends CouponFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon base type for findFirst actions
   */
  export type CouponFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     * 
    **/
    distinct?: Enumerable<CouponScalarFieldEnum>
  }

  /**
   * Coupon: findFirst
   */
  export interface CouponFindFirstArgs extends CouponFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupon to fetch.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     * 
    **/
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter, which Coupons to fetch.
     * 
    **/
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     * 
    **/
    orderBy?: Enumerable<CouponOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     * 
    **/
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CouponScalarFieldEnum>
  }


  /**
   * Coupon create
   */
  export type CouponCreateArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * The data needed to create a Coupon.
     * 
    **/
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }


  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs = {
    /**
     * The data used to create many Coupons.
     * 
    **/
    data: Enumerable<CouponCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Coupon update
   */
  export type CouponUpdateArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * The data needed to update a Coupon.
     * 
    **/
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     * 
    **/
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs = {
    /**
     * The data used to update Coupons.
     * 
    **/
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     * 
    **/
    where?: CouponWhereInput
  }


  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     * 
    **/
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     * 
    **/
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }


  /**
   * Coupon delete
   */
  export type CouponDeleteArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
    /**
     * Filter which Coupon to delete.
     * 
    **/
    where: CouponWhereUniqueInput
  }


  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs = {
    /**
     * Filter which Coupons to delete
     * 
    **/
    where?: CouponWhereInput
  }


  /**
   * Coupon without action
   */
  export type CouponArgs = {
    /**
     * Select specific fields to fetch from the Coupon
     * 
    **/
    select?: CouponSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CouponInclude | null
  }



  /**
   * Model ProductSnapshot
   */


  export type AggregateProductSnapshot = {
    _count: ProductSnapshotCountAggregateOutputType | null
    _avg: ProductSnapshotAvgAggregateOutputType | null
    _sum: ProductSnapshotSumAggregateOutputType | null
    _min: ProductSnapshotMinAggregateOutputType | null
    _max: ProductSnapshotMaxAggregateOutputType | null
  }

  export type ProductSnapshotAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    orderId: number | null
  }

  export type ProductSnapshotSumAggregateOutputType = {
    id: number | null
    productId: number | null
    orderId: number | null
  }

  export type ProductSnapshotMinAggregateOutputType = {
    id: number | null
    productId: number | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSnapshotMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSnapshotCountAggregateOutputType = {
    id: number
    productId: number
    orderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductSnapshotAvgAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
  }

  export type ProductSnapshotSumAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
  }

  export type ProductSnapshotMinAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSnapshotMaxAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSnapshotCountAggregateInputType = {
    id?: true
    productId?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductSnapshotAggregateArgs = {
    /**
     * Filter which ProductSnapshot to aggregate.
     * 
    **/
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductSnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSnapshots
    **/
    _count?: true | ProductSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSnapshotMaxAggregateInputType
  }

  export type GetProductSnapshotAggregateType<T extends ProductSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSnapshot[P]>
      : GetScalarType<T[P], AggregateProductSnapshot[P]>
  }




  export type ProductSnapshotGroupByArgs = {
    where?: ProductSnapshotWhereInput
    orderBy?: Enumerable<ProductSnapshotOrderByWithAggregationInput>
    by: Array<ProductSnapshotScalarFieldEnum>
    having?: ProductSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSnapshotCountAggregateInputType | true
    _avg?: ProductSnapshotAvgAggregateInputType
    _sum?: ProductSnapshotSumAggregateInputType
    _min?: ProductSnapshotMinAggregateInputType
    _max?: ProductSnapshotMaxAggregateInputType
  }


  export type ProductSnapshotGroupByOutputType = {
    id: number
    productId: number
    orderId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductSnapshotCountAggregateOutputType | null
    _avg: ProductSnapshotAvgAggregateOutputType | null
    _sum: ProductSnapshotSumAggregateOutputType | null
    _min: ProductSnapshotMinAggregateOutputType | null
    _max: ProductSnapshotMaxAggregateOutputType | null
  }

  type GetProductSnapshotGroupByPayload<T extends ProductSnapshotGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type ProductSnapshotSelect = {
    id?: boolean
    productId?: boolean
    product?: boolean | ProductArgs
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderArgs
  }


  export type ProductSnapshotInclude = {
    product?: boolean | ProductArgs
    order?: boolean | OrderArgs
  } 

  export type ProductSnapshotGetPayload<S extends boolean | null | undefined | ProductSnapshotArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductSnapshot :
    S extends undefined ? never :
    S extends { include: any } & (ProductSnapshotArgs | ProductSnapshotFindManyArgs)
    ? ProductSnapshot  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'order' ? OrderGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductSnapshotArgs | ProductSnapshotFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'order' ? OrderGetPayload<S['select'][P]> :  P extends keyof ProductSnapshot ? ProductSnapshot[P] : never
  } 
      : ProductSnapshot


  type ProductSnapshotCountArgs = Merge<
    Omit<ProductSnapshotFindManyArgs, 'select' | 'include'> & {
      select?: ProductSnapshotCountAggregateInputType | true
    }
  >

  export interface ProductSnapshotDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProductSnapshot that matches the filter.
     * @param {ProductSnapshotFindUniqueArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductSnapshotFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductSnapshotFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductSnapshot'> extends True ? Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>> : Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T> | null, null>

    /**
     * Find one ProductSnapshot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductSnapshotFindUniqueOrThrowArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductSnapshotFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductSnapshotFindUniqueOrThrowArgs>
    ): Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>>

    /**
     * Find the first ProductSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotFindFirstArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductSnapshotFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductSnapshotFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductSnapshot'> extends True ? Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>> : Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T> | null, null>

    /**
     * Find the first ProductSnapshot that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotFindFirstOrThrowArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductSnapshotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductSnapshotFindFirstOrThrowArgs>
    ): Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>>

    /**
     * Find zero or more ProductSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSnapshots
     * const productSnapshots = await prisma.productSnapshot.findMany()
     * 
     * // Get first 10 ProductSnapshots
     * const productSnapshots = await prisma.productSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSnapshotWithIdOnly = await prisma.productSnapshot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductSnapshotFindManyArgs>(
      args?: SelectSubset<T, ProductSnapshotFindManyArgs>
    ): PrismaPromise<Array<ProductSnapshotGetPayload<T>>>

    /**
     * Create a ProductSnapshot.
     * @param {ProductSnapshotCreateArgs} args - Arguments to create a ProductSnapshot.
     * @example
     * // Create one ProductSnapshot
     * const ProductSnapshot = await prisma.productSnapshot.create({
     *   data: {
     *     // ... data to create a ProductSnapshot
     *   }
     * })
     * 
    **/
    create<T extends ProductSnapshotCreateArgs>(
      args: SelectSubset<T, ProductSnapshotCreateArgs>
    ): Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>>

    /**
     * Create many ProductSnapshots.
     *     @param {ProductSnapshotCreateManyArgs} args - Arguments to create many ProductSnapshots.
     *     @example
     *     // Create many ProductSnapshots
     *     const productSnapshot = await prisma.productSnapshot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductSnapshotCreateManyArgs>(
      args?: SelectSubset<T, ProductSnapshotCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductSnapshot.
     * @param {ProductSnapshotDeleteArgs} args - Arguments to delete one ProductSnapshot.
     * @example
     * // Delete one ProductSnapshot
     * const ProductSnapshot = await prisma.productSnapshot.delete({
     *   where: {
     *     // ... filter to delete one ProductSnapshot
     *   }
     * })
     * 
    **/
    delete<T extends ProductSnapshotDeleteArgs>(
      args: SelectSubset<T, ProductSnapshotDeleteArgs>
    ): Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>>

    /**
     * Update one ProductSnapshot.
     * @param {ProductSnapshotUpdateArgs} args - Arguments to update one ProductSnapshot.
     * @example
     * // Update one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductSnapshotUpdateArgs>(
      args: SelectSubset<T, ProductSnapshotUpdateArgs>
    ): Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>>

    /**
     * Delete zero or more ProductSnapshots.
     * @param {ProductSnapshotDeleteManyArgs} args - Arguments to filter ProductSnapshots to delete.
     * @example
     * // Delete a few ProductSnapshots
     * const { count } = await prisma.productSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductSnapshotDeleteManyArgs>(
      args?: SelectSubset<T, ProductSnapshotDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSnapshots
     * const productSnapshot = await prisma.productSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductSnapshotUpdateManyArgs>(
      args: SelectSubset<T, ProductSnapshotUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductSnapshot.
     * @param {ProductSnapshotUpsertArgs} args - Arguments to update or create a ProductSnapshot.
     * @example
     * // Update or create a ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.upsert({
     *   create: {
     *     // ... data to create a ProductSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSnapshot we want to update
     *   }
     * })
    **/
    upsert<T extends ProductSnapshotUpsertArgs>(
      args: SelectSubset<T, ProductSnapshotUpsertArgs>
    ): Prisma__ProductSnapshotClient<ProductSnapshotGetPayload<T>>

    /**
     * Count the number of ProductSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotCountArgs} args - Arguments to filter ProductSnapshots to count.
     * @example
     * // Count the number of ProductSnapshots
     * const count = await prisma.productSnapshot.count({
     *   where: {
     *     // ... the filter for the ProductSnapshots we want to count
     *   }
     * })
    **/
    count<T extends ProductSnapshotCountArgs>(
      args?: Subset<T, ProductSnapshotCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductSnapshotAggregateArgs>(args: Subset<T, ProductSnapshotAggregateArgs>): PrismaPromise<GetProductSnapshotAggregateType<T>>

    /**
     * Group by ProductSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: ProductSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSnapshotGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductSnapshotClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    order<T extends OrderArgs= {}>(args?: Subset<T, OrderArgs>): Prisma__OrderClient<OrderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductSnapshot base type for findUnique actions
   */
  export type ProductSnapshotFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * Filter, which ProductSnapshot to fetch.
     * 
    **/
    where: ProductSnapshotWhereUniqueInput
  }

  /**
   * ProductSnapshot: findUnique
   */
  export interface ProductSnapshotFindUniqueArgs extends ProductSnapshotFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductSnapshot findUniqueOrThrow
   */
  export type ProductSnapshotFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * Filter, which ProductSnapshot to fetch.
     * 
    **/
    where: ProductSnapshotWhereUniqueInput
  }


  /**
   * ProductSnapshot base type for findFirst actions
   */
  export type ProductSnapshotFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * Filter, which ProductSnapshot to fetch.
     * 
    **/
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductSnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSnapshots.
     * 
    **/
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSnapshots.
     * 
    **/
    distinct?: Enumerable<ProductSnapshotScalarFieldEnum>
  }

  /**
   * ProductSnapshot: findFirst
   */
  export interface ProductSnapshotFindFirstArgs extends ProductSnapshotFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductSnapshot findFirstOrThrow
   */
  export type ProductSnapshotFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * Filter, which ProductSnapshot to fetch.
     * 
    **/
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductSnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSnapshots.
     * 
    **/
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSnapshots.
     * 
    **/
    distinct?: Enumerable<ProductSnapshotScalarFieldEnum>
  }


  /**
   * ProductSnapshot findMany
   */
  export type ProductSnapshotFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * Filter, which ProductSnapshots to fetch.
     * 
    **/
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductSnapshotOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSnapshots.
     * 
    **/
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductSnapshotScalarFieldEnum>
  }


  /**
   * ProductSnapshot create
   */
  export type ProductSnapshotCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * The data needed to create a ProductSnapshot.
     * 
    **/
    data: XOR<ProductSnapshotCreateInput, ProductSnapshotUncheckedCreateInput>
  }


  /**
   * ProductSnapshot createMany
   */
  export type ProductSnapshotCreateManyArgs = {
    /**
     * The data used to create many ProductSnapshots.
     * 
    **/
    data: Enumerable<ProductSnapshotCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductSnapshot update
   */
  export type ProductSnapshotUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * The data needed to update a ProductSnapshot.
     * 
    **/
    data: XOR<ProductSnapshotUpdateInput, ProductSnapshotUncheckedUpdateInput>
    /**
     * Choose, which ProductSnapshot to update.
     * 
    **/
    where: ProductSnapshotWhereUniqueInput
  }


  /**
   * ProductSnapshot updateMany
   */
  export type ProductSnapshotUpdateManyArgs = {
    /**
     * The data used to update ProductSnapshots.
     * 
    **/
    data: XOR<ProductSnapshotUpdateManyMutationInput, ProductSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which ProductSnapshots to update
     * 
    **/
    where?: ProductSnapshotWhereInput
  }


  /**
   * ProductSnapshot upsert
   */
  export type ProductSnapshotUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * The filter to search for the ProductSnapshot to update in case it exists.
     * 
    **/
    where: ProductSnapshotWhereUniqueInput
    /**
     * In case the ProductSnapshot found by the `where` argument doesn't exist, create a new ProductSnapshot with this data.
     * 
    **/
    create: XOR<ProductSnapshotCreateInput, ProductSnapshotUncheckedCreateInput>
    /**
     * In case the ProductSnapshot was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductSnapshotUpdateInput, ProductSnapshotUncheckedUpdateInput>
  }


  /**
   * ProductSnapshot delete
   */
  export type ProductSnapshotDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
    /**
     * Filter which ProductSnapshot to delete.
     * 
    **/
    where: ProductSnapshotWhereUniqueInput
  }


  /**
   * ProductSnapshot deleteMany
   */
  export type ProductSnapshotDeleteManyArgs = {
    /**
     * Filter which ProductSnapshots to delete
     * 
    **/
    where?: ProductSnapshotWhereInput
  }


  /**
   * ProductSnapshot without action
   */
  export type ProductSnapshotArgs = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     * 
    **/
    select?: ProductSnapshotSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductSnapshotInclude | null
  }



  /**
   * Model Brand
   */


  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs = {
    /**
     * Filter which Brand to aggregate.
     * 
    **/
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs = {
    where?: BrandWhereInput
    orderBy?: Enumerable<BrandOrderByWithAggregationInput>
    by: Array<BrandScalarFieldEnum>
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }


  export type BrandGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect = {
    id?: boolean
    name?: boolean
    products?: boolean | ProductFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | BrandCountOutputTypeArgs
  }


  export type BrandInclude = {
    products?: boolean | ProductFindManyArgs
    _count?: boolean | BrandCountOutputTypeArgs
  } 

  export type BrandGetPayload<S extends boolean | null | undefined | BrandArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Brand :
    S extends undefined ? never :
    S extends { include: any } & (BrandArgs | BrandFindManyArgs)
    ? Brand  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'products' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? BrandCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BrandArgs | BrandFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'products' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? BrandCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Brand ? Brand[P] : never
  } 
      : Brand


  type BrandCountArgs = Merge<
    Omit<BrandFindManyArgs, 'select' | 'include'> & {
      select?: BrandCountAggregateInputType | true
    }
  >

  export interface BrandDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BrandFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Brand'> extends True ? Prisma__BrandClient<BrandGetPayload<T>> : Prisma__BrandClient<BrandGetPayload<T> | null, null>

    /**
     * Find one Brand that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BrandFindUniqueOrThrowArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BrandFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Brand'> extends True ? Prisma__BrandClient<BrandGetPayload<T>> : Prisma__BrandClient<BrandGetPayload<T> | null, null>

    /**
     * Find the first Brand that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BrandFindFirstOrThrowArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandFindManyArgs>(
      args?: SelectSubset<T, BrandFindManyArgs>
    ): PrismaPromise<Array<BrandGetPayload<T>>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
    **/
    create<T extends BrandCreateArgs>(
      args: SelectSubset<T, BrandCreateArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Create many Brands.
     *     @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brand = await prisma.brand.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandCreateManyArgs>(
      args?: SelectSubset<T, BrandCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
    **/
    delete<T extends BrandDeleteArgs>(
      args: SelectSubset<T, BrandDeleteArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandUpdateArgs>(
      args: SelectSubset<T, BrandUpdateArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandDeleteManyArgs>(
      args?: SelectSubset<T, BrandDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandUpdateManyArgs>(
      args: SelectSubset<T, BrandUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
    **/
    upsert<T extends BrandUpsertArgs>(
      args: SelectSubset<T, BrandUpsertArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BrandClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends ProductFindManyArgs= {}>(args?: Subset<T, ProductFindManyArgs>): PrismaPromise<Array<ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Brand base type for findUnique actions
   */
  export type BrandFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     * 
    **/
    where: BrandWhereUniqueInput
  }

  /**
   * Brand: findUnique
   */
  export interface BrandFindUniqueArgs extends BrandFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     * 
    **/
    where: BrandWhereUniqueInput
  }


  /**
   * Brand base type for findFirst actions
   */
  export type BrandFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     * 
    **/
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     * 
    **/
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     * 
    **/
    distinct?: Enumerable<BrandScalarFieldEnum>
  }

  /**
   * Brand: findFirst
   */
  export interface BrandFindFirstArgs extends BrandFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     * 
    **/
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     * 
    **/
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     * 
    **/
    distinct?: Enumerable<BrandScalarFieldEnum>
  }


  /**
   * Brand findMany
   */
  export type BrandFindManyArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * Filter, which Brands to fetch.
     * 
    **/
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     * 
    **/
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BrandScalarFieldEnum>
  }


  /**
   * Brand create
   */
  export type BrandCreateArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * The data needed to create a Brand.
     * 
    **/
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }


  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs = {
    /**
     * The data used to create many Brands.
     * 
    **/
    data: Enumerable<BrandCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Brand update
   */
  export type BrandUpdateArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * The data needed to update a Brand.
     * 
    **/
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     * 
    **/
    where: BrandWhereUniqueInput
  }


  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs = {
    /**
     * The data used to update Brands.
     * 
    **/
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     * 
    **/
    where?: BrandWhereInput
  }


  /**
   * Brand upsert
   */
  export type BrandUpsertArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * The filter to search for the Brand to update in case it exists.
     * 
    **/
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     * 
    **/
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }


  /**
   * Brand delete
   */
  export type BrandDeleteArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
    /**
     * Filter which Brand to delete.
     * 
    **/
    where: BrandWhereUniqueInput
  }


  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs = {
    /**
     * Filter which Brands to delete
     * 
    **/
    where?: BrandWhereInput
  }


  /**
   * Brand without action
   */
  export type BrandArgs = {
    /**
     * Select specific fields to fetch from the Brand
     * 
    **/
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    products?: boolean | CategoriesOnProductsFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    products?: boolean | CategoriesOnProductsFindManyArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  } 

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'products' ? Array < CategoriesOnProductsGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'products' ? Array < CategoriesOnProductsGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends CategoriesOnProductsFindManyArgs= {}>(args?: Subset<T, CategoriesOnProductsFindManyArgs>): PrismaPromise<Array<CategoriesOnProductsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }

  /**
   * Category: findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category: findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     * 
    **/
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     * 
    **/
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model CategoriesOnProducts
   */


  export type AggregateCategoriesOnProducts = {
    _count: CategoriesOnProductsCountAggregateOutputType | null
    _avg: CategoriesOnProductsAvgAggregateOutputType | null
    _sum: CategoriesOnProductsSumAggregateOutputType | null
    _min: CategoriesOnProductsMinAggregateOutputType | null
    _max: CategoriesOnProductsMaxAggregateOutputType | null
  }

  export type CategoriesOnProductsAvgAggregateOutputType = {
    productId: number | null
    categoryId: number | null
  }

  export type CategoriesOnProductsSumAggregateOutputType = {
    productId: number | null
    categoryId: number | null
  }

  export type CategoriesOnProductsMinAggregateOutputType = {
    productId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesOnProductsMaxAggregateOutputType = {
    productId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesOnProductsCountAggregateOutputType = {
    productId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesOnProductsAvgAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type CategoriesOnProductsSumAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type CategoriesOnProductsMinAggregateInputType = {
    productId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesOnProductsMaxAggregateInputType = {
    productId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesOnProductsCountAggregateInputType = {
    productId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesOnProductsAggregateArgs = {
    /**
     * Filter which CategoriesOnProducts to aggregate.
     * 
    **/
    where?: CategoriesOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriesOnProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoriesOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriesOnProducts
    **/
    _count?: true | CategoriesOnProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesOnProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesOnProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesOnProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesOnProductsMaxAggregateInputType
  }

  export type GetCategoriesOnProductsAggregateType<T extends CategoriesOnProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriesOnProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriesOnProducts[P]>
      : GetScalarType<T[P], AggregateCategoriesOnProducts[P]>
  }




  export type CategoriesOnProductsGroupByArgs = {
    where?: CategoriesOnProductsWhereInput
    orderBy?: Enumerable<CategoriesOnProductsOrderByWithAggregationInput>
    by: Array<CategoriesOnProductsScalarFieldEnum>
    having?: CategoriesOnProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesOnProductsCountAggregateInputType | true
    _avg?: CategoriesOnProductsAvgAggregateInputType
    _sum?: CategoriesOnProductsSumAggregateInputType
    _min?: CategoriesOnProductsMinAggregateInputType
    _max?: CategoriesOnProductsMaxAggregateInputType
  }


  export type CategoriesOnProductsGroupByOutputType = {
    productId: number
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: CategoriesOnProductsCountAggregateOutputType | null
    _avg: CategoriesOnProductsAvgAggregateOutputType | null
    _sum: CategoriesOnProductsSumAggregateOutputType | null
    _min: CategoriesOnProductsMinAggregateOutputType | null
    _max: CategoriesOnProductsMaxAggregateOutputType | null
  }

  type GetCategoriesOnProductsGroupByPayload<T extends CategoriesOnProductsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoriesOnProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesOnProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesOnProductsGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesOnProductsGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesOnProductsSelect = {
    productId?: boolean
    categoryId?: boolean
    product?: boolean | ProductArgs
    category?: boolean | CategoryArgs
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type CategoriesOnProductsInclude = {
    product?: boolean | ProductArgs
    category?: boolean | CategoryArgs
  } 

  export type CategoriesOnProductsGetPayload<S extends boolean | null | undefined | CategoriesOnProductsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoriesOnProducts :
    S extends undefined ? never :
    S extends { include: any } & (CategoriesOnProductsArgs | CategoriesOnProductsFindManyArgs)
    ? CategoriesOnProducts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoriesOnProductsArgs | CategoriesOnProductsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :  P extends keyof CategoriesOnProducts ? CategoriesOnProducts[P] : never
  } 
      : CategoriesOnProducts


  type CategoriesOnProductsCountArgs = Merge<
    Omit<CategoriesOnProductsFindManyArgs, 'select' | 'include'> & {
      select?: CategoriesOnProductsCountAggregateInputType | true
    }
  >

  export interface CategoriesOnProductsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CategoriesOnProducts that matches the filter.
     * @param {CategoriesOnProductsFindUniqueArgs} args - Arguments to find a CategoriesOnProducts
     * @example
     * // Get one CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriesOnProductsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoriesOnProductsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CategoriesOnProducts'> extends True ? Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>> : Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T> | null, null>

    /**
     * Find one CategoriesOnProducts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriesOnProductsFindUniqueOrThrowArgs} args - Arguments to find a CategoriesOnProducts
     * @example
     * // Get one CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriesOnProductsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoriesOnProductsFindUniqueOrThrowArgs>
    ): Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>>

    /**
     * Find the first CategoriesOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnProductsFindFirstArgs} args - Arguments to find a CategoriesOnProducts
     * @example
     * // Get one CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriesOnProductsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoriesOnProductsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CategoriesOnProducts'> extends True ? Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>> : Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T> | null, null>

    /**
     * Find the first CategoriesOnProducts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnProductsFindFirstOrThrowArgs} args - Arguments to find a CategoriesOnProducts
     * @example
     * // Get one CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriesOnProductsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoriesOnProductsFindFirstOrThrowArgs>
    ): Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>>

    /**
     * Find zero or more CategoriesOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.findMany()
     * 
     * // Get first 10 CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const categoriesOnProductsWithProductIdOnly = await prisma.categoriesOnProducts.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends CategoriesOnProductsFindManyArgs>(
      args?: SelectSubset<T, CategoriesOnProductsFindManyArgs>
    ): PrismaPromise<Array<CategoriesOnProductsGetPayload<T>>>

    /**
     * Create a CategoriesOnProducts.
     * @param {CategoriesOnProductsCreateArgs} args - Arguments to create a CategoriesOnProducts.
     * @example
     * // Create one CategoriesOnProducts
     * const CategoriesOnProducts = await prisma.categoriesOnProducts.create({
     *   data: {
     *     // ... data to create a CategoriesOnProducts
     *   }
     * })
     * 
    **/
    create<T extends CategoriesOnProductsCreateArgs>(
      args: SelectSubset<T, CategoriesOnProductsCreateArgs>
    ): Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>>

    /**
     * Create many CategoriesOnProducts.
     *     @param {CategoriesOnProductsCreateManyArgs} args - Arguments to create many CategoriesOnProducts.
     *     @example
     *     // Create many CategoriesOnProducts
     *     const categoriesOnProducts = await prisma.categoriesOnProducts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriesOnProductsCreateManyArgs>(
      args?: SelectSubset<T, CategoriesOnProductsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriesOnProducts.
     * @param {CategoriesOnProductsDeleteArgs} args - Arguments to delete one CategoriesOnProducts.
     * @example
     * // Delete one CategoriesOnProducts
     * const CategoriesOnProducts = await prisma.categoriesOnProducts.delete({
     *   where: {
     *     // ... filter to delete one CategoriesOnProducts
     *   }
     * })
     * 
    **/
    delete<T extends CategoriesOnProductsDeleteArgs>(
      args: SelectSubset<T, CategoriesOnProductsDeleteArgs>
    ): Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>>

    /**
     * Update one CategoriesOnProducts.
     * @param {CategoriesOnProductsUpdateArgs} args - Arguments to update one CategoriesOnProducts.
     * @example
     * // Update one CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriesOnProductsUpdateArgs>(
      args: SelectSubset<T, CategoriesOnProductsUpdateArgs>
    ): Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>>

    /**
     * Delete zero or more CategoriesOnProducts.
     * @param {CategoriesOnProductsDeleteManyArgs} args - Arguments to filter CategoriesOnProducts to delete.
     * @example
     * // Delete a few CategoriesOnProducts
     * const { count } = await prisma.categoriesOnProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriesOnProductsDeleteManyArgs>(
      args?: SelectSubset<T, CategoriesOnProductsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriesOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriesOnProductsUpdateManyArgs>(
      args: SelectSubset<T, CategoriesOnProductsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriesOnProducts.
     * @param {CategoriesOnProductsUpsertArgs} args - Arguments to update or create a CategoriesOnProducts.
     * @example
     * // Update or create a CategoriesOnProducts
     * const categoriesOnProducts = await prisma.categoriesOnProducts.upsert({
     *   create: {
     *     // ... data to create a CategoriesOnProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriesOnProducts we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriesOnProductsUpsertArgs>(
      args: SelectSubset<T, CategoriesOnProductsUpsertArgs>
    ): Prisma__CategoriesOnProductsClient<CategoriesOnProductsGetPayload<T>>

    /**
     * Count the number of CategoriesOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnProductsCountArgs} args - Arguments to filter CategoriesOnProducts to count.
     * @example
     * // Count the number of CategoriesOnProducts
     * const count = await prisma.categoriesOnProducts.count({
     *   where: {
     *     // ... the filter for the CategoriesOnProducts we want to count
     *   }
     * })
    **/
    count<T extends CategoriesOnProductsCountArgs>(
      args?: Subset<T, CategoriesOnProductsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesOnProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriesOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesOnProductsAggregateArgs>(args: Subset<T, CategoriesOnProductsAggregateArgs>): PrismaPromise<GetCategoriesOnProductsAggregateType<T>>

    /**
     * Group by CategoriesOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesOnProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesOnProductsGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesOnProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesOnProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesOnProductsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriesOnProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoriesOnProductsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CategoriesOnProducts base type for findUnique actions
   */
  export type CategoriesOnProductsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * Filter, which CategoriesOnProducts to fetch.
     * 
    **/
    where: CategoriesOnProductsWhereUniqueInput
  }

  /**
   * CategoriesOnProducts: findUnique
   */
  export interface CategoriesOnProductsFindUniqueArgs extends CategoriesOnProductsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CategoriesOnProducts findUniqueOrThrow
   */
  export type CategoriesOnProductsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * Filter, which CategoriesOnProducts to fetch.
     * 
    **/
    where: CategoriesOnProductsWhereUniqueInput
  }


  /**
   * CategoriesOnProducts base type for findFirst actions
   */
  export type CategoriesOnProductsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * Filter, which CategoriesOnProducts to fetch.
     * 
    **/
    where?: CategoriesOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriesOnProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOnProducts.
     * 
    **/
    cursor?: CategoriesOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOnProducts.
     * 
    **/
    distinct?: Enumerable<CategoriesOnProductsScalarFieldEnum>
  }

  /**
   * CategoriesOnProducts: findFirst
   */
  export interface CategoriesOnProductsFindFirstArgs extends CategoriesOnProductsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CategoriesOnProducts findFirstOrThrow
   */
  export type CategoriesOnProductsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * Filter, which CategoriesOnProducts to fetch.
     * 
    **/
    where?: CategoriesOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriesOnProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOnProducts.
     * 
    **/
    cursor?: CategoriesOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOnProducts.
     * 
    **/
    distinct?: Enumerable<CategoriesOnProductsScalarFieldEnum>
  }


  /**
   * CategoriesOnProducts findMany
   */
  export type CategoriesOnProductsFindManyArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * Filter, which CategoriesOnProducts to fetch.
     * 
    **/
    where?: CategoriesOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriesOnProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriesOnProducts.
     * 
    **/
    cursor?: CategoriesOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnProducts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoriesOnProductsScalarFieldEnum>
  }


  /**
   * CategoriesOnProducts create
   */
  export type CategoriesOnProductsCreateArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * The data needed to create a CategoriesOnProducts.
     * 
    **/
    data: XOR<CategoriesOnProductsCreateInput, CategoriesOnProductsUncheckedCreateInput>
  }


  /**
   * CategoriesOnProducts createMany
   */
  export type CategoriesOnProductsCreateManyArgs = {
    /**
     * The data used to create many CategoriesOnProducts.
     * 
    **/
    data: Enumerable<CategoriesOnProductsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CategoriesOnProducts update
   */
  export type CategoriesOnProductsUpdateArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * The data needed to update a CategoriesOnProducts.
     * 
    **/
    data: XOR<CategoriesOnProductsUpdateInput, CategoriesOnProductsUncheckedUpdateInput>
    /**
     * Choose, which CategoriesOnProducts to update.
     * 
    **/
    where: CategoriesOnProductsWhereUniqueInput
  }


  /**
   * CategoriesOnProducts updateMany
   */
  export type CategoriesOnProductsUpdateManyArgs = {
    /**
     * The data used to update CategoriesOnProducts.
     * 
    **/
    data: XOR<CategoriesOnProductsUpdateManyMutationInput, CategoriesOnProductsUncheckedUpdateManyInput>
    /**
     * Filter which CategoriesOnProducts to update
     * 
    **/
    where?: CategoriesOnProductsWhereInput
  }


  /**
   * CategoriesOnProducts upsert
   */
  export type CategoriesOnProductsUpsertArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * The filter to search for the CategoriesOnProducts to update in case it exists.
     * 
    **/
    where: CategoriesOnProductsWhereUniqueInput
    /**
     * In case the CategoriesOnProducts found by the `where` argument doesn't exist, create a new CategoriesOnProducts with this data.
     * 
    **/
    create: XOR<CategoriesOnProductsCreateInput, CategoriesOnProductsUncheckedCreateInput>
    /**
     * In case the CategoriesOnProducts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoriesOnProductsUpdateInput, CategoriesOnProductsUncheckedUpdateInput>
  }


  /**
   * CategoriesOnProducts delete
   */
  export type CategoriesOnProductsDeleteArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
    /**
     * Filter which CategoriesOnProducts to delete.
     * 
    **/
    where: CategoriesOnProductsWhereUniqueInput
  }


  /**
   * CategoriesOnProducts deleteMany
   */
  export type CategoriesOnProductsDeleteManyArgs = {
    /**
     * Filter which CategoriesOnProducts to delete
     * 
    **/
    where?: CategoriesOnProductsWhereInput
  }


  /**
   * CategoriesOnProducts without action
   */
  export type CategoriesOnProductsArgs = {
    /**
     * Select specific fields to fetch from the CategoriesOnProducts
     * 
    **/
    select?: CategoriesOnProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriesOnProductsInclude | null
  }



  /**
   * Model Review
   */


  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    productId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    productId: number | null
    rating: Rating | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    productId: number | null
    rating: Rating | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    productId: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    productId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    productId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    productId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs = {
    /**
     * Filter which Review to aggregate.
     * 
    **/
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     * 
    **/
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs = {
    where?: ReviewWhereInput
    orderBy?: Enumerable<ReviewOrderByWithAggregationInput>
    by: Array<ReviewScalarFieldEnum>
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }


  export type ReviewGroupByOutputType = {
    id: number
    content: string
    userId: number
    productId: number
    rating: Rating
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect = {
    id?: boolean
    content?: boolean
    userId?: boolean
    productId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    product?: boolean | ProductArgs
  }


  export type ReviewInclude = {
    user?: boolean | UserArgs
    product?: boolean | ProductArgs
  } 

  export type ReviewGetPayload<S extends boolean | null | undefined | ReviewArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Review :
    S extends undefined ? never :
    S extends { include: any } & (ReviewArgs | ReviewFindManyArgs)
    ? Review  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ReviewArgs | ReviewFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof Review ? Review[P] : never
  } 
      : Review


  type ReviewCountArgs = Merge<
    Omit<ReviewFindManyArgs, 'select' | 'include'> & {
      select?: ReviewCountAggregateInputType | true
    }
  >

  export interface ReviewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReviewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Review'> extends True ? Prisma__ReviewClient<ReviewGetPayload<T>> : Prisma__ReviewClient<ReviewGetPayload<T> | null, null>

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindUniqueOrThrowArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReviewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Review'> extends True ? Prisma__ReviewClient<ReviewGetPayload<T>> : Prisma__ReviewClient<ReviewGetPayload<T> | null, null>

    /**
     * Find the first Review that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs>
    ): PrismaPromise<Array<ReviewGetPayload<T>>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Create many Reviews.
     *     @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewCreateManyArgs>(
      args?: SelectSubset<T, ReviewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs>
    ): Prisma__ReviewClient<ReviewGetPayload<T>>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReviewClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Review base type for findUnique actions
   */
  export type ReviewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     * 
    **/
    where: ReviewWhereUniqueInput
  }

  /**
   * Review: findUnique
   */
  export interface ReviewFindUniqueArgs extends ReviewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     * 
    **/
    where: ReviewWhereUniqueInput
  }


  /**
   * Review base type for findFirst actions
   */
  export type ReviewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     * 
    **/
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     * 
    **/
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     * 
    **/
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     * 
    **/
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }

  /**
   * Review: findFirst
   */
  export interface ReviewFindFirstArgs extends ReviewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     * 
    **/
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     * 
    **/
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     * 
    **/
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     * 
    **/
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Review findMany
   */
  export type ReviewFindManyArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Reviews to fetch.
     * 
    **/
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     * 
    **/
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     * 
    **/
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Review create
   */
  export type ReviewCreateArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * The data needed to create a Review.
     * 
    **/
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }


  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs = {
    /**
     * The data used to create many Reviews.
     * 
    **/
    data: Enumerable<ReviewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Review update
   */
  export type ReviewUpdateArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * The data needed to update a Review.
     * 
    **/
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     * 
    **/
    where: ReviewWhereUniqueInput
  }


  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs = {
    /**
     * The data used to update Reviews.
     * 
    **/
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     * 
    **/
    where?: ReviewWhereInput
  }


  /**
   * Review upsert
   */
  export type ReviewUpsertArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * The filter to search for the Review to update in case it exists.
     * 
    **/
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     * 
    **/
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }


  /**
   * Review delete
   */
  export type ReviewDeleteArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter which Review to delete.
     * 
    **/
    where: ReviewWhereUniqueInput
  }


  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs = {
    /**
     * Filter which Reviews to delete
     * 
    **/
    where?: ReviewWhereInput
  }


  /**
   * Review without action
   */
  export type ReviewArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    orderDetailId: number | null
    userId: number | null
    paymentsId: number | null
    shippingMethodId: number | null
    shippingAddressId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    orderDetailId: number | null
    userId: number | null
    paymentsId: number | null
    shippingMethodId: number | null
    shippingAddressId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    orderDetailId: number | null
    orderStatus: OrderStatus | null
    userId: number | null
    paymentsId: number | null
    shippingMethodId: number | null
    shippingAddressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    orderDetailId: number | null
    orderStatus: OrderStatus | null
    userId: number | null
    paymentsId: number | null
    shippingMethodId: number | null
    shippingAddressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderDetailId: number
    orderStatus: number
    userId: number
    paymentsId: number
    shippingMethodId: number
    shippingAddressId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    orderDetailId?: true
    userId?: true
    paymentsId?: true
    shippingMethodId?: true
    shippingAddressId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    orderDetailId?: true
    userId?: true
    paymentsId?: true
    shippingMethodId?: true
    shippingAddressId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderDetailId?: true
    orderStatus?: true
    userId?: true
    paymentsId?: true
    shippingMethodId?: true
    shippingAddressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderDetailId?: true
    orderStatus?: true
    userId?: true
    paymentsId?: true
    shippingMethodId?: true
    shippingAddressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderDetailId?: true
    orderStatus?: true
    userId?: true
    paymentsId?: true
    shippingMethodId?: true
    shippingAddressId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: Array<OrderScalarFieldEnum>
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId: number | null
    paymentsId: number
    shippingMethodId: number
    shippingAddressId: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    id?: boolean
    orderDetailId?: boolean
    orderStatus?: boolean
    userId?: boolean
    paymentsId?: boolean
    shippingMethodId?: boolean
    shippingAddress?: boolean | AddressArgs
    shippingAddressId?: boolean
    productSnapshots?: boolean | ProductSnapshotFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserArgs
    Payments?: boolean | PaymentArgs
    shippingMethod?: boolean | ShippingMethodArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }


  export type OrderInclude = {
    shippingAddress?: boolean | AddressArgs
    productSnapshots?: boolean | ProductSnapshotFindManyArgs
    User?: boolean | UserArgs
    Payments?: boolean | PaymentArgs
    shippingMethod?: boolean | ShippingMethodArgs
    _count?: boolean | OrderCountOutputTypeArgs
  } 

  export type OrderGetPayload<S extends boolean | null | undefined | OrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Order :
    S extends undefined ? never :
    S extends { include: any } & (OrderArgs | OrderFindManyArgs)
    ? Order  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'shippingAddress' ? AddressGetPayload<S['include'][P]> :
        P extends 'productSnapshots' ? Array < ProductSnapshotGetPayload<S['include'][P]>>  :
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'Payments' ? PaymentGetPayload<S['include'][P]> :
        P extends 'shippingMethod' ? ShippingMethodGetPayload<S['include'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrderArgs | OrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'shippingAddress' ? AddressGetPayload<S['select'][P]> :
        P extends 'productSnapshots' ? Array < ProductSnapshotGetPayload<S['select'][P]>>  :
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'Payments' ? PaymentGetPayload<S['select'][P]> :
        P extends 'shippingMethod' ? ShippingMethodGetPayload<S['select'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Order ? Order[P] : never
  } 
      : Order


  type OrderCountArgs = Merge<
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }
  >

  export interface OrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): PrismaPromise<Array<OrderGetPayload<T>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shippingAddress<T extends AddressArgs= {}>(args?: Subset<T, AddressArgs>): Prisma__AddressClient<AddressGetPayload<T> | Null>;

    productSnapshots<T extends ProductSnapshotFindManyArgs= {}>(args?: Subset<T, ProductSnapshotFindManyArgs>): PrismaPromise<Array<ProductSnapshotGetPayload<T>>| Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Payments<T extends PaymentArgs= {}>(args?: Subset<T, PaymentArgs>): Prisma__PaymentClient<PaymentGetPayload<T> | Null>;

    shippingMethod<T extends ShippingMethodArgs= {}>(args?: Subset<T, ShippingMethodArgs>): Prisma__ShippingMethodClient<ShippingMethodGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where: OrderWhereUniqueInput
  }

  /**
   * Order: findUnique
   */
  export interface OrderFindUniqueArgs extends OrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order: findFirst
   */
  export interface OrderFindFirstArgs extends OrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     * 
    **/
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    /**
     * The data used to create many Orders.
     * 
    **/
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     * 
    **/
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     * 
    **/
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     * 
    **/
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     * 
    **/
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     * 
    **/
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     * 
    **/
    where?: OrderWhereInput
  }


  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     * 
    **/
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderInclude | null
  }



  /**
   * Model Cart
   */


  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type CartAggregateArgs = {
    /**
     * Filter which Cart to aggregate.
     * 
    **/
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     * 
    **/
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs = {
    where?: CartWhereInput
    orderBy?: Enumerable<CartOrderByWithAggregationInput>
    by: Array<CartScalarFieldEnum>
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }


  export type CartGroupByOutputType = {
    id: number
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect = {
    id?: boolean
    productsOnCart?: boolean | ProductsOnCartFindManyArgs
    _count?: boolean | CartCountOutputTypeArgs
  }


  export type CartInclude = {
    productsOnCart?: boolean | ProductsOnCartFindManyArgs
    _count?: boolean | CartCountOutputTypeArgs
  } 

  export type CartGetPayload<S extends boolean | null | undefined | CartArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Cart :
    S extends undefined ? never :
    S extends { include: any } & (CartArgs | CartFindManyArgs)
    ? Cart  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'productsOnCart' ? Array < ProductsOnCartGetPayload<S['include'][P]>>  :
        P extends '_count' ? CartCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CartArgs | CartFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'productsOnCart' ? Array < ProductsOnCartGetPayload<S['select'][P]>>  :
        P extends '_count' ? CartCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Cart ? Cart[P] : never
  } 
      : Cart


  type CartCountArgs = Merge<
    Omit<CartFindManyArgs, 'select' | 'include'> & {
      select?: CartCountAggregateInputType | true
    }
  >

  export interface CartDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CartFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CartFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cart'> extends True ? Prisma__CartClient<CartGetPayload<T>> : Prisma__CartClient<CartGetPayload<T> | null, null>

    /**
     * Find one Cart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CartFindUniqueOrThrowArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CartFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CartFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cart'> extends True ? Prisma__CartClient<CartGetPayload<T>> : Prisma__CartClient<CartGetPayload<T> | null, null>

    /**
     * Find the first Cart that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartFindFirstOrThrowArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CartFindManyArgs>(
      args?: SelectSubset<T, CartFindManyArgs>
    ): PrismaPromise<Array<CartGetPayload<T>>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
    **/
    create<T extends CartCreateArgs>(
      args: SelectSubset<T, CartCreateArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Create many Carts.
     *     @param {CartCreateManyArgs} args - Arguments to create many Carts.
     *     @example
     *     // Create many Carts
     *     const cart = await prisma.cart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CartCreateManyArgs>(
      args?: SelectSubset<T, CartCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
    **/
    delete<T extends CartDeleteArgs>(
      args: SelectSubset<T, CartDeleteArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CartUpdateArgs>(
      args: SelectSubset<T, CartUpdateArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CartDeleteManyArgs>(
      args?: SelectSubset<T, CartDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CartUpdateManyArgs>(
      args: SelectSubset<T, CartUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
    **/
    upsert<T extends CartUpsertArgs>(
      args: SelectSubset<T, CartUpsertArgs>
    ): Prisma__CartClient<CartGetPayload<T>>

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CartClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    productsOnCart<T extends ProductsOnCartFindManyArgs= {}>(args?: Subset<T, ProductsOnCartFindManyArgs>): PrismaPromise<Array<ProductsOnCartGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cart base type for findUnique actions
   */
  export type CartFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     * 
    **/
    where: CartWhereUniqueInput
  }

  /**
   * Cart: findUnique
   */
  export interface CartFindUniqueArgs extends CartFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     * 
    **/
    where: CartWhereUniqueInput
  }


  /**
   * Cart base type for findFirst actions
   */
  export type CartFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     * 
    **/
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     * 
    **/
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     * 
    **/
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     * 
    **/
    distinct?: Enumerable<CartScalarFieldEnum>
  }

  /**
   * Cart: findFirst
   */
  export interface CartFindFirstArgs extends CartFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Cart to fetch.
     * 
    **/
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     * 
    **/
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     * 
    **/
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     * 
    **/
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * Cart findMany
   */
  export type CartFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter, which Carts to fetch.
     * 
    **/
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     * 
    **/
    orderBy?: Enumerable<CartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     * 
    **/
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CartScalarFieldEnum>
  }


  /**
   * Cart create
   */
  export type CartCreateArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * The data needed to create a Cart.
     * 
    **/
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }


  /**
   * Cart createMany
   */
  export type CartCreateManyArgs = {
    /**
     * The data used to create many Carts.
     * 
    **/
    data: Enumerable<CartCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cart update
   */
  export type CartUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * The data needed to update a Cart.
     * 
    **/
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     * 
    **/
    where: CartWhereUniqueInput
  }


  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs = {
    /**
     * The data used to update Carts.
     * 
    **/
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     * 
    **/
    where?: CartWhereInput
  }


  /**
   * Cart upsert
   */
  export type CartUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * The filter to search for the Cart to update in case it exists.
     * 
    **/
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     * 
    **/
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }


  /**
   * Cart delete
   */
  export type CartDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
    /**
     * Filter which Cart to delete.
     * 
    **/
    where: CartWhereUniqueInput
  }


  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs = {
    /**
     * Filter which Carts to delete
     * 
    **/
    where?: CartWhereInput
  }


  /**
   * Cart without action
   */
  export type CartArgs = {
    /**
     * Select specific fields to fetch from the Cart
     * 
    **/
    select?: CartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CartInclude | null
  }



  /**
   * Model ProductsOnCart
   */


  export type AggregateProductsOnCart = {
    _count: ProductsOnCartCountAggregateOutputType | null
    _avg: ProductsOnCartAvgAggregateOutputType | null
    _sum: ProductsOnCartSumAggregateOutputType | null
    _min: ProductsOnCartMinAggregateOutputType | null
    _max: ProductsOnCartMaxAggregateOutputType | null
  }

  export type ProductsOnCartAvgAggregateOutputType = {
    productId: number | null
    cardId: number | null
    qty: number | null
  }

  export type ProductsOnCartSumAggregateOutputType = {
    productId: number | null
    cardId: number | null
    qty: number | null
  }

  export type ProductsOnCartMinAggregateOutputType = {
    productId: number | null
    cardId: number | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsOnCartMaxAggregateOutputType = {
    productId: number | null
    cardId: number | null
    qty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsOnCartCountAggregateOutputType = {
    productId: number
    cardId: number
    qty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsOnCartAvgAggregateInputType = {
    productId?: true
    cardId?: true
    qty?: true
  }

  export type ProductsOnCartSumAggregateInputType = {
    productId?: true
    cardId?: true
    qty?: true
  }

  export type ProductsOnCartMinAggregateInputType = {
    productId?: true
    cardId?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsOnCartMaxAggregateInputType = {
    productId?: true
    cardId?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsOnCartCountAggregateInputType = {
    productId?: true
    cardId?: true
    qty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsOnCartAggregateArgs = {
    /**
     * Filter which ProductsOnCart to aggregate.
     * 
    **/
    where?: ProductsOnCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnCarts to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOnCartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductsOnCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnCarts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnCarts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsOnCarts
    **/
    _count?: true | ProductsOnCartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsOnCartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsOnCartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsOnCartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsOnCartMaxAggregateInputType
  }

  export type GetProductsOnCartAggregateType<T extends ProductsOnCartAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsOnCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsOnCart[P]>
      : GetScalarType<T[P], AggregateProductsOnCart[P]>
  }




  export type ProductsOnCartGroupByArgs = {
    where?: ProductsOnCartWhereInput
    orderBy?: Enumerable<ProductsOnCartOrderByWithAggregationInput>
    by: Array<ProductsOnCartScalarFieldEnum>
    having?: ProductsOnCartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsOnCartCountAggregateInputType | true
    _avg?: ProductsOnCartAvgAggregateInputType
    _sum?: ProductsOnCartSumAggregateInputType
    _min?: ProductsOnCartMinAggregateInputType
    _max?: ProductsOnCartMaxAggregateInputType
  }


  export type ProductsOnCartGroupByOutputType = {
    productId: number
    cardId: number
    qty: number
    createdAt: Date
    updatedAt: Date
    _count: ProductsOnCartCountAggregateOutputType | null
    _avg: ProductsOnCartAvgAggregateOutputType | null
    _sum: ProductsOnCartSumAggregateOutputType | null
    _min: ProductsOnCartMinAggregateOutputType | null
    _max: ProductsOnCartMaxAggregateOutputType | null
  }

  type GetProductsOnCartGroupByPayload<T extends ProductsOnCartGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductsOnCartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsOnCartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsOnCartGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsOnCartGroupByOutputType[P]>
        }
      >
    >


  export type ProductsOnCartSelect = {
    productId?: boolean
    cardId?: boolean
    qty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductArgs
    cart?: boolean | CartArgs
  }


  export type ProductsOnCartInclude = {
    product?: boolean | ProductArgs
    cart?: boolean | CartArgs
  } 

  export type ProductsOnCartGetPayload<S extends boolean | null | undefined | ProductsOnCartArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductsOnCart :
    S extends undefined ? never :
    S extends { include: any } & (ProductsOnCartArgs | ProductsOnCartFindManyArgs)
    ? ProductsOnCart  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'cart' ? CartGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductsOnCartArgs | ProductsOnCartFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'cart' ? CartGetPayload<S['select'][P]> :  P extends keyof ProductsOnCart ? ProductsOnCart[P] : never
  } 
      : ProductsOnCart


  type ProductsOnCartCountArgs = Merge<
    Omit<ProductsOnCartFindManyArgs, 'select' | 'include'> & {
      select?: ProductsOnCartCountAggregateInputType | true
    }
  >

  export interface ProductsOnCartDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProductsOnCart that matches the filter.
     * @param {ProductsOnCartFindUniqueArgs} args - Arguments to find a ProductsOnCart
     * @example
     * // Get one ProductsOnCart
     * const productsOnCart = await prisma.productsOnCart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsOnCartFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductsOnCartFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductsOnCart'> extends True ? Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>> : Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T> | null, null>

    /**
     * Find one ProductsOnCart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsOnCartFindUniqueOrThrowArgs} args - Arguments to find a ProductsOnCart
     * @example
     * // Get one ProductsOnCart
     * const productsOnCart = await prisma.productsOnCart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsOnCartFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductsOnCartFindUniqueOrThrowArgs>
    ): Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>>

    /**
     * Find the first ProductsOnCart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnCartFindFirstArgs} args - Arguments to find a ProductsOnCart
     * @example
     * // Get one ProductsOnCart
     * const productsOnCart = await prisma.productsOnCart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsOnCartFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductsOnCartFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductsOnCart'> extends True ? Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>> : Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T> | null, null>

    /**
     * Find the first ProductsOnCart that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnCartFindFirstOrThrowArgs} args - Arguments to find a ProductsOnCart
     * @example
     * // Get one ProductsOnCart
     * const productsOnCart = await prisma.productsOnCart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsOnCartFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductsOnCartFindFirstOrThrowArgs>
    ): Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>>

    /**
     * Find zero or more ProductsOnCarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnCartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsOnCarts
     * const productsOnCarts = await prisma.productsOnCart.findMany()
     * 
     * // Get first 10 ProductsOnCarts
     * const productsOnCarts = await prisma.productsOnCart.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productsOnCartWithProductIdOnly = await prisma.productsOnCart.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductsOnCartFindManyArgs>(
      args?: SelectSubset<T, ProductsOnCartFindManyArgs>
    ): PrismaPromise<Array<ProductsOnCartGetPayload<T>>>

    /**
     * Create a ProductsOnCart.
     * @param {ProductsOnCartCreateArgs} args - Arguments to create a ProductsOnCart.
     * @example
     * // Create one ProductsOnCart
     * const ProductsOnCart = await prisma.productsOnCart.create({
     *   data: {
     *     // ... data to create a ProductsOnCart
     *   }
     * })
     * 
    **/
    create<T extends ProductsOnCartCreateArgs>(
      args: SelectSubset<T, ProductsOnCartCreateArgs>
    ): Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>>

    /**
     * Create many ProductsOnCarts.
     *     @param {ProductsOnCartCreateManyArgs} args - Arguments to create many ProductsOnCarts.
     *     @example
     *     // Create many ProductsOnCarts
     *     const productsOnCart = await prisma.productsOnCart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsOnCartCreateManyArgs>(
      args?: SelectSubset<T, ProductsOnCartCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductsOnCart.
     * @param {ProductsOnCartDeleteArgs} args - Arguments to delete one ProductsOnCart.
     * @example
     * // Delete one ProductsOnCart
     * const ProductsOnCart = await prisma.productsOnCart.delete({
     *   where: {
     *     // ... filter to delete one ProductsOnCart
     *   }
     * })
     * 
    **/
    delete<T extends ProductsOnCartDeleteArgs>(
      args: SelectSubset<T, ProductsOnCartDeleteArgs>
    ): Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>>

    /**
     * Update one ProductsOnCart.
     * @param {ProductsOnCartUpdateArgs} args - Arguments to update one ProductsOnCart.
     * @example
     * // Update one ProductsOnCart
     * const productsOnCart = await prisma.productsOnCart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsOnCartUpdateArgs>(
      args: SelectSubset<T, ProductsOnCartUpdateArgs>
    ): Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>>

    /**
     * Delete zero or more ProductsOnCarts.
     * @param {ProductsOnCartDeleteManyArgs} args - Arguments to filter ProductsOnCarts to delete.
     * @example
     * // Delete a few ProductsOnCarts
     * const { count } = await prisma.productsOnCart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsOnCartDeleteManyArgs>(
      args?: SelectSubset<T, ProductsOnCartDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOnCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnCartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsOnCarts
     * const productsOnCart = await prisma.productsOnCart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsOnCartUpdateManyArgs>(
      args: SelectSubset<T, ProductsOnCartUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductsOnCart.
     * @param {ProductsOnCartUpsertArgs} args - Arguments to update or create a ProductsOnCart.
     * @example
     * // Update or create a ProductsOnCart
     * const productsOnCart = await prisma.productsOnCart.upsert({
     *   create: {
     *     // ... data to create a ProductsOnCart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsOnCart we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsOnCartUpsertArgs>(
      args: SelectSubset<T, ProductsOnCartUpsertArgs>
    ): Prisma__ProductsOnCartClient<ProductsOnCartGetPayload<T>>

    /**
     * Count the number of ProductsOnCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnCartCountArgs} args - Arguments to filter ProductsOnCarts to count.
     * @example
     * // Count the number of ProductsOnCarts
     * const count = await prisma.productsOnCart.count({
     *   where: {
     *     // ... the filter for the ProductsOnCarts we want to count
     *   }
     * })
    **/
    count<T extends ProductsOnCartCountArgs>(
      args?: Subset<T, ProductsOnCartCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsOnCartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsOnCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnCartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsOnCartAggregateArgs>(args: Subset<T, ProductsOnCartAggregateArgs>): PrismaPromise<GetProductsOnCartAggregateType<T>>

    /**
     * Group by ProductsOnCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnCartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsOnCartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsOnCartGroupByArgs['orderBy'] }
        : { orderBy?: ProductsOnCartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsOnCartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsOnCartGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsOnCart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductsOnCartClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    cart<T extends CartArgs= {}>(args?: Subset<T, CartArgs>): Prisma__CartClient<CartGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductsOnCart base type for findUnique actions
   */
  export type ProductsOnCartFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * Filter, which ProductsOnCart to fetch.
     * 
    **/
    where: ProductsOnCartWhereUniqueInput
  }

  /**
   * ProductsOnCart: findUnique
   */
  export interface ProductsOnCartFindUniqueArgs extends ProductsOnCartFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductsOnCart findUniqueOrThrow
   */
  export type ProductsOnCartFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * Filter, which ProductsOnCart to fetch.
     * 
    **/
    where: ProductsOnCartWhereUniqueInput
  }


  /**
   * ProductsOnCart base type for findFirst actions
   */
  export type ProductsOnCartFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * Filter, which ProductsOnCart to fetch.
     * 
    **/
    where?: ProductsOnCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnCarts to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOnCartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnCarts.
     * 
    **/
    cursor?: ProductsOnCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnCarts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnCarts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnCarts.
     * 
    **/
    distinct?: Enumerable<ProductsOnCartScalarFieldEnum>
  }

  /**
   * ProductsOnCart: findFirst
   */
  export interface ProductsOnCartFindFirstArgs extends ProductsOnCartFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductsOnCart findFirstOrThrow
   */
  export type ProductsOnCartFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * Filter, which ProductsOnCart to fetch.
     * 
    **/
    where?: ProductsOnCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnCarts to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOnCartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnCarts.
     * 
    **/
    cursor?: ProductsOnCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnCarts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnCarts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnCarts.
     * 
    **/
    distinct?: Enumerable<ProductsOnCartScalarFieldEnum>
  }


  /**
   * ProductsOnCart findMany
   */
  export type ProductsOnCartFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * Filter, which ProductsOnCarts to fetch.
     * 
    **/
    where?: ProductsOnCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnCarts to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOnCartOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsOnCarts.
     * 
    **/
    cursor?: ProductsOnCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnCarts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnCarts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductsOnCartScalarFieldEnum>
  }


  /**
   * ProductsOnCart create
   */
  export type ProductsOnCartCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * The data needed to create a ProductsOnCart.
     * 
    **/
    data: XOR<ProductsOnCartCreateInput, ProductsOnCartUncheckedCreateInput>
  }


  /**
   * ProductsOnCart createMany
   */
  export type ProductsOnCartCreateManyArgs = {
    /**
     * The data used to create many ProductsOnCarts.
     * 
    **/
    data: Enumerable<ProductsOnCartCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductsOnCart update
   */
  export type ProductsOnCartUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * The data needed to update a ProductsOnCart.
     * 
    **/
    data: XOR<ProductsOnCartUpdateInput, ProductsOnCartUncheckedUpdateInput>
    /**
     * Choose, which ProductsOnCart to update.
     * 
    **/
    where: ProductsOnCartWhereUniqueInput
  }


  /**
   * ProductsOnCart updateMany
   */
  export type ProductsOnCartUpdateManyArgs = {
    /**
     * The data used to update ProductsOnCarts.
     * 
    **/
    data: XOR<ProductsOnCartUpdateManyMutationInput, ProductsOnCartUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOnCarts to update
     * 
    **/
    where?: ProductsOnCartWhereInput
  }


  /**
   * ProductsOnCart upsert
   */
  export type ProductsOnCartUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * The filter to search for the ProductsOnCart to update in case it exists.
     * 
    **/
    where: ProductsOnCartWhereUniqueInput
    /**
     * In case the ProductsOnCart found by the `where` argument doesn't exist, create a new ProductsOnCart with this data.
     * 
    **/
    create: XOR<ProductsOnCartCreateInput, ProductsOnCartUncheckedCreateInput>
    /**
     * In case the ProductsOnCart was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductsOnCartUpdateInput, ProductsOnCartUncheckedUpdateInput>
  }


  /**
   * ProductsOnCart delete
   */
  export type ProductsOnCartDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
    /**
     * Filter which ProductsOnCart to delete.
     * 
    **/
    where: ProductsOnCartWhereUniqueInput
  }


  /**
   * ProductsOnCart deleteMany
   */
  export type ProductsOnCartDeleteManyArgs = {
    /**
     * Filter which ProductsOnCarts to delete
     * 
    **/
    where?: ProductsOnCartWhereInput
  }


  /**
   * ProductsOnCart without action
   */
  export type ProductsOnCartArgs = {
    /**
     * Select specific fields to fetch from the ProductsOnCart
     * 
    **/
    select?: ProductsOnCartSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsOnCartInclude | null
  }



  /**
   * Model ShippingMethod
   */


  export type AggregateShippingMethod = {
    _count: ShippingMethodCountAggregateOutputType | null
    _avg: ShippingMethodAvgAggregateOutputType | null
    _sum: ShippingMethodSumAggregateOutputType | null
    _min: ShippingMethodMinAggregateOutputType | null
    _max: ShippingMethodMaxAggregateOutputType | null
  }

  export type ShippingMethodAvgAggregateOutputType = {
    id: number | null
  }

  export type ShippingMethodSumAggregateOutputType = {
    id: number | null
  }

  export type ShippingMethodMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShippingMethodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShippingMethodCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShippingMethodAvgAggregateInputType = {
    id?: true
  }

  export type ShippingMethodSumAggregateInputType = {
    id?: true
  }

  export type ShippingMethodMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShippingMethodMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShippingMethodCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShippingMethodAggregateArgs = {
    /**
     * Filter which ShippingMethod to aggregate.
     * 
    **/
    where?: ShippingMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<ShippingMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShippingMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMethods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingMethods
    **/
    _count?: true | ShippingMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippingMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippingMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingMethodMaxAggregateInputType
  }

  export type GetShippingMethodAggregateType<T extends ShippingMethodAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingMethod[P]>
      : GetScalarType<T[P], AggregateShippingMethod[P]>
  }




  export type ShippingMethodGroupByArgs = {
    where?: ShippingMethodWhereInput
    orderBy?: Enumerable<ShippingMethodOrderByWithAggregationInput>
    by: Array<ShippingMethodScalarFieldEnum>
    having?: ShippingMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingMethodCountAggregateInputType | true
    _avg?: ShippingMethodAvgAggregateInputType
    _sum?: ShippingMethodSumAggregateInputType
    _min?: ShippingMethodMinAggregateInputType
    _max?: ShippingMethodMaxAggregateInputType
  }


  export type ShippingMethodGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ShippingMethodCountAggregateOutputType | null
    _avg: ShippingMethodAvgAggregateOutputType | null
    _sum: ShippingMethodSumAggregateOutputType | null
    _min: ShippingMethodMinAggregateOutputType | null
    _max: ShippingMethodMaxAggregateOutputType | null
  }

  type GetShippingMethodGroupByPayload<T extends ShippingMethodGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShippingMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingMethodGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingMethodGroupByOutputType[P]>
        }
      >
    >


  export type ShippingMethodSelect = {
    id?: boolean
    name?: boolean
    Order?: boolean | OrderFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | ShippingMethodCountOutputTypeArgs
  }


  export type ShippingMethodInclude = {
    Order?: boolean | OrderFindManyArgs
    _count?: boolean | ShippingMethodCountOutputTypeArgs
  } 

  export type ShippingMethodGetPayload<S extends boolean | null | undefined | ShippingMethodArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShippingMethod :
    S extends undefined ? never :
    S extends { include: any } & (ShippingMethodArgs | ShippingMethodFindManyArgs)
    ? ShippingMethod  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Order' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShippingMethodCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ShippingMethodArgs | ShippingMethodFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Order' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShippingMethodCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ShippingMethod ? ShippingMethod[P] : never
  } 
      : ShippingMethod


  type ShippingMethodCountArgs = Merge<
    Omit<ShippingMethodFindManyArgs, 'select' | 'include'> & {
      select?: ShippingMethodCountAggregateInputType | true
    }
  >

  export interface ShippingMethodDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ShippingMethod that matches the filter.
     * @param {ShippingMethodFindUniqueArgs} args - Arguments to find a ShippingMethod
     * @example
     * // Get one ShippingMethod
     * const shippingMethod = await prisma.shippingMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShippingMethodFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShippingMethodFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShippingMethod'> extends True ? Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>> : Prisma__ShippingMethodClient<ShippingMethodGetPayload<T> | null, null>

    /**
     * Find one ShippingMethod that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShippingMethodFindUniqueOrThrowArgs} args - Arguments to find a ShippingMethod
     * @example
     * // Get one ShippingMethod
     * const shippingMethod = await prisma.shippingMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShippingMethodFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShippingMethodFindUniqueOrThrowArgs>
    ): Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>>

    /**
     * Find the first ShippingMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMethodFindFirstArgs} args - Arguments to find a ShippingMethod
     * @example
     * // Get one ShippingMethod
     * const shippingMethod = await prisma.shippingMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShippingMethodFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShippingMethodFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShippingMethod'> extends True ? Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>> : Prisma__ShippingMethodClient<ShippingMethodGetPayload<T> | null, null>

    /**
     * Find the first ShippingMethod that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMethodFindFirstOrThrowArgs} args - Arguments to find a ShippingMethod
     * @example
     * // Get one ShippingMethod
     * const shippingMethod = await prisma.shippingMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShippingMethodFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShippingMethodFindFirstOrThrowArgs>
    ): Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>>

    /**
     * Find zero or more ShippingMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMethodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingMethods
     * const shippingMethods = await prisma.shippingMethod.findMany()
     * 
     * // Get first 10 ShippingMethods
     * const shippingMethods = await prisma.shippingMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingMethodWithIdOnly = await prisma.shippingMethod.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShippingMethodFindManyArgs>(
      args?: SelectSubset<T, ShippingMethodFindManyArgs>
    ): PrismaPromise<Array<ShippingMethodGetPayload<T>>>

    /**
     * Create a ShippingMethod.
     * @param {ShippingMethodCreateArgs} args - Arguments to create a ShippingMethod.
     * @example
     * // Create one ShippingMethod
     * const ShippingMethod = await prisma.shippingMethod.create({
     *   data: {
     *     // ... data to create a ShippingMethod
     *   }
     * })
     * 
    **/
    create<T extends ShippingMethodCreateArgs>(
      args: SelectSubset<T, ShippingMethodCreateArgs>
    ): Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>>

    /**
     * Create many ShippingMethods.
     *     @param {ShippingMethodCreateManyArgs} args - Arguments to create many ShippingMethods.
     *     @example
     *     // Create many ShippingMethods
     *     const shippingMethod = await prisma.shippingMethod.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShippingMethodCreateManyArgs>(
      args?: SelectSubset<T, ShippingMethodCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShippingMethod.
     * @param {ShippingMethodDeleteArgs} args - Arguments to delete one ShippingMethod.
     * @example
     * // Delete one ShippingMethod
     * const ShippingMethod = await prisma.shippingMethod.delete({
     *   where: {
     *     // ... filter to delete one ShippingMethod
     *   }
     * })
     * 
    **/
    delete<T extends ShippingMethodDeleteArgs>(
      args: SelectSubset<T, ShippingMethodDeleteArgs>
    ): Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>>

    /**
     * Update one ShippingMethod.
     * @param {ShippingMethodUpdateArgs} args - Arguments to update one ShippingMethod.
     * @example
     * // Update one ShippingMethod
     * const shippingMethod = await prisma.shippingMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShippingMethodUpdateArgs>(
      args: SelectSubset<T, ShippingMethodUpdateArgs>
    ): Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>>

    /**
     * Delete zero or more ShippingMethods.
     * @param {ShippingMethodDeleteManyArgs} args - Arguments to filter ShippingMethods to delete.
     * @example
     * // Delete a few ShippingMethods
     * const { count } = await prisma.shippingMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShippingMethodDeleteManyArgs>(
      args?: SelectSubset<T, ShippingMethodDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingMethods
     * const shippingMethod = await prisma.shippingMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShippingMethodUpdateManyArgs>(
      args: SelectSubset<T, ShippingMethodUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShippingMethod.
     * @param {ShippingMethodUpsertArgs} args - Arguments to update or create a ShippingMethod.
     * @example
     * // Update or create a ShippingMethod
     * const shippingMethod = await prisma.shippingMethod.upsert({
     *   create: {
     *     // ... data to create a ShippingMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingMethod we want to update
     *   }
     * })
    **/
    upsert<T extends ShippingMethodUpsertArgs>(
      args: SelectSubset<T, ShippingMethodUpsertArgs>
    ): Prisma__ShippingMethodClient<ShippingMethodGetPayload<T>>

    /**
     * Count the number of ShippingMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMethodCountArgs} args - Arguments to filter ShippingMethods to count.
     * @example
     * // Count the number of ShippingMethods
     * const count = await prisma.shippingMethod.count({
     *   where: {
     *     // ... the filter for the ShippingMethods we want to count
     *   }
     * })
    **/
    count<T extends ShippingMethodCountArgs>(
      args?: Subset<T, ShippingMethodCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShippingMethodAggregateArgs>(args: Subset<T, ShippingMethodAggregateArgs>): PrismaPromise<GetShippingMethodAggregateType<T>>

    /**
     * Group by ShippingMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShippingMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingMethodGroupByArgs['orderBy'] }
        : { orderBy?: ShippingMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShippingMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingMethodGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShippingMethodClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Order<T extends OrderFindManyArgs= {}>(args?: Subset<T, OrderFindManyArgs>): PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ShippingMethod base type for findUnique actions
   */
  export type ShippingMethodFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * Filter, which ShippingMethod to fetch.
     * 
    **/
    where: ShippingMethodWhereUniqueInput
  }

  /**
   * ShippingMethod: findUnique
   */
  export interface ShippingMethodFindUniqueArgs extends ShippingMethodFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShippingMethod findUniqueOrThrow
   */
  export type ShippingMethodFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * Filter, which ShippingMethod to fetch.
     * 
    **/
    where: ShippingMethodWhereUniqueInput
  }


  /**
   * ShippingMethod base type for findFirst actions
   */
  export type ShippingMethodFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * Filter, which ShippingMethod to fetch.
     * 
    **/
    where?: ShippingMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<ShippingMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingMethods.
     * 
    **/
    cursor?: ShippingMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMethods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingMethods.
     * 
    **/
    distinct?: Enumerable<ShippingMethodScalarFieldEnum>
  }

  /**
   * ShippingMethod: findFirst
   */
  export interface ShippingMethodFindFirstArgs extends ShippingMethodFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShippingMethod findFirstOrThrow
   */
  export type ShippingMethodFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * Filter, which ShippingMethod to fetch.
     * 
    **/
    where?: ShippingMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<ShippingMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingMethods.
     * 
    **/
    cursor?: ShippingMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMethods.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingMethods.
     * 
    **/
    distinct?: Enumerable<ShippingMethodScalarFieldEnum>
  }


  /**
   * ShippingMethod findMany
   */
  export type ShippingMethodFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * Filter, which ShippingMethods to fetch.
     * 
    **/
    where?: ShippingMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMethods to fetch.
     * 
    **/
    orderBy?: Enumerable<ShippingMethodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingMethods.
     * 
    **/
    cursor?: ShippingMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMethods from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMethods.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShippingMethodScalarFieldEnum>
  }


  /**
   * ShippingMethod create
   */
  export type ShippingMethodCreateArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * The data needed to create a ShippingMethod.
     * 
    **/
    data: XOR<ShippingMethodCreateInput, ShippingMethodUncheckedCreateInput>
  }


  /**
   * ShippingMethod createMany
   */
  export type ShippingMethodCreateManyArgs = {
    /**
     * The data used to create many ShippingMethods.
     * 
    **/
    data: Enumerable<ShippingMethodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShippingMethod update
   */
  export type ShippingMethodUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * The data needed to update a ShippingMethod.
     * 
    **/
    data: XOR<ShippingMethodUpdateInput, ShippingMethodUncheckedUpdateInput>
    /**
     * Choose, which ShippingMethod to update.
     * 
    **/
    where: ShippingMethodWhereUniqueInput
  }


  /**
   * ShippingMethod updateMany
   */
  export type ShippingMethodUpdateManyArgs = {
    /**
     * The data used to update ShippingMethods.
     * 
    **/
    data: XOR<ShippingMethodUpdateManyMutationInput, ShippingMethodUncheckedUpdateManyInput>
    /**
     * Filter which ShippingMethods to update
     * 
    **/
    where?: ShippingMethodWhereInput
  }


  /**
   * ShippingMethod upsert
   */
  export type ShippingMethodUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * The filter to search for the ShippingMethod to update in case it exists.
     * 
    **/
    where: ShippingMethodWhereUniqueInput
    /**
     * In case the ShippingMethod found by the `where` argument doesn't exist, create a new ShippingMethod with this data.
     * 
    **/
    create: XOR<ShippingMethodCreateInput, ShippingMethodUncheckedCreateInput>
    /**
     * In case the ShippingMethod was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShippingMethodUpdateInput, ShippingMethodUncheckedUpdateInput>
  }


  /**
   * ShippingMethod delete
   */
  export type ShippingMethodDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
    /**
     * Filter which ShippingMethod to delete.
     * 
    **/
    where: ShippingMethodWhereUniqueInput
  }


  /**
   * ShippingMethod deleteMany
   */
  export type ShippingMethodDeleteManyArgs = {
    /**
     * Filter which ShippingMethods to delete
     * 
    **/
    where?: ShippingMethodWhereInput
  }


  /**
   * ShippingMethod without action
   */
  export type ShippingMethodArgs = {
    /**
     * Select specific fields to fetch from the ShippingMethod
     * 
    **/
    select?: ShippingMethodSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShippingMethodInclude | null
  }



  /**
   * Model Payment
   */


  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: PaymentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: PaymentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    name: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs = {
    /**
     * Filter which Payment to aggregate.
     * 
    **/
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs = {
    where?: PaymentWhereInput
    orderBy?: Enumerable<PaymentOrderByWithAggregationInput>
    by: Array<PaymentScalarFieldEnum>
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }


  export type PaymentGroupByOutputType = {
    id: number
    name: string
    type: PaymentType
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect = {
    id?: boolean
    name?: boolean
    type?: boolean
    orders?: boolean | OrderFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | PaymentCountOutputTypeArgs
  }


  export type PaymentInclude = {
    orders?: boolean | OrderFindManyArgs
    _count?: boolean | PaymentCountOutputTypeArgs
  } 

  export type PaymentGetPayload<S extends boolean | null | undefined | PaymentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Payment :
    S extends undefined ? never :
    S extends { include: any } & (PaymentArgs | PaymentFindManyArgs)
    ? Payment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'orders' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends '_count' ? PaymentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PaymentArgs | PaymentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'orders' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends '_count' ? PaymentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Payment ? Payment[P] : never
  } 
      : Payment


  type PaymentCountArgs = Merge<
    Omit<PaymentFindManyArgs, 'select' | 'include'> & {
      select?: PaymentCountAggregateInputType | true
    }
  >

  export interface PaymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PaymentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Payment'> extends True ? Prisma__PaymentClient<PaymentGetPayload<T>> : Prisma__PaymentClient<PaymentGetPayload<T> | null, null>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PaymentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Payment'> extends True ? Prisma__PaymentClient<PaymentGetPayload<T>> : Prisma__PaymentClient<PaymentGetPayload<T> | null, null>

    /**
     * Find the first Payment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs>
    ): PrismaPromise<Array<PaymentGetPayload<T>>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs>
    ): Prisma__PaymentClient<PaymentGetPayload<T>>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PaymentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    orders<T extends OrderFindManyArgs= {}>(args?: Subset<T, OrderFindManyArgs>): PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Payment base type for findUnique actions
   */
  export type PaymentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     * 
    **/
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment: findUnique
   */
  export interface PaymentFindUniqueArgs extends PaymentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     * 
    **/
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment base type for findFirst actions
   */
  export type PaymentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     * 
    **/
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     * 
    **/
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     * 
    **/
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }

  /**
   * Payment: findFirst
   */
  export interface PaymentFindFirstArgs extends PaymentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * Filter, which Payment to fetch.
     * 
    **/
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     * 
    **/
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     * 
    **/
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * Filter, which Payments to fetch.
     * 
    **/
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     * 
    **/
    orderBy?: Enumerable<PaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     * 
    **/
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PaymentScalarFieldEnum>
  }


  /**
   * Payment create
   */
  export type PaymentCreateArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * The data needed to create a Payment.
     * 
    **/
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }


  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs = {
    /**
     * The data used to create many Payments.
     * 
    **/
    data: Enumerable<PaymentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Payment update
   */
  export type PaymentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * The data needed to update a Payment.
     * 
    **/
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     * 
    **/
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs = {
    /**
     * The data used to update Payments.
     * 
    **/
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     * 
    **/
    where?: PaymentWhereInput
  }


  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * The filter to search for the Payment to update in case it exists.
     * 
    **/
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     * 
    **/
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }


  /**
   * Payment delete
   */
  export type PaymentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
    /**
     * Filter which Payment to delete.
     * 
    **/
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs = {
    /**
     * Filter which Payments to delete
     * 
    **/
    where?: PaymentWhereInput
  }


  /**
   * Payment without action
   */
  export type PaymentArgs = {
    /**
     * Select specific fields to fetch from the Payment
     * 
    **/
    select?: PaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PaymentInclude | null
  }



  /**
   * Model Notification
   */


  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    url: string | null
    type: NotificationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    url: string | null
    type: NotificationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    content: number
    url: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs = {
    /**
     * Filter which Notification to aggregate.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs = {
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithAggregationInput>
    by: Array<NotificationScalarFieldEnum>
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }


  export type NotificationGroupByOutputType = {
    id: number
    title: string
    content: string
    url: string
    type: NotificationType
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect = {
    id?: boolean
    title?: boolean
    content?: boolean
    url?: boolean
    type?: boolean
    NotificationSent?: boolean | NotificationSentFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | NotificationCountOutputTypeArgs
  }


  export type NotificationInclude = {
    NotificationSent?: boolean | NotificationSentFindManyArgs
    _count?: boolean | NotificationCountOutputTypeArgs
  } 

  export type NotificationGetPayload<S extends boolean | null | undefined | NotificationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Notification :
    S extends undefined ? never :
    S extends { include: any } & (NotificationArgs | NotificationFindManyArgs)
    ? Notification  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'NotificationSent' ? Array < NotificationSentGetPayload<S['include'][P]>>  :
        P extends '_count' ? NotificationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NotificationArgs | NotificationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'NotificationSent' ? Array < NotificationSentGetPayload<S['select'][P]>>  :
        P extends '_count' ? NotificationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Notification ? Notification[P] : never
  } 
      : Notification


  type NotificationCountArgs = Merge<
    Omit<NotificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }
  >

  export interface NotificationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find the first Notification that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs>
    ): PrismaPromise<Array<NotificationGetPayload<T>>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    NotificationSent<T extends NotificationSentFindManyArgs= {}>(args?: Subset<T, NotificationSentFindManyArgs>): PrismaPromise<Array<NotificationSentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Notification base type for findUnique actions
   */
  export type NotificationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification: findUnique
   */
  export interface NotificationFindUniqueArgs extends NotificationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification base type for findFirst actions
   */
  export type NotificationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }

  /**
   * Notification: findFirst
   */
  export interface NotificationFindFirstArgs extends NotificationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     * 
    **/
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter, which Notifications to fetch.
     * 
    **/
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     * 
    **/
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to create a Notification.
     * 
    **/
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs = {
    /**
     * The data used to create many Notifications.
     * 
    **/
    data: Enumerable<NotificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The data needed to update a Notification.
     * 
    **/
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs = {
    /**
     * The data used to update Notifications.
     * 
    **/
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * The filter to search for the Notification to update in case it exists.
     * 
    **/
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     * 
    **/
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
    /**
     * Filter which Notification to delete.
     * 
    **/
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs = {
    /**
     * Filter which Notifications to delete
     * 
    **/
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationArgs = {
    /**
     * Select specific fields to fetch from the Notification
     * 
    **/
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationInclude | null
  }



  /**
   * Model NotificationSent
   */


  export type AggregateNotificationSent = {
    _count: NotificationSentCountAggregateOutputType | null
    _avg: NotificationSentAvgAggregateOutputType | null
    _sum: NotificationSentSumAggregateOutputType | null
    _min: NotificationSentMinAggregateOutputType | null
    _max: NotificationSentMaxAggregateOutputType | null
  }

  export type NotificationSentAvgAggregateOutputType = {
    id: number | null
    notificationId: number | null
    recipentId: number | null
  }

  export type NotificationSentSumAggregateOutputType = {
    id: number | null
    notificationId: number | null
    recipentId: number | null
  }

  export type NotificationSentMinAggregateOutputType = {
    id: number | null
    notificationId: number | null
    recipentId: number | null
    isRead: boolean | null
    readTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSentMaxAggregateOutputType = {
    id: number | null
    notificationId: number | null
    recipentId: number | null
    isRead: boolean | null
    readTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSentCountAggregateOutputType = {
    id: number
    notificationId: number
    recipentId: number
    isRead: number
    readTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationSentAvgAggregateInputType = {
    id?: true
    notificationId?: true
    recipentId?: true
  }

  export type NotificationSentSumAggregateInputType = {
    id?: true
    notificationId?: true
    recipentId?: true
  }

  export type NotificationSentMinAggregateInputType = {
    id?: true
    notificationId?: true
    recipentId?: true
    isRead?: true
    readTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSentMaxAggregateInputType = {
    id?: true
    notificationId?: true
    recipentId?: true
    isRead?: true
    readTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSentCountAggregateInputType = {
    id?: true
    notificationId?: true
    recipentId?: true
    isRead?: true
    readTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationSentAggregateArgs = {
    /**
     * Filter which NotificationSent to aggregate.
     * 
    **/
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationSentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSents
    **/
    _count?: true | NotificationSentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationSentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSentMaxAggregateInputType
  }

  export type GetNotificationSentAggregateType<T extends NotificationSentAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSent[P]>
      : GetScalarType<T[P], AggregateNotificationSent[P]>
  }




  export type NotificationSentGroupByArgs = {
    where?: NotificationSentWhereInput
    orderBy?: Enumerable<NotificationSentOrderByWithAggregationInput>
    by: Array<NotificationSentScalarFieldEnum>
    having?: NotificationSentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSentCountAggregateInputType | true
    _avg?: NotificationSentAvgAggregateInputType
    _sum?: NotificationSentSumAggregateInputType
    _min?: NotificationSentMinAggregateInputType
    _max?: NotificationSentMaxAggregateInputType
  }


  export type NotificationSentGroupByOutputType = {
    id: number
    notificationId: number
    recipentId: number
    isRead: boolean
    readTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationSentCountAggregateOutputType | null
    _avg: NotificationSentAvgAggregateOutputType | null
    _sum: NotificationSentSumAggregateOutputType | null
    _min: NotificationSentMinAggregateOutputType | null
    _max: NotificationSentMaxAggregateOutputType | null
  }

  type GetNotificationSentGroupByPayload<T extends NotificationSentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationSentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSentGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSentGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSentSelect = {
    id?: boolean
    notificationId?: boolean
    recipentId?: boolean
    isRead?: boolean
    readTime?: boolean
    notification?: boolean | NotificationArgs
    recipent?: boolean | UserArgs
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type NotificationSentInclude = {
    notification?: boolean | NotificationArgs
    recipent?: boolean | UserArgs
  } 

  export type NotificationSentGetPayload<S extends boolean | null | undefined | NotificationSentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? NotificationSent :
    S extends undefined ? never :
    S extends { include: any } & (NotificationSentArgs | NotificationSentFindManyArgs)
    ? NotificationSent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'notification' ? NotificationGetPayload<S['include'][P]> :
        P extends 'recipent' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NotificationSentArgs | NotificationSentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'notification' ? NotificationGetPayload<S['select'][P]> :
        P extends 'recipent' ? UserGetPayload<S['select'][P]> :  P extends keyof NotificationSent ? NotificationSent[P] : never
  } 
      : NotificationSent


  type NotificationSentCountArgs = Merge<
    Omit<NotificationSentFindManyArgs, 'select' | 'include'> & {
      select?: NotificationSentCountAggregateInputType | true
    }
  >

  export interface NotificationSentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one NotificationSent that matches the filter.
     * @param {NotificationSentFindUniqueArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationSentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationSentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NotificationSent'> extends True ? Prisma__NotificationSentClient<NotificationSentGetPayload<T>> : Prisma__NotificationSentClient<NotificationSentGetPayload<T> | null, null>

    /**
     * Find one NotificationSent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationSentFindUniqueOrThrowArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationSentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationSentFindUniqueOrThrowArgs>
    ): Prisma__NotificationSentClient<NotificationSentGetPayload<T>>

    /**
     * Find the first NotificationSent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentFindFirstArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationSentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationSentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NotificationSent'> extends True ? Prisma__NotificationSentClient<NotificationSentGetPayload<T>> : Prisma__NotificationSentClient<NotificationSentGetPayload<T> | null, null>

    /**
     * Find the first NotificationSent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentFindFirstOrThrowArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationSentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationSentFindFirstOrThrowArgs>
    ): Prisma__NotificationSentClient<NotificationSentGetPayload<T>>

    /**
     * Find zero or more NotificationSents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSents
     * const notificationSents = await prisma.notificationSent.findMany()
     * 
     * // Get first 10 NotificationSents
     * const notificationSents = await prisma.notificationSent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSentWithIdOnly = await prisma.notificationSent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationSentFindManyArgs>(
      args?: SelectSubset<T, NotificationSentFindManyArgs>
    ): PrismaPromise<Array<NotificationSentGetPayload<T>>>

    /**
     * Create a NotificationSent.
     * @param {NotificationSentCreateArgs} args - Arguments to create a NotificationSent.
     * @example
     * // Create one NotificationSent
     * const NotificationSent = await prisma.notificationSent.create({
     *   data: {
     *     // ... data to create a NotificationSent
     *   }
     * })
     * 
    **/
    create<T extends NotificationSentCreateArgs>(
      args: SelectSubset<T, NotificationSentCreateArgs>
    ): Prisma__NotificationSentClient<NotificationSentGetPayload<T>>

    /**
     * Create many NotificationSents.
     *     @param {NotificationSentCreateManyArgs} args - Arguments to create many NotificationSents.
     *     @example
     *     // Create many NotificationSents
     *     const notificationSent = await prisma.notificationSent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationSentCreateManyArgs>(
      args?: SelectSubset<T, NotificationSentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationSent.
     * @param {NotificationSentDeleteArgs} args - Arguments to delete one NotificationSent.
     * @example
     * // Delete one NotificationSent
     * const NotificationSent = await prisma.notificationSent.delete({
     *   where: {
     *     // ... filter to delete one NotificationSent
     *   }
     * })
     * 
    **/
    delete<T extends NotificationSentDeleteArgs>(
      args: SelectSubset<T, NotificationSentDeleteArgs>
    ): Prisma__NotificationSentClient<NotificationSentGetPayload<T>>

    /**
     * Update one NotificationSent.
     * @param {NotificationSentUpdateArgs} args - Arguments to update one NotificationSent.
     * @example
     * // Update one NotificationSent
     * const notificationSent = await prisma.notificationSent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationSentUpdateArgs>(
      args: SelectSubset<T, NotificationSentUpdateArgs>
    ): Prisma__NotificationSentClient<NotificationSentGetPayload<T>>

    /**
     * Delete zero or more NotificationSents.
     * @param {NotificationSentDeleteManyArgs} args - Arguments to filter NotificationSents to delete.
     * @example
     * // Delete a few NotificationSents
     * const { count } = await prisma.notificationSent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationSentDeleteManyArgs>(
      args?: SelectSubset<T, NotificationSentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSents
     * const notificationSent = await prisma.notificationSent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationSentUpdateManyArgs>(
      args: SelectSubset<T, NotificationSentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationSent.
     * @param {NotificationSentUpsertArgs} args - Arguments to update or create a NotificationSent.
     * @example
     * // Update or create a NotificationSent
     * const notificationSent = await prisma.notificationSent.upsert({
     *   create: {
     *     // ... data to create a NotificationSent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSent we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationSentUpsertArgs>(
      args: SelectSubset<T, NotificationSentUpsertArgs>
    ): Prisma__NotificationSentClient<NotificationSentGetPayload<T>>

    /**
     * Count the number of NotificationSents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentCountArgs} args - Arguments to filter NotificationSents to count.
     * @example
     * // Count the number of NotificationSents
     * const count = await prisma.notificationSent.count({
     *   where: {
     *     // ... the filter for the NotificationSents we want to count
     *   }
     * })
    **/
    count<T extends NotificationSentCountArgs>(
      args?: Subset<T, NotificationSentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationSentAggregateArgs>(args: Subset<T, NotificationSentAggregateArgs>): PrismaPromise<GetNotificationSentAggregateType<T>>

    /**
     * Group by NotificationSent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationSentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSentGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationSentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationSentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    notification<T extends NotificationArgs= {}>(args?: Subset<T, NotificationArgs>): Prisma__NotificationClient<NotificationGetPayload<T> | Null>;

    recipent<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * NotificationSent base type for findUnique actions
   */
  export type NotificationSentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * Filter, which NotificationSent to fetch.
     * 
    **/
    where: NotificationSentWhereUniqueInput
  }

  /**
   * NotificationSent: findUnique
   */
  export interface NotificationSentFindUniqueArgs extends NotificationSentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NotificationSent findUniqueOrThrow
   */
  export type NotificationSentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * Filter, which NotificationSent to fetch.
     * 
    **/
    where: NotificationSentWhereUniqueInput
  }


  /**
   * NotificationSent base type for findFirst actions
   */
  export type NotificationSentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * Filter, which NotificationSent to fetch.
     * 
    **/
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationSentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSents.
     * 
    **/
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSents.
     * 
    **/
    distinct?: Enumerable<NotificationSentScalarFieldEnum>
  }

  /**
   * NotificationSent: findFirst
   */
  export interface NotificationSentFindFirstArgs extends NotificationSentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NotificationSent findFirstOrThrow
   */
  export type NotificationSentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * Filter, which NotificationSent to fetch.
     * 
    **/
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationSentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSents.
     * 
    **/
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSents.
     * 
    **/
    distinct?: Enumerable<NotificationSentScalarFieldEnum>
  }


  /**
   * NotificationSent findMany
   */
  export type NotificationSentFindManyArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * Filter, which NotificationSents to fetch.
     * 
    **/
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     * 
    **/
    orderBy?: Enumerable<NotificationSentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSents.
     * 
    **/
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotificationSentScalarFieldEnum>
  }


  /**
   * NotificationSent create
   */
  export type NotificationSentCreateArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * The data needed to create a NotificationSent.
     * 
    **/
    data: XOR<NotificationSentCreateInput, NotificationSentUncheckedCreateInput>
  }


  /**
   * NotificationSent createMany
   */
  export type NotificationSentCreateManyArgs = {
    /**
     * The data used to create many NotificationSents.
     * 
    **/
    data: Enumerable<NotificationSentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NotificationSent update
   */
  export type NotificationSentUpdateArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * The data needed to update a NotificationSent.
     * 
    **/
    data: XOR<NotificationSentUpdateInput, NotificationSentUncheckedUpdateInput>
    /**
     * Choose, which NotificationSent to update.
     * 
    **/
    where: NotificationSentWhereUniqueInput
  }


  /**
   * NotificationSent updateMany
   */
  export type NotificationSentUpdateManyArgs = {
    /**
     * The data used to update NotificationSents.
     * 
    **/
    data: XOR<NotificationSentUpdateManyMutationInput, NotificationSentUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSents to update
     * 
    **/
    where?: NotificationSentWhereInput
  }


  /**
   * NotificationSent upsert
   */
  export type NotificationSentUpsertArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * The filter to search for the NotificationSent to update in case it exists.
     * 
    **/
    where: NotificationSentWhereUniqueInput
    /**
     * In case the NotificationSent found by the `where` argument doesn't exist, create a new NotificationSent with this data.
     * 
    **/
    create: XOR<NotificationSentCreateInput, NotificationSentUncheckedCreateInput>
    /**
     * In case the NotificationSent was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NotificationSentUpdateInput, NotificationSentUncheckedUpdateInput>
  }


  /**
   * NotificationSent delete
   */
  export type NotificationSentDeleteArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
    /**
     * Filter which NotificationSent to delete.
     * 
    **/
    where: NotificationSentWhereUniqueInput
  }


  /**
   * NotificationSent deleteMany
   */
  export type NotificationSentDeleteManyArgs = {
    /**
     * Filter which NotificationSents to delete
     * 
    **/
    where?: NotificationSentWhereInput
  }


  /**
   * NotificationSent without action
   */
  export type NotificationSentArgs = {
    /**
     * Select specific fields to fetch from the NotificationSent
     * 
    **/
    select?: NotificationSentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotificationSentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    district: 'district',
    city: 'city'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CategoriesOnProductsScalarFieldEnum: {
    productId: 'productId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesOnProductsScalarFieldEnum = (typeof CategoriesOnProductsScalarFieldEnum)[keyof typeof CategoriesOnProductsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expires: 'expires',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationSentScalarFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    recipentId: 'recipentId',
    isRead: 'isRead',
    readTime: 'readTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationSentScalarFieldEnum = (typeof NotificationSentScalarFieldEnum)[keyof typeof NotificationSentScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderDetailId: 'orderDetailId',
    orderStatus: 'orderStatus',
    userId: 'userId',
    paymentsId: 'paymentsId',
    shippingMethodId: 'shippingMethodId',
    shippingAddressId: 'shippingAddressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ProductColorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    images: 'images',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductColorScalarFieldEnum = (typeof ProductColorScalarFieldEnum)[keyof typeof ProductColorScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    price: 'price',
    discount: 'discount',
    qty: 'qty',
    avgRating: 'avgRating',
    brandId: 'brandId',
    description: 'description',
    specification: 'specification',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductSnapshotScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    orderId: 'orderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductSnapshotScalarFieldEnum = (typeof ProductSnapshotScalarFieldEnum)[keyof typeof ProductSnapshotScalarFieldEnum]


  export const ProductsOnCartScalarFieldEnum: {
    productId: 'productId',
    cardId: 'cardId',
    qty: 'qty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsOnCartScalarFieldEnum = (typeof ProductsOnCartScalarFieldEnum)[keyof typeof ProductsOnCartScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    productId: 'productId',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    deviceId: 'deviceId',
    expires: 'expires',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ShippingMethodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShippingMethodScalarFieldEnum = (typeof ShippingMethodScalarFieldEnum)[keyof typeof ShippingMethodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    role: 'role',
    password: 'password',
    active: 'active',
    verifyEmail: 'verifyEmail',
    verifyContact: 'verifyContact',
    name: 'name',
    avatar: 'avatar',
    phoneNumber: 'phoneNumber',
    userId: 'userId',
    addressId: 'addressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    email?: StringFilter | string
    role?: EnumRoleFilter | Role
    password?: StringFilter | string
    active?: BoolFilter | boolean
    verifyEmail?: BoolFilter | boolean
    verifyContact?: BoolFilter | boolean
    name?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    phoneNumber?: StringFilter | string
    userId?: IntFilter | number
    address?: XOR<AddressRelationFilter, AddressWhereInput>
    addressId?: IntFilter | number
    reviews?: ReviewListRelationFilter
    orders?: OrderListRelationFilter
    sessions?: SessionListRelationFilter
    NotificationSent?: NotificationSentListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    active?: SortOrder
    verifyEmail?: SortOrder
    verifyContact?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    address?: AddressOrderByWithRelationInput
    addressId?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    NotificationSent?: NotificationSentOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    userId?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    active?: SortOrder
    verifyEmail?: SortOrder
    verifyContact?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    password?: StringWithAggregatesFilter | string
    active?: BoolWithAggregatesFilter | boolean
    verifyEmail?: BoolWithAggregatesFilter | boolean
    verifyContact?: BoolWithAggregatesFilter | boolean
    name?: StringNullableWithAggregatesFilter | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    phoneNumber?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    addressId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    id?: IntFilter | number
    street?: StringNullableFilter | string | null
    district?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    user?: UserListRelationFilter
    order?: OrderListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
    user?: UserOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = {
    id?: number
  }

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    street?: StringNullableWithAggregatesFilter | string | null
    district?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: IntFilter | number
    refreshToken?: StringFilter | string
    deviceId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    userId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    deviceId?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: number
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    deviceId?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    refreshToken?: StringWithAggregatesFilter | string
    deviceId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    sku?: StringFilter | string
    price?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    discount?: FloatNullableFilter | number | null
    qty?: IntNullableFilter | number | null
    avgRating?: FloatFilter | number
    brandId?: IntNullableFilter | number | null
    description?: StringNullableFilter | string | null
    specification?: StringNullableFilter | string | null
    categories?: CategoriesOnProductsListRelationFilter
    reviews?: ReviewListRelationFilter
    snapshots?: ProductSnapshotListRelationFilter
    productsOnCart?: ProductsOnCartListRelationFilter
    coupons?: CouponListRelationFilter
    colors?: ProductColorListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    brand?: XOR<BrandRelationFilter, BrandWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    qty?: SortOrder
    avgRating?: SortOrder
    brandId?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    categories?: CategoriesOnProductsOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    snapshots?: ProductSnapshotOrderByRelationAggregateInput
    productsOnCart?: ProductsOnCartOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
    colors?: ProductColorOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = {
    id?: number
    sku?: string
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    qty?: SortOrder
    avgRating?: SortOrder
    brandId?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    sku?: StringWithAggregatesFilter | string
    price?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    discount?: FloatNullableWithAggregatesFilter | number | null
    qty?: IntNullableWithAggregatesFilter | number | null
    avgRating?: FloatWithAggregatesFilter | number
    brandId?: IntNullableWithAggregatesFilter | number | null
    description?: StringNullableWithAggregatesFilter | string | null
    specification?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductColorWhereInput = {
    AND?: Enumerable<ProductColorWhereInput>
    OR?: Enumerable<ProductColorWhereInput>
    NOT?: Enumerable<ProductColorWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    color?: StringFilter | string
    images?: StringNullableListFilter
    productId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductColorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    images?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductColorWhereUniqueInput = {
    id?: number
  }

  export type ProductColorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    images?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductColorCountOrderByAggregateInput
    _avg?: ProductColorAvgOrderByAggregateInput
    _max?: ProductColorMaxOrderByAggregateInput
    _min?: ProductColorMinOrderByAggregateInput
    _sum?: ProductColorSumOrderByAggregateInput
  }

  export type ProductColorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductColorScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductColorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductColorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    color?: StringWithAggregatesFilter | string
    images?: StringNullableListFilter
    productId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CouponWhereInput = {
    AND?: Enumerable<CouponWhereInput>
    OR?: Enumerable<CouponWhereInput>
    NOT?: Enumerable<CouponWhereInput>
    id?: IntFilter | number
    code?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    productId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput> | null
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expires?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type CouponWhereUniqueInput = {
    id?: number
  }

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expires?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CouponScalarWhereWithAggregatesInput>
    OR?: Enumerable<CouponScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CouponScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
    productId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductSnapshotWhereInput = {
    AND?: Enumerable<ProductSnapshotWhereInput>
    OR?: Enumerable<ProductSnapshotWhereInput>
    NOT?: Enumerable<ProductSnapshotWhereInput>
    id?: IntFilter | number
    productId?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    orderId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type ProductSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type ProductSnapshotWhereUniqueInput = {
    id?: number
  }

  export type ProductSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductSnapshotCountOrderByAggregateInput
    _avg?: ProductSnapshotAvgOrderByAggregateInput
    _max?: ProductSnapshotMaxOrderByAggregateInput
    _min?: ProductSnapshotMinOrderByAggregateInput
    _sum?: ProductSnapshotSumOrderByAggregateInput
  }

  export type ProductSnapshotScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductSnapshotScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductSnapshotScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductSnapshotScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
    orderId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BrandWhereInput = {
    AND?: Enumerable<BrandWhereInput>
    OR?: Enumerable<BrandWhereInput>
    NOT?: Enumerable<BrandWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    products?: ProductListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandWhereUniqueInput = {
    id?: number
  }

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BrandScalarWhereWithAggregatesInput>
    OR?: Enumerable<BrandScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BrandScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    products?: CategoriesOnProductsListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: CategoriesOnProductsOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    id?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoriesOnProductsWhereInput = {
    AND?: Enumerable<CategoriesOnProductsWhereInput>
    OR?: Enumerable<CategoriesOnProductsWhereInput>
    NOT?: Enumerable<CategoriesOnProductsWhereInput>
    productId?: IntFilter | number
    categoryId?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoriesOnProductsOrderByWithRelationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    product?: ProductOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesOnProductsWhereUniqueInput = {
    productId_categoryId?: CategoriesOnProductsProductIdCategoryIdCompoundUniqueInput
  }

  export type CategoriesOnProductsOrderByWithAggregationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesOnProductsCountOrderByAggregateInput
    _avg?: CategoriesOnProductsAvgOrderByAggregateInput
    _max?: CategoriesOnProductsMaxOrderByAggregateInput
    _min?: CategoriesOnProductsMinOrderByAggregateInput
    _sum?: CategoriesOnProductsSumOrderByAggregateInput
  }

  export type CategoriesOnProductsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoriesOnProductsScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoriesOnProductsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoriesOnProductsScalarWhereWithAggregatesInput>
    productId?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReviewWhereInput = {
    AND?: Enumerable<ReviewWhereInput>
    OR?: Enumerable<ReviewWhereInput>
    NOT?: Enumerable<ReviewWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    userId?: IntFilter | number
    productId?: IntFilter | number
    rating?: EnumRatingFilter | Rating
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = {
    id?: number
  }

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
    rating?: EnumRatingWithAggregatesFilter | Rating
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: IntFilter | number
    orderDetailId?: IntFilter | number
    orderStatus?: EnumOrderStatusFilter | OrderStatus
    userId?: IntNullableFilter | number | null
    paymentsId?: IntFilter | number
    shippingMethodId?: IntFilter | number
    shippingAddress?: XOR<AddressRelationFilter, AddressWhereInput>
    shippingAddressId?: IntFilter | number
    productSnapshots?: ProductSnapshotListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    Payments?: XOR<PaymentRelationFilter, PaymentWhereInput>
    shippingMethod?: XOR<ShippingMethodRelationFilter, ShippingMethodWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderDetailId?: SortOrder
    orderStatus?: SortOrder
    userId?: SortOrder
    paymentsId?: SortOrder
    shippingMethodId?: SortOrder
    shippingAddress?: AddressOrderByWithRelationInput
    shippingAddressId?: SortOrder
    productSnapshots?: ProductSnapshotOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Payments?: PaymentOrderByWithRelationInput
    shippingMethod?: ShippingMethodOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = {
    id?: number
    orderDetailId?: number
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderDetailId?: SortOrder
    orderStatus?: SortOrder
    userId?: SortOrder
    paymentsId?: SortOrder
    shippingMethodId?: SortOrder
    shippingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    orderDetailId?: IntWithAggregatesFilter | number
    orderStatus?: EnumOrderStatusWithAggregatesFilter | OrderStatus
    userId?: IntNullableWithAggregatesFilter | number | null
    paymentsId?: IntWithAggregatesFilter | number
    shippingMethodId?: IntWithAggregatesFilter | number
    shippingAddressId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CartWhereInput = {
    AND?: Enumerable<CartWhereInput>
    OR?: Enumerable<CartWhereInput>
    NOT?: Enumerable<CartWhereInput>
    id?: IntFilter | number
    productsOnCart?: ProductsOnCartListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    productsOnCart?: ProductsOnCartOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = {
    id?: number
  }

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CartScalarWhereWithAggregatesInput>
    OR?: Enumerable<CartScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CartScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type ProductsOnCartWhereInput = {
    AND?: Enumerable<ProductsOnCartWhereInput>
    OR?: Enumerable<ProductsOnCartWhereInput>
    NOT?: Enumerable<ProductsOnCartWhereInput>
    productId?: IntFilter | number
    cardId?: IntFilter | number
    qty?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    cart?: XOR<CartRelationFilter, CartWhereInput>
  }

  export type ProductsOnCartOrderByWithRelationInput = {
    productId?: SortOrder
    cardId?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    cart?: CartOrderByWithRelationInput
  }

  export type ProductsOnCartWhereUniqueInput = {
    productId_cardId?: ProductsOnCartProductIdCardIdCompoundUniqueInput
  }

  export type ProductsOnCartOrderByWithAggregationInput = {
    productId?: SortOrder
    cardId?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductsOnCartCountOrderByAggregateInput
    _avg?: ProductsOnCartAvgOrderByAggregateInput
    _max?: ProductsOnCartMaxOrderByAggregateInput
    _min?: ProductsOnCartMinOrderByAggregateInput
    _sum?: ProductsOnCartSumOrderByAggregateInput
  }

  export type ProductsOnCartScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductsOnCartScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductsOnCartScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductsOnCartScalarWhereWithAggregatesInput>
    productId?: IntWithAggregatesFilter | number
    cardId?: IntWithAggregatesFilter | number
    qty?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShippingMethodWhereInput = {
    AND?: Enumerable<ShippingMethodWhereInput>
    OR?: Enumerable<ShippingMethodWhereInput>
    NOT?: Enumerable<ShippingMethodWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Order?: OrderListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShippingMethodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Order?: OrderOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShippingMethodWhereUniqueInput = {
    id?: number
  }

  export type ShippingMethodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShippingMethodCountOrderByAggregateInput
    _avg?: ShippingMethodAvgOrderByAggregateInput
    _max?: ShippingMethodMaxOrderByAggregateInput
    _min?: ShippingMethodMinOrderByAggregateInput
    _sum?: ShippingMethodSumOrderByAggregateInput
  }

  export type ShippingMethodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShippingMethodScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShippingMethodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShippingMethodScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PaymentWhereInput = {
    AND?: Enumerable<PaymentWhereInput>
    OR?: Enumerable<PaymentWhereInput>
    NOT?: Enumerable<PaymentWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    type?: EnumPaymentTypeFilter | PaymentType
    orders?: OrderListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentWhereUniqueInput = {
    id?: number
  }

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PaymentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: EnumPaymentTypeWithAggregatesFilter | PaymentType
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type NotificationWhereInput = {
    AND?: Enumerable<NotificationWhereInput>
    OR?: Enumerable<NotificationWhereInput>
    NOT?: Enumerable<NotificationWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    content?: StringFilter | string
    url?: StringFilter | string
    type?: EnumNotificationTypeFilter | NotificationType
    NotificationSent?: NotificationSentListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    url?: SortOrder
    type?: SortOrder
    NotificationSent?: NotificationSentOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = {
    id?: number
  }

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    type?: EnumNotificationTypeWithAggregatesFilter | NotificationType
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type NotificationSentWhereInput = {
    AND?: Enumerable<NotificationSentWhereInput>
    OR?: Enumerable<NotificationSentWhereInput>
    NOT?: Enumerable<NotificationSentWhereInput>
    id?: IntFilter | number
    notificationId?: IntFilter | number
    recipentId?: IntFilter | number
    isRead?: BoolFilter | boolean
    readTime?: DateTimeNullableFilter | Date | string | null
    notification?: XOR<NotificationRelationFilter, NotificationWhereInput>
    recipent?: XOR<UserRelationFilter, UserWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type NotificationSentOrderByWithRelationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    recipentId?: SortOrder
    isRead?: SortOrder
    readTime?: SortOrder
    notification?: NotificationOrderByWithRelationInput
    recipent?: UserOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSentWhereUniqueInput = {
    id?: number
  }

  export type NotificationSentOrderByWithAggregationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    recipentId?: SortOrder
    isRead?: SortOrder
    readTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationSentCountOrderByAggregateInput
    _avg?: NotificationSentAvgOrderByAggregateInput
    _max?: NotificationSentMaxOrderByAggregateInput
    _min?: NotificationSentMinOrderByAggregateInput
    _sum?: NotificationSentSumOrderByAggregateInput
  }

  export type NotificationSentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationSentScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationSentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationSentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    notificationId?: IntWithAggregatesFilter | number
    recipentId?: IntWithAggregatesFilter | number
    isRead?: BoolWithAggregatesFilter | boolean
    readTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    address: AddressCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    addressId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentUncheckedCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUncheckedUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    street?: string | null
    district?: string | null
    city?: string | null
    user?: UserCreateNestedManyWithoutAddressInput
    order?: OrderCreateNestedManyWithoutShippingAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    street?: string | null
    district?: string | null
    city?: string | null
    user?: UserUncheckedCreateNestedManyWithoutAddressInput
    order?: OrderUncheckedCreateNestedManyWithoutShippingAddressInput
  }

  export type AddressUpdateInput = {
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateManyWithoutAddressNestedInput
    order?: OrderUpdateManyWithoutShippingAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateManyWithoutAddressNestedInput
    order?: OrderUncheckedUpdateManyWithoutShippingAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    street?: string | null
    district?: string | null
    city?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    refreshToken: string
    deviceId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    refreshToken: string
    deviceId: string
    expires: Date | string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: number
    refreshToken: string
    deviceId: string
    expires: Date | string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutProductInput
    coupons?: CouponCreateNestedManyWithoutProductInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutProductInput
    coupons?: CouponUncheckedCreateNestedManyWithoutProductInput
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUpdateManyWithoutProductNestedInput
    coupons?: CouponUpdateManyWithoutProductNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutProductNestedInput
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorCreateInput = {
    name: string
    color: string
    images?: ProductColorCreateimagesInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutColorsInput
  }

  export type ProductColorUncheckedCreateInput = {
    id?: number
    name: string
    color: string
    images?: ProductColorCreateimagesInput | Enumerable<string>
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductColorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductColorUpdateimagesInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
  }

  export type ProductColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductColorUpdateimagesInput | Enumerable<string>
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorCreateManyInput = {
    id?: number
    name: string
    color: string
    images?: ProductColorCreateimagesInput | Enumerable<string>
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductColorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductColorUpdateimagesInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductColorUpdateimagesInput | Enumerable<string>
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    code: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    id?: number
    code: string
    expires: Date | string
    productId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateManyInput = {
    id?: number
    code: string
    expires: Date | string
    productId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotCreateInput = {
    product: ProductCreateNestedOneWithoutSnapshotsInput
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutProductSnapshotsInput
  }

  export type ProductSnapshotUncheckedCreateInput = {
    id?: number
    productId: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSnapshotUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutSnapshotsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutProductSnapshotsNestedInput
  }

  export type ProductSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotCreateManyInput = {
    id?: number
    productId: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSnapshotUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    name: string
    products?: ProductCreateNestedManyWithoutBrandInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutBrandNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    products?: CategoriesOnProductsCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    products?: CategoriesOnProductsUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: CategoriesOnProductsUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: CategoriesOnProductsUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsCreateInput = {
    product: ProductCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutProductsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsUncheckedCreateInput = {
    productId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsCreateManyInput = {
    productId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    content: string
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    content: string
    userId: number
    productId: number
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    content: string
    userId: number
    productId: number
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    orderDetailId: number
    orderStatus: OrderStatus
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    productSnapshots?: ProductSnapshotCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutOrdersInput
    Payments: PaymentCreateNestedOneWithoutOrdersInput
    shippingMethod: ShippingMethodCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    paymentsId: number
    shippingMethodId: number
    shippingAddressId: number
    productSnapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    productSnapshots?: ProductSnapshotUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutOrdersNestedInput
    Payments?: PaymentUpdateOneRequiredWithoutOrdersNestedInput
    shippingMethod?: ShippingMethodUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    shippingAddressId?: IntFieldUpdateOperationsInput | number
    productSnapshots?: ProductSnapshotUncheckedUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    paymentsId: number
    shippingMethodId: number
    shippingAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    shippingAddressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    productsOnCart?: ProductsOnCartUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: number
  }

  export type CartUpdateManyMutationInput = {

  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsOnCartCreateInput = {
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductsOnCartInput
    cart: CartCreateNestedOneWithoutProductsOnCartInput
  }

  export type ProductsOnCartUncheckedCreateInput = {
    productId: number
    cardId: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsOnCartUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductsOnCartNestedInput
    cart?: CartUpdateOneRequiredWithoutProductsOnCartNestedInput
  }

  export type ProductsOnCartUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnCartCreateManyInput = {
    productId: number
    cardId: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsOnCartUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnCartUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingMethodCreateInput = {
    name: string
    Order?: OrderCreateNestedManyWithoutShippingMethodInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShippingMethodUncheckedCreateInput = {
    id?: number
    name: string
    Order?: OrderUncheckedCreateNestedManyWithoutShippingMethodInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShippingMethodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Order?: OrderUpdateManyWithoutShippingMethodNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Order?: OrderUncheckedUpdateManyWithoutShippingMethodNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingMethodCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShippingMethodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    name: string
    type: PaymentType
    orders?: OrderCreateNestedManyWithoutPaymentsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    name: string
    type: PaymentType
    orders?: OrderUncheckedCreateNestedManyWithoutPaymentsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | PaymentType
    orders?: OrderUpdateManyWithoutPaymentsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | PaymentType
    orders?: OrderUncheckedUpdateManyWithoutPaymentsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    name: string
    type: PaymentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    content: string
    url: string
    type: NotificationType
    NotificationSent?: NotificationSentCreateNestedManyWithoutNotificationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    url: string
    type: NotificationType
    NotificationSent?: NotificationSentUncheckedCreateNestedManyWithoutNotificationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    NotificationSent?: NotificationSentUpdateManyWithoutNotificationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    NotificationSent?: NotificationSentUncheckedUpdateManyWithoutNotificationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    title: string
    content: string
    url: string
    type: NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentCreateInput = {
    isRead?: boolean
    readTime?: Date | string | null
    notification: NotificationCreateNestedOneWithoutNotificationSentInput
    recipent: UserCreateNestedOneWithoutNotificationSentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentUncheckedCreateInput = {
    id?: number
    notificationId: number
    recipentId: number
    isRead?: boolean
    readTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentUpdateInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: NotificationUpdateOneRequiredWithoutNotificationSentNestedInput
    recipent?: UserUpdateOneRequiredWithoutNotificationSentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    recipentId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentCreateManyInput = {
    id?: number
    notificationId: number
    recipentId: number
    isRead?: boolean
    readTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentUpdateManyMutationInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    recipentId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type NotificationSentListRelationFilter = {
    every?: NotificationSentWhereInput
    some?: NotificationSentWhereInput
    none?: NotificationSentWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationSentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    active?: SortOrder
    verifyEmail?: SortOrder
    verifyContact?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    active?: SortOrder
    verifyEmail?: SortOrder
    verifyContact?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    active?: SortOrder
    verifyEmail?: SortOrder
    verifyContact?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    district?: SortOrder
    city?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    deviceId?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    deviceId?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    deviceId?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type CategoriesOnProductsListRelationFilter = {
    every?: CategoriesOnProductsWhereInput
    some?: CategoriesOnProductsWhereInput
    none?: CategoriesOnProductsWhereInput
  }

  export type ProductSnapshotListRelationFilter = {
    every?: ProductSnapshotWhereInput
    some?: ProductSnapshotWhereInput
    none?: ProductSnapshotWhereInput
  }

  export type ProductsOnCartListRelationFilter = {
    every?: ProductsOnCartWhereInput
    some?: ProductsOnCartWhereInput
    none?: ProductsOnCartWhereInput
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type ProductColorListRelationFilter = {
    every?: ProductColorWhereInput
    some?: ProductColorWhereInput
    none?: ProductColorWhereInput
  }

  export type BrandRelationFilter = {
    is?: BrandWhereInput | null
    isNot?: BrandWhereInput | null
  }

  export type CategoriesOnProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOnCartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductColorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    qty?: SortOrder
    avgRating?: SortOrder
    brandId?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    qty?: SortOrder
    avgRating?: SortOrder
    brandId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    qty?: SortOrder
    avgRating?: SortOrder
    brandId?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    qty?: SortOrder
    avgRating?: SortOrder
    brandId?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    qty?: SortOrder
    avgRating?: SortOrder
    brandId?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductColorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    images?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductColorAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductColorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductColorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductColorSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expires?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expires?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expires?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
  }

  export type ProductSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    orderId?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoriesOnProductsProductIdCategoryIdCompoundUniqueInput = {
    productId: number
    categoryId: number
  }

  export type CategoriesOnProductsCountOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesOnProductsAvgOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesOnProductsMaxOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesOnProductsMinOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesOnProductsSumOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumRatingFilter = {
    equals?: Rating
    in?: Enumerable<Rating>
    notIn?: Enumerable<Rating>
    not?: NestedEnumRatingFilter | Rating
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type EnumRatingWithAggregatesFilter = {
    equals?: Rating
    in?: Enumerable<Rating>
    notIn?: Enumerable<Rating>
    not?: NestedEnumRatingWithAggregatesFilter | Rating
    _count?: NestedIntFilter
    _min?: NestedEnumRatingFilter
    _max?: NestedEnumRatingFilter
  }

  export type EnumOrderStatusFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusFilter | OrderStatus
  }

  export type PaymentRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type ShippingMethodRelationFilter = {
    is?: ShippingMethodWhereInput
    isNot?: ShippingMethodWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderDetailId?: SortOrder
    orderStatus?: SortOrder
    userId?: SortOrder
    paymentsId?: SortOrder
    shippingMethodId?: SortOrder
    shippingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    orderDetailId?: SortOrder
    userId?: SortOrder
    paymentsId?: SortOrder
    shippingMethodId?: SortOrder
    shippingAddressId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderDetailId?: SortOrder
    orderStatus?: SortOrder
    userId?: SortOrder
    paymentsId?: SortOrder
    shippingMethodId?: SortOrder
    shippingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderDetailId?: SortOrder
    orderStatus?: SortOrder
    userId?: SortOrder
    paymentsId?: SortOrder
    shippingMethodId?: SortOrder
    shippingAddressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    orderDetailId?: SortOrder
    userId?: SortOrder
    paymentsId?: SortOrder
    shippingMethodId?: SortOrder
    shippingAddressId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusWithAggregatesFilter | OrderStatus
    _count?: NestedIntFilter
    _min?: NestedEnumOrderStatusFilter
    _max?: NestedEnumOrderStatusFilter
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CartRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type ProductsOnCartProductIdCardIdCompoundUniqueInput = {
    productId: number
    cardId: number
  }

  export type ProductsOnCartCountOrderByAggregateInput = {
    productId?: SortOrder
    cardId?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsOnCartAvgOrderByAggregateInput = {
    productId?: SortOrder
    cardId?: SortOrder
    qty?: SortOrder
  }

  export type ProductsOnCartMaxOrderByAggregateInput = {
    productId?: SortOrder
    cardId?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsOnCartMinOrderByAggregateInput = {
    productId?: SortOrder
    cardId?: SortOrder
    qty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsOnCartSumOrderByAggregateInput = {
    productId?: SortOrder
    cardId?: SortOrder
    qty?: SortOrder
  }

  export type ShippingMethodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShippingMethodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShippingMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShippingMethodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShippingMethodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPaymentTypeFilter = {
    equals?: PaymentType
    in?: Enumerable<PaymentType>
    notIn?: Enumerable<PaymentType>
    not?: NestedEnumPaymentTypeFilter | PaymentType
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter = {
    equals?: PaymentType
    in?: Enumerable<PaymentType>
    notIn?: Enumerable<PaymentType>
    not?: NestedEnumPaymentTypeWithAggregatesFilter | PaymentType
    _count?: NestedIntFilter
    _min?: NestedEnumPaymentTypeFilter
    _max?: NestedEnumPaymentTypeFilter
  }

  export type EnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NotificationRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type NotificationSentCountOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    recipentId?: SortOrder
    isRead?: SortOrder
    readTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSentAvgOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    recipentId?: SortOrder
  }

  export type NotificationSentMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    recipentId?: SortOrder
    isRead?: SortOrder
    readTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSentMinOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    recipentId?: SortOrder
    isRead?: SortOrder
    readTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSentSumOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    recipentId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type AddressCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<OrderCreateWithoutUserInput>, Enumerable<OrderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutUserInput>
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type NotificationSentCreateNestedManyWithoutRecipentInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutRecipentInput>, Enumerable<NotificationSentUncheckedCreateWithoutRecipentInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutRecipentInput>
    createMany?: NotificationSentCreateManyRecipentInputEnvelope
    connect?: Enumerable<NotificationSentWhereUniqueInput>
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<OrderCreateWithoutUserInput>, Enumerable<OrderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutUserInput>
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type NotificationSentUncheckedCreateNestedManyWithoutRecipentInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutRecipentInput>, Enumerable<NotificationSentUncheckedCreateWithoutRecipentInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutRecipentInput>
    createMany?: NotificationSentCreateManyRecipentInputEnvelope
    connect?: Enumerable<NotificationSentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutUserInput>, Enumerable<OrderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutUserInput>
    createMany?: OrderCreateManyUserInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type NotificationSentUpdateManyWithoutRecipentNestedInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutRecipentInput>, Enumerable<NotificationSentUncheckedCreateWithoutRecipentInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutRecipentInput>
    upsert?: Enumerable<NotificationSentUpsertWithWhereUniqueWithoutRecipentInput>
    createMany?: NotificationSentCreateManyRecipentInputEnvelope
    set?: Enumerable<NotificationSentWhereUniqueInput>
    disconnect?: Enumerable<NotificationSentWhereUniqueInput>
    delete?: Enumerable<NotificationSentWhereUniqueInput>
    connect?: Enumerable<NotificationSentWhereUniqueInput>
    update?: Enumerable<NotificationSentUpdateWithWhereUniqueWithoutRecipentInput>
    updateMany?: Enumerable<NotificationSentUpdateManyWithWhereWithoutRecipentInput>
    deleteMany?: Enumerable<NotificationSentScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutUserInput>, Enumerable<ReviewUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutUserInput>, Enumerable<OrderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutUserInput>
    createMany?: OrderCreateManyUserInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type NotificationSentUncheckedUpdateManyWithoutRecipentNestedInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutRecipentInput>, Enumerable<NotificationSentUncheckedCreateWithoutRecipentInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutRecipentInput>
    upsert?: Enumerable<NotificationSentUpsertWithWhereUniqueWithoutRecipentInput>
    createMany?: NotificationSentCreateManyRecipentInputEnvelope
    set?: Enumerable<NotificationSentWhereUniqueInput>
    disconnect?: Enumerable<NotificationSentWhereUniqueInput>
    delete?: Enumerable<NotificationSentWhereUniqueInput>
    connect?: Enumerable<NotificationSentWhereUniqueInput>
    update?: Enumerable<NotificationSentUpdateWithWhereUniqueWithoutRecipentInput>
    updateMany?: Enumerable<NotificationSentUpdateManyWithWhereWithoutRecipentInput>
    deleteMany?: Enumerable<NotificationSentScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<UserCreateWithoutAddressInput>, Enumerable<UserUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAddressInput>
    createMany?: UserCreateManyAddressInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type OrderCreateNestedManyWithoutShippingAddressInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingAddressInput>, Enumerable<OrderUncheckedCreateWithoutShippingAddressInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingAddressInput>
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<UserCreateWithoutAddressInput>, Enumerable<UserUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAddressInput>
    createMany?: UserCreateManyAddressInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutShippingAddressInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingAddressInput>, Enumerable<OrderUncheckedCreateWithoutShippingAddressInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingAddressInput>
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type UserUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAddressInput>, Enumerable<UserUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: UserCreateManyAddressInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type OrderUpdateManyWithoutShippingAddressNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingAddressInput>, Enumerable<OrderUncheckedCreateWithoutShippingAddressInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingAddressInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutShippingAddressInput>
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutShippingAddressInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutShippingAddressInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAddressInput>, Enumerable<UserUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: UserCreateManyAddressInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutShippingAddressNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingAddressInput>, Enumerable<OrderUncheckedCreateWithoutShippingAddressInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingAddressInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutShippingAddressInput>
    createMany?: OrderCreateManyShippingAddressInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutShippingAddressInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutShippingAddressInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesOnProductsCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutProductInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutProductInput>
    createMany?: CategoriesOnProductsCreateManyProductInputEnvelope
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type ProductSnapshotCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutProductInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutProductInput>
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
  }

  export type ProductsOnCartCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutProductInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutProductInput>
    createMany?: ProductsOnCartCreateManyProductInputEnvelope
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
  }

  export type CouponCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CouponCreateWithoutProductInput>, Enumerable<CouponUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutProductInput>
    createMany?: CouponCreateManyProductInputEnvelope
    connect?: Enumerable<CouponWhereUniqueInput>
  }

  export type ProductColorCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductColorCreateWithoutProductInput>, Enumerable<ProductColorUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductColorCreateOrConnectWithoutProductInput>
    createMany?: ProductColorCreateManyProductInputEnvelope
    connect?: Enumerable<ProductColorWhereUniqueInput>
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutProductInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutProductInput>
    createMany?: CategoriesOnProductsCreateManyProductInputEnvelope
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type ProductSnapshotUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutProductInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutProductInput>
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
  }

  export type ProductsOnCartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutProductInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutProductInput>
    createMany?: ProductsOnCartCreateManyProductInputEnvelope
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
  }

  export type CouponUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<CouponCreateWithoutProductInput>, Enumerable<CouponUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutProductInput>
    createMany?: CouponCreateManyProductInputEnvelope
    connect?: Enumerable<CouponWhereUniqueInput>
  }

  export type ProductColorUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductColorCreateWithoutProductInput>, Enumerable<ProductColorUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductColorCreateOrConnectWithoutProductInput>
    createMany?: ProductColorCreateManyProductInputEnvelope
    connect?: Enumerable<ProductColorWhereUniqueInput>
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesOnProductsUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutProductInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CategoriesOnProductsCreateManyProductInputEnvelope
    set?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    disconnect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    delete?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    update?: Enumerable<CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CategoriesOnProductsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CategoriesOnProductsScalarWhereInput>
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type ProductSnapshotUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutProductInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductSnapshotUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    set?: Enumerable<ProductSnapshotWhereUniqueInput>
    disconnect?: Enumerable<ProductSnapshotWhereUniqueInput>
    delete?: Enumerable<ProductSnapshotWhereUniqueInput>
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
    update?: Enumerable<ProductSnapshotUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductSnapshotUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductSnapshotScalarWhereInput>
  }

  export type ProductsOnCartUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutProductInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductsOnCartUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductsOnCartCreateManyProductInputEnvelope
    set?: Enumerable<ProductsOnCartWhereUniqueInput>
    disconnect?: Enumerable<ProductsOnCartWhereUniqueInput>
    delete?: Enumerable<ProductsOnCartWhereUniqueInput>
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
    update?: Enumerable<ProductsOnCartUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductsOnCartUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductsOnCartScalarWhereInput>
  }

  export type CouponUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CouponCreateWithoutProductInput>, Enumerable<CouponUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CouponUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CouponCreateManyProductInputEnvelope
    set?: Enumerable<CouponWhereUniqueInput>
    disconnect?: Enumerable<CouponWhereUniqueInput>
    delete?: Enumerable<CouponWhereUniqueInput>
    connect?: Enumerable<CouponWhereUniqueInput>
    update?: Enumerable<CouponUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CouponUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CouponScalarWhereInput>
  }

  export type ProductColorUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductColorCreateWithoutProductInput>, Enumerable<ProductColorUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductColorCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductColorUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductColorCreateManyProductInputEnvelope
    set?: Enumerable<ProductColorWhereUniqueInput>
    disconnect?: Enumerable<ProductColorWhereUniqueInput>
    delete?: Enumerable<ProductColorWhereUniqueInput>
    connect?: Enumerable<ProductColorWhereUniqueInput>
    update?: Enumerable<ProductColorUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductColorUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductColorScalarWhereInput>
  }

  export type BrandUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    disconnect?: boolean
    delete?: boolean
    connect?: BrandWhereUniqueInput
    update?: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutProductInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CategoriesOnProductsCreateManyProductInputEnvelope
    set?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    disconnect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    delete?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    update?: Enumerable<CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CategoriesOnProductsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CategoriesOnProductsScalarWhereInput>
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutProductInput>, Enumerable<ReviewUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutProductInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductSnapshotUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    set?: Enumerable<ProductSnapshotWhereUniqueInput>
    disconnect?: Enumerable<ProductSnapshotWhereUniqueInput>
    delete?: Enumerable<ProductSnapshotWhereUniqueInput>
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
    update?: Enumerable<ProductSnapshotUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductSnapshotUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductSnapshotScalarWhereInput>
  }

  export type ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutProductInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductsOnCartUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductsOnCartCreateManyProductInputEnvelope
    set?: Enumerable<ProductsOnCartWhereUniqueInput>
    disconnect?: Enumerable<ProductsOnCartWhereUniqueInput>
    delete?: Enumerable<ProductsOnCartWhereUniqueInput>
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
    update?: Enumerable<ProductsOnCartUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductsOnCartUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductsOnCartScalarWhereInput>
  }

  export type CouponUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<CouponCreateWithoutProductInput>, Enumerable<CouponUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<CouponCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<CouponUpsertWithWhereUniqueWithoutProductInput>
    createMany?: CouponCreateManyProductInputEnvelope
    set?: Enumerable<CouponWhereUniqueInput>
    disconnect?: Enumerable<CouponWhereUniqueInput>
    delete?: Enumerable<CouponWhereUniqueInput>
    connect?: Enumerable<CouponWhereUniqueInput>
    update?: Enumerable<CouponUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<CouponUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<CouponScalarWhereInput>
  }

  export type ProductColorUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductColorCreateWithoutProductInput>, Enumerable<ProductColorUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductColorCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductColorUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductColorCreateManyProductInputEnvelope
    set?: Enumerable<ProductColorWhereUniqueInput>
    disconnect?: Enumerable<ProductColorWhereUniqueInput>
    delete?: Enumerable<ProductColorWhereUniqueInput>
    connect?: Enumerable<ProductColorWhereUniqueInput>
    update?: Enumerable<ProductColorUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductColorUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductColorScalarWhereInput>
  }

  export type ProductColorCreateimagesInput = {
    set: Enumerable<string>
  }

  export type ProductCreateNestedOneWithoutColorsInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductColorUpdateimagesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ProductUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    upsert?: ProductUpsertWithoutColorsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductCreateNestedOneWithoutCouponsInput = {
    create?: XOR<ProductCreateWithoutCouponsInput, ProductUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCouponsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneWithoutCouponsNestedInput = {
    create?: XOR<ProductCreateWithoutCouponsInput, ProductUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCouponsInput
    upsert?: ProductUpsertWithoutCouponsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutCouponsInput, ProductUncheckedUpdateWithoutCouponsInput>
  }

  export type ProductCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSnapshotsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutProductSnapshotsInput = {
    create?: XOR<OrderCreateWithoutProductSnapshotsInput, OrderUncheckedCreateWithoutProductSnapshotsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductSnapshotsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSnapshotsInput
    upsert?: ProductUpsertWithoutSnapshotsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutSnapshotsInput, ProductUncheckedUpdateWithoutSnapshotsInput>
  }

  export type OrderUpdateOneRequiredWithoutProductSnapshotsNestedInput = {
    create?: XOR<OrderCreateWithoutProductSnapshotsInput, OrderUncheckedCreateWithoutProductSnapshotsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductSnapshotsInput
    upsert?: OrderUpsertWithoutProductSnapshotsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<OrderUpdateWithoutProductSnapshotsInput, OrderUncheckedUpdateWithoutProductSnapshotsInput>
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CategoriesOnProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutCategoryInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutCategoryInput>
    createMany?: CategoriesOnProductsCreateManyCategoryInputEnvelope
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
  }

  export type CategoriesOnProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutCategoryInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutCategoryInput>
    createMany?: CategoriesOnProductsCreateManyCategoryInputEnvelope
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
  }

  export type CategoriesOnProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutCategoryInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: CategoriesOnProductsCreateManyCategoryInputEnvelope
    set?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    disconnect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    delete?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    update?: Enumerable<CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<CategoriesOnProductsUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<CategoriesOnProductsScalarWhereInput>
  }

  export type CategoriesOnProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<CategoriesOnProductsCreateWithoutCategoryInput>, Enumerable<CategoriesOnProductsUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<CategoriesOnProductsCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: CategoriesOnProductsCreateManyCategoryInputEnvelope
    set?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    disconnect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    delete?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    connect?: Enumerable<CategoriesOnProductsWhereUniqueInput>
    update?: Enumerable<CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<CategoriesOnProductsUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<CategoriesOnProductsScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput
    upsert?: ProductUpsertWithoutCategoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumRatingFieldUpdateOperationsInput = {
    set?: Rating
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type AddressCreateNestedOneWithoutOrderInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    connect?: AddressWhereUniqueInput
  }

  export type ProductSnapshotCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutOrderInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutOrderInput>
    createMany?: ProductSnapshotCreateManyOrderInputEnvelope
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PaymentCreateWithoutOrdersInput, PaymentUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrdersInput
    connect?: PaymentWhereUniqueInput
  }

  export type ShippingMethodCreateNestedOneWithoutOrderInput = {
    create?: XOR<ShippingMethodCreateWithoutOrderInput, ShippingMethodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutOrderInput
    connect?: ShippingMethodWhereUniqueInput
  }

  export type ProductSnapshotUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutOrderInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutOrderInput>
    createMany?: ProductSnapshotCreateManyOrderInputEnvelope
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: OrderStatus
  }

  export type AddressUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput
    upsert?: AddressUpsertWithoutOrderInput
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type ProductSnapshotUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutOrderInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<ProductSnapshotUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: ProductSnapshotCreateManyOrderInputEnvelope
    set?: Enumerable<ProductSnapshotWhereUniqueInput>
    disconnect?: Enumerable<ProductSnapshotWhereUniqueInput>
    delete?: Enumerable<ProductSnapshotWhereUniqueInput>
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
    update?: Enumerable<ProductSnapshotUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<ProductSnapshotUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<ProductSnapshotScalarWhereInput>
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<PaymentCreateWithoutOrdersInput, PaymentUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrdersInput
    upsert?: PaymentUpsertWithoutOrdersInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<PaymentUpdateWithoutOrdersInput, PaymentUncheckedUpdateWithoutOrdersInput>
  }

  export type ShippingMethodUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<ShippingMethodCreateWithoutOrderInput, ShippingMethodUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShippingMethodCreateOrConnectWithoutOrderInput
    upsert?: ShippingMethodUpsertWithoutOrderInput
    connect?: ShippingMethodWhereUniqueInput
    update?: XOR<ShippingMethodUpdateWithoutOrderInput, ShippingMethodUncheckedUpdateWithoutOrderInput>
  }

  export type ProductSnapshotUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<ProductSnapshotCreateWithoutOrderInput>, Enumerable<ProductSnapshotUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<ProductSnapshotCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<ProductSnapshotUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: ProductSnapshotCreateManyOrderInputEnvelope
    set?: Enumerable<ProductSnapshotWhereUniqueInput>
    disconnect?: Enumerable<ProductSnapshotWhereUniqueInput>
    delete?: Enumerable<ProductSnapshotWhereUniqueInput>
    connect?: Enumerable<ProductSnapshotWhereUniqueInput>
    update?: Enumerable<ProductSnapshotUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<ProductSnapshotUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<ProductSnapshotScalarWhereInput>
  }

  export type ProductsOnCartCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutCartInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutCartInput>
    createMany?: ProductsOnCartCreateManyCartInputEnvelope
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
  }

  export type ProductsOnCartUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutCartInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutCartInput>
    createMany?: ProductsOnCartCreateManyCartInputEnvelope
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
  }

  export type ProductsOnCartUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutCartInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<ProductsOnCartUpsertWithWhereUniqueWithoutCartInput>
    createMany?: ProductsOnCartCreateManyCartInputEnvelope
    set?: Enumerable<ProductsOnCartWhereUniqueInput>
    disconnect?: Enumerable<ProductsOnCartWhereUniqueInput>
    delete?: Enumerable<ProductsOnCartWhereUniqueInput>
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
    update?: Enumerable<ProductsOnCartUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<ProductsOnCartUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<ProductsOnCartScalarWhereInput>
  }

  export type ProductsOnCartUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<Enumerable<ProductsOnCartCreateWithoutCartInput>, Enumerable<ProductsOnCartUncheckedCreateWithoutCartInput>>
    connectOrCreate?: Enumerable<ProductsOnCartCreateOrConnectWithoutCartInput>
    upsert?: Enumerable<ProductsOnCartUpsertWithWhereUniqueWithoutCartInput>
    createMany?: ProductsOnCartCreateManyCartInputEnvelope
    set?: Enumerable<ProductsOnCartWhereUniqueInput>
    disconnect?: Enumerable<ProductsOnCartWhereUniqueInput>
    delete?: Enumerable<ProductsOnCartWhereUniqueInput>
    connect?: Enumerable<ProductsOnCartWhereUniqueInput>
    update?: Enumerable<ProductsOnCartUpdateWithWhereUniqueWithoutCartInput>
    updateMany?: Enumerable<ProductsOnCartUpdateManyWithWhereWithoutCartInput>
    deleteMany?: Enumerable<ProductsOnCartScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutProductsOnCartInput = {
    create?: XOR<ProductCreateWithoutProductsOnCartInput, ProductUncheckedCreateWithoutProductsOnCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductsOnCartInput
    connect?: ProductWhereUniqueInput
  }

  export type CartCreateNestedOneWithoutProductsOnCartInput = {
    create?: XOR<CartCreateWithoutProductsOnCartInput, CartUncheckedCreateWithoutProductsOnCartInput>
    connectOrCreate?: CartCreateOrConnectWithoutProductsOnCartInput
    connect?: CartWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductsOnCartNestedInput = {
    create?: XOR<ProductCreateWithoutProductsOnCartInput, ProductUncheckedCreateWithoutProductsOnCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductsOnCartInput
    upsert?: ProductUpsertWithoutProductsOnCartInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutProductsOnCartInput, ProductUncheckedUpdateWithoutProductsOnCartInput>
  }

  export type CartUpdateOneRequiredWithoutProductsOnCartNestedInput = {
    create?: XOR<CartCreateWithoutProductsOnCartInput, CartUncheckedCreateWithoutProductsOnCartInput>
    connectOrCreate?: CartCreateOrConnectWithoutProductsOnCartInput
    upsert?: CartUpsertWithoutProductsOnCartInput
    connect?: CartWhereUniqueInput
    update?: XOR<CartUpdateWithoutProductsOnCartInput, CartUncheckedUpdateWithoutProductsOnCartInput>
  }

  export type OrderCreateNestedManyWithoutShippingMethodInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingMethodInput>, Enumerable<OrderUncheckedCreateWithoutShippingMethodInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingMethodInput>
    createMany?: OrderCreateManyShippingMethodInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutShippingMethodInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingMethodInput>, Enumerable<OrderUncheckedCreateWithoutShippingMethodInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingMethodInput>
    createMany?: OrderCreateManyShippingMethodInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUpdateManyWithoutShippingMethodNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingMethodInput>, Enumerable<OrderUncheckedCreateWithoutShippingMethodInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingMethodInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutShippingMethodInput>
    createMany?: OrderCreateManyShippingMethodInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutShippingMethodInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutShippingMethodInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutShippingMethodNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutShippingMethodInput>, Enumerable<OrderUncheckedCreateWithoutShippingMethodInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutShippingMethodInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutShippingMethodInput>
    createMany?: OrderCreateManyShippingMethodInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutShippingMethodInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutShippingMethodInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderCreateNestedManyWithoutPaymentsInput = {
    create?: XOR<Enumerable<OrderCreateWithoutPaymentsInput>, Enumerable<OrderUncheckedCreateWithoutPaymentsInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutPaymentsInput>
    createMany?: OrderCreateManyPaymentsInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutPaymentsInput = {
    create?: XOR<Enumerable<OrderCreateWithoutPaymentsInput>, Enumerable<OrderUncheckedCreateWithoutPaymentsInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutPaymentsInput>
    createMany?: OrderCreateManyPaymentsInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: PaymentType
  }

  export type OrderUpdateManyWithoutPaymentsNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutPaymentsInput>, Enumerable<OrderUncheckedCreateWithoutPaymentsInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutPaymentsInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutPaymentsInput>
    createMany?: OrderCreateManyPaymentsInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutPaymentsInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutPaymentsInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutPaymentsNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutPaymentsInput>, Enumerable<OrderUncheckedCreateWithoutPaymentsInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutPaymentsInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutPaymentsInput>
    createMany?: OrderCreateManyPaymentsInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutPaymentsInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutPaymentsInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type NotificationSentCreateNestedManyWithoutNotificationInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutNotificationInput>, Enumerable<NotificationSentUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutNotificationInput>
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    connect?: Enumerable<NotificationSentWhereUniqueInput>
  }

  export type NotificationSentUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutNotificationInput>, Enumerable<NotificationSentUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutNotificationInput>
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    connect?: Enumerable<NotificationSentWhereUniqueInput>
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: NotificationType
  }

  export type NotificationSentUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutNotificationInput>, Enumerable<NotificationSentUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutNotificationInput>
    upsert?: Enumerable<NotificationSentUpsertWithWhereUniqueWithoutNotificationInput>
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    set?: Enumerable<NotificationSentWhereUniqueInput>
    disconnect?: Enumerable<NotificationSentWhereUniqueInput>
    delete?: Enumerable<NotificationSentWhereUniqueInput>
    connect?: Enumerable<NotificationSentWhereUniqueInput>
    update?: Enumerable<NotificationSentUpdateWithWhereUniqueWithoutNotificationInput>
    updateMany?: Enumerable<NotificationSentUpdateManyWithWhereWithoutNotificationInput>
    deleteMany?: Enumerable<NotificationSentScalarWhereInput>
  }

  export type NotificationSentUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<Enumerable<NotificationSentCreateWithoutNotificationInput>, Enumerable<NotificationSentUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationSentCreateOrConnectWithoutNotificationInput>
    upsert?: Enumerable<NotificationSentUpsertWithWhereUniqueWithoutNotificationInput>
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    set?: Enumerable<NotificationSentWhereUniqueInput>
    disconnect?: Enumerable<NotificationSentWhereUniqueInput>
    delete?: Enumerable<NotificationSentWhereUniqueInput>
    connect?: Enumerable<NotificationSentWhereUniqueInput>
    update?: Enumerable<NotificationSentUpdateWithWhereUniqueWithoutNotificationInput>
    updateMany?: Enumerable<NotificationSentUpdateManyWithWhereWithoutNotificationInput>
    deleteMany?: Enumerable<NotificationSentScalarWhereInput>
  }

  export type NotificationCreateNestedOneWithoutNotificationSentInput = {
    create?: XOR<NotificationCreateWithoutNotificationSentInput, NotificationUncheckedCreateWithoutNotificationSentInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationSentInput
    connect?: NotificationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationSentInput = {
    create?: XOR<UserCreateWithoutNotificationSentInput, UserUncheckedCreateWithoutNotificationSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSentInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NotificationUpdateOneRequiredWithoutNotificationSentNestedInput = {
    create?: XOR<NotificationCreateWithoutNotificationSentInput, NotificationUncheckedCreateWithoutNotificationSentInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutNotificationSentInput
    upsert?: NotificationUpsertWithoutNotificationSentInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<NotificationUpdateWithoutNotificationSentInput, NotificationUncheckedUpdateWithoutNotificationSentInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationSentNestedInput = {
    create?: XOR<UserCreateWithoutNotificationSentInput, UserUncheckedCreateWithoutNotificationSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSentInput
    upsert?: UserUpsertWithoutNotificationSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotificationSentInput, UserUncheckedUpdateWithoutNotificationSentInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumRatingFilter = {
    equals?: Rating
    in?: Enumerable<Rating>
    notIn?: Enumerable<Rating>
    not?: NestedEnumRatingFilter | Rating
  }

  export type NestedEnumRatingWithAggregatesFilter = {
    equals?: Rating
    in?: Enumerable<Rating>
    notIn?: Enumerable<Rating>
    not?: NestedEnumRatingWithAggregatesFilter | Rating
    _count?: NestedIntFilter
    _min?: NestedEnumRatingFilter
    _max?: NestedEnumRatingFilter
  }

  export type NestedEnumOrderStatusFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusFilter | OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter = {
    equals?: OrderStatus
    in?: Enumerable<OrderStatus>
    notIn?: Enumerable<OrderStatus>
    not?: NestedEnumOrderStatusWithAggregatesFilter | OrderStatus
    _count?: NestedIntFilter
    _min?: NestedEnumOrderStatusFilter
    _max?: NestedEnumOrderStatusFilter
  }

  export type NestedEnumPaymentTypeFilter = {
    equals?: PaymentType
    in?: Enumerable<PaymentType>
    notIn?: Enumerable<PaymentType>
    not?: NestedEnumPaymentTypeFilter | PaymentType
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter = {
    equals?: PaymentType
    in?: Enumerable<PaymentType>
    notIn?: Enumerable<PaymentType>
    not?: NestedEnumPaymentTypeWithAggregatesFilter | PaymentType
    _count?: NestedIntFilter
    _min?: NestedEnumPaymentTypeFilter
    _max?: NestedEnumPaymentTypeFilter
  }

  export type NestedEnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type AddressCreateWithoutUserInput = {
    street?: string | null
    district?: string | null
    city?: string | null
    order?: OrderCreateNestedManyWithoutShippingAddressInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    street?: string | null
    district?: string | null
    city?: string | null
    order?: OrderUncheckedCreateNestedManyWithoutShippingAddressInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateWithoutUserInput = {
    content: string
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    productId: number
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: Enumerable<ReviewCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    orderDetailId: number
    orderStatus: OrderStatus
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    productSnapshots?: ProductSnapshotCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
    Payments: PaymentCreateNestedOneWithoutOrdersInput
    shippingMethod: ShippingMethodCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    paymentsId: number
    shippingMethodId: number
    shippingAddressId: number
    productSnapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: Enumerable<OrderCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    refreshToken: string
    deviceId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    refreshToken: string
    deviceId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NotificationSentCreateWithoutRecipentInput = {
    isRead?: boolean
    readTime?: Date | string | null
    notification: NotificationCreateNestedOneWithoutNotificationSentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentUncheckedCreateWithoutRecipentInput = {
    id?: number
    notificationId: number
    isRead?: boolean
    readTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentCreateOrConnectWithoutRecipentInput = {
    where: NotificationSentWhereUniqueInput
    create: XOR<NotificationSentCreateWithoutRecipentInput, NotificationSentUncheckedCreateWithoutRecipentInput>
  }

  export type NotificationSentCreateManyRecipentInputEnvelope = {
    data: Enumerable<NotificationSentCreateManyRecipentInput>
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutUserInput = {
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithoutUserInput = {
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateManyWithoutShippingAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUncheckedUpdateManyWithoutShippingAddressNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: Enumerable<ReviewScalarWhereInput>
    OR?: Enumerable<ReviewScalarWhereInput>
    NOT?: Enumerable<ReviewScalarWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    userId?: IntFilter | number
    productId?: IntFilter | number
    rating?: EnumRatingFilter | Rating
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderScalarWhereInput = {
    AND?: Enumerable<OrderScalarWhereInput>
    OR?: Enumerable<OrderScalarWhereInput>
    NOT?: Enumerable<OrderScalarWhereInput>
    id?: IntFilter | number
    orderDetailId?: IntFilter | number
    orderStatus?: EnumOrderStatusFilter | OrderStatus
    userId?: IntNullableFilter | number | null
    paymentsId?: IntFilter | number
    shippingMethodId?: IntFilter | number
    shippingAddressId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: IntFilter | number
    refreshToken?: StringFilter | string
    deviceId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    userId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type NotificationSentUpsertWithWhereUniqueWithoutRecipentInput = {
    where: NotificationSentWhereUniqueInput
    update: XOR<NotificationSentUpdateWithoutRecipentInput, NotificationSentUncheckedUpdateWithoutRecipentInput>
    create: XOR<NotificationSentCreateWithoutRecipentInput, NotificationSentUncheckedCreateWithoutRecipentInput>
  }

  export type NotificationSentUpdateWithWhereUniqueWithoutRecipentInput = {
    where: NotificationSentWhereUniqueInput
    data: XOR<NotificationSentUpdateWithoutRecipentInput, NotificationSentUncheckedUpdateWithoutRecipentInput>
  }

  export type NotificationSentUpdateManyWithWhereWithoutRecipentInput = {
    where: NotificationSentScalarWhereInput
    data: XOR<NotificationSentUpdateManyMutationInput, NotificationSentUncheckedUpdateManyWithoutNotificationSentInput>
  }

  export type NotificationSentScalarWhereInput = {
    AND?: Enumerable<NotificationSentScalarWhereInput>
    OR?: Enumerable<NotificationSentScalarWhereInput>
    NOT?: Enumerable<NotificationSentScalarWhereInput>
    id?: IntFilter | number
    notificationId?: IntFilter | number
    recipentId?: IntFilter | number
    isRead?: BoolFilter | boolean
    readTime?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutAddressInput = {
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    reviews?: ReviewCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentUncheckedCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserCreateManyAddressInputEnvelope = {
    data: Enumerable<UserCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutShippingAddressInput = {
    orderDetailId: number
    orderStatus: OrderStatus
    productSnapshots?: ProductSnapshotCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutOrdersInput
    Payments: PaymentCreateNestedOneWithoutOrdersInput
    shippingMethod: ShippingMethodCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShippingAddressInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    paymentsId: number
    shippingMethodId: number
    productSnapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput>
  }

  export type OrderCreateManyShippingAddressInputEnvelope = {
    data: Enumerable<OrderCreateManyShippingAddressInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAddressInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAddressInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateManyWithWhereWithoutAddressInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    email?: StringFilter | string
    role?: EnumRoleFilter | Role
    password?: StringFilter | string
    active?: BoolFilter | boolean
    verifyEmail?: BoolFilter | boolean
    verifyContact?: BoolFilter | boolean
    name?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    phoneNumber?: StringFilter | string
    userId?: IntFilter | number
    addressId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShippingAddressInput, OrderUncheckedUpdateWithoutShippingAddressInput>
    create: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShippingAddressInput, OrderUncheckedUpdateWithoutShippingAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutShippingAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserCreateWithoutSessionsInput = {
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    address: AddressCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    addressId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentUncheckedCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUncheckedUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsCreateWithoutProductInput = {
    category: CategoryCreateNestedOneWithoutProductsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsUncheckedCreateWithoutProductInput = {
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsCreateOrConnectWithoutProductInput = {
    where: CategoriesOnProductsWhereUniqueInput
    create: XOR<CategoriesOnProductsCreateWithoutProductInput, CategoriesOnProductsUncheckedCreateWithoutProductInput>
  }

  export type CategoriesOnProductsCreateManyProductInputEnvelope = {
    data: Enumerable<CategoriesOnProductsCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutProductInput = {
    content: string
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: number
    content: string
    userId: number
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: Enumerable<ReviewCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductSnapshotCreateWithoutProductInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutProductSnapshotsInput
  }

  export type ProductSnapshotUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSnapshotCreateOrConnectWithoutProductInput = {
    where: ProductSnapshotWhereUniqueInput
    create: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput>
  }

  export type ProductSnapshotCreateManyProductInputEnvelope = {
    data: Enumerable<ProductSnapshotCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductsOnCartCreateWithoutProductInput = {
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cart: CartCreateNestedOneWithoutProductsOnCartInput
  }

  export type ProductsOnCartUncheckedCreateWithoutProductInput = {
    cardId: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsOnCartCreateOrConnectWithoutProductInput = {
    where: ProductsOnCartWhereUniqueInput
    create: XOR<ProductsOnCartCreateWithoutProductInput, ProductsOnCartUncheckedCreateWithoutProductInput>
  }

  export type ProductsOnCartCreateManyProductInputEnvelope = {
    data: Enumerable<ProductsOnCartCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type CouponCreateWithoutProductInput = {
    code: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUncheckedCreateWithoutProductInput = {
    id?: number
    code: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateOrConnectWithoutProductInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutProductInput, CouponUncheckedCreateWithoutProductInput>
  }

  export type CouponCreateManyProductInputEnvelope = {
    data: Enumerable<CouponCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductColorCreateWithoutProductInput = {
    name: string
    color: string
    images?: ProductColorCreateimagesInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductColorUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    color: string
    images?: ProductColorCreateimagesInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductColorCreateOrConnectWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    create: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput>
  }

  export type ProductColorCreateManyProductInputEnvelope = {
    data: Enumerable<ProductColorCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type BrandCreateWithoutProductsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type CategoriesOnProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: CategoriesOnProductsWhereUniqueInput
    update: XOR<CategoriesOnProductsUpdateWithoutProductInput, CategoriesOnProductsUncheckedUpdateWithoutProductInput>
    create: XOR<CategoriesOnProductsCreateWithoutProductInput, CategoriesOnProductsUncheckedCreateWithoutProductInput>
  }

  export type CategoriesOnProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: CategoriesOnProductsWhereUniqueInput
    data: XOR<CategoriesOnProductsUpdateWithoutProductInput, CategoriesOnProductsUncheckedUpdateWithoutProductInput>
  }

  export type CategoriesOnProductsUpdateManyWithWhereWithoutProductInput = {
    where: CategoriesOnProductsScalarWhereInput
    data: XOR<CategoriesOnProductsUpdateManyMutationInput, CategoriesOnProductsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CategoriesOnProductsScalarWhereInput = {
    AND?: Enumerable<CategoriesOnProductsScalarWhereInput>
    OR?: Enumerable<CategoriesOnProductsScalarWhereInput>
    NOT?: Enumerable<CategoriesOnProductsScalarWhereInput>
    productId?: IntFilter | number
    categoryId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ProductSnapshotUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSnapshotWhereUniqueInput
    update: XOR<ProductSnapshotUpdateWithoutProductInput, ProductSnapshotUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput>
  }

  export type ProductSnapshotUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSnapshotWhereUniqueInput
    data: XOR<ProductSnapshotUpdateWithoutProductInput, ProductSnapshotUncheckedUpdateWithoutProductInput>
  }

  export type ProductSnapshotUpdateManyWithWhereWithoutProductInput = {
    where: ProductSnapshotScalarWhereInput
    data: XOR<ProductSnapshotUpdateManyMutationInput, ProductSnapshotUncheckedUpdateManyWithoutSnapshotsInput>
  }

  export type ProductSnapshotScalarWhereInput = {
    AND?: Enumerable<ProductSnapshotScalarWhereInput>
    OR?: Enumerable<ProductSnapshotScalarWhereInput>
    NOT?: Enumerable<ProductSnapshotScalarWhereInput>
    id?: IntFilter | number
    productId?: IntFilter | number
    orderId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductsOnCartUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductsOnCartWhereUniqueInput
    update: XOR<ProductsOnCartUpdateWithoutProductInput, ProductsOnCartUncheckedUpdateWithoutProductInput>
    create: XOR<ProductsOnCartCreateWithoutProductInput, ProductsOnCartUncheckedCreateWithoutProductInput>
  }

  export type ProductsOnCartUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductsOnCartWhereUniqueInput
    data: XOR<ProductsOnCartUpdateWithoutProductInput, ProductsOnCartUncheckedUpdateWithoutProductInput>
  }

  export type ProductsOnCartUpdateManyWithWhereWithoutProductInput = {
    where: ProductsOnCartScalarWhereInput
    data: XOR<ProductsOnCartUpdateManyMutationInput, ProductsOnCartUncheckedUpdateManyWithoutProductsOnCartInput>
  }

  export type ProductsOnCartScalarWhereInput = {
    AND?: Enumerable<ProductsOnCartScalarWhereInput>
    OR?: Enumerable<ProductsOnCartScalarWhereInput>
    NOT?: Enumerable<ProductsOnCartScalarWhereInput>
    productId?: IntFilter | number
    cardId?: IntFilter | number
    qty?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CouponUpsertWithWhereUniqueWithoutProductInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutProductInput, CouponUncheckedUpdateWithoutProductInput>
    create: XOR<CouponCreateWithoutProductInput, CouponUncheckedCreateWithoutProductInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutProductInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutProductInput, CouponUncheckedUpdateWithoutProductInput>
  }

  export type CouponUpdateManyWithWhereWithoutProductInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutCouponsInput>
  }

  export type CouponScalarWhereInput = {
    AND?: Enumerable<CouponScalarWhereInput>
    OR?: Enumerable<CouponScalarWhereInput>
    NOT?: Enumerable<CouponScalarWhereInput>
    id?: IntFilter | number
    code?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    productId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductColorUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    update: XOR<ProductColorUpdateWithoutProductInput, ProductColorUncheckedUpdateWithoutProductInput>
    create: XOR<ProductColorCreateWithoutProductInput, ProductColorUncheckedCreateWithoutProductInput>
  }

  export type ProductColorUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductColorWhereUniqueInput
    data: XOR<ProductColorUpdateWithoutProductInput, ProductColorUncheckedUpdateWithoutProductInput>
  }

  export type ProductColorUpdateManyWithWhereWithoutProductInput = {
    where: ProductColorScalarWhereInput
    data: XOR<ProductColorUpdateManyMutationInput, ProductColorUncheckedUpdateManyWithoutColorsInput>
  }

  export type ProductColorScalarWhereInput = {
    AND?: Enumerable<ProductColorScalarWhereInput>
    OR?: Enumerable<ProductColorScalarWhereInput>
    NOT?: Enumerable<ProductColorScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    color?: StringFilter | string
    images?: StringNullableListFilter
    productId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutColorsInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutProductInput
    coupons?: CouponCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutColorsInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutProductInput
    coupons?: CouponUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutColorsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
  }

  export type ProductUpsertWithoutColorsInput = {
    update: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
  }

  export type ProductUpdateWithoutColorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUpdateManyWithoutProductNestedInput
    coupons?: CouponUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutCouponsInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutProductInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCouponsInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutProductInput
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutCouponsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCouponsInput, ProductUncheckedCreateWithoutCouponsInput>
  }

  export type ProductUpsertWithoutCouponsInput = {
    update: XOR<ProductUpdateWithoutCouponsInput, ProductUncheckedUpdateWithoutCouponsInput>
    create: XOR<ProductCreateWithoutCouponsInput, ProductUncheckedCreateWithoutCouponsInput>
  }

  export type ProductUpdateWithoutCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUpdateManyWithoutProductNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutSnapshotsInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutProductInput
    coupons?: CouponCreateNestedManyWithoutProductInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutSnapshotsInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutProductInput
    coupons?: CouponUncheckedCreateNestedManyWithoutProductInput
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSnapshotsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
  }

  export type OrderCreateWithoutProductSnapshotsInput = {
    orderDetailId: number
    orderStatus: OrderStatus
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutOrdersInput
    Payments: PaymentCreateNestedOneWithoutOrdersInput
    shippingMethod: ShippingMethodCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductSnapshotsInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    paymentsId: number
    shippingMethodId: number
    shippingAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutProductSnapshotsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductSnapshotsInput, OrderUncheckedCreateWithoutProductSnapshotsInput>
  }

  export type ProductUpsertWithoutSnapshotsInput = {
    update: XOR<ProductUpdateWithoutSnapshotsInput, ProductUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
  }

  export type ProductUpdateWithoutSnapshotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUpdateManyWithoutProductNestedInput
    coupons?: CouponUpdateManyWithoutProductNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutSnapshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutProductNestedInput
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutProductSnapshotsInput = {
    update: XOR<OrderUpdateWithoutProductSnapshotsInput, OrderUncheckedUpdateWithoutProductSnapshotsInput>
    create: XOR<OrderCreateWithoutProductSnapshotsInput, OrderUncheckedCreateWithoutProductSnapshotsInput>
  }

  export type OrderUpdateWithoutProductSnapshotsInput = {
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutOrdersNestedInput
    Payments?: PaymentUpdateOneRequiredWithoutOrdersNestedInput
    shippingMethod?: ShippingMethodUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductSnapshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    shippingAddressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutBrandInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutProductInput
    coupons?: CouponCreateNestedManyWithoutProductInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutProductInput
    coupons?: CouponUncheckedCreateNestedManyWithoutProductInput
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: Enumerable<ProductCreateManyBrandInput>
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    sku?: StringFilter | string
    price?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    discount?: FloatNullableFilter | number | null
    qty?: IntNullableFilter | number | null
    avgRating?: FloatFilter | number
    brandId?: IntNullableFilter | number | null
    description?: StringNullableFilter | string | null
    specification?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoriesOnProductsCreateWithoutCategoryInput = {
    product: ProductCreateNestedOneWithoutCategoriesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsUncheckedCreateWithoutCategoryInput = {
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsCreateOrConnectWithoutCategoryInput = {
    where: CategoriesOnProductsWhereUniqueInput
    create: XOR<CategoriesOnProductsCreateWithoutCategoryInput, CategoriesOnProductsUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesOnProductsCreateManyCategoryInputEnvelope = {
    data: Enumerable<CategoriesOnProductsCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type CategoriesOnProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesOnProductsWhereUniqueInput
    update: XOR<CategoriesOnProductsUpdateWithoutCategoryInput, CategoriesOnProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoriesOnProductsCreateWithoutCategoryInput, CategoriesOnProductsUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesOnProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesOnProductsWhereUniqueInput
    data: XOR<CategoriesOnProductsUpdateWithoutCategoryInput, CategoriesOnProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoriesOnProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoriesOnProductsScalarWhereInput
    data: XOR<CategoriesOnProductsUpdateManyMutationInput, CategoriesOnProductsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductCreateWithoutCategoriesInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    reviews?: ReviewCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutProductInput
    coupons?: CouponCreateNestedManyWithoutProductInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutProductInput
    coupons?: CouponUncheckedCreateNestedManyWithoutProductInput
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductUpsertWithoutCategoriesInput = {
    update: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUpdateManyWithoutProductNestedInput
    coupons?: CouponUpdateManyWithoutProductNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutProductNestedInput
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    address: AddressCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    addressId: number
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentUncheckedCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartCreateNestedManyWithoutProductInput
    coupons?: CouponCreateNestedManyWithoutProductInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    productsOnCart?: ProductsOnCartUncheckedCreateNestedManyWithoutProductInput
    coupons?: CouponUncheckedCreateNestedManyWithoutProductInput
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUncheckedUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUpdateManyWithoutProductNestedInput
    coupons?: CouponUpdateManyWithoutProductNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutProductNestedInput
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateWithoutOrderInput = {
    street?: string | null
    district?: string | null
    city?: string | null
    user?: UserCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutOrderInput = {
    id?: number
    street?: string | null
    district?: string | null
    city?: string | null
    user?: UserUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutOrderInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
  }

  export type ProductSnapshotCreateWithoutOrderInput = {
    product: ProductCreateNestedOneWithoutSnapshotsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSnapshotUncheckedCreateWithoutOrderInput = {
    id?: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSnapshotCreateOrConnectWithoutOrderInput = {
    where: ProductSnapshotWhereUniqueInput
    create: XOR<ProductSnapshotCreateWithoutOrderInput, ProductSnapshotUncheckedCreateWithoutOrderInput>
  }

  export type ProductSnapshotCreateManyOrderInputEnvelope = {
    data: Enumerable<ProductSnapshotCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrdersInput = {
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    address: AddressCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    addressId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    NotificationSent?: NotificationSentUncheckedCreateNestedManyWithoutRecipentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentCreateWithoutOrdersInput = {
    name: string
    type: PaymentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    type: PaymentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrdersInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrdersInput, PaymentUncheckedCreateWithoutOrdersInput>
  }

  export type ShippingMethodCreateWithoutOrderInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShippingMethodUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShippingMethodCreateOrConnectWithoutOrderInput = {
    where: ShippingMethodWhereUniqueInput
    create: XOR<ShippingMethodCreateWithoutOrderInput, ShippingMethodUncheckedCreateWithoutOrderInput>
  }

  export type AddressUpsertWithoutOrderInput = {
    update: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
  }

  export type AddressUpdateWithoutOrderInput = {
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type ProductSnapshotUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductSnapshotWhereUniqueInput
    update: XOR<ProductSnapshotUpdateWithoutOrderInput, ProductSnapshotUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductSnapshotCreateWithoutOrderInput, ProductSnapshotUncheckedCreateWithoutOrderInput>
  }

  export type ProductSnapshotUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductSnapshotWhereUniqueInput
    data: XOR<ProductSnapshotUpdateWithoutOrderInput, ProductSnapshotUncheckedUpdateWithoutOrderInput>
  }

  export type ProductSnapshotUpdateManyWithWhereWithoutOrderInput = {
    where: ProductSnapshotScalarWhereInput
    data: XOR<ProductSnapshotUpdateManyMutationInput, ProductSnapshotUncheckedUpdateManyWithoutProductSnapshotsInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUncheckedUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutOrdersInput = {
    update: XOR<PaymentUpdateWithoutOrdersInput, PaymentUncheckedUpdateWithoutOrdersInput>
    create: XOR<PaymentCreateWithoutOrdersInput, PaymentUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingMethodUpsertWithoutOrderInput = {
    update: XOR<ShippingMethodUpdateWithoutOrderInput, ShippingMethodUncheckedUpdateWithoutOrderInput>
    create: XOR<ShippingMethodCreateWithoutOrderInput, ShippingMethodUncheckedCreateWithoutOrderInput>
  }

  export type ShippingMethodUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingMethodUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnCartCreateWithoutCartInput = {
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductsOnCartInput
  }

  export type ProductsOnCartUncheckedCreateWithoutCartInput = {
    productId: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsOnCartCreateOrConnectWithoutCartInput = {
    where: ProductsOnCartWhereUniqueInput
    create: XOR<ProductsOnCartCreateWithoutCartInput, ProductsOnCartUncheckedCreateWithoutCartInput>
  }

  export type ProductsOnCartCreateManyCartInputEnvelope = {
    data: Enumerable<ProductsOnCartCreateManyCartInput>
    skipDuplicates?: boolean
  }

  export type ProductsOnCartUpsertWithWhereUniqueWithoutCartInput = {
    where: ProductsOnCartWhereUniqueInput
    update: XOR<ProductsOnCartUpdateWithoutCartInput, ProductsOnCartUncheckedUpdateWithoutCartInput>
    create: XOR<ProductsOnCartCreateWithoutCartInput, ProductsOnCartUncheckedCreateWithoutCartInput>
  }

  export type ProductsOnCartUpdateWithWhereUniqueWithoutCartInput = {
    where: ProductsOnCartWhereUniqueInput
    data: XOR<ProductsOnCartUpdateWithoutCartInput, ProductsOnCartUncheckedUpdateWithoutCartInput>
  }

  export type ProductsOnCartUpdateManyWithWhereWithoutCartInput = {
    where: ProductsOnCartScalarWhereInput
    data: XOR<ProductsOnCartUpdateManyMutationInput, ProductsOnCartUncheckedUpdateManyWithoutProductsOnCartInput>
  }

  export type ProductCreateWithoutProductsOnCartInput = {
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    coupons?: CouponCreateNestedManyWithoutProductInput
    colors?: ProductColorCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutProductsOnCartInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    brandId?: number | null
    description?: string | null
    specification?: string | null
    categories?: CategoriesOnProductsUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    coupons?: CouponUncheckedCreateNestedManyWithoutProductInput
    colors?: ProductColorUncheckedCreateNestedManyWithoutProductInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutProductsOnCartInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductsOnCartInput, ProductUncheckedCreateWithoutProductsOnCartInput>
  }

  export type CartCreateWithoutProductsOnCartInput = {

  }

  export type CartUncheckedCreateWithoutProductsOnCartInput = {
    id?: number
  }

  export type CartCreateOrConnectWithoutProductsOnCartInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutProductsOnCartInput, CartUncheckedCreateWithoutProductsOnCartInput>
  }

  export type ProductUpsertWithoutProductsOnCartInput = {
    update: XOR<ProductUpdateWithoutProductsOnCartInput, ProductUncheckedUpdateWithoutProductsOnCartInput>
    create: XOR<ProductCreateWithoutProductsOnCartInput, ProductUncheckedCreateWithoutProductsOnCartInput>
  }

  export type ProductUpdateWithoutProductsOnCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    coupons?: CouponUpdateManyWithoutProductNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductsOnCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutProductNestedInput
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUpsertWithoutProductsOnCartInput = {
    update: XOR<CartUpdateWithoutProductsOnCartInput, CartUncheckedUpdateWithoutProductsOnCartInput>
    create: XOR<CartCreateWithoutProductsOnCartInput, CartUncheckedCreateWithoutProductsOnCartInput>
  }

  export type CartUpdateWithoutProductsOnCartInput = {

  }

  export type CartUncheckedUpdateWithoutProductsOnCartInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateWithoutShippingMethodInput = {
    orderDetailId: number
    orderStatus: OrderStatus
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    productSnapshots?: ProductSnapshotCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutOrdersInput
    Payments: PaymentCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutShippingMethodInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    paymentsId: number
    shippingAddressId: number
    productSnapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutShippingMethodInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShippingMethodInput, OrderUncheckedCreateWithoutShippingMethodInput>
  }

  export type OrderCreateManyShippingMethodInputEnvelope = {
    data: Enumerable<OrderCreateManyShippingMethodInput>
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutShippingMethodInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShippingMethodInput, OrderUncheckedUpdateWithoutShippingMethodInput>
    create: XOR<OrderCreateWithoutShippingMethodInput, OrderUncheckedCreateWithoutShippingMethodInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShippingMethodInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShippingMethodInput, OrderUncheckedUpdateWithoutShippingMethodInput>
  }

  export type OrderUpdateManyWithWhereWithoutShippingMethodInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutPaymentsInput = {
    orderDetailId: number
    orderStatus: OrderStatus
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    productSnapshots?: ProductSnapshotCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutOrdersInput
    shippingMethod: ShippingMethodCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentsInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    shippingMethodId: number
    shippingAddressId: number
    productSnapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderCreateManyPaymentsInputEnvelope = {
    data: Enumerable<OrderCreateManyPaymentsInput>
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderUpdateManyWithWhereWithoutPaymentsInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type NotificationSentCreateWithoutNotificationInput = {
    isRead?: boolean
    readTime?: Date | string | null
    recipent: UserCreateNestedOneWithoutNotificationSentInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentUncheckedCreateWithoutNotificationInput = {
    id?: number
    recipentId: number
    isRead?: boolean
    readTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentCreateOrConnectWithoutNotificationInput = {
    where: NotificationSentWhereUniqueInput
    create: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationSentCreateManyNotificationInputEnvelope = {
    data: Enumerable<NotificationSentCreateManyNotificationInput>
    skipDuplicates?: boolean
  }

  export type NotificationSentUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationSentWhereUniqueInput
    update: XOR<NotificationSentUpdateWithoutNotificationInput, NotificationSentUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationSentUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationSentWhereUniqueInput
    data: XOR<NotificationSentUpdateWithoutNotificationInput, NotificationSentUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationSentUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationSentScalarWhereInput
    data: XOR<NotificationSentUpdateManyMutationInput, NotificationSentUncheckedUpdateManyWithoutNotificationSentInput>
  }

  export type NotificationCreateWithoutNotificationSentInput = {
    title: string
    content: string
    url: string
    type: NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutNotificationSentInput = {
    id?: number
    title: string
    content: string
    url: string
    type: NotificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutNotificationSentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutNotificationSentInput, NotificationUncheckedCreateWithoutNotificationSentInput>
  }

  export type UserCreateWithoutNotificationSentInput = {
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    address: AddressCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutNotificationSentInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    addressId: number
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutNotificationSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationSentInput, UserUncheckedCreateWithoutNotificationSentInput>
  }

  export type NotificationUpsertWithoutNotificationSentInput = {
    update: XOR<NotificationUpdateWithoutNotificationSentInput, NotificationUncheckedUpdateWithoutNotificationSentInput>
    create: XOR<NotificationCreateWithoutNotificationSentInput, NotificationUncheckedCreateWithoutNotificationSentInput>
  }

  export type NotificationUpdateWithoutNotificationSentInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutNotificationSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNotificationSentInput = {
    update: XOR<UserUpdateWithoutNotificationSentInput, UserUncheckedUpdateWithoutNotificationSentInput>
    create: XOR<UserCreateWithoutNotificationSentInput, UserUncheckedCreateWithoutNotificationSentInput>
  }

  export type UserUpdateWithoutNotificationSentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNotificationSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    content: string
    productId: number
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    paymentsId: number
    shippingMethodId: number
    shippingAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: number
    refreshToken: string
    deviceId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentCreateManyRecipentInput = {
    id?: number
    notificationId: number
    isRead?: boolean
    readTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    productSnapshots?: ProductSnapshotUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payments?: PaymentUpdateOneRequiredWithoutOrdersNestedInput
    shippingMethod?: ShippingMethodUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    shippingAddressId?: IntFieldUpdateOperationsInput | number
    productSnapshots?: ProductSnapshotUncheckedUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    shippingAddressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentUpdateWithoutRecipentInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: NotificationUpdateOneRequiredWithoutNotificationSentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentUncheckedUpdateWithoutRecipentInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentUncheckedUpdateManyWithoutNotificationSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyAddressInput = {
    id?: number
    username: string
    email: string
    role?: Role
    password: string
    active: boolean
    verifyEmail: boolean
    verifyContact: boolean
    name?: string | null
    avatar?: string | null
    phoneNumber: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyShippingAddressInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    paymentsId: number
    shippingMethodId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutAddressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    NotificationSent?: NotificationSentUncheckedUpdateManyWithoutRecipentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    verifyEmail?: BoolFieldUpdateOperationsInput | boolean
    verifyContact?: BoolFieldUpdateOperationsInput | boolean
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutShippingAddressInput = {
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    productSnapshots?: ProductSnapshotUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutOrdersNestedInput
    Payments?: PaymentUpdateOneRequiredWithoutOrdersNestedInput
    shippingMethod?: ShippingMethodUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShippingAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    productSnapshots?: ProductSnapshotUncheckedUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsCreateManyProductInput = {
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyProductInput = {
    id?: number
    content: string
    userId: number
    rating: Rating
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSnapshotCreateManyProductInput = {
    id?: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsOnCartCreateManyProductInput = {
    cardId: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateManyProductInput = {
    id?: number
    code: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductColorCreateManyProductInput = {
    id?: number
    name: string
    color: string
    images?: ProductColorCreateimagesInput | Enumerable<string>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsUpdateWithoutProductInput = {
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsUncheckedUpdateWithoutProductInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsUncheckedUpdateManyWithoutCategoriesInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutProductInput = {
    content?: StringFieldUpdateOperationsInput | string
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    rating?: EnumRatingFieldUpdateOperationsInput | Rating
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutProductSnapshotsNestedInput
  }

  export type ProductSnapshotUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotUncheckedUpdateManyWithoutSnapshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnCartUpdateWithoutProductInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneRequiredWithoutProductsOnCartNestedInput
  }

  export type ProductsOnCartUncheckedUpdateWithoutProductInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnCartUncheckedUpdateManyWithoutProductsOnCartInput = {
    cardId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutProductInput = {
    code?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyWithoutCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductColorUpdateimagesInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductColorUpdateimagesInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductColorUncheckedUpdateManyWithoutColorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    images?: ProductColorUpdateimagesInput | Enumerable<string>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyBrandInput = {
    id?: number
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    discount?: number | null
    qty?: number | null
    avgRating?: number
    description?: string | null
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUpdateManyWithoutProductNestedInput
    coupons?: CouponUpdateManyWithoutProductNestedInput
    colors?: ProductColorUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: CategoriesOnProductsUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    productsOnCart?: ProductsOnCartUncheckedUpdateManyWithoutProductNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutProductNestedInput
    colors?: ProductColorUncheckedUpdateManyWithoutProductNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: NullableIntFieldUpdateOperationsInput | number | null
    avgRating?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsCreateManyCategoryInput = {
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesOnProductsUpdateWithoutCategoryInput = {
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsUncheckedUpdateWithoutCategoryInput = {
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnProductsUncheckedUpdateManyWithoutProductsInput = {
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotCreateManyOrderInput = {
    id?: number
    productId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSnapshotUpdateWithoutOrderInput = {
    product?: ProductUpdateOneRequiredWithoutSnapshotsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotUncheckedUpdateManyWithoutProductSnapshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsOnCartCreateManyCartInput = {
    productId: number
    qty: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsOnCartUpdateWithoutCartInput = {
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductsOnCartNestedInput
  }

  export type ProductsOnCartUncheckedUpdateWithoutCartInput = {
    productId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyShippingMethodInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    paymentsId: number
    shippingAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutShippingMethodInput = {
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    productSnapshots?: ProductSnapshotUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutOrdersNestedInput
    Payments?: PaymentUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutShippingMethodInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    paymentsId?: IntFieldUpdateOperationsInput | number
    shippingAddressId?: IntFieldUpdateOperationsInput | number
    productSnapshots?: ProductSnapshotUncheckedUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyPaymentsInput = {
    id?: number
    orderDetailId: number
    orderStatus: OrderStatus
    userId?: number | null
    shippingMethodId: number
    shippingAddressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutPaymentsInput = {
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput
    productSnapshots?: ProductSnapshotUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutOrdersNestedInput
    shippingMethod?: ShippingMethodUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderDetailId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | OrderStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    shippingMethodId?: IntFieldUpdateOperationsInput | number
    shippingAddressId?: IntFieldUpdateOperationsInput | number
    productSnapshots?: ProductSnapshotUncheckedUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentCreateManyNotificationInput = {
    id?: number
    recipentId: number
    isRead?: boolean
    readTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSentUpdateWithoutNotificationInput = {
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipent?: UserUpdateOneRequiredWithoutNotificationSentNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipentId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}