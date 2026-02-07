export interface ResponseDto<T> {
  status: string;
  message: string;
  data: T;
  //   meta?: PaginationDto;
}
export type ResponseAuth<T> = {
  data: T;
  message: string;
  status: string;
};
// data: T | { user: T; token: string };
export type ResponseAuthLogin<T> = {
  user: T;
  token: string;
  message: string;
  status: string;
};
