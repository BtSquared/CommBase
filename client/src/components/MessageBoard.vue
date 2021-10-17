<template>
  <div>
    <div class="MBCon">
      <div id="postsCon">
          <PostCard class="post"
            v-for="post in posts" 
            :key="post._id" 
            :postId="post._id" 
            :content="post.content"
            @handlePostEdit="handlePostEdit"
            @handlePostDelete="handlePostDelete"
          />
      </div>
      <div id="form">
        <PostForm 
          :name="channelName" 
          :content="NewPostContent" 
          @handleFormChange="handleFormChange" 
          @handleFormSubmit="handleFormSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'
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
      const res = await Client.post(`/post/createpost`, {
        serverId: this.serverId,
        channelId:  this.channelId,
        userId: this.userId,
        content: this.NewPostContent
      })
      this.NewPostContent = ''
      this.posts.push(res.data.posts[res.data.posts.length - 1])
    },
    async handlePostEdit(postId, content) {
      const res = await Client.put(`/post/edit`, {
        serverId: this.serverId,
        channelId: this.channelId,
        postId: postId,
        content: content
      })
      console.log(res)
      //needs more
    },
    async handlePostDelete(postId) {
      const res = await Client.delete(`/post/remove`, { data: {
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

<style scoped>
.MBCon {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.post{
  
}
#postsCon {
  background-color: rgb(114, 114, 114);
  color: white;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>