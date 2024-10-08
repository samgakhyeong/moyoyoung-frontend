import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState({}); // 페이지별 게시글을 저장하기 위한 객체
    const [editedPosts, setEditedPosts] = useState({}); // 페이지별 수정된 게시글 상태 관리

    // 게시글 수정 처리 (수정 시 updatedAt 갱신)
    const updateEditedPost = (page, id, title, content) => {
        setPosts((prevPosts) => {
            const newPosts = { ...prevPosts };
            const postIndex = newPosts[page]?.findIndex(post => post.id === id);

            if (postIndex !== -1) {
                newPosts[page][postIndex] = {
                    ...newPosts[page][postIndex],
                    title,
                    content,
                     updatedAt: new Date().toISOString(), // 수정된 시간 갱신
                    createdAt: new Date().toISOString(), // 작성일도 수정 후 현재 시간으로 갱신
                };
            }
            return newPosts;
        });

        // 수정된 내용을 상태에 반영
        setEditedPosts((prev) => ({
            ...prev,
            [page]: {
                ...prev[page],
                [id]: { title, content }
            }
        }));
    };

    // 게시글 추가
    const addPost = (title, content, file, page, createdAt, navigate) => {
        setPosts((prevPosts) => {
            const newPosts = { ...prevPosts };
            if (!newPosts[page]) {
                newPosts[page] = [];
            }

            // 게시글이 1개 이상인 경우
            if (newPosts[page].length >= 1) {
                alert("게시글 한 페이지당 1개까지만 추가할 수 있습니다.");
                navigate(`/allBoard/BoardMain?page=${page}`);
                return prevPosts;
            }

            const postNumber = newPosts[page].length > 0
                ? Math.max(...newPosts[page].map(post => post.id)) + 1
                : 1;

            newPosts[page].push({
                id: postNumber,
                title,
                content,
                file,
                createdAt,
                updatedAt: createdAt, // 처음 작성된 시간
            });

            alert("게시글이 성공적으로 작성되었습니다.");
            navigate(`/allBoard/BoardMain?page=${page}`);

            return newPosts;
        });
    };

    return (
        <PostContext.Provider value={{ posts, addPost, editedPosts, updateEditedPost }}>
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
