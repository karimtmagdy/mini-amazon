import { http } from "@/core/api/http";
import type {
  FormChangePasswordSchema,
  FormForgotPasswordSchema,
  FormResetPasswordSchema,
  FormSignInSchema,
  FormSignUpSchema,
} from "@/schemas/auth.schema";
import {
  type ResponseDto,
  type ResponseAuthLogin,
} from "@/contract/global.dto";
import type { UserDto } from "@/contract/user.dto";
import {
  PATH_CHANGE_PASSWORD,
  PATH_FORGOT_PASSWORD,
  PATH_ME,
  PATH_REFRESH_TOKEN,
  PATH_RESET_PASSWORD,
  PATH_SIGNIN,
  PATH_SIGNOUT,
  PATH_SIGNOUT_DEVICES,
  PATH_SIGNUP,
} from "@/lib/links/paths";

export const authApi = {
  login: async (data: FormSignInSchema) => {
    const res = await http.post<ResponseAuthLogin<UserDto>>(PATH_SIGNIN, data);
    console.log(res);
    return res;
  },
  register: async (data: FormSignUpSchema) => {
    const res = await http.post<ResponseDto<UserDto>>(PATH_SIGNUP, data);
    return res;
  },
  logout: async () => {
    const res = await http.post(PATH_SIGNOUT);
    return res;
  },
  logoutDevices: async () => {
    const res = await http.post(PATH_SIGNOUT_DEVICES);
    return res;
  },
  forgotPassword: async (data: FormForgotPasswordSchema) => {
    const res = await http.post(PATH_FORGOT_PASSWORD, data);
    return res;
  },
  resetPassword: async (data: FormResetPasswordSchema) => {
    const res = await http.post(PATH_RESET_PASSWORD, data);
    return res;
  },
  changePassword: async (data: FormChangePasswordSchema) => {
    const res = await http.post<ResponseDto<UserDto>>(
      PATH_CHANGE_PASSWORD,
      data,
    );
    return res;
  },
  refresh: async () => {
    const res = await http.post(PATH_REFRESH_TOKEN);
    return res;
  },
  //   verifyEmail: async (data: FormVerifyEmailSchema) => {
  //     const res = await http.post("/auth/verify-email", data);
  //     return res.data;
  //   },
  getMe: async () => {
    const res = await http.get<UserDto>(PATH_ME);
    return res;
  },
};
