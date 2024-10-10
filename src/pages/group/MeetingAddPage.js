// 생성자 : Haein

import { useParams } from "react-router-dom";
import MeetingAddComponent from "../../components/group/MeetingAddComponent";

const MettingAdd = () => {
  const { id } = useParams();

  return (
    <div className="w-full px-3 py-5">
      <div className="w-full mb-5">
        <h1 className="text-lg">정기모임 생성</h1>
      </div>
      <MeetingAddComponent id={id} />
    </div>
  );
};

export default MettingAdd;
