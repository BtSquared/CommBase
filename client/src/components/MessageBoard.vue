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
import PostForm from '../subComponents/PostForm.vue'

export default {
  name: "MessgeBoard",
  components: {
    PostForm
  },
  prop: {
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
    handleFormSubmit() {

    }
  }
}
</script>
