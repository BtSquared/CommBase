<template>
  <div>
    <div v-for="channel in channels" :key="channel._id">
      <div @click="handleClick(channel)">
        {{channel.name}}
      </div>
    </div>
  </div>
</template>

<script>

export default { 
  name: "ServerChannelList",
  props: {
    serverId: String,
    channels: Array
  },
  methods: {
    handleClick(channel) {
      this.$emit('changeChannel', channel)
      this.$router.push({ 
        name: 'channel', 
        params: { 
          serverId: this.serverId, 
          channelId: channel._id, 
          channel: channel 
        }})
    }
  }
}
</script>
