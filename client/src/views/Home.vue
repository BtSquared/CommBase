<template>
  <div class="home">
    <ServerList :servers="servers" />
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import ServerList from '../components/ServerList.vue'

export default {
  name: "Home",
  components: {
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
