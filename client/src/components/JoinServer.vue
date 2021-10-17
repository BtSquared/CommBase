<template>
  <div>
    <div>
      <h1>Join a Sever</h1>
      <form @submit.prevent="handleSubmit">
        <input 
          @input="handleChange"
          :value="serverCode"
          placeholder="Server Code"
        />
        <button type="Submit" :disabled="serverCode === ''">Join</button>
      </form>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: 'JoinServer',
  data: () => ({
    serverCode: ''
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    handleChange(e) {
      this.serverCode = e.target.value
    },
    async handleSubmit() {
      if(this.serverCode === ''){
        return
      }
      const server = await Client.post(`/server/invite/${serverCode}`, {
        userId: this.user._id
      })
      this.$store.commit('addServer', server.data._id)
      this.$router.push({
        name: 'server',
        params: {
          serverId: server.data._id
        }
      })
    }
  }
}
</script>