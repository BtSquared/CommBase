<template>
  <div>
    <div id="container">
      <div v-for="server in servers" :key="server._id" class="icons">
        <router-link 
        :to="{
          name: 'server',
          params: {
            serverId: server._id
            }
          }"
        >
          <div>
            <img id="img" :src="server.serverIcon" />
          </div>
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
    this.fetchServerInfo()
  },
  watch: {
    'user.servers': 'fetchServerInfo'
  },
  methods: {
    async fetchServerInfo() {
        this.servers = []
        let collection = []
        let servers = this.user.servers
      for(let i = 0; i < servers.length; i++) {
        const res = await Client.get('/server/findserver', {
        params: {
          serverId: servers[i]
        }
      })
        collection.push({
          _id: res.data._id,
          serverName: res.data.serverName,
          serverIcon: res.data.serverIcon
        })
      }
      this.servers = collection
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  background-color: rgb(57, 57, 57);
  padding: 5px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 80px;
  height: 100%;
}
#img {
  width: 50px;
  height: 50px
}
.icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: rgb(165, 165, 165);
  padding: 5px;
  margin: 5px;
  width: 60px;
  height: 60px;
  border-radius: 25px;
}
</style>