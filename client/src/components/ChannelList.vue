<template>
  <div>
    <div class="CLGridCon">
      <div id="container">
        <div v-if="update">
          <button v-if="Delete" class="delete" @click="handleDeleteSubmit">ARE YOU SURE?</button>
          <button v-else class="delete" @click="toggleDeleteButton">Delete Server</button>
          <h4>update server Icon</h4>
          <ServerIconForm @handleIconSubmit="handleIconSubmit"/>
        </div>
        <div v-else class="flex">
          <h4>{{serverName}}</h4>
          <button @click="toggleUpdateButton">Settings</button>
        </div>
        <h5>Server Invite Code: {{inviteCode}}</h5>
        <div v-for="channel in channels" :key="channel._id">
          <div @click="handleClick(channel)" class="channels">
            # {{channel.name}}
          </div>
        </div>
        <CreateServer class="create"/>
        <JoinServer class="create"/>
        <div>
          <button v-if="user" @click="handleLogOut">LogOut</button>
          <button v-else>Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>    
import Client from '../services/api'
import ServerIconForm from '../subComponents/ServerIconForm.vue'
import CreateServer from './CreateServer.vue'
import JoinServer from './JoinServer.vue'

export default { 
  name: "ServerChannelList",
  components: {
    ServerIconForm,
    CreateServer,
    JoinServer
  },
  props: {
    serverId: String,
    serverName: String,
    channels: Array,
    inviteCode: String
  },
  data:() => ({
    update: false,
    Delete: false
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
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
    async handleDeleteSubmit() {
      await Client.delete('/server/deleteserver', {
        params: {
          serverId: this.serverId, 
          userId: this.user._id
        }
      })
    },
    toggleUpdateButton() {
      this.update = true
    },
    toggleUpdateRoute() {
      this.update = false
    },
    toggleDeleteButton() {
      this.Delete = true
    },
    toggleDeleteRoute() {
      this.Delete = false
    },
    handleLogOut() {
      this.$store.commit('LogOutUser')
      localStorage.removeItem('token')
      this.$router.push({
        name: 'Home'
      })
      location.reload()
    }
  }
}
</script>

<style scoped>
h4 {
  margin: 5px 0 5px 20px;
}
h5 {
  margin: 0;
  text-align: center;
}
button {
height: 20px;
align-self: center;
margin: 5px 20px 5px 0;
}
.create{
  justify-self: flex-end;
  margin: 10px;
}
.delete {
  background-color: rgb(234, 47, 47);
  color: white;
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