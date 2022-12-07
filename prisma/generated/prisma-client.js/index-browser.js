
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  street: 'street',
  district: 'district',
  city: 'city'
});

exports.Prisma.BrandScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CartScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.CategoriesOnProductsScalarFieldEnum = makeEnum({
  productId: 'productId',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CouponScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  expires: 'expires',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  content: 'content',
  url: 'url',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.NotificationSentScalarFieldEnum = makeEnum({
  id: 'id',
  notificationId: 'notificationId',
  recipentId: 'recipentId',
  isRead: 'isRead',
  readTime: 'readTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  orderDetailId: 'orderDetailId',
  orderStatus: 'orderStatus',
  userId: 'userId',
  paymentsId: 'paymentsId',
  shippingMethodId: 'shippingMethodId',
  shippingAddressId: 'shippingAddressId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ProductColorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  color: 'color',
  images: 'images',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ProductSnapshotScalarFieldEnum = makeEnum({
  id: 'id',
  productId: 'productId',
  orderId: 'orderId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ProductsOnCartScalarFieldEnum = makeEnum({
  productId: 'productId',
  cardId: 'cardId',
  qty: 'qty',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReviewScalarFieldEnum = makeEnum({
  id: 'id',
  content: 'content',
  userId: 'userId',
  productId: 'productId',
  rating: 'rating',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  refreshToken: 'refreshToken',
  deviceId: 'deviceId',
  expires: 'expires',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShippingMethodScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
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
});
exports.NotificationType = makeEnum({
  ORDER_STATUS: 'ORDER_STATUS',
  REVIEW: 'REVIEW'
});

exports.OrderStatus = makeEnum({
  IN_CART: 'IN_CART',
  PROCESSING: 'PROCESSING',
  SHIPPING: 'SHIPPING',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
});

exports.PaymentType = makeEnum({
  CASH: 'CASH',
  ONLINE: 'ONLINE'
});

exports.Rating = makeEnum({
  ONE_STAR: 'ONE_STAR',
  TWO_STARS: 'TWO_STARS',
  THREE_STARS: 'THREE_STARS',
  FOUR_STARS: 'FOUR_STARS',
  FIVE_STARS: 'FIVE_STARS'
});

exports.Role = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN'
});

exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
