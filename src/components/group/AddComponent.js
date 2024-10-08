// Haein
import { useRef, useState } from "react";
import { groupRegister } from "../../api/groupApi";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";

const initState = {
  checkOnline: false, // 온라인여부
  country: "", // 모임지역
  category: "", // 모임카테고리
  title: "", // 모임명
  content: "", // 모임소개글
  files: [], // 모임프로필사진
};

const AddComponent = () => {
  const [group, setGroup] = useState({ ...initState });
  const uploadRef = useRef();

  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // 데이터 입력할때마다 값 넣기
  const handleChangeGroup = (e) => {
    const { name, value } = e.target;
    setGroup((prevGroup) => ({
      ...prevGroup, // 이전상태의 prevGroup을 복사
      // 온라인오프라인 boolean 값 때문에 아래에서 값 변환처리함 그 외 값은 value 값으로 넣음
      [name]: value === "true" ? true : value === "false" ? false : value,
    }));
  };

  const handleClickAdd = (e) => {
    const files = uploadRef.current.files;

    // 1.유효성검사
    // if (
    //   !group.checkOnline ||
    //   !group.country ||
    //   !group.category ||
    //   !group.title ||
    //   !group.content
    // ) {
    //   setErrorMsg(true);
    //   return;
    // }

    // 2.유효성 통과시 데이터 저장하기
    const formData = new FormData();
    formData.append("files", files[0]);
    formData.append("checkOnline", group.checkOnline);
    formData.append("country", group.country);
    formData.append("category", group.category);
    formData.append("title", group.title);
    formData.append("content", group.content);

    setFetching(true); // loading 띄움

    console.log("======================");
    console.log(formData);

    groupRegister(formData)
      .then((data) => {
        setFetching(false); // loading 닫음
        setResult(data.result);
      })
      .catch((error) => {
        setFetching(false); // 에러 발생시 로딩 닫음
        setErrorMsg("소모임 생성 중 오류가 발생했습니다.");
      });
  };

  const closeModal = () => {
    setResult(null);
    setErrorMsg(null);
  };

  return (
    <div>
      {fetching ? <FetchingModal /> : <></>}
      {result ? (
        <ResultModal
          title={"SUCESS"}
          content={`${result}번 소모임생성완료`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
      {/* {errorMsg ? (
        <ResultModal
          title={"ERROR"}
          content={"모든 항목 필수 입력사항입니다. 내용을 입력해주세요."}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )} */}
      {/* select 선택라인 */}
      <div className="mb-5">
        <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
          모임유형
        </label>
        <select
          name="checkOnline"
          value={group.checkOnline ? "true" : "false"}
          onChange={handleChangeGroup}
          className="w-full h-full p-2 cursor-pointer text-base font-medium text-gray-600 duration-500 border-b border-gray-300 focus:outline-none focus:ring-emerald-500"
        >
          <option value="" selected disabled>
            모임유형을 선택하세요.
          </option>
          <option value="true">온라인</option>
          <option value="false">오프라인</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
          모임지역
        </label>
        <select
          name="country"
          value={group.country}
          onChange={handleChangeGroup}
          className="w-full h-full p-2 cursor-pointer text-base font-medium text-gray-600 duration-500 border-b border-gray-300 focus:outline-none focus:ring-emerald-500"
        >
          <option value="" selected disabled>
            지역을 선택하세요.
          </option>
          <option value="seoul">서울</option>
          <option value="busan">부산</option>
          <option value="daegu">대구 </option>
          <option value="incheon">인천</option>
          <option value="gwangju">광주</option>
          <option value="daejeon">대전</option>
          <option value="ulsan">울산</option>
          <option value="gangwon">강원</option>
          <option value="gyeonggi">경기</option>
          <option value="gyeongnam">경남</option>
          <option value="gyeongbuk">경북</option>
          <option value="jeonnam">전남</option>
          <option value="jeonbuk">전북</option>
          <option value="jeju">제주</option>
          <option value="chungnam">충남</option>
          <option value="chungbuk">충북</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
          모임 카테고리
        </label>
        <select
          name="category"
          value={group.category}
          onChange={handleChangeGroup}
          className="w-full h-full p-2 cursor-pointer text-base font-medium text-gray-600 duration-500 border-b border-gray-300 focus:outline-none focus:ring-emerald-500"
        >
          <option value="" selected disabled>
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
          모임 프로필 사진
        </label>
        <input
          type={"file"}
          name="files"
          ref={uploadRef}
          multiple={false}
          className="w-full h-full p-2 border-b border-gray-200 focus:outline-none"
        ></input>
      </div>
      {/* 작성영역 */}
      <div className="w-full mb-5">
        <label className="inline-block w-full p-2 me-5 font-bold text-gray-600 bg-gray-50">
          소모임명
        </label>
        <input
          type="text"
          name="title"
          value={group.title}
          onChange={handleChangeGroup}
          className="w-full h-10 px-2 border-b border-gray-200 focus:outline-none"
          placeholder="소모임의 이름을 입력해주세요."
        ></input>
      </div>
      <div className="w-full">
        <textarea
          name="content"
          value={group.content}
          onChange={handleChangeGroup}
          className="w-full min-h-96 p-2 text-sm border border-gray-200 focus:outline-none"
          placeholder="소모임 소개말을 작성해주세요."
        ></textarea>
      </div>
      <div className="w-full my-10">
        <button
          type="button"
          onClick={handleClickAdd}
          className="block w-1/4 p-2 m-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-colors duration-500 cursor-pointer"
        >
          소모임 생성하기
        </button>
      </div>
    </div>
  );
};

export default AddComponent;
