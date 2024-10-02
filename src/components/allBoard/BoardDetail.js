import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { usePostContext } from "./PostContext";
import { Link, useParams } from "react-router-dom";

export default function BoardDetail() {
    const { posts } = usePostContext(); // 게시글 목록 가져오기
    const { id } = useParams(); // URL에서 게시글 ID 가져오기
    const post = posts.find((p) => p.id === parseInt(id)); // 해당 ID의 게시글 찾기

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center w-full shadow-md max-w-6xl ml-10 h-[calc(100vh-56px)]">
                    <div>
                        <div className="bg-emerald-400 h-20 mt-6 flex justify-center items-center text-xl font-bold w-[60rem]">
                            {post.title} {/* 게시글 제목 표시 */}
                        </div>
                        <div className="bg-emerald-400 h-[10rem] mt-6 flex justify-center items-center text-xl font-bold w-[60rem]">
                            {post.content} {/* 게시글 내용 표시 */}
                        </div>
                        <div className="bg-emerald-400 h-[10rem] mt-6 flex justify-center items-center text-xl font-bold w-[60rem]">
                            댓글 목록
                        </div>
                        <div>
                            <label
                                className="text-xl font-bold mb-2 flex justify-center"
                                htmlFor="content"
                            >
                                댓글 창
                            </label>
                            <textarea
                                id="content"
                                className="border border-gray-300 rounded w-[30rem] p-2 ml-[15rem]"
                                rows="3"
                                required
                            />
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-emerald-400 h-12 mt-2 flex justify-center items-center text-xl font-bold w-[10rem] rounded hover:text-white transition duration-300">
                                <Link to="/allBoard/BoardMain">게시글 목록 이동</Link>
                            </div>
                            <div className="bg-emerald-400 h-12 mt-2 ml-[40rem] flex justify-center items-center text-xl font-bold w-[10rem] rounded hover:text-white transition duration-300">
                                댓글 입력
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
