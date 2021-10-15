<template>
  <div v-if="deleted === false">
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
      <button v-if="editMode === true" @click="handleEdit">Save Changes</button>
      <button v-else @click="toggleEdit">Edit</button>
      <button v-if="deleteCheckToggle" @click="handleDelete">Are You Sure You Want To DELETE This Message</button>
      <button v-else @click="deleteCheck">Delete</button>
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
    editMode: false,
    deleteCheckToggle: false,
    deleted: false
  }),
  methods: {
    toggleEdit() {
      this.editMode = true
    },
    handleChange(e) {
      this.content = e.target.value
    },
    async handleEdit() {
      await this.$emit('handlePostEdit', this.postId, this.content)
      this.editMode = false
    },
    async handleDelete() {
      await this.$emit('handlePostDelete', this.postId)
      this.deleted = true
    },
    deleteCheck() {
      this.deleteCheckToggle = true
    }
  }
}
</script>
