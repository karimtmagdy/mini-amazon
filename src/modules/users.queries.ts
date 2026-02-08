import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/core/auth/api.auth.service";
import { storageUtils } from "@/lib/tokens";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["register"] });
    },
  });
}

export function useLogin() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: authApi.login,
    onSuccess: (response) => {
      console.log(response);
      storageUtils.setToken(response.data.token);
      storageUtils.setUser(response.data.user);
      qc.invalidateQueries({
        queryKey: ["user"],
      });
      qc.setQueryData(["user"], response.data.user);
      navigate("/");
      if (response.data.user.role === "admin") navigate("/admin");
      else navigate("/");
    },
    onError: (error) => {
      console.log(error);
      qc.invalidateQueries({ queryKey: ["login"] });
    },
  });
}
export function useLogout() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["logout"] });
      storageUtils.removeToken();
      storageUtils.removeUser();
      qc.setQueryData(["user"], null); // Manually clear the user data to trigger UI updates
      qc.clear();
      navigate("/");
    },
  });
}
export function useForgotPassword() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: authApi.forgotPassword,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["forgot-password"] });
    },
  });
}
export function useResetPassword() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: authApi.resetPassword,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["reset-password"] });
    },
  });
}
export function useChangePassword() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: authApi.changePassword,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["change-password"] });
    },
  });
}
export function useRefresh() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: authApi.refresh,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["refresh"] });
    },
  });
}
export function useLogoutDevices() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: authApi.logoutDevices,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["logout-devices"] });
    },
  });
}
export function useGetMe() {
  const hasToken = storageUtils.getToken();
  return useQuery({
    queryKey: ["user"],
    queryFn: authApi.getMe,
    enabled: !!hasToken && !!storageUtils.getUser(),
  });
}
