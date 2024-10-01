import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance';
import { setToken, setUserId } from '../../store'; // setUserId 액션을 추가하세요.

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'username') {
      setUsername(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      toast.error("아이디와 비밀번호를 입력해 주세요.");
      return;
    }

    setLoading(true);
    setPassword("");
    try {
      const response = await axiosInstance.post('http://localhost:8080/auth/login', {
        username,
        password,
      });

      dispatch(setToken(response.data.token));
      dispatch(setUserId(username))

      navigate('/'); // 홈으로 리디렉션
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (!error.response.data.success) {
          toast.error("로그인 실패, 아이디와 비밀번호를 확인해 주세요.");
        }
      } else {
        toast.error("서버에 문제가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 mt-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-12 w-auto"
        />
      </div>

      {/* 아이디 라인 */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-base font-bold leading-6 text-gray-900"
            >
              아이디
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="on"
                value={username}
                onChange={handleChange}
                className="block w-full rounded-md py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200 px-2"
              />
            </div>
          </div>
          <div>
            <div>
              <label
                htmlFor="password"
                className="block text-base font-bold leading-6 text-gray-900"
              >
                비밀번호
              </label>
              <div className="text-sm">
                {/* <a href="https://example.com" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a> */}
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={handleChange}
                className="block w-full rounded-md py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200 px-2"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full py-2 justify-center rounded-md bg-green-300 hover:bg-green-400 px-3 text-sm font-semibold leading-6 text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              로그인
            </button>
          </div>
        </form>
        {/* 아이디/비밀번호/회원가입 라인 */}
        <div className="flex justify-around mt-5 mr-4 text-sm font-bold text-gray-700">
          <button type="button" className="hover:underline">
            <Link to="/allMemberLogin/FindId">아이디 찾기</Link>
          </button>
          <button type="button" className="hover:underline">
            <Link to="/allMemberLogin/FindPassWord"> 비밀번호 찾기</Link>
          </button>
          <button type="button" className="hover:underline">
            <Link to="/allMemberLogin/LoginJoin">회원가입</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
