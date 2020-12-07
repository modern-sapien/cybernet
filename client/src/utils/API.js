import axios from "axios";

export default {

    // ===================
    // Routes for User Auth
    // ====================
    registerUser: function(userData){
        return axios.post(`/api/v1/auth/register`, userData)
    },

    loginUser: function(userData) {
        return axios.post(`/api/v1/auth/login`, userData)
    },

    updateUser: function(userData) {
        return axios.put(`/api/v1/auth/updateDetails`, userData)
    },

    updatePassword: function(userData) {
        return axios.put(`/api/v1/auth/updatePassword`, userData)
    },

    // deleteUser: function(userId) {
    //     return axios.put(`/api/v1/auth/updatePassword`, userData)
    // }

    // ===================
    // Routes for Users
    // ====================
    getUsers: function() {
        return axios.get("/api/v1/users")
    },
    
    getUser: function(userId) {
        return axios.get(`/api/v1/users/${userId}`)
    },

    // ===================
    // Routes for Images
    // ===================
    getImages: function() {
        return axios.get("/api/v1/images")
    },

    getImage: function(imageId) {
        return axios.get(`/api/v1/images/${imageId}`)
    },
    // find all images by USER
    getImageByUser: function(userId) {
        return axios.get(`/api/v1/users/${userId}/images`)
    },

    addImage: function(userId) {
        return axios.post(`/api/v1/users/${userId}/images`)
    },

    updateImage: function(imageId) {
        return axios.put(`/api/vi/images/${imageId}`)
    },

    deleteImage: function(imageId) {
        return axios.delete(`/api/vi/images/${imageId}`)
    },

    // ===================
    // Routes for Comments
    // ===================
    getComments: function() {
        return axios.get("/api/v1/comments")
    },

    getComment: function(commentId) {
        return axios.get(`/api/v1/images/${commentId}`)
    },
    // Add comment to an image
    addComment: function(userId) {
        return axios.post(`/api/v1/images/${userId}/comments`)
    },

    updateComment: function(commentId) {
        return axios.put(`/api/v1/images/${commentId}`)
    },

    deleteComment: function(commentId) {
        return axios.delete(`/api/v1/images/${commentId}`)
    },



}