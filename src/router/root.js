import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const Loading = <div>Loading···</div>;
const Main = lazy(() => import("../pages/MainPage"));
const Login = lazy(() => import("../components/allMemberLogin/Login"))
const LoginJoin = lazy(() => import("../components/allMemberLogin/LoginJoin"))
const FindId = lazy(() => import("../components/allMemberLogin/FindId"))
const FindPassWord = lazy(() => import ("../components/allMemberLogin/FindPassWord"))
const BoardMain = lazy(() => import ("../components/allBoard/BoardMain"))
const BoardInput = lazy(() => import ("../components/allBoard/BoardInput"))
const BoardDetail = lazy(() => import("../components/allBoard/BoardDetail"))

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
  {
    path: "/allBoard",  
    element: (
      <Suspense fallback={Loading}>
          <BoardMain />
      </Suspense>
    ),
  },
  {
    path: "/allBoard/BoardInput",  
    element: (
      <Suspense fallback={Loading}>
        <BoardInput />
      </Suspense>
    ),
  },
  {
    path: "/allBoard/BoardMain",  
    element: (
      <Suspense fallback={Loading}>
        <BoardMain />
      </Suspense>
    ),
  },
  {
    path: "/allBoard/BoardDetail/:id",  
    element: (
      <Suspense fallback={Loading}>
        <BoardDetail />
      </Suspense>
    ),
  },
]);

export default root;
