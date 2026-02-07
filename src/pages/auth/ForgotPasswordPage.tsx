import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { HeaderSubmitionForm } from "@/components/common/auth/HeaderSubmitionForm";
import ForgotPasswordForm from "@/features/auth/ForgotPasswordForm";
import { Icon } from "@/assets/icon/icons";

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
          <Field orientation="responsive">
            <Button
              type="submit"
              className="w-full"
              form="forgot-password-form"
              disabled
            >
              <Icon.LoaderIcon /> Send
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
