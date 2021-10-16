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
    <Login />
    <Register />
  </div>
</template>

<script>
import Client from '../services/api'
import ServerList from '../components/ServerList.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'

export default {
  name: "Home",
  components: {
    ServerList,
    Register,
    Login
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
    const res = await Client.get(`/server/findserver`, {
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
      const res = await Client.post(`/user/avatar`, formData)
      console.log(res)
    },
  }
}
</script>
