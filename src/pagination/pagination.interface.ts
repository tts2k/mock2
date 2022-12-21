export interface PaginatedList<T> {
  items: T[],
  total: number,
  page: number
}

export interface PaginationFindParams {
  take: number,
  skip: number
}
