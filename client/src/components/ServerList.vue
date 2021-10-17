<template>
  <div>
    <div class="SLGridCon">
      <div class="SLcontainer">
        <div v-for="server in servers" :key="server._id" class="SLicons">
          <router-link 
          :to="{
            name: 'server',
            params: {
              serverId: server._id
              }
            }"
          >
            <div>
              <img class="SLimg" :src="server.serverIcon" />
            </div>
          </router-link>
        </div>
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
      if(!this.user) {
        const token = localStorage.getItem('token')
      if (token) {
        const res = await Client.get('/auth/checksession')
        if (res.data.new) {
          localStorage.removeItem('token')
          localStorage.setItem('token', res.data.user.token)
          this.$store.commit('setUser', res.data.user.payload)
        } else {
          this.$store.commit('setUser', res.data.user)
        }
      }
    }
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

<style>
.SLGridCon{
  display: grid;
  grid-row: 1 / 2;
  grid-column: 1/ 2;
  height: 100%;
}
.SLcontainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgb(57, 57, 57);
}
.SLicons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.SLimg {
  width: 50px;
  height: 50px;
  border-radius: 15px;
}
</style>