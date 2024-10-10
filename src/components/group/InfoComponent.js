// 생성자 : Haein
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImage } from "../../api/mainApi";
import { getGroupDetails } from "../../api/groupApi";
import FetchingModal from "../common/FetchingModal";

const initState = {};

const InfoComponent = ({ id }) => {
  const navigate = useNavigate();

  const [group, setGroup] = useState(initState);
  const [metting, setMeeting] = useState({});
  const [groupImage, setGroupImage] = useState({});
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getGroupDetails(id)
      .then((data) => {
        setGroup(data.group);
        setMeeting(data.meeting);
      })
      .finally(() => {
        setFetching(false);
      });

    getImage(id).then((imageData) => {
      const blob = new Blob([imageData], { type: "image/png" }); // Blob 객체 생성 (바이너리 데이터를 받았다고 가정)
      const imageUrl = URL.createObjectURL(blob); // Blob URL 생성
      setGroupImage(imageUrl);
    });
  }, [id]);

  return (
    <>
      {fetching ? <FetchingModal /> : <></>}
      <div className="w-full h-60">
        <img
          className="w-full h-full"
          src={groupImage}
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
            정기모임
          </h1>
          <div className="w-full">
            <div className="w-full text-sm p-5 border rounded bg-white shadow-md">
              <dl className="mb-3 border-b-2">
                <dt className="text-gray-400 font-semibold border-s-4 border-emerald-500 ps-2">
                  모임 작성일자
                </dt>
                <dd className="px-4 py-3 text-gray-600 font-semibold">
                  {metting.createDate}
                </dd>
              </dl>
              <dl className="mb-3 border-b-2">
                <dt className="text-gray-400 font-semibold border-s-4 border-emerald-500 ps-2">
                  정기모임 이름
                </dt>
                <dd className="px-4 py-3 text-gray-600 font-semibold">
                  {metting.title}
                </dd>
              </dl>
              <dl className="mb-3 border-b-2">
                <dt className="text-gray-400 font-semibold border-s-4 border-emerald-500 ps-2">
                  정기모임 내용
                </dt>
                <dd className="px-4 py-3 text-gray-600 font-semibold">
                  {metting.content}
                </dd>
              </dl>
              <dl>
                <dt className="text-gray-400 font-semibold border-s-4 border-emerald-500 ps-2">
                  정기모임 일시
                </dt>
                <dd className="px-4 py-3 text-gray-600 font-semibold">
                  {metting.meetingDate}
                </dd>
              </dl>
            </div>
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
