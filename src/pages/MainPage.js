import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  return (
    <BasicLayout>
      <div className="flex flex-row-reverse  w-full pt-8">
        <button className="w-1/4 p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors duration-300 cursor-pointer">
          소모임 개설하기
        </button>
      </div>
      <div className="flex justify-between w-full h-full py-8">
        <div className="w-1/2 h-full p-4 me-5 bg-white shadow-lg">
          <h1 className="text-2xl pb-4 mb-10 border-b-2 border-gray-400">
            온라인 소모임 목록
          </h1>
          <div className="w-full">
            <div className="flex w-full p-2 mb-4 rounded-lg bg-gray-50 shadow-lg">
              <div className="w-20 h-20 me-3 rounded-full shadow-lg">
                <div className="w-full h-full text-center overflow-hidden">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
                  />
                </div>
              </div>
              <div className="h-20">
                <p className="px-2 pb-1 text-base">소모임명</p>
                <p className="px-2 pb-1 text-sm">소모임한줄소개</p>
                <div className="flex">
                  <div className="px-2 py-1 bg-emerald-500 text-xs text-white rounded-2xl">
                    소모임 카테고리
                  </div>
                  <div className="px-2 py-1 text-xs">소모임 회원수</div>
                </div>
              </div>
            </div>
            {/* 테스트용 리스트 시작 */}
            {/* 테스트용리스트 종료 */}
          </div>
        </div>
        <div className="w-1/2 h-full p-4 bg-white shadow-lg">
          <h1 className="text-2xl pb-4 mb-10 border-b-2 border-gray-400">
            오프라인 소모임 목록
          </h1>
          <div className="w-full">
            <div className="flex w-full p-2 mb-4 rounded-lg bg-gray-50 shadow-lg">
              <div className="w-20 h-20 me-3 rounded-full shadow-lg">
                <div className="w-full h-full text-center overflow-hidden">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
                  />
                </div>
              </div>
              <div className="h-20">
                <p className="px-2 pb-1 text-base">소모임명</p>
                <p className="px-2 pb-1 text-sm">소모임한줄소개</p>
                <div className="flex">
                  <div className="px-2 py-1 bg-emerald-500 text-xs text-white rounded-2xl">
                    소모임 카테고리
                  </div>
                  <div className="px-2 py-1 text-xs">소모임 회원수</div>
                </div>
              </div>
            </div>
            {/* 테스트용 리스트 시작 */}
            {/* 테스트용리스트 종료 */}
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default MainPage;
