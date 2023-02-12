import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <div>
        <div>
          <h1>404 Page Not Found</h1>
          <p>We are Sorry, Page not found!</p>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable!
          </p>

          <Link href="/">Back to home page</Link>
          <br />

          <button>
            <a onClick={handleClick}>Back Home</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
