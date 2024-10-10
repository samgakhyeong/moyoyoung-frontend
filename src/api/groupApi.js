// 생성자 : Haein

import axiosInstance from "../axiosInstance";

export const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/group`;

// 소모임 생성하기(파일첨부)
export const groupRegister = async (group) => {
  // const header = { headers: { "Content-Type": "multipart/form-data" } };
  // 경로 뒤 '/' 참고해서 주의하기!!!!
  // const res = await axiosInstance.post(`${prefix}/`, group, header);
  const res = await axiosInstance.post(`${prefix}/register`, group);
  return res.data;
};

// 소모임 데이터 가져오기
export const getOneGroup = async (id) => {
  const res = await axiosInstance.get(`${prefix}/${id}`);
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
