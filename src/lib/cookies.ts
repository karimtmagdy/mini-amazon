import Cookies from "js-cookie";
type CookieOptions = {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None";
};

export function setCookie(
  name: string,
  value: string,
  options?: CookieOptions,
): void {
  Cookies.set(name, value, options);
}

export function getCookie(name: string): string | undefined {
  return Cookies.get(name);
}

export function removeCookie(
  name: string,
  options?: Pick<CookieOptions, "path">,
): void {
  Cookies.remove(name, options);
}
