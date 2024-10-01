import { Suspense, lazy } from "react";
const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading···</div>;
const Main = lazy(() => import("../pages/MainPage"));
const Login = lazy(() => import("../components/allMemberLogin/Login"))
const LoginJoin = lazy(() => import("../components/allMemberLogin/LoginJoin"))
const FindId = lazy(() => import("../components/allMemberLogin/FindId"))
const FindPassWord = lazy(() => import ("../components/allMemberLogin/FindPassWord"))

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/allMemberLogin",  
    element: (
      <Suspense fallback={Loading}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/allMemberLogin/LoginJoin",
    element: (
      <Suspense fallback={Loading}>
        <LoginJoin />
      </Suspense>
    ),
  },
  {
    path: "/allMemberLogin/FindId",  
    element: (
      <Suspense fallback={Loading}>
        <FindId />
      </Suspense>
    ),
  },
  {
    path: "/allMemberLogin/FindPassWord",  
    element: (
      <Suspense fallback={Loading}>
        <FindPassWord />
      </Suspense>
    ),
  },
]);

export default root;
