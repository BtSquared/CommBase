<template>
  <div class="home">
    <Server />
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
    Server: {}
  }),
  mounted: async function() {
    const res = await axios.get(`${BASE_URL}/server/findserver`, {
	serverId: "6165ff74a3ed534b0db53274"
})
  },
  methods: {

  }
}
</script>
