import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import HomeComponent from "./components/home/Home";
import AboutComponent from "./components/about/About";
function App() {
  {
    /* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Outlet />}>
                <Route index element={<HomeComponent /> } />
                <Route path='about' element={<AboutComponent/> } />
            </Route>
        </Routes>
    </BrowserRouter> */
  }

  const browserRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomeComponent />} />
        <Route path="about" element={<AboutComponent />} />
      </Route>
    )
  );

  return <RouterProvider router={browserRoutes} />;
}
export default App;
