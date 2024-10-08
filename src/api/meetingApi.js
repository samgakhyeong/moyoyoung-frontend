// 생성자 : Haein

import axiosInstance from "../axiosInstance";
import { API_SERVER_HOST } from "./groupApi";

const prefix = `${API_SERVER_HOST}/api/meeting`;

// 정기모임 생성하기
export const meetingRegister = async (meeting) => {
  const res = await axiosInstance.post(`${prefix}/register`, meeting);
  return res.data;
};
