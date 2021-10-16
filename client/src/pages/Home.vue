<template>
  <div class="home">
    <div>
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
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: "Home",
  components: {
  },
  data: () => ({
    disabled: true,
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
