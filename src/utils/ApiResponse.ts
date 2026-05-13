export type Pagination = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type ApiResponse<T> =
  | { success: true; data: T; pagination?: Pagination }
  | { success: false; message: string; errors?: string[] };

export const successResponse = <T>(
  data: T,
  pagination?: Pagination,
): ApiResponse<T> => ({
  success: true,
  data,
  ...(pagination && { pagination }),
});

export const errorResponse = (
  message: string,
  errors?: string[],
): ApiResponse<never> => ({
  success: false,
  message,
  ...(errors && { errors }),
});