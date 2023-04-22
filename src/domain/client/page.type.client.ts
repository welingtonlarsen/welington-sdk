export type PageRequest = {
  pageSize: number;
  page: number;
};

export type PageResult<T> = {
  items: T[];
  total: number;
  page: number;
  pages: number;
  offset?: number;
};
