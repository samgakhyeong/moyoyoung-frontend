
import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState({}); // 페이지별 게시글을 저장하기 위한 객체

    const addPost = (title, content, file,page,navigate) => {
        setPosts(prevPosts => {
            const newPosts = { ...prevPosts };
    
            if (!newPosts[page]) {
                newPosts[page] = []; // 페이지가 처음인 경우 빈 배열 생성
            }
    
            // 게시글이 1개 이상인 경우
            if (newPosts[page].length >= 1) {
                alert("게시글 한 페이지당 1개까지만 추가할 수 있습니다."); // 경고 메시지
                navigate(`/allBoard/BoardMain?page=${page}`); // 경고 후 BoardMain으로 리디렉션
                return prevPosts; // 상태를 변경하지 않고 기존 상태 반환
            }
    
            const postNumber = newPosts[page].length > 0 ? Math.max(...newPosts[page].map(post => post.id)) + 1 : 1;

                     // 게시글 추가
                     newPosts[page].push({ id: postNumber, title: `${postNumber}번째 제목: ${title}`, content, file });

                    // 게시글이 성공적으로 추가된 경우
            alert("게시글이 성공적으로 작성되었습니다.");
            navigate(`/allBoard/BoardMain?page=${page}`); // 게시글 작성 후 현재 페이지로 리디렉션

    
            return newPosts; // 새 상태 반환
        });
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePostContext must be used within a PostProvider');
    }
    return context;
};
