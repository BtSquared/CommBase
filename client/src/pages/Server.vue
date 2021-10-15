<template>
  <div>
    <div>
      <ServerList />
    </div>
    <ChannelList 
      @changeChannel="changeChannel" 
      :serverId="server._id" 
      :channels="server.channels"
    />
    <div>
      <MessageBoard 
        :serverId="server._id" 
        :channelName="selectedChannel.name" 
        :channelId="selectedChannel._id" 
        :posts="selectedChannel.posts" 
      />
    </div>
  </div>
</template>

<script>
import Client from '../services/api'
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
    console.log(this.$route.params.serverId)
    const res = await Client.get(`/server/findserver`, {
      params: {
        serverId: this.$route.params.serverId
      }
    })
    this.server = res.data
    this.channels = res.data.channels
    this.selectedChannel = res.data.channels[0]
  },
  methods: {
    changeChannel(channel) {
      this.selectedChannel = channel
    }
  },

}
</script>