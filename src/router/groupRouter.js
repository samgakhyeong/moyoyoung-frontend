// 생성자 : Haein

import { lazy, Suspense } from "react";

const Loading = <div>Loading···</div>;

const GroupInfo = lazy(() => import("../pages/group/Info"));
const GroupAdd = lazy(() => import("../pages/group/AddPage"));
const MeetingAdd = lazy(() => import("../pages/group/MeetingAddPage"));

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
      path: "meetingAdd",
      element: (
        <Suspense fallback={Loading}>
          <MeetingAdd />
        </Suspense>
      ),
    },
  ];
};

export default groupRouter;
