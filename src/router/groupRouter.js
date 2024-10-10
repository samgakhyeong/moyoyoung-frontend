// 생성자 : Haein

import { lazy, Suspense } from "react";

const Loading = <div>Loading···</div>;

const GroupAdd = lazy(() => import("../pages/group/AddPage"));
const GroupInfo = lazy(() => import("../pages/group/InfoPage"));
const MeetingAdd = lazy(() => import("../pages/group/MeetingAddPage"));

const groupRouter = () => {
  return [
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <GroupAdd />
        </Suspense>
      ),
    },
    {
      path: "meetingAdd/:id",
      element: (
        <Suspense fallback={Loading}>
          <MeetingAdd />
        </Suspense>
      ),
    },
    {
      path: "read/:id",
      element: (
        <Suspense fallback={Loading}>
          <GroupInfo />
        </Suspense>
      ),
    },
  ];
};

export default groupRouter;
