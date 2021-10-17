<template>
  <div v-if="deleted === false" class="postCard">
      <input v-if="editMode" class="edit" @input="handleChange" :value="content">
      <div v-else class="postcontent">
        <!-- <img /> -->
        <!-- <h2>{{userName}}</h2> -->
        <p>{{content}}</p>
      </div>
    <div class="buttonDiv">
      <div>
        <button v-if="editMode === true" @click="handleEdit">Save Changes</button>
        <button v-else @click="toggleEdit">Edit</button>
      </div>
      <div>
        <button v-if="deleteCheckToggle" @click="handleDelete">Are You Sure?</button>
        <button v-else @click="deleteCheck">Delete</button>
      </div>
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

<style scoped>
button {
  border: none;
  background-color: rgb(35, 35, 35);
  color: white;
}
.postCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(35, 35, 35);
  margin: 5px 8px 5px 8px;
  border-radius: 5px;
}
.buttonDiv {
  margin: 5px 15px 5px 15px;
  display: flex;
}
.postcontent {
  margin: 0 0 0 20px;
  font-size: 18px;
}
.edit {
  border: none;
  background-color: rgb(35, 35, 35);
  color: white;
  margin: 5px 15px 5 20px;
  font-size: 18px;
  padding: 15px 0 15px 0;
  font-weight: 500;
  width: 75%;
}
</style>
