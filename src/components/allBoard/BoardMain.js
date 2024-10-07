import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link,useNavigate } from "react-router-dom";
import { usePostContext } from "./PostContext";

export default function BoardMain() {
    const { posts, currentPage, changePage } = usePostContext(); // posts를 가져옴
    const navigate = useNavigate(); // 페이지 이동을 위한 hook

    const handlePageChange = (pageNumber) => {
        changePage(pageNumber); // 페이지 번호 변경
    };

    const handlePostCreation = () => {
        // 현재 페이지에서 게시글 수를 체크
        const pagePosts = posts[currentPage] || []; // 현재 페이지에 해당하는 게시글 가져오기

        // 게시글이 초과되었을 경우
        if (pagePosts.length >= 2) {
            alert("게시글 한 페이지당 2개까지만 추가할 수 있습니다. 다음 페이지에 작성해주세요.");
            // 게시글 작성 페이지로 이동 (다음 페이지로 이동)
            navigate(`/allBoard/BoardInput?page=${currentPage + 1}`);
        } else {
            navigate("/allBoard/BoardInput"); // 게시글 작성 페이지로 이동
        }
    };


    return (
        <div>
            <Header />
            <div className="flex items-center justify-end pr-[15.4rem] pt-6">
                <button  onClick={handlePostCreation} className="text-xl font-bold hover:text-gray-500 transition duration-500 ">
                    <Link to="/allBoard/BoardInput">게시글 작성</Link>
                </button>
            </div>

            <div className="flex justify-center items-center h-screen mr-[4.6rem]">
                <div className="flex flex-col items-center justify-center w-[64rem] shadow-md ml-[4.6rem] pr-[50rem] h-[calc(100vh-56px)]">
                    <div className="font-bold text-2xl">게시글 리스트</div>


                   <div className="h-full overflow-y-auto"> 
                        {posts.length === 0 ? (
                            <p>작성된 게시글이 없습니다.</p>
                        ) : (
                            posts.map((post) => (
                                <div key={post.id} className="border-b py-4 px-4 m-4 ml-[51rem] bg-gray-400 w-[60rem] ">
                                    <Link to={`/allBoard/BoardDetail/${post.id}`} className="font-bold text-xl">
                                        {post.title}
                                    </Link>
                                    {post.file && <div className="text-lg mb-2">{post.file.name}</div>}
                                    <div className="text-lg">{post.content}</div> {/* 내용은 링크 없이 보여줌 */}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>


          <div className="flex flex-row justify-center gap-4">
                {/* 페이지 버튼을 currentPage에 맞춰 초기화 */}
                {[1,2,3,4,5].map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`bg-emerald-500 text-black px-4 py-2 rounded mb-6 hover:text-white transition duration-300 ${currentPage === page ? 'bg-emerald-700' : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <Footer />
        </div>

    );
}
