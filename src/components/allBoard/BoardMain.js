import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import { usePostContext } from "./PostContext";

export default function BoardMain() {
    const { posts } = usePostContext(); // posts를 가져옴

    return (
        <div>
            <Header />
            <div className="flex items-center justify-end pr-56 pt-6">
                <button className="text-xl font-bold hover:text-gray-500 transition duration-500">
                    <Link to="/allBoard/BoardInput">게시글 작성</Link>
                </button>
            </div>

            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center justify-center w-full shadow-md max-w-6xl ml-10 pr-[60rem] h-[calc(100vh-56px)]">
                    <div className="font-bold text-2xl">게시글 리스트</div>


                   <div className="h-full overflow-y-auto"> 
                        {posts.length === 0 ? (
                            <p>작성된 게시글이 없습니다.</p>
                        ) : (
                            posts.map((post) => (
                                <div key={post.id} className="border-b py-4 px-4 m-4 ml-[61rem] bg-gray-400 w-[70rem]">
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

            <div className="flex justify-center items-center">
                <div className="flex space-x-2">
                    <button className="bg-emerald-500 text-black px-4 py-2 rounded mb-6 hover:text-white transition duration-300">1</button>
                    <button className="bg-emerald-500 text-black px-4 py-2 rounded mb-6 hover:text-white transition duration-300">2</button>
                    <button className="bg-emerald-500 text-black px-4 py-2 rounded mb-6 hover:text-white transition duration-300">3</button>
                    <button className="bg-emerald-500 text-black px-4 py-2 rounded mb-6 hover:text-white transition duration-300">4</button>
                    <button className="bg-emerald-500 text-black px-4 py-2 rounded mb-6 hover:text-white transition duration-300">5</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
