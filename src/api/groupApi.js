// 생성자 : Haein

import axiosInstance from "../axiosInstance";

export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/group`;

// 소모임 생성하기
export const register = async (groupObj) => {
  const res = await axiosInstance.post(`${prefix}/`, groupObj);
  return res.data;
};

// 정기모임 생성하기
// 백앤드에 없음?

// 소모임 데이터 가져오기
export const getOneGroup = async (id) => {
  const res = await axiosInstance.get(`${prefix}/${id}`);
  return res.data;
};

// 소모임 리스트 데이터 가져오기
export const getListGroup = async () => {
  const res = await axiosInstance.get(`${prefix}/list`);
  return res.data;
};

// 소모임의 최근게시글 리스트 가져오기
// 수정필요!!
// export const getPostMiniList = async (pageParam) => {
//   const { page, size } = pageParam;
//   const res = await axios.get(`${prefix}/list`, {
//     params: { page: page, size: size },
//   });
//   return res.data;
// };

// 소모임의 정기모임 게시물 리스트 가져오기
export const getMeeting = async (id) => {
  const res = await axiosInstance.get(`${prefix}/${id}`);
  return res.data;
};
