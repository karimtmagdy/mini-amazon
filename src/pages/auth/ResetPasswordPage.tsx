import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import ResetPasswordForm from "@/features/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <HeaderSubmitionForm
          title="Reset Password"
          description="Enter your new password to reset your password."
        />
        <CardContent>
          <ResetPasswordForm />
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="submit" form="reset-password-form">
              Reset Password
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
