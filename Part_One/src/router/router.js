import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

export default [{ path: "/", element: Home }];
