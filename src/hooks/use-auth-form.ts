import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formSignInSchema,
  type FormSignInSchema,
  formSignUpSchema,
  type FormSignUpSchema,
  type FormForgotPasswordSchema,
  formForgotPasswordSchema,
} from "@/schemas/auth.schema";
import {
  useForgotPassword,
  useGetMe,
  useLogin,
  useLogout,
  useRegister,
} from "@/modules/users.queries";
import { storageUtils } from "@/lib/tokens";

export function useAuthFormLogin() {
  const loginMutation = useLogin();
  const form = useForm<FormSignInSchema>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: FormSignInSchema) => {
    await loginMutation.mutate(data);
  };
  return {
    form,
    onSubmit,
    loginMutation,
  };
}

export function useAuthFormRegister() {
  const registerMutation = useRegister();

  const form = useForm<FormSignUpSchema>({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: FormSignUpSchema) => {
    await registerMutation.mutateAsync(data);
  };
  return {
    form,
    onSubmit,
    registerMutation,
  };
}
export function useAuthFormLogout() {
  const logoutMutation = useLogout();
  const onSubmit = async () => {
    await logoutMutation.mutateAsync();
  };
  return {
    onSubmit,
    logoutMutation,
  };
}
export function useAuthForgotPassword() {
  const forgotPasswordMutation = useForgotPassword();
  const form = useForm<FormForgotPasswordSchema>({
    resolver: zodResolver(formForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: FormForgotPasswordSchema) => {
    forgotPasswordMutation.mutate(data);
  };

  return {
    form,
    onSubmit,
    forgotPasswordMutation,
  };
}
export function useAuthGetMe() {
  const {data, isLoading} = useGetMe();
  const token = storageUtils.getToken();
  const localUser = storageUtils.getUser();
  const user = data?.data  || localUser;


  // Truly authenticated only if we have a token AND (a successful query OR local data while loading)
  const isAuthenticated = !!token && !!data || !!localUser ;

  const isAdmin = user?.role === "admin";
  const isUser = user?.role === "user";
  // const isLoading = data.isLoading && !!token;

  return {
    isAuthenticated,
    isUser,
    isAdmin,
    user,
    isLoading,
  };
}
