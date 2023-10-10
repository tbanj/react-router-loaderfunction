import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import { LoaderFunction as HomeLoader } from "./hooks/useLoaderFunction";
import HomeComponent from "./components/home/Home";
import AboutComponent from "./components/about/About";
function App() {
  const browserRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route
          index
          element={<HomeComponent />}
          loader={HomeLoader}
          errorElement={<h1>An Error occured</h1>}
        />
        <Route path="about" element={<AboutComponent />} />
      </Route>
    )
  );

  return <RouterProvider router={browserRoutes} />;
}
export default App;
