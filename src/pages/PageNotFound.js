import { Button } from "../components/AllComponents";
import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/images/pagenotfound.png";
import { useTitle } from "../hooks/AllHooks";

export const PageNotFound = () => {
  useTitle("- Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-600 font-old my-10 dark:txt-white">
            Error 404
          </p>
          <p className="text-5xl text-gray-600 font-old mb-10 dark:txt-white">
            Ooops! Page Not Found...
          </p>
          <div className="max-w-md">
            <img
              className="rounded-full"
              src={PageNotFoundImg}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button buttonText="Back to Cinemate" />
          </Link>
        </div>
      </section>
    </main>
  );
};
