<template>
  <div>
    <div>
      <h1>Create a Sever</h1>
      <input 
        @input="handleChange"
        :value="serverName"
        placeholder="Server Name"
      />
      <button @click="handleSubmit">Create</button>
    </div>
  </div>
</template>

<script>
import Cleint from '../services/api'

export default {
  name: 'CreateServer',
  data: () => ({
  serverName: ''
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    handleChange(e) {
      this.serverName = e.target.value
    },
    async handleSubmit() {
      const server = await Cleint.post('/server/createserver', {
        serverName: this.serverName,
        userId: this.user._id
      })
      
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