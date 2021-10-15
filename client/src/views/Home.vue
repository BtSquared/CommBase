<template>
  <div class="home">
    <ServerList :servers="servers" />
    <Server v-for="server in servers" :key="server._id" :server="server" :channels="server.channels" />
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import Server from '../pages/Server.vue'
import ServerList from '../components/ServerList.vue'

export default {
  name: "Home",
  components: {
    Server,
    ServerList
  },
  data: () => ({
    servers: []
  }),
  mounted: async function() {
    const res = await axios.get(`${BASE_URL}/server/findserver`, {
      serverId: "6165ff74a3ed534b0db53274"
    })
    this.servers = res.data
    console.log(res)
  },
  methods: {

  }
}
</script>
