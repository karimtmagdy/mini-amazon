import {
  PATH_FORGOT_PASSWORD,
  PATH_SIGNIN,
  PATH_SIGNUP,
} from "@/lib/links/paths";
import { Link, useLocation } from "react-router";

export function HaveAccount() {
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  //   console.log(location);
  if (location.pathname === PATH_SIGNUP) {
    return (
      <p className="text-secondary-foreground mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link to={PATH_SIGNIN} className="text-accent hover:underline">
          Sign In
        </Link>
      </p>
    );
  } else if (location.pathname === PATH_SIGNIN) {
    return (
      <p className="text-secondary-foreground mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Link to={PATH_SIGNUP} className="text-accent hover:underline">
          Sign Up
        </Link>
      </p>
    );
  } else if (location.pathname === PATH_FORGOT_PASSWORD) {
    return (
      <p className="text-secondary-foreground mt-4 text-center text-sm">
        Remember your password?{" "}
        <Link to={PATH_SIGNIN} className="text-accent hover:underline">
          Sign In
        </Link>
      </p>
    );
  }
}
