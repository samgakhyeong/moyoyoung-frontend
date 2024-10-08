// 생성자 : Haein

const Footer = () => {
  return (
    <footer>
      <div className="bg-white border-t border-gray-200">
        <div className="w-full max-w-screen-lg mx-auto py-6">
          <div className="text-gray-600 mb-6">
            <p className="font-bold text-xl text-emerald-500">
              주식회사 모여용
            </p>
            <div className="text-xs leading-relaxed mt-4">
              <p>대표: 김용 | 개인정보관리책임자: 김용</p>
              <p>
                사업자등록번호: 123-12-12345 | 통신판매: 제 2024-부산센텀-0001
              </p>
              <p>
                이메일:{" "}
                <a
                  href="mailto:moyoyoung@moyoyoung.com"
                  className="text-emerald-500"
                >
                  moyoyoung@moyoyoung.com
                </a>{" "}
                | 대표번호: 051-123-1234
              </p>
              <p>주소: 부산시 해운대구 센텀동로41 부산벤처타운 6층</p>
              <p>
                고객센터: 051-123-1234 | 운영시간: (월~일) 오전 9:00 ~ 오후 6:00
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
              <li>
                <a
                  href="#!"
                  className="hover:text-emerald-500 transition-colors duration-500"
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="hover:text-emerald-500 transition-colors duration-500"
                >
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="hover:text-emerald-500 transition-colors duration-500"
                >
                  사업자정보확인
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              &copy; 2024 모여용. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
