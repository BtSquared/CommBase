<template>
  <div>
    <div id="gridCon">
      <ServerList />
      <ChannelList v-if="channels"
        @changeChannel="changeChannel" 
        :serverId="server._id"
        :serverName="server.serverName" 
        :channels="server.channels"
      />
      <MessageBoard v-if="selectedChannel"
        :serverId="server._id" 
        :channelName="selectedChannel.name" 
        :channelId="selectedChannel._id" 
        :posts="selectedChannel.posts" 
      />
      <UserList />
    </div>
  </div>
</template>

<script>
import Client from '../services/api'
import ChannelList from '../components/ChannelList.vue'
import MessageBoard from '../components/MessageBoard.vue'
import ServerList from '../components/ServerList.vue'
import UserList from '../components/UserList.vue'

export default {
  name: "Server",
  components: {
    ChannelList,
    MessageBoard,
    ServerList,
    UserList
  },
  data: () => ({
    server: null,
    channels: null,
    selectedChannel: null
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted: async function() {
    if(!this.user) {
        const token = localStorage.getItem('token')
      if (token) {
        const res = await Client.get('/auth/checksession')
        if (res.data.new) {
          localStorage.removeItem('token')
          localStorage.setItem('token', res.data.user.token)
          this.$store.commit('setUser', res.data.user.payload)
        } else {
          this.$store.commit('setUser', res.data.user)
        }
      }
    }
    await this.fetchServer()
  },
  watch: {
    '$route.params.serverId': 'fetchServer'
  },
  methods: {
    changeChannel(channel) {
      this.selectedChannel = channel
    },
    async fetchServer() {
      const res = await Client.get(`/server/findserver`, {
      params: {
        serverId: this.$route.params.serverId
      }
    })
      this.server = res.data
      this.channels = res.data.channels
      this.selectedChannel = res.data.channels[0]
      if(this.$route.params.channelId === this.channels[0]._id) {
        return
      }
      this.$router.push({ 
        name: 'channel', 
        params: { 
          serverId: this.server._id, 
          channelId: this.channels[0]._id, 
          channel: this.channels[0] 
        }})
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#gridCon {
  display: grid;
  grid-template-columns: 70px 240px 1fr 220px;
  grid-template-rows: 1fr 60px;
  width: 100vw;
  height: 100vh;
}
</style>