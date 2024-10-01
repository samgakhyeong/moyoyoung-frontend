import { Link } from "react-router-dom";
export default function Login() {
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
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="ids"
                className="block text-base font-bold leading-6 text-gray-900"
              >
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="ids"
                  name="memberID"
                  type="text"
                  required
                  autoComplete="on"
                  className="block w-full rounded-md py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200 px-2"
                />
              </div>
            </div>
            {/* 비밀번호 라인 */}
            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-bold leading-6 text-gray-900 "
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
                  name="memberPW"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md py-2 text-gray-900 shadow-sm ring-1  ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200 px-2"
                />
              </div>
            </div>
            {/* 로그인 라인 */}
            <div>
              <button
                type="submit"
                className="flex w-full py-2 justify-center rounded-md bg-green-300 hover:bg-green-400 px-3 text-sm font-semibold leading-6 text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                로그인
              </button>
            </div>
          </form>
{/* 아이디/비밀번호/회원가입 라인 */}
          <div className="flex justify-around mt-5 mr-4 text-sm font-bold text-gray-700 ">
            <button type="button"
              className="hover:underline"
            >
              <Link to="/allMemberLogin/FindId">아이디 찾기</Link>
            </button>
            <button type="button"
              className="hover:underline"
            >
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
