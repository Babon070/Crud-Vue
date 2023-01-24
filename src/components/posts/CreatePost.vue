<template>
  <div class="bg-form">
    <p>{{ form }}</p>
    <form >
      <div>
        <label>Id</label> <br />
        <input
          required
          type="number"
          v-model.trim="id"
          @change="setAge($event.target.value)"
          v-model="product_type_id"
        />
      </div>

      <!-- <div class="error" v-if="!$v.name.required"> Field is required </div>
      <div class="error" v-if="!$v.name.minLength"> Name must have at least {{ $v.name.$params.minLength.min }} letters.</div> -->

      <div >
        <!-- :class="{ 'form-group--error': $v.age.$error }" -->
        <!-- @input="setName($event.target.value)" -->
        <label>Name</label> <br />
        <input
          type="text"
          v-model="name_uz"
        />
      </div> 
      <div>
        <label>Cost</label> <br />
        <input type="text" v-model="cost" />
      </div>
      <div>
        <label>Address</label><br />
        <input type="text" v-model="address" />
      </div>

      <!-- <div class="error" 

      v-if="!$v.age.between">
        Must be between {{ $v.age.$params.between.min }} and
        {{ $v.age.$params.between.max }}

      </div> -->
      <!-- <span tabindex="0">Blur to see changes</span> -->

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
// import { required, minLength, between } from 'vuelidate/lib/validators'
// import Vue from 'vue'
// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)



export default {
 
data() {
  return {
        data: {
          product_type_id: '',
          name_uz: '',
          cost: '',
          address: '',
          created_date: new Date(),
        }
      }
},
  // data: () => ({
  //   valid: true,
  //   product_type_id: "",
  //   name_uz: "",
  //   cost: "",
  //   address: "",
  //   created_date: new Date(),
    
  // } ),

  // validations: {
  //   product_type_id: {
  //     required,
  //     between: between(1, 4)
  //   },
  //   name_uz: {
  //     required,
  //     minLength: minLength(2)
  //   },
  //   cost: {
  //     required,
  //     minLength: minLength(2)
  //   },
  //   address: {
  //     required,
  //     minLength: minLength(4)
  //   },
  // },



  methods: {
    submit() {

      
      const data = {
        product_type_id: this.product_type_id,
        name_uz: this.name_uz,
        cost: this.cost,
        address: this.address,
        created_date: "2023-01-22T20:05:27.218Z",
      };

      this.error = []
      for(const item in this.data){
        if(this.data[item]=== "" || this.data[item].length === 0){
          this.error.push(item)
          console.log(this.data);
        }
      }
      if(this.error.length === 0){
          
          // alert("Data has been submited")
          // confirm('Data has been submited')
          // console.log(this.confirm);
        }




      this.$store.dispatch("createPost", data);
      this.$router.push("/table");

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
