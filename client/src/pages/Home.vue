<template>
  <div class="home">

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
      this.$store.commit('setUser', res.data)
    }
    if(this.user) {
      const res = await Client.get(`/server/findserver`, {
        params: {
          serverId: this.user.servers[0]
        }
      })
      // this.servers.push(res.data)
      console.log(res)
    } else {
      this.$router.push({
          name: 'Login'
        })
    }
  },
}
</script>
