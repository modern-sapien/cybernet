import axios from "axios";

export default {

    // ===================
    // Routes for User Auth
    // ====================

    // ===================
    // Routes for Users
    // ====================
    getUsers: function() {
        return axios.get("/api/v1/users")
    },
    
    getUser: function() {
        return axios.get("/api/v1/users/:id")
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
    }

    // ===================
    // Routes for Comments
    // ===================

    


}