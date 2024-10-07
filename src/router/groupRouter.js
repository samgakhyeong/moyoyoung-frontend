// 생성자 : Haein

import { lazy, Suspense } from "react";

const Loading = <div>Loading···</div>;

const GroupInfo = lazy(() => import("../pages/group/Info"));
const GroupAdd = lazy(() => import("../pages/group/AddPage"));
const MettingAdd = lazy(() => import("../pages/group/MettingAddPage"));

const groupRouter = () => {
  return [
    {
      path: "",
      element: (
        <Suspense fallback={Loading}>
          <GroupInfo />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <GroupAdd />
        </Suspense>
      ),
    },
    {
      path: "mettingAdd",
      element: (
        <Suspense fallback={Loading}>
          <MettingAdd />
        </Suspense>
      ),
    },
  ];
};

export default groupRouter;
