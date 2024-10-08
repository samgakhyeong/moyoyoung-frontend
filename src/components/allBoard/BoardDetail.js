
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePostContext } from './PostContext';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function BoardDetail() {
    const { posts } = usePostContext();
    const { page,id } = useParams(); // URL에서 id만 가져옵니다.

 
    // const allPosts = Object.values(posts).flat(); 
    const currentPosts = posts[page] || [];
    // 게시글을 id로 찾아냅니다.
    const post = currentPosts.find((p) => p.id === parseInt(id));

    // 댓글 상태 관리
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(post?.comments || []);

    // 게시글이 변경될 때 댓글 목록 업데이트
    useEffect(() => {
        if (post) {
            setComments(post.comments || []);
        }
    }, [post]);

    // 댓글 입력값 변화 처리
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    // 댓글 제출 처리
    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments((prevComments) => [...prevComments, comment]); // 댓글 추가
            setComment(''); // 입력 필드 비우기
        } else {
            alert("댓글을 입력하세요."); // 댓글이 비어있을 경우 경고
        }
    };

    // 게시글이 없는 경우 처리
    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center w-full shadow-md max-w-5xl h-[calc(100vh-24px)]">
                    <div className="mb-[4rem]">
                        <div className="bg-emerald-400 h-20 mt-6 flex justify-center items-center text-xl font-bold w-[60rem] overflow-y-auto">
                            {post.title}
                        </div>
                        <div className="bg-emerald-400 h-[10rem] mt-6 flex justify-center items-center text-xl font-bold w-[60rem] overflow-auto">
                            {post.content}
                        </div>

                        <div className="bg-emerald-400 h-[10rem] mt-6 flex flex-col justify-start items-start text-xl font-bold w-[60rem] overflow-auto p-4">
                            <h2 className="text-xl font-semibold mb-4">댓글 목록</h2>
                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <div key={index} className="mb-2">
                                        <span className="text-md">
                                            {index + 1}번째: {comment}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="text-md">댓글이 없습니다. 글을 작성해주세요.</div>
                            )}
                        </div>

                        <div className="mt-[2rem]">
                            <label className="text-xl font-bold mb-2 flex justify-center" htmlFor="comment">
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
