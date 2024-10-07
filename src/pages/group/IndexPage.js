// 생성자 : Haein

import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  return (
    <BasicLayout>
      <div className="w-full my-10 shadow-md bg-white">
        <Outlet />
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
