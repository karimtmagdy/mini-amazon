import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import ForgotPasswordForm from "@/features/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <HeaderSubmitionForm
          title="Forgot Password"
          description="Enter your email address associated with your account. We'll send you a link to reset your password."
        />
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              Back to Login
            </Button>
            <Button type="submit" form="forgot-password-form">
              Send Reset Link
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
