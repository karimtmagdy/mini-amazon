export interface ResponseDto<T> {
  status?: string | number;
  message?: string;
  data: T;
  //   meta?: PaginationDto;
}
export type ResponseAuth<T> = {
  data: T;
  message: string;
  status: string | number;
};
// data: T | { user: T; token: string };
export type ResponseAuthLogin<T> = {
  user: T;
  token: string;
  message: string;
  status: string | number;
};
