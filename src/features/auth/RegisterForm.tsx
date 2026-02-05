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
import { formSignUpSchema, type FormSignUpSchema } from "@/schemas/auth.schema";

export default function RegisterForm() {
  const form = useForm<FormSignUpSchema>({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: FormSignUpSchema) {
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
    <form id="sign-up-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  type="text"
                  id="username"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="Enter your username"
                />
                <InputGroupAddon>
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>
              <div className="min-h-6">
                {fieldState.invalid ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>enter your username</FieldDescription>
                )}
              </div>
            </Field>
          )}
        />
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
              <FieldLabel htmlFor="password">Password</FieldLabel>
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
                  id="confirmPassword"
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
                  <FieldDescription>
                    enter your confirm password
                  </FieldDescription>
                )}
              </div>
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}
