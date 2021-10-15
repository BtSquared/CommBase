<template>
  <div>
    <MessgeBoard :serverId="serverId" :channelName="channel.name" :channelId="channel._id" :posts="channel.posts" />
  </div>
</template>

<script>
import MessgeBoard from './MessageBoard.vue'

export default {
  name: "Channel",
  components: {
    MessgeBoard
  },
  props: {
    serverId: String,
    channel: Object
  },
  data: () => ({

  }),
}
</script>