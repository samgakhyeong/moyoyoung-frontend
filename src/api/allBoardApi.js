import axios from 'axios';

export const API_URL = 'http://localhost:8080'; // 백엔드 서버 URL
const prefix = `${API_URL}/api/allBoard`;

const boardApi = {
    // 포스트 생성
    createPost: async (title, content, myUserId, files) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('myUserId', myUserId);
        files.forEach(file => formData.append('files', file));

        try {
            const response = await axios.post(`${prefix}/posts/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    },

    // 포스트 수정
    modifyPost: async (id, title, content, files) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        files.forEach(file => formData.append('files', file));

        try {
            const response = await axios.put(`${prefix}/posts/modify/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error modifying post:', error);
            throw error;
        }
    },

    // 특정 포스트 조회
    getPostById: async (id) => {
        try {
            const response = await axios.get(`${prefix}/posts/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching post by ID:', error);
            throw error;
        }
    },

    // 포스트 목록 조회
    listPosts: async (page = 0, size = 10) => {
        try {
            const response = await axios.get(`${prefix}/posts/list`, {
                params: { page, size },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching posts list:', error);
            throw error;
        }
    },

    // 댓글 생성
    createComment: async (commentDTO, currentUser) => {
        try {
            const response = await axios.post(`${prefix}/comments`, commentDTO, {
                headers: {
                    'Content-Type': 'application/json',
                    'Session-User': currentUser, // 세션에서 현재 사용자 정보 필요
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error creating comment:', error);
            throw error;
        }
    },

    // 특정 포스트에 대한 댓글 목록 조회
    getCommentsByPostId: async (postId) => {
        try {
            const response = await axios.get(`${prefix}/comments/post/${postId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching comments by post ID:', error);
            throw error;
        }
    },

    // 댓글 수정
    updateComment: async (commentId, commentDTO) => {
        try {
            const response = await axios.put(`${prefix}/comments/${commentId}`, commentDTO, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error updating comment:', error);
            throw error;
        }
    },

    // 댓글 삭제
    deleteComment: async (commentId) => {
        try {
            const response = await axios.delete(`${prefix}/comments/${commentId}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting comment:', error);
            throw error;
        }
    },
};

export default boardApi;
