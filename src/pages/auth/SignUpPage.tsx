import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import RegisterForm from "@/features/auth/RegisterForm";

export default function SignUpPage() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <HeaderSubmitionForm
          title="Sign Up"
          description="Enter your email and password to sign up."
        />
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              Sign up with Google
            </Button>
            <Button type="submit" form="sign-up-form">
              Register
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
