<template>
  <div>
    <div v-for="channel in channels" :key="channel._id">
      <router-link :to="{ name: 'channel', params: { serverId: serverId, channelId: channel._id, channel: channel } }">{{channel.name}}</router-link> |
    </div>
  </div>
</template>

<script>

export default { 
  name: "ServerChannelList",
  props: {
    serverId: String,
    channels: Array
  }
}
</script>
