// PostContext.js
import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    
    const addPost = (title, content, file) => {
        if (posts.length >= 1) {  // 게시글이 이미 1개 이상인 경우
            return false;  // 게시글 추가를 하지 않고 false 반환
        }

        const postNumber = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
        setPosts(prevPosts => [
            ...prevPosts, 
            { 
                id: postNumber, 
                title: `${postNumber}번째 제목: ${title}`, 
                content, 
                file
            }
        ]);
        return true;  // 게시글 추가 성공
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
