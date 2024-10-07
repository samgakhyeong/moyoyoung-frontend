// 생성자 : Haein

import { useEffect, useState } from "react";

const initState = {
  dtoList: [],
};

// todo/ListComponent.js 참고하기
// 온라인과 오프라인 어떻게 나눠서 가져올지 생각해봐야함

const ListComponent = () => {
  return (
    <>
      <div className="flex w-full p-2 mb-4 rounded-lg bg-gray-50 shadow-lg">
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
          <p className="px-2 pb-1 text-base">소모임명</p>
          <p className="px-2 pb-1 text-sm">소모임한줄소개</p>
          <div className="flex">
            <div className="px-2 py-1 bg-emerald-500 text-xs text-white rounded-2xl">
              소모임 카테고리
            </div>
            <div className="px-2 py-1 text-xs">소모임 회원수</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListComponent;
