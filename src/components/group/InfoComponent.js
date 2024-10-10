// 생성자 : Haein
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImage } from "../../api/mainApi";
import { getOneGroup } from "../../api/groupApi";
import { API_SERVER_HOST } from "../../api/groupApi";
import FetchingModal from "../common/FetchingModal";

const initState = {};

const host = API_SERVER_HOST;

const InfoComponent = ({ id }) => {
  const navigate = useNavigate();

  const [group, setGroup] = useState(initState);
  // const [groupImage, setGroupImage] = useState("");
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getOneGroup(id).then((data) => {
      setGroup(data);
      setFetching(false);
      console.log("===========data===========");
      console.log(data);
    });

    // getImage(id).then((data) => {
    //   console.log("============image=============");
    //   console.log(data);
    //   setGroupImage(data);
    // });
  }, [id]);

  return (
    <>
      {fetching ? <FetchingModal /> : <></>}
      <div className="w-full h-60">
        <img
          className="w-full h-full"
          src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
          // src={groupImage}
          alt="groupProfileImage"
        />
      </div>
      <div className="w-full px-3 py-5">
        <div className="w-full pb-2 mb-5 text-2xl border-b-2 border-gray-200">
          <h1>{group.title}</h1>
        </div>
        <div className="flex w-full mb-5">
          <div className="w-1/3 me-2">
            <h1 className="w-full p-2 mb-3 border-b bg-gray-100 font-semibold text-lg text-gray-600">
              소모임 소개글
            </h1>
            <div className="w-full px-2">{group.content}</div>
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
            className="block w-1/4 p-2 m-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-500 cursor-pointer"
            onClick={() => navigate(`/group/meetingAdd/${id}`)}
          >
            정기모임 만들기
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoComponent;
