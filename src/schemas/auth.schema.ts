import * as z from "zod";

export const emailRegex: RegExp =
  /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.(com|net|org)$/;

export const formSignInSchema = z.object({
  email: z
    .string({
      error: "Email is required",
    })
    .trim()
    .regex(emailRegex, "Invalid email address")
    .email("Invalid email format")
    .transform((email) => email.toLowerCase()),
  password: z
    .string({
      error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters.")
    .max(30, "Password must be at most 30 characters."),
});

export const formSignUpSchema = z
  .object({
    username: z
      .string({
        error: "Username is required",
      })
      .min(3, "Username must be at least 3 characters.")
      .max(32, "Username must be at most 32 characters."),
    email: z
      .string({
        error: "Email is required",
      })
      .trim()
      .regex(emailRegex, "Invalid email address")
      .email("Invalid email format")
      .transform((email) => email.toLowerCase()),
    password: z
      .string({
        error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters.")
      .max(30, "Password must be at most 30 characters."),
    confirmPassword: z
      .string({
        error: "Confirm password is required",
      })
      .min(6, "Confirm password must be at least 6 characters.")
      .max(30, "Confirm password must be at most 30 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const formForgotPasswordSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .trim()
    .regex(emailRegex, "Invalid email address")
    .email("Invalid email format")
    .transform((email) => email.toLowerCase()),
});

export const formChangePasswordSchema = z
  .object({
    oldPassword: z.string({ message: "Current password is required" }),
    newPassword: z
      .string({ message: "New password is required" })
      .min(6, { message: "New password must be at least 6 characters" })
      .max(30, { message: "New password must be at most 30 characters" }),
    confirmNewPassword: z
      .string({ message: "Confirm new password is required" })
      .min(6, "Confirm new password must be at least 6 characters.")
      .max(30, "Confirm new password must be at most 30 characters."),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

export const formResetPasswordSchema = z
  .object({
    newPassword: z
      .string({ message: "New password is required" })
      .min(6, { message: "New password must be at least 6 characters" })
      .max(30, { message: "New password must be at most 30 characters" }),
    confirmPassword: z
      .string({ message: "Confirm password is required" })
      .min(6, "Confirm password must be at least 6 characters.")
      .max(30, "Confirm password must be at most 30 characters."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormSignInSchema = z.infer<typeof formSignInSchema>;
export type FormSignUpSchema = z.infer<typeof formSignUpSchema>;
export type FormForgotPasswordSchema = z.infer<typeof formForgotPasswordSchema>;
export type FormChangePasswordSchema = z.infer<typeof formChangePasswordSchema>;
export type FormResetPasswordSchema = z.infer<typeof formResetPasswordSchema>;
