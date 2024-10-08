// 생성자 : Haein

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const handleClickMeetingAdd = useCallback(() => {
    navigate({ pathname: "meetingAdd" });
  });

  return (
    <div className="w-full">
      <div className="w-full h-60">
        <img
          className="w-full h-full"
          src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
          alt="groupProfileImage"
        />
      </div>
      <div className="w-full px-3 py-5">
        <div className="w-full pb-2 mb-5 text-2xl border-b-2 border-gray-200">
          <h1>냥사랑♥고양이집사모임</h1>
        </div>
        <div className="flex w-full mb-5">
          <div className="w-1/3 me-2">
            <h1 className="w-full p-2 mb-3 border-b bg-gray-100 font-semibold text-lg text-gray-600">
              소모임 소개
            </h1>
            <div className="w-full px-2">
              <div>1.고양이집사일것</div>
              <div>2.고양이집사일것</div>
              <div>3.고양이집사일것</div>
              <div>4.고양이집사일것</div>
              <div>5.고양이집사일것</div>
            </div>
          </div>
          <div className="w-2/3">
            <h1 className="w-full p-2 mb-3 border-b bg-gray-100 font-semibold text-lg text-gray-600">
              소모임 게시글
            </h1>
            <div className="w-full px-2">
              <div>소모임 게시글1</div>
              <div>소모임 게시글2</div>
              <div>소모임 게시글3</div>
              <div>소모임 게시글4</div>
              <div>소모임 게시글5</div>
            </div>
          </div>
        </div>
        <div className="w-full mb-5">
          <h1 className="w-full p-2 mb-3 border-b bg-gray-100 font-semibold text-lg text-gray-600">
            정기모임 게시글
          </h1>
          <div className="w-full px-2">
            <div>정기모임 게시판 글이 들어가는 영역입니다.</div>
          </div>
        </div>
        <div className="w-full my-10">
          <button
            className="block w-1/4 p-2 m-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-300 cursor-pointer"
            onClick={handleClickMeetingAdd}
          >
            정기모임 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
