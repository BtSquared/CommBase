<template>
  <div>
    <MessgeBoard :serverId="serverId" :channelName="channel.name" :channelId="channel._id" :posts="channel.posts" />
  </div>
</template>

<script>
import Client from '../services/api'
import MessgeBoard from './MessageBoard.vue'

export default {
  name: "Channel",
  components: {
    MessgeBoard
  },
  data: () => ({
    serverId: String,
    channel: Object
  }),
  mounted: async function() {
    const res = await Client.get(`${BASE_URL}/channel/findchannel`, {serverId: this.$route.params.serverId, channelId: this.$route.params.channelId})
    console.log(res)
  }
}
</script>