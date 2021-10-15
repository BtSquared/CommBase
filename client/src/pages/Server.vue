<template>
  <div>
    <div>
      <ServerList />
    </div>
    <ChannelList @changeChannel="changeChannel" :serverId="server._id" :channels="server.channels"/>
    <div>
      <MessageBoard :serverId="server._id" :channelName="selectedChannel.name" :channelId="selectedChannel._id" :posts="selectedChannel.posts" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import ChannelList from '../components/ChannelList.vue'
import MessageBoard from '../components/MessageBoard.vue'
import ServerList from '../components/ServerList.vue'

export default {
  name: "Server",
  components: {
    ChannelList,
    MessageBoard,
    ServerList
  },
  data: () => ({
    server: {},
    channels: [],
    selectedChannel: {}
  }),
  mounted: async function() {
    const res = await axios.get(`${BASE_URL}/server/findserver`, {serverId: this.$route.params.serverId })
    this.server = res.data[0]
    this.channels = res.data[0].channels
    this.selectedChannel = res.data[0].channels[0]
    console.log(res)
  },
  methods: {
    changeChannel(channel) {
      this.selectedChannel = channel
    }
  },

}
</script>