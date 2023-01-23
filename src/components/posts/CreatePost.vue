<template>
  <div class="bg-form">
    <form lazy-validation>
      <div>
        <label>Id</label> <br />
        <input type="number" v-model="product_type_id" />
      </div>
      <div>
        <label>Name</label> <br />
        <input type="text" v-model="name_uz" />
      </div>
      <div>
        <label>Cost</label> <br />
        <input type="text" v-model="cost" />
      </div>
      <div>
        <label>Address</label><br />
        <input type="text" v-model="address" />
      </div>

      <butto class="btn btn-primary my-3" @click="submit">Create Post</butto>
    </form>
  </div>
</template>

<script>
/*
{
  "product_type_id": 0,
  "name_uz": "string",
  "cost": 0,
  "address": "string",
  "created_date": "2023-01-22T20:05:27.218Z"
}
*/
export default {
  data: () => ({
    valid: true,
    product_type_id: "",
    name_uz: "",
    cost: "",
    address: "",
    created_date: new Date(),
  }),
  methods: {
    submit() {
      const data = {
        product_type_id: this.product_type_id,
        name_uz: this.name_uz,
        cost: this.cost,
        address: this.address,
        created_date: "2023-01-22T20:05:27.218Z",
      };
      this.$store.dispatch("createPost", data);
      this.$router.push("/");
      //   location.reload();
    },
  },
};
</script>
<style ccoped>
form {
  max-width: 400px;
  min-height: 450px;
  background-color: #fff;
  box-shadow: #64646f33 0px 0px 29px 10px;
  margin: 100px auto;
  padding: 15px;
  border-radius: 10px;
}
label {
  color: #aaa;
  margin: 10px 0;
}
input {
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  width: 100%;
}
input::placeholder {
  color: #aaa;
}
</style>
