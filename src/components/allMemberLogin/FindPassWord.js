export default function FindPassWord() {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center w-full shadow-md max-w-lg ml-10 mt-20">
        
          <h1 className="mb-8 font-bold text-4xl">비밀번호 찾기</h1>
            <p className="mb-6 font-bold">아이디
            <div className="mt-2">
                        <input
                          id="idInputs"
                          name="memberInput"
                          type="email"
                          required
                          className="rounded-md py-2 px-2 mr-10 w-full ml-0 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200"
                        />
                      </div>
                      </p>
        
            <p className="mb-6 font-bold">이름
            <div className="mt-2">
                        <input
                          id="nameInputs"
                          name="nameInputCheck"
                          type="text"
                          required
                          className="rounded-md py-2 px-2 mr-10 w-full ml-0 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200"
                        />
                      </div>
            </p>
        
            <div className="flex items-center ml-28 mb-6">
              <p className="ml-2 font-bold">휴대폰 번호
              <div className="mt-2">
                        <input
                          id="telInputs"
                          name="telInputCheck"
                          type="tel"
                          required
                          className="rounded-md py-2 px-2 mr-10 w-full  text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200"
                        />
                      </div>
              </p>
              
              <button className="flex py-2 mt-8 ml-2 justify-center rounded-md bg-green-200 hover:bg-green-300 px-3 text-sm font-semibold leading-6 text-gray-700">본인 인증하기</button>
            </div>

            <p className="mb-6 font-bold">비밀번호 재설정 입력
            <div className="mt-2">
                        <input
                          id="idInputs"
                          name="memberInput"
                          type="email"
                          required
                          className="rounded-md py-2 px-2 mr-10 w-full ml-0 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200"
                        />
                      </div>
                      </p>

                      <p className="mb-6 font-bold">확인 비밀번호 입력
            <div className="mt-2">
                        <input
                          id="idInputs"
                          name="memberInput"
                          type="email"
                          required
                          className="rounded-md py-2 px-2 mr-10 w-full ml-0 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-200"
                        />
                      </div>
                      </p>
            
            <button className="py-2 mb-5 rounded-md bg-green-200 hover:bg-green-300 px-3 text-sm font-semibold leading-6 text-gray-700">비밀번호 재설정</button>
          </div>
        </div>
        
          );
}
