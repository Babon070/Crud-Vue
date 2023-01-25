<template>
  <div>
    <h1>Post List</h1>
    <router-link class="btn btn-primary" to="/"> Create New Post</router-link>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in getPosts" :key="post">
            <th>{{ post.product_type_id }}</th>
            <td>{{ post.name_uz }}</td>
            <td>{{ post.cost }}</td>
            <td>{{ post.address }}</td>
            <td>
              <button class="btn btn-info mx-2">
                <router-link class="text-decoration-none" :to="/update/">
                  Edit Post
                </router-link>
              </button>
              <button class="btn btn-danger" @click="handleDelete(post.id)">
                Delete Post
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getPosts");
    
  },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  methods: {
    handleDelete(name) {
      return this.$store.dispatch("deletePost", name);

    },
  },
};
</script>
<style scoped></style>
