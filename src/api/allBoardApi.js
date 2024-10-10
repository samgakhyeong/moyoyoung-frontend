// 생성자 : Haein
import axiosInstance from "../axiosInstance";
import { API_SERVER_HOST } from "./mainApi";

const prefix = `${API_SERVER_HOST}/api/allBoard`;

// 소모임 게시글리스트 데이터 가져오기
export const list = async () => {
  const res = await axiosInstance.get(`${prefix}/posts/list`);
  return res.data;
};
