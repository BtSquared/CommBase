<template>
  <div>
    <div>
      <PostCard 
        v-for="post in posts" 
        :key="post._id" 
        :postId="post._id" 
        :content="post.content"
        @handlePostEdit="handlePostEdit"
        @handlePostDelete="handlePostDelete"
      />
    </div>
    <div>
      <PostForm 
        :name="channelName" 
        :content="NewPostContent" 
        @handleFormChange="handleFormChange" 
        @handleFormSubmit="handleFormSubmit"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import PostForm from '../subComponents/PostForm.vue'
import PostCard from '../subComponents/PostCard.vue'

export default {
  name: "MessgeBoard",
  components: {
    PostForm,
    PostCard
  },
  props: {
    serverId: String,
    channelName: String,
    channelId: String,
    posts: Array
  },
  data: () => ({
    NewPostContent: '',
    userId: "6165fd458d1cc7304de7f6d2" // this needs to be set up
  }),
  methods: {
    handleFormChange(value) {
      this.NewPostContent = value
    },
    async handleFormSubmit() {
      const res = await axios.post(`${BASE_URL}/post/createpost`, {
        serverId: this.serverId,
        channelId:  this.channelId,
        userId: this.userId,
        content: this.NewPostContent
      })
      this.NewPostContent = ''
      console.log(res)
      this.posts.push(res.data.posts[res.data.posts.length - 1])
    },
    async handlePostEdit(postId, content) {
      const res = await axios.put(`${BASE_URL}/post/edit`, {
        serverId: this.serverId,
        channelId: this.channelId,
        postId: postId,
        content: content
      })
      console.log(res)
      //needs more
    },
    async handlePostDelete(postId) {
      const res = await axios.delete(`${BASE_URL}/post/remove`, { data: {
        serverId: this.serverId,
        channelId: this.channelId,
        postId: postId
      }})
      console.log(res)
      //rework back end to send back the post that was deleted
    }
  }
}
</script>
