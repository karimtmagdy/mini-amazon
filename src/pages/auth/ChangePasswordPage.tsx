import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import ChangePasswordForm from "@/features/auth/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Card className="w-full sm:max-w-md">
        <HeaderSubmitionForm
          title="Change Password"
          description="Enter your email and password to sign in."
        />
        <CardContent>
          <ChangePasswordForm />
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              Back to Login
            </Button>
            <Button type="submit" form="change-password-form">
              Change Password
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
