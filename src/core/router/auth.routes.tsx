import { type RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
const ChangePassword = lazy(() => {
  return import("@/pages/auth/ChangePassword");
});
const ForgotPassword = lazy(() => {
  return import("@/pages/auth/ForgotPassword");
});
const ResetPassword = lazy(() => {
  return import("@/pages/auth/ResetPassword");
});
const SignUpPage = lazy(() => {
  return import("@/pages/auth/SignUpPage");
});
const SignInPage = lazy(() => {
  return import("@/pages/auth/SignInPage");
});
import { Spinner } from "@/components/ui/spinner";
export const PagesAuth = [
  {
    path: "auth",
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
          <Suspense fallback={<AuthFallback />} children={<ForgotPassword />} />
        ),
      },
      {
        path: "reset-password",
        element: (
          <Suspense fallback={<AuthFallback />} children={<ResetPassword />} />
        ),
      },
    ],
  },
] as RouteObject[];

function AuthFallback() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <Spinner className="size-10 text-primary" />
    </div>
  );
}
