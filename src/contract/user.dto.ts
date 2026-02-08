export type UserRole = "admin" | "user";
export type UserDto = {
  id: string;
  username: string;
  email: string;
  password: string;
  image: {
    secureUrl: string;
    publicId: string;
  };
  slug: string;
  role: UserRole;
};
export type UserRegisterDto = Pick<UserDto, "username" | "email" | "password">;
export type UserLoginDto = Pick<UserDto, "email" | "password">;
