<template>
  <div>
    <div>
      <ServerList />
    </div>
    <ChannelList v-if="channels"
      @changeChannel="changeChannel" 
      :serverId="server._id" 
      :channels="server.channels"
    />
    <div>
      <MessageBoard v-if="selectedChannel"
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
    this.fetchServer()
  },
  watch: {
    '$route': 'fetchServer'
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
    }
  }
}
</script>