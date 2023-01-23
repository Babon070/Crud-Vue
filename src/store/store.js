import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
    state: {
        posts: []
    },
    getters: {
        getPosts(state) {
            return state.posts;
        }
    },
    mutations: {
        setPosts(state, value) {
            state.posts = value;
        },
        deleteSinglePost(state) {
            return state.posts;
        },
        addSinglePost(state, payload) {
            return state.posts.unshift(payload);

        }
    },
    
    actions: {
        getPosts(context) {
            axios({
                method: 'get',
                url: 'http://94.158.54.194:9092/api/product',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                context.commit("setPosts", Object.freeze(response.data));
            }).catch((error) => console.log(error))
        },

        createPost(context, payload) {
            axios({
                method: 'post',
                data: payload,
                url: 'http://94.158.54.194:9092/api/product',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response);
                context.commit("addSinglePost", response.data);
            }).catch((error) => console.log(error))
        },

        deletePost(context, payload) {
            axios({
                method: 'delete',
                url: `http://94.158.54.194:9092/api/product/${payload}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response);
                context.commit("deleteSinglePost");
                alert(`${payload} deleted?`);
            }).catch((error) => console.log(error));
        },

        updatePost(){
            axios
                .put("http://94.158.54.194:9092/api/product" + this.$route.params.id, {
                       
                })

        }

    }
});
