<template>
  <div>
    <div>
      <div v-if="editMode">
        <input @input="handleChange" :value="content">
      </div>
      <div v-else>
        <div>
          <!-- <img /> -->
          <!-- <h2>{{userName}}</h2> -->
        </div>
        <p>{{content}}</p>
      </div>
    </div>
    <div>
      <button v-if="editMode" @click="toggleEdit" >Edit</button>
      <button v-else @click="handlePostEdit">Save Changes</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostCard",
  props: {
    // userName: String,
    postId: String,
    content: String
  },
  data: () => ({
    editMode: true,
  }),
  methods: {
    toggleEdit() {
      this.editMode = false
    },
    handleChange(e) {
      this.content = e.target.value
    },
    async handleEdit() {
      await this.$emit('handlePostEdit', this.postId, this.content)
      this.editMode = true
    },
    async handleDelete() {
      await this.$emit('handlePostDelete', this.postId)
    }
  }
}
</script>
