// 생성자 : Haein

import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import ListComponent from "../components/group/ListComponent";

const MainPage = () => {
  return (
    <BasicLayout>
      <div className="flex flex-row-reverse w-full pt-8">
        <button className="w-1/4 p-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-300 cursor-pointer">
          <Link to="/group/add">소모임 개설하기</Link>
        </button>
      </div>
      <div className="flex justify-between w-full h-full py-8">
        <div className="w-1/2 h-full p-4 me-5 bg-white shadow-lg">
          <h1 className="text-2xl pb-4 mb-10 border-b-2 border-gray-400">
            온라인 소모임 목록
          </h1>
          <div className="w-full">
            {/* 온라인 소모임 리스트 영역 */}
            <ListComponent />
          </div>
        </div>
        <div className="w-1/2 h-full p-4 bg-white shadow-lg">
          <h1 className="text-2xl pb-4 mb-10 border-b-2 border-gray-400">
            오프라인 소모임 목록
          </h1>
          <div className="w-full">
            {/* 오프라인 소모임 리스트 영역 */}
            <ListComponent />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default MainPage;
