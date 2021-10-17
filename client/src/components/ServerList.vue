<template>
  <div>
    <div v-for="server in user.servers" :key="server">
      <router-link 
      :to="{
        name: 'server', 
        params: { 
          serverId: server
          }
        }"
      >Server Link</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ServerList',
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
