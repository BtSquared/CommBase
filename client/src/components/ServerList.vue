<template>
  <div>
    <div v-for="server in servers" :key="server._id">
      <router-link :to="{name: 'server', params: { serverId: server._id}}">Server Link</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ServerList',
  props: {
    servers: Array
  }
}
</script>
