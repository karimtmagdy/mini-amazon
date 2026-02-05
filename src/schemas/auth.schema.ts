import * as z from "zod";

export const formSignInSchema = z.object({
  email: z
    .string({
      error: "Email is required",
    })
    .min(5, "Email must be at least 5 characters.")
    .max(32, "Email must be at most 32 characters."),
  password: z
    .string({
      error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters.")
    .max(32, "Password must be at most 32 characters."),
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
      .min(5, "Email must be at least 5 characters.")
      .max(32, "Email must be at most 32 characters."),
    password: z
      .string({
        error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters.")
      .max(32, "Password must be at most 32 characters."),
    confirmPassword: z
      .string({
        error: "Confirm password is required",
      })
      .min(6, "Confirm password must be at least 6 characters.")
      .max(32, "Confirm password must be at most 32 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormSignInSchema = z.infer<typeof formSignInSchema>;
export type FormSignUpSchema = z.infer<typeof formSignUpSchema>;
