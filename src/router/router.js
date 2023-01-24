import { createRouter, createWebHistory } from 'vue-router';

import CreatePost from '../components/posts/CreatePost.vue';
import UpdatePost from '../components/posts/updatePost.vue';
import PostList from '../components/posts/PostLIst.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: CreatePost, name: CreatePost},
        { path: '/table', component: PostList, name: PostList },
        { path: '/update', component: UpdatePost, name: UpdatePost }
    ]
});

// router.beforeEach((post, from, next) => {
//     // const publicPage = ['/'];
//    const inputPage = PostList(post.path);
//    if(inputPage){
//     next('/')
//    } 
// })
export default router;