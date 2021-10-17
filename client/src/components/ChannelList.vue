<template>
  <div>
    <div class="CLGridCon">
      <div id="container">
        <div v-for="channel in channels" :key="channel._id">
          <div @click="handleClick(channel)" class="channels">
            # {{channel.name}}
          </div>
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
      if(this.$route.params.channelId === channel._id) {
        return
      }
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
.CLGridCon{
  margin: 0;
  display: grid;
  grid-row: 1 / 3;
  grid-column: 2/ 3;
  height: 100%;
}
#container {
  display: flex;
  flex-direction: column;
  background-color: rgb(86, 86, 86);
  width: 240px;
  color: white;
}
.channels {
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
}
</style>