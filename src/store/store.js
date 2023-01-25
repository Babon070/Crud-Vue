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
            return state.posts.shift();
        },
        addSinglePost(state, payload) {
            return state.posts.unshift(payload);

        },
        updateSingliPost(state){
            return state.posts;
        },
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
                confirm(`${payload} deleted?`);
            }).catch((error) => console.log(error));
        },

        updatePost(context){
          axios.post('http://94.158.54.194:9092/api/product', {
                product_type_id: this.product_type_id,
                name_uz: this.name_uz,
                cost: this.cost,
                address: this.address,
               })
              .then(response => {
                console.log(response);
                context.commit('updateSingliPost', response.data);
                alert(111)
              })
              .catch(error => {
                console.log(error);
              });
                

        }

    }
});
