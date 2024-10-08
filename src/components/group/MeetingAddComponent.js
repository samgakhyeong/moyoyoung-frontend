// 생성자 : Haein
import { useEffect, useState } from "react";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";
import { useNavigate } from "react-router-dom";
import { getOneGroup } from "../../api/groupApi";
import { meetingRegister } from "../../api/meetingApi";

const initGroup = {
  title: "",
};
const initState = {
  title: "",
  content: "",
  meetingDate: null,
};

const MeetingAddComponent = ({ id }) => {
  const navigate = useNavigate();

  const [fetching, setFetching] = useState(false);
  const [group, setGroup] = useState({ ...initGroup });
  const [meeting, setMeeting] = useState({ ...initState });
  const [result, setResult] = useState(null);

  useEffect(() => {
    setFetching(true);
    getOneGroup(id).then((data) => {
      setGroup(data);
      setFetching(false);
    });
  }, [id]);

  // 데이터 입력할때마다 값 넣기
  const handleChangeMeeting = (e) => {
    const { name, value } = e.target;
    setMeeting((prevMeeting) => ({
      ...prevMeeting, // 이전상태의 prevGroup을 복사
      [name]: value,
    }));
  };

  const handleClickAdd = (e) => {
    const formData = new FormData();
    formData.append("title", meeting.title);
    formData.append("content", meeting.content);
    formData.append("meetingDate", meeting.meetingDate);

    setFetching(true); // loading 띄움
    console.log(formData);

    meetingRegister(formData)
      .then((data) => {
        setFetching(false); // loading 닫음
        setResult(data.result);
      })
      .catch((error) => {
        setFetching(false); // 에러 발생시 loading 닫음
      });
  };

  const closeModal = () => {
    setResult(null);

    // 소모임 홈으로 이동
    navigate({
      pathname: `/group/read/${id}`,
    });
  };

  return (
    <>
      {fetching ? <FetchingModal /> : <></>}
      {result ? (
        <ResultModal
          title={"SUCESS"}
          content={`${result}번 정기모임 생성완료`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
      <div className="w-full pb-2 mb-5 text-2xl border-b-2">
        <input
          type="text"
          value={group.title}
          className="focus:outline-none"
          readOnly
        ></input>
      </div>
      <div className="w-full mb-5">
        <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
          정기 모임명
        </label>
        <input
          type="text"
          name="title"
          value={meeting.title}
          onChange={handleChangeMeeting}
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
          name="meetingDate"
          value={meeting.meetingDate}
          onChange={handleChangeMeeting}
          className="w-full h-10 px-2 border-b border-gray-200 focus:outline-none"
        ></input>
      </div>
      <div className="w-full">
        <textarea
          name="content"
          value={meeting.content}
          onChange={handleChangeMeeting}
          className="w-full min-h-96 p-2 text-sm border border-gray-200 focus:outline-none"
          placeholder="정기모임 소개말을 작성해주세요."
        ></textarea>
      </div>
      <div className="w-full my-10">
        <button
          type="button"
          onClick={handleClickAdd}
          className="block w-1/4 p-2 m-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-500 cursor-pointer"
        >
          정기모임 생성하기
        </button>
      </div>
    </>
  );
};

export default MeetingAddComponent;
