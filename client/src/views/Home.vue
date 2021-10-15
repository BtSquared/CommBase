<template>
  <div class="home">
    <Server v-for="server in servers" :key="server._id" :server="server" :channels="server.channels" />
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import Server from '../pages/Server.vue'

export default {
  name: "Home",
  components: {
    Server
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
