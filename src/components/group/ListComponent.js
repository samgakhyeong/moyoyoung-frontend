// 생성자 : Haein

import { useEffect, useState } from "react";
import { getGroupList } from "../../api/mainApi";
import { getImage } from "../../api/mainApi";
import { useNavigate } from "react-router-dom";

const initState = {
  dtoList: [],
};

const ListComponent = ({ isOnline }) => {
  const navigate = useNavigate();

  const [onlineGroups, setOnlineGroups] = useState([]);
  const [offlineGroups, setOfflineGroups] = useState([]);
  // const [serverData, setServerData] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    getGroupList().then((data) => {
      console.log(data);
      setOnlineGroups(data.onlineGroups || []);
      setOfflineGroups(data.offlineGroups || []);
      setFetching(false);
    });

    // getImage(id).then((data) => {
    //   console.log(data);
    // });
  }, []);

  return (
    <>
      {isOnline
        ? onlineGroups.map((group) => (
            <div
              key={group.id}
              className="flex w-full p-2 mb-4 rounded-lg bg-gray-50 shadow-lg"
              onClick={() => navigate(`/group/read/${group.id}`)}
            >
              <div className="w-20 h-20 me-3 rounded-full shadow-lg">
                <div className="w-full h-full text-center overflow-hidden">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
                    alt="groupProfileImage"
                  />
                </div>
              </div>
              <div className="h-20">
                <p className="px-2 pb-1 text-base">{group.title}</p>
                <p className="px-2 pb-1 text-xs">{group.country}</p>
                <div className="flex">
                  <div className="px-2 py-1 bg-emerald-500 text-xs text-white rounded-2xl">
                    {group.category}
                  </div>
                </div>
              </div>
            </div>
          ))
        : offlineGroups.map((group) => (
            <div
              key={group.id}
              className="flex w-full p-2 mb-4 rounded-lg bg-gray-50 shadow-lg"
            >
              <div className="w-20 h-20 me-3 rounded-full shadow-lg">
                <div className="w-full h-full text-center overflow-hidden">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg"
                    alt="groupProfileImage"
                  />
                </div>
              </div>
              <div className="h-20">
                <p className="px-2 pb-1 text-base">{group.title}</p>
                <p className="px-2 pb-1 text-xs">{group.country}</p>
                <div className="flex">
                  <div className="px-2 py-1 bg-emerald-500 text-xs text-white rounded-2xl">
                    {group.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default ListComponent;
