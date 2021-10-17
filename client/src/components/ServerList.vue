<template>
  <div>
    <div>
      <div v-for="server in servers" :key="server._id">
        <router-link 
        :to="{
          name: 'server',
          params: {
            serverId: server._id
            }
          }"
        >
          <div>
            <img :src="server.serverIcon" width="50" height="50"/>
          </div>
          {{server.serverName}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: 'ServerList',
  data: () => ({
    servers: []
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  async mounted() {
    let servers = this.user.servers
    for(let i = 0; i < servers.length; i++) {
      const res = await Client.get('/server/findserver', {
      params: {
        serverId: servers[i]
      }
    })
      this.servers.push({
        _id: res.data._id,
        serverName: res.data.serverName,
        serverIcon: res.data.serverIcon
      })
    }
  }
}
</script>

<style scoped>

</style>