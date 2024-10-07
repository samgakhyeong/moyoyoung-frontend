// 생성자 : Haein


const MettingAdd = () => {
  return (
    <div className="w-full px-3 py-5">
      <div className="w-full mb-5">
        <h1 className="text-lg">정기모임 생성</h1>
      </div>
      <div className="w-full pb-2 mb-5 text-2xl border-b-2">
        <input type="text" value={"냥사랑♥고양이집사모임"} readOnly></input>
      </div>
      <div className="w-full mb-5">
        <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
          정기 모임명
        </label>
        <input
          type="text"
          className="w-full h-10 px-2 border-b border-gray-200 focus:outline-none"
          placeholder="정기모임의 이름을 입력해주세요."
        ></input>
      </div>
      <div className="w-full mb-5">
        <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
          정기 모임일
        </label>
        <input
          type="date"
          className="w-full h-10 px-2 border-b border-gray-200 focus:outline-none"
        ></input>
      </div>
      <div className="w-full">
        <textarea
          className="w-full min-h-96 p-2 text-sm border border-gray-200 focus:outline-none"
          placeholder="정기모임 소개말을 작성해주세요."
        ></textarea>
      </div>
      <div className="w-full my-10">
        <button className="w-1/3 h-12 m-auto block text-white font-semibold rounded-full bg-gray-500 hover:bg-emerald-500 transition-colors duration-300">
          정기모임 생성하기
        </button>
      </div>
    </div>
  );
};

export default MettingAdd;
