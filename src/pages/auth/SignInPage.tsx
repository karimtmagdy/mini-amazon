import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import LoginForm from "@/features/auth/LoginForm";

export default function SignInPage() {
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
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              Login with Google
            </Button>
            <Button type="submit" form="sign-in-form">
              Login
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
