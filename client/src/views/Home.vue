<template>
  <div class="home">
    <ServerList v-if="disabled" :servers="servers" />
  <div v-if="disabled">
    <form @submit.prevent="handleSubmit">
      <input 
        @input="handleChange" 
        type="file"
        name="avatar"
        placeholder="avatar"
      />
      <button type="Submit">Submit</button>
    </form>
  </div>
  <div>
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
    <!-- NEW - add a route to the profile page -->
      <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import ServerList from '../components/ServerList.vue'

export default {
  name: "Home",
  components: {
    ServerList
  },
  data: () => ({
    disabled: false,
    servers: [],
    formData: {
      userId: '6169eb028088b19f16a9607e',
      avatar: ''
    }
  }),
  mounted: async function() {
    const res = await axios.get(`${BASE_URL}/server/findserver`, {
      params: {
        serverId: "6165ff74a3ed534b0db53274"
      }
    })
    this.servers.push(res.data)
    console.log(res)
  },
  methods: {
    handleChange(e){
      this.formData.avatar = e.target.files[0]
      console.log(this.formData)
    },
    async handleSubmit() {
      let formData = new FormData()
      for (const key in this.formData) {
        formData.append(key, this.formData[key])
      }
      const res = await axios.post(`${BASE_URL}/user/avatar`, formData)
      console.log(res)
    },
    // Log the user in
    login() {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>
