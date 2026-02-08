import { Controller } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthFormLogin } from "@/hooks/use-auth-form";
export default function LoginForm() {
  const { form, onSubmit } = useAuthFormLogin();

  return (
    <form id="sign-in-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  type="email"
                  id="email"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="Enter your email"
                />
                <InputGroupAddon>
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>
              <div className="min-h-6">
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>enter your email</FieldDescription>
                )}
              </div>
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Link
                  to="/auth/forgot-password"
                  className="hover:text-primary text-foreground text-sm hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  type="password"
                  id="password"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="••••••"
                />
                <InputGroupAddon align="inline-end">
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>
              <div className="min-h-6">
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>enter your password</FieldDescription>
                )}
              </div>
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}
