import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import LoginForm from "@/features/auth/LoginForm";
import { useAuthFormLogin } from "@/hooks/use-auth-form";
import { HaveAccount } from "@/components/common/auth/HaveAccount";

export default function SignInPage() {
  const { loginMutation } = useAuthFormLogin();
  return (
    <div className="flex h-dvh items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <HeaderSubmitionForm
          title="Sign In"
          description="Enter your email and password to sign in."
        />
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Field orientation="responsive">
            <Button
              type="submit"
              form="sign-in-form"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </Button>
            <Button type="button" variant="outline">
              Login with Google
            </Button>
          </Field>
          <HaveAccount />
        </CardFooter>
      </Card>
    </div>
  );
}
