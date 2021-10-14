<template>
  <MessageBoard />
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
    channelId: Object
  },
  data: () => {

  },
}
</script>