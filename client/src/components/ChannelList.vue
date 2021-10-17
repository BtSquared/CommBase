<template>
  <div>
    <div class="CLGridCon">
      <div id="container">
        <div v-if="update">
          <h2>update server Icon</h2>
          <ServerIconForm @handleIconSubmit="handleIconSubmit"/>
        </div>
        <div v-else class="flex">
          <h2>{{serverName}}</h2>
          <button @click="toggleUpdateButton">Settings</button>
        </div>
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
import Client from '../services/api'
import ServerIconForm from '../subComponents/ServerIconForm.vue'

export default { 
  name: "ServerChannelList",
  components: {
    ServerIconForm
  },
  props: {
    serverId: String,
    serverName: String,
    channels: Array
  },
  data:() => ({
    update: false
  }),
  watch: {
    '$route.params.serverId': 'toggleUpdateRoute'
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
        }
      })
    },
    async handleIconSubmit(data) {
      console.log(data)
      let formData = new FormData()
      for (const key in data) {
        formData.append(key, data[key])
      }
      await Client.put(`/server/updateicon`, formData)
      this.update = false
    },
    toggleUpdateButton() {
      this.update = true
    },
    toggleUpdateRoute() {
      this.update = false
    }
  }
}
</script>

<style scoped>
h2{
  margin: 5px 0 5px 20px;
}
button {
height: 20px;
align-self: center;
margin: 5px 20px 5px 0;
}
.flex{
  display: flex;
  justify-content: space-between;
}
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