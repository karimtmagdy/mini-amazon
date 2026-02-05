import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <strong
        aria-label="404"
        className="@lg:text-6xl @md:text-5xl @sm:text-4xl text-3xl font-bold text-destructive"
      >
        404
      </strong>
      <h1
        aria-label="Page Not Found"
        className="@lg:text-5xl uppercase   text-2xl font-bold"
      >
        Page Not Found
      </h1>
      <div className="  text-center text-sm @lg:text-base">
        <p className="">It seems the page you're looking for doesn't exist.</p>
        <small
          aria-label="Sorry, the page you are looking for does not exist."
          className=" text-muted-foreground     "
        >
          Sorry, the page you are looking for does not exist.
        </small>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          aria-label="Go Home"
          onClick={() => navigate("/")}
        >
          <HomeIcon /> Go Home
        </Button>

        <Button
          variant="dark"
          aria-label="Go Back"
          onClick={() => window.history.back()}
        >
          <ArrowLeftIcon /> Go Back
        </Button>
      </div>
      <p className="text-center text-sm text-wrap">
        If you believe this is an error, please contact support.
      </p>
    </section>
  );
}
// The page might have been moved, deleted, or the URL might be incorrect.
