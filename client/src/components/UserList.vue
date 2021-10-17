<template>
  <div>
    <div>
      <div v-for="user in userList" :key="user._id">
        <UserListCard :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'
import UserListCard from '../subComponents/UserListCard.vue'

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