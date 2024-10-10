// 생성자 : Haein
import { useParams } from "react-router-dom";
import InfoComponent from "../../components/group/InfoComponent";

const Info = () => {
  const { id } = useParams();

  return (
    <div className="w-full">
      <InfoComponent id={id} />
    </div>
  );
};

export default Info;
