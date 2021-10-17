<template>
  <div>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: "Home",
  components: {
  },
  data: () => ({
    
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted: async function() {
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
    if(this.user) {
      const res = await Client.get(`/server/findserver`, {
        params: {
          serverId: this.user.servers[0]
        }
      })
      this.$router.push({
          name: 'server',
          params: {
            serverId: this.user.servers[0]
          }
        })
      console.log(res)
    } else {
      this.$router.push({
          name: 'Login'
        })
    }
  },
}
</script>
