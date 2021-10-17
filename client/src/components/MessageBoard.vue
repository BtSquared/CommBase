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
    NewPostContent: ''
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    handleFormChange(value) {
      this.NewPostContent = value
    },
    async handleFormSubmit() {
      const res = await Client.post(`/post/createpost`, {
        serverId: this.serverId,
        channelId:  this.channelId,
        userId: this.user._id,
        content: this.NewPostContent
      })
      this.NewPostContent = ''
      this.posts.push(res.data.posts[res.data.posts.length - 1])
    },
    async handlePostEdit(postId, content) {
      await Client.put(`/post/edit`, {
        serverId: this.serverId,
        channelId: this.channelId,
        postId: postId,
        content: content
      })
    },
    async handlePostDelete(postId) {
      await Client.delete(`/post/remove`, { data: {
        serverId: this.serverId,
        channelId: this.channelId,
        postId: postId
      }})
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