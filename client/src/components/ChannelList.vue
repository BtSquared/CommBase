<template>
  <div>
    <div id="container">
      <div v-for="channel in channels" :key="channel._id">
        <div @click="handleClick(channel)">
          {{channel.name}}
        </div>
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

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  background-color: rgb(86, 86, 86);
  padding: 5px;
  position: absolute;
  left: 90px;
  top: 0px;
  width: 240px;
  height: 100%;
  color: white;
}
</style>