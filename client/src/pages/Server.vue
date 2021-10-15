<template>
  <div>
    <ChannelList :serverId="server._id" :channels="server.channels"/>
    <div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import ChannelList from '../components/ChannelList.vue'


export default {
  name: "Server",
  components: {
    ChannelList
  },
  data: () => ({
    server: {},
    channels: []
  }),
  mounted: async function() {
    const res = await axios.get(`${BASE_URL}/server/findserver`, {serverId: this.$route.params.serverId })
    this.server = res.data[0]
    this.channels = res.data[0].channels
    console.log(res)
  },
  methods: {

  },

}
</script>