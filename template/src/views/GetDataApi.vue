<template>
  <div class="get-data-api row">
    <div class="col-6">
      <div class="card mt-3">
        <h5 class="card-header">Login API</h5>
        <div class="card-body">
          <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <button v-on:click="logout" type="button" class="btn btn-primary ml-2">Logout</button>
          </form>
        </div>
      </div>

      <!-- show detail -->
      <div class="card border-info mb-3 mt-3">
        <div class="card-header">User</div>
        <div class="card-body text-info">
          <h1 v-if="!user_profile.email" class="red">Not Found</h1>
          <h4 v-if="user_profile.email">Email : {{ user_profile.email }}</h4>
          <h4 v-if="user_profile.name">Name : {{ user_profile.name }}</h4>
          <h4 v-if="user_profile.type">Type : {{ user_profile.type }}</h4>
        </div>
      </div>

    </div>

    <div class="col-6 mt-3">
      <button type="button" v-on:click="getData" name="button" class="btn btn-primary">Get Data</button>

      <table class="table mt-3">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody v-for="(user, index) in users">
          <tr>
            <td>{{ index+1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.type }}</td>
          </tr>
        </tbody>
      </table>

    </div>
    <!-- <Data/> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Data from '@/components/Data.vue'
import axios from 'axios'
import swal from 'sweetalert';

export default {
  name: 'getDataApi',
  data() {
    return {
      form: {},
      users: [],
      user_profile: [],
      access_token: '',
      loading: true,
      errored: false,
    }
  },
  methods: {
   getData(event) {
     axios.defaults.headers.common['Authorization'] = this.access_token;
     let uri = 'http://localhost:8002/api/auth/user_all';
     axios.get(uri).then((response) => {
        console.log(response);
        this.users = response.data
    })
   },
   onSubmit() {
     let uri = 'http://localhost:8002/api/auth/login';
     axios.post(uri, this.form).then((response) => {
        // window.location.reload();
        this.access_token = response.data.token_type +' '+ response.data.access_token;

        axios.defaults.headers.common['Authorization'] = this.access_token;
        let uri = 'http://localhost:8002/api/auth/user';
        axios.get(uri).then((response) => {
           this.user_profile = response.data
        })

        swal({
          title: "Login Success",
          text: "",
          icon: "success",
          buttons: true,
        });

    })
    .catch(error => {
        this.errored = true
        swal({
          title: "Login fail",
          text: "",
          icon: "error",
          buttons: true,
        });
    })
    .finally(() => this.loading = false)

    },
    logout() {
      swal({
        title: "Are you sure?",
        text: "ํYou like to logout?",
        icon: "warning",
        buttons: true,
      })
      .then((data) => {
        if (data) {
          swal("Signed out", {
            icon: "success",
          });
          axios.defaults.headers.common['Authorization'] = this.access_token;
          let uri = 'http://localhost:8002/api/auth/logout';
          axios.get(uri).then((response) => {
            this.user_profile = []
          })
        }
      });

    },
  },
  components: {
    Data
  }
}
</script>

<style scope>
  * {
    text-align: left;
  }
</style>
