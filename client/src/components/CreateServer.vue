<template>
  <div>
    <div>
      <h3 class="header">Create a Sever</h3>
      <form @submit.prevent="handleSubmit">
        <input 
          @input="handleChange"
          :value="serverName"
          placeholder="Server Name"
        />
        <button type="Submit" :disabled="serverName === ''">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'

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
      if(this.serverName === ''){
        return
      }
      const server = await Client.post('/server/createserver', {
        serverName: this.serverName,
        userId: this.user._id
      })
      this.$store.commit('addServer', server.data._id)
      this.$router.push({
        name: 'server',
        params: {
          serverId: server.data._id
        }
      })
      this.serverName = ''
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 20px 0 10px 0;
}
button{
  margin: 0 0 0 10px;
}
</style>