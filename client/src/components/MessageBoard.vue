<template>
  <div>
    <div>
    </div>
    <div>
      <PostForm />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import PostForm from '../subComponents/PostForm.vue'

export default {
  name: "MessgeBoard",
  components: {
    PostForm
  },
  prop: {
    serverId: String,
    channelName: String,
    channelId: String,
    posts: Array
  },
  data: () => ({
    NewPostContent: ''
  }),
  methods: {
    handleFormChange(value) {
      this.NewPostContent = value
    },
    async handleFormSubmit() {
      const res = await axios.post(`${BASE_URL}post/createpost`, {
        serverId: this.serverId,
        channelId:  this.channelId,
        userId: this.userId,
        content: this.NewPostContent
      })
      this.NewPostContent = ''
    }
  }
}
</script>
