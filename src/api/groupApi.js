// 생성자 : Haein
import axiosInstance from "../axiosInstance";
import { API_SERVER_HOST } from "./mainApi";

const prefix = `${API_SERVER_HOST}/api/group`;

// 소모임 생성하기(파일첨부)
export const groupRegister = async (group) => {
  const res = await axiosInstance.post(`${prefix}/register`, group);
  return res.data;
};

// 소모임 데이터 가져오기
export const getGroupDetails = async (id) => {
  const res = await axiosInstance.get(`${prefix}/${id}`);
  return res.data;
};
