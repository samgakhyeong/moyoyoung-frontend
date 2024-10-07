// 생성자 : Haein

const Addpage = () => {
  return (
    <div className="w-full px-3 py-5">
      <div className="w-full mb-5">
        <h1 className="text-lg">소모임 생성</h1>
      </div>

      <div>
        {/* select 선택라인 */}
        <div className="mb-5">
          <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
            모임유형
          </label>
          <select className="w-full h-full p-2 cursor-pointer text-base font-medium text-gray-600 duration-300 border-b border-gray-300 focus:outline-none focus:ring-emerald-500">
            <option value="" disabled>
              모임유형을 선택하세요.
            </option>
            <option value="online">온라인</option>
            <option value="offline">오프라인</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
            모임지역
          </label>
          <select className="w-full h-full p-2 cursor-pointer text-base font-medium text-gray-600 duration-300 border-b border-gray-300 focus:outline-none focus:ring-emerald-500">
            <option value="" disabled>
              지역을 선택하세요.
            </option>
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
            모임 카테고리
          </label>
          <select className="w-full h-full p-2 cursor-pointer text-base font-medium text-gray-600 duration-300 border-b border-gray-300 focus:outline-none focus:ring-emerald-500">
            <option value="" disabled>
              카테고리를 선택하세요.
            </option>
            <option value="hobby">취미/레저</option>
            <option value="culture">문화/예술</option>
            <option value="social">사회활동/인맥</option>
            <option value="creative">창의/제작</option>
            <option value="learning">학습/자기계발</option>
          </select>
        </div>

        {/* 프로필 사진첨부 라인 */}
        <div className="w-full mb-5">
          <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
            모임프로필 사진
          </label>
          <input
            type="file"
            className="w-full h-10 px-2 border-b border-gray-200 focus:outline-none"
          ></input>
        </div>
        {/* 작성영역 */}
        <div className="w-full mb-5">
          <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
            소모임명
          </label>
          <input
            type="text"
            className="w-full h-10 px-2 border-b border-gray-200 focus:outline-none"
            placeholder="소모임의 이름을 입력해주세요."
          ></input>
        </div>
        <div className="w-full">
          <textarea
            className="w-full min-h-96 p-2 text-sm border border-gray-200 focus:outline-none"
            placeholder="소모임 소개말을 작성해주세요."
          ></textarea>
        </div>
        <div className="w-full my-10">
          <button className="w-1/3 h-12 m-auto block text-white font-semibold rounded-full bg-gray-500 hover:bg-emerald-500 transition-colors duration-300">
            정기모임 생성하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addpage;
