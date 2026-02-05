import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
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
import {
  formResetPasswordSchema,
  type FormResetPasswordSchema,
} from "@/schemas/auth.schema";
export default function ResetPasswordForm() {
  const form = useForm<FormResetPasswordSchema>({
    resolver: zodResolver(formResetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: FormResetPasswordSchema) {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }
  return (
    <form id="reset-password-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="newPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  type="password"
                  id="newPassword"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="Enter your new password"
                />
                <InputGroupAddon align="inline-end">
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>
              <div className="min-h-6">
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>enter your new password</FieldDescription>
                )}
              </div>
            </Field>
          )}
        />
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>
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
