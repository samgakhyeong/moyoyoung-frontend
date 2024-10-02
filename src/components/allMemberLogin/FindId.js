import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function FindId() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center w-full shadow-md max-w-lg ml-10 mb-20">
          <h1 className="mb-8 font-bold text-4xl">아이디 찾기</h1>

          <p className="mb-8 font-bold">
            이름
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

          <p className="mb-8 font-bold">
            휴대폰 번호
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

          <button className="py-2 mb-5 rounded-md bg-green-200 hover:bg-green-300 px-3 text-sm font-semibold leading-6 text-gray-700">
            아이디 찾기
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
