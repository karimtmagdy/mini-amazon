import { type RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
const ChangePassword = lazy(() => {
  return import("@/pages/auth/ChangePasswordPage");
});
const ForgotPasswordPage = lazy(() => {
  return import("@/pages/auth/ForgotPasswordPage");
});
const ResetPasswordPage = lazy(() => {
  return import("@/pages/auth/ResetPasswordPage");
});
const SignUpPage = lazy(() => {
  return import("@/pages/auth/SignUpPage");
});
const SignInPage = lazy(() => {
  return import("@/pages/auth/SignInPage");
});
import { Spinner } from "@/components/ui/spinner";
import AuthLayout from "@/layouts/AuthLayout";
export const PagesAuth = [
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "register",
        element: (
          <Suspense fallback={<AuthFallback />} children={<SignUpPage />} />
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<AuthFallback />} children={<SignInPage />} />
        ),
      },
      {
        path: "change-password",
        element: (
          <Suspense fallback={<AuthFallback />} children={<ChangePassword />} />
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense
            fallback={<AuthFallback />}
            children={<ForgotPasswordPage />}
          />
        ),
      },
      {
        path: "reset-password",
        element: (
          <Suspense
            fallback={<AuthFallback />}
            children={<ResetPasswordPage />}
          />
        ),
      },
    ],
  },
] as RouteObject[];

function AuthFallback() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Spinner className="text-primary size-10" />
    </div>
  );
}
