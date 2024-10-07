import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { usePostContext } from "./PostContext";
import { Link, useParams } from "react-router-dom";

export default function BoardDetail() {
    const { posts } = usePostContext(); // 게시글 목록 가져오기
    const { id } = useParams(); // URL에서 게시글 ID 가져오기
    const post = posts.find((p) => p.id === parseInt(id)); // 해당 ID의 게시글 찾기
    const [comment, setComment] = useState(""); // 댓글 상태 관리
    const [comments, setComments] = useState(post?.comments || []); // 댓글 목록 상태 관리

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value); // 댓글 입력값 업데이트
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === "") {
            alert("댓글 내용을 입력해주세요.");
            return;
        }

        // 댓글 목록에 새로운 댓글 추가
        const newComments = [...comments, comment];
        setComments(newComments); // 댓글 목록 상태 업데이트

        // 댓글 입력란 비우기
        setComment("");

        // 게시글의 댓글을 업데이트하려면, 여기서 PostContext 또는 다른 방법으로 처리해야 함
        // 예: addComment(post.id, newComments);
    };

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center w-full shadow-md max-w-5xl h-[calc(100vh-24px)]">
                    <div className="mb-[4rem]">
                        <div className="bg-emerald-400 h-20 mt-6 flex justify-center items-center text-xl font-bold w-[60rem] overflow-y-auto">
                            {post.title} {/* 게시글 제목 표시 */}
                        </div>
                        <div className="bg-emerald-400 h-[10rem] mt-6 flex justify-center items-center text-xl font-bold w-[60rem] overflow-auto">
                            {post.content} {/* 게시글 내용 표시 */}
                        </div>

                        {/* 댓글 목록 */}
                        <div className="bg-emerald-400 h-[10rem] mt-6 flex flex-col justify-start items-start text-xl font-bold w-[60rem] overflow-auto p-4">
    <h2 className="text-xl font-semibold mb-4">댓글 목록</h2>
    {comments.length > 0 ? (
        comments.map((comment, index) => (
            <div key={index} className="mb-2">
                <span className="text-md">
                    {index + 1}번째: {comment} {/* 댓글 앞에 번호 추가 */}
                </span>
            </div>
        ))
    ) : (
        <div className="text-md">댓글이 없습니다. 글을 작성해주세요.</div>
    )}
</div>

                        {/* 댓글 입력 */}
                        <div className="mt-[2rem]">
                            <label
                                className="text-xl font-bold mb-2 flex justify-center"
                                htmlFor="comment"
                            >
                                댓글 작성
                            </label>
                            <textarea
                                id="comment"
                                className="border border-gray-300 rounded w-[30rem] p-2 ml-[15rem]"
                                rows="3"
                                value={comment}
                                onChange={handleCommentChange}
                                required
                            />
                        </div>

                        {/* 댓글 제출 버튼 */}
                        <div className="flex flex-row mt-4">
                            <div className="bg-emerald-400 h-12 flex justify-center items-center text-xl font-bold w-[10rem] rounded hover:text-white transition duration-300">
                                <Link to="/allBoard/BoardMain">게시글 목록 이동</Link>
                            </div>
                            <div
                                onClick={handleCommentSubmit}
                                className="bg-emerald-400 h-12 ml-[39.8rem] flex justify-center items-center text-xl font-bold w-[10rem] rounded hover:text-white transition duration-300 cursor-pointer"
                            >
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
