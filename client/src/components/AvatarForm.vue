<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input 
        @input="handleChange" 
        type="file"
        name="avatar"
        placeholder="avatar"
      />
      <button type="Submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: 'AvatarForm',
  data: () => ({
    formData: {
      userId: this.user._id,
      avatar: ''
    }
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    handleChange(e){
      this.formData.avatar = e.target.files[0]
      console.log(this.formData)
    },
    async handleSubmit() {
      let formData = new FormData()
      for (const key in this.formData) {
        formData.append(key, this.formData[key])
      }
      const res = await Client.post(`/user/avatar`, formData)
      console.log(res)
    },
  }
}
</script>