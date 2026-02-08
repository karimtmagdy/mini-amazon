import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import RegisterForm from "@/features/auth/RegisterForm";
import { HaveAccount } from "@/components/common/auth/HaveAccount";

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
        <CardFooter className="flex-col gap-2">
          <Field orientation="responsive">
            <Button type="submit" className="w-full" form="sign-up-form">
              Register
            </Button>
            <Button type="button" variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </Field>
          <HaveAccount />
        </CardFooter>
      </Card>
    </div>
  );
}
