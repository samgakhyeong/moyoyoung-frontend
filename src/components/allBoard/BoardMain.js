import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import { usePostContext } from "./PostContext";

export default function BoardMain() {
    const { posts } = usePostContext(); // posts를 가져옴
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const postsPerPage = 1; // 한 페이지에 최대 게시글 수

    // 페이지네이션 계산
    const indexOfLastPost = currentPage * postsPerPage; // 마지막 게시글 인덱스
    const indexOfFirstPost = indexOfLastPost - postsPerPage; // 첫번째 게시글 인덱스
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지에 맞는 게시글

    const totalPages = Math.ceil(posts.length / postsPerPage); // 총 페이지 수 계산

    // 페이지 변경 함수
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // 페이지 상태 변경
    };

    useEffect(() => {
        // 페이지가 바뀔 때마다 자동으로 갱신되도록 설정
        setCurrentPage(1);  // 처음 페이지로 돌아가게 할 수도 있습니다. 필요 시 조정
    }, [posts]);

    return (
        <div>
            <Header />
            <div className="flex items-center justify-end pr-[15.4rem] pt-6">
                <button className="text-xl font-bold hover:text-gray-500 transition duration-500">
                    <Link to="/allBoard/BoardInput">게시글 작성</Link>
                </button>
            </div>

            <div className="flex justify-center items-center h-screen mr-[4.6rem]">
                <div className="flex flex-col items-center justify-center w-[64rem] shadow-md ml-[4.6rem] pr-[50rem] h-[calc(100vh-56px)]">
                    <div className="font-bold text-2xl">게시글 리스트</div>

                    <div className="h-full overflow-y-auto">
                        {currentPosts.length === 0 ? (
                            <p>작성된 게시글이 없습니다.</p>
                        ) : (
                            currentPosts.map((post) => (
                                <div key={post.id} className="border-b py-4 px-4 m-4 ml-[51rem] bg-gray-400 w-[60rem]">
                                    <Link to={`/allBoard/BoardDetail/${post.id}`} className="font-bold text-xl">
                                        {post.title}
                                    </Link>
                                    {post.file && <div className="text-lg mb-2">{post.file.name}</div>}
                                    <div className="text-lg">{post.content}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* 페이지 네비게이션 버튼 */}
            <div className="flex justify-center items-center">
                <div className="flex space-x-2">
                    {/* 페이지 번호 버튼 1~5 고정 */}
                    {[...Array(5).keys()].map((page) => (
                        <button
                            key={page + 1}
                            onClick={() => handlePageChange(page + 1)} // 페이지 번호 클릭 시, 페이지 상태 변경
                            className={`bg-emerald-500 text-black px-4 py-2 rounded mb-6 hover:text-white transition duration-300 ${currentPage === page + 1 ? 'bg-emerald-700' : ''}`}
                        >
                            {page + 1}
                        </button>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}