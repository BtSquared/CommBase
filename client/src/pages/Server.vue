<template>
  <div>
    <ServerChannelList :serverId="server._id" :channels="server.channels"/>
    <div>
      <Channel v-for="channel in channels" :key="channel._id" :serverId="server._id" :channel="channel" />
    </div>
  </div>
</template>

<script>
import ServerChannelList from '../components/ServerChannelList.vue'
import Channel from '../components/Channel.vue'

export default {
  name: "Server",
  components: {
    ServerChannelList,
    Channel
  },
  props: {
    server: Object,
    channels: Array
  },
  data: () => {

  },
  methods: {

  },

}
</script>