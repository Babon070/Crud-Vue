<template>
  <div class="bg-form">
    <form>
      <div>
        <label>Id</label> <br />
        <input required type="number" v-model="product_type_id" />
      </div>

      <div>
        <label>Name</label> <br />
        <input required type="text" v-model="name_uz" />
      </div>
      <div>
        <label>Cost</label> <br />
        <input type="text" v-model="cost" />
      </div>
      <div>
        <label>Address</label><br />
        <input type="text" v-model="address" />
      </div>
      <button class="btn btn-primary my-4 w-100" @click="submit">
        Create Post
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        error: [],
        product_type_id: "",
        name_uz: "",
        cost: "",
        address: "",
        created_date: new Date(),
      },
    };
  },

  // validations: {
  //    product_type_id:{
  //       required,
  //       minLength: minLength(1)
  //    },
  //    name_uz: {
  //     required,
  //       minLength: minLength(2)
  //    },
  //    cost: {
  //     required,
  //       minLength: minLength(1)
  //    },
  //    address: {
  //     required,
  //       minLength: minLength(2)
  //    },
  // },
  // data: () => ({
  //   valid: true,
  //   product_type_id: "",
  //   name_uz: "",
  //   cost: "",
  //   address: "",
  //   created_date: new Date(),

  methods: {
    submit() {
      const data = {
        product_type_id: this.product_type_id,
        name_uz: this.name_uz,
        cost: this.cost,
        address: this.address,
        created_date: "2023-01-22T20:05:27.218Z",
      };

      // if (this.product_type_id && this.name_uz && this.cost && this.address) {
      //   return true;
      // }

      // this.error = [];

      // if(!this.product_type_id){
      //   this.error.push('Id kiritilmadi')
      // }
      // if(!this.name_uz){
      //   this.error.push('Name kiritlmadi')
      // }
      // if(!this.cost){
      //    this.error.push('Cost Kiritilmadi')
      // }

      this.$store.dispatch("createPost", data);
      this.$router.push("/table");

      //   location.reload();
    },

    // setId(info){
    //   this.product_type_id = info
    //   this.$v.product_type_id.$touch()
    // },
    // setName(info){
    //   this.name_uz = info
    //   this.$v.name_uz.$touch()
    // },
    // setCost(info){
    //   this.cost = info
    //   this.$v.cost.$touch()
    // },
    // setAddres(info){
    //   this.address = info
    //   this.$v.address.$touch()
    // }
  },
};
</script>
<style ccoped>
form {
  max-width: 400px;
  min-height: 400px;
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
