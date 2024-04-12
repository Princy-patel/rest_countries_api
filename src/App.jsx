// import Countries from "./Components/Countries";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./Components/Base";
import Details from "./Components/Details";
import DetailsProvider from "./Components/DetailsProvider";
import { lazy, Suspense } from "react";
import { RotatingLines } from "react-loader-spinner";

const Countries = lazy(() => import("./Components/Countries"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DetailsProvider>
        <Base />
      </DetailsProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            }
          >
            <Countries />
          </Suspense>
        ),
      },

      {
        path: "country/:countries",
        element: <Details />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
