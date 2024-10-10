// 생성자 : Haein

const ResultModal = ({ title, content, callbackFn }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[1055] flex h-full w-full place-items-center justify-center bg-black bg-opacity-20`}
      onClick={() => {
        if (callbackFn) {
          callbackFn();
        }
      }}
    >
      <div className="absolute bg-white shadow opacity-100 w-1/4 rounded overflow-hidden min-w-[600px]">
        <div className="justify-center bg-warning-400 py-14 bg-emerald-500 text-3xl font- text-white text-center">
          {title}
        </div>
        <div className="text-lg py-10 text-center">{content}</div>
        <div className="flex justify-center mb-10">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-2 rounded-full text-lg text-white transition-colors duration-500 cursor-pointer"
            onClick={() => {
              if (callbackFn) {
                callbackFn();
              }
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
