<template>
  <div>
    <div class="ULGridCon">
      <div class="ULFlexCon">
        <div v-for="user in userList" :key="user._id">
          <UserListCard :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'
import UserListCard from '../subComponents/UserListCard'

export default {
  name: "UserList",
  components: {
    UserListCard
  },
  props: {
    users: Array
  },
  data: () => ({
    userList: null
  }),
  async mounted(){
    this.getList()
  },
  watch: {
    '$route.params.serverId': 'getList'
  },
  methods: {
    async getList() {
      const res = await Client.post('/server/getserverusers', { userList: this.users })
      console.log(res.data)
      this.userList = res.data
    }
  }
}
</script>

<style scoped>
.ULGridCon {
  margin: 0;
  display: grid;
  grid-row: 1 / 3;
  grid-column: 4 / 5;
  height: 100%;
  background-color: rgb(86, 86, 86);
  color: white;
}
.ULFlexCon {
  display: flex;
  flex-direction: column;
}
</style>