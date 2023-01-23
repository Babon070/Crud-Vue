import { createRouter, createWebHistory } from 'vue-router';

import CreatePost from '../components/posts/CreatePost.vue';
import UpdatePost from '../components/posts/updatePost.vue';
import PostList from '../components/posts/PostLIst.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PostList, name: PostList },
        { path: '/create', component: CreatePost, name: CreatePost, meta: {reload: true} },
        { path: '/update', component: UpdatePost, name: UpdatePost }

    
        
    ]
 
});



export default router;