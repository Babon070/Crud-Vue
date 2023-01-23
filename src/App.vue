<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.getItem();
  },

  name: "App",
  data() {
    return {
      data:[]
    };
  },

  methods: {
    getItem() {
      axios.get("http://94.158.54.194:9092/api/product")
      .then((res) => {
        this.date = res;
      });
    },

    created() {
      this.getItem();
      
    },
  },
};
</script>

<style></style>
