<template>
  <div>
    <div id="container">
      <form @submit.prevent="handleSubmit">
        <input 
          @input="handleChange" 
          :value="content" 
          placeholder="Create a Message"
        />
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostForm",
  props: {
    name: String,
    content: String
  },
  methods: {
    handleChange(e) {
      this.$emit('handleFormChange', e.target.value)
    },
    handleSubmit() {
      this.$emit('handleFormSubmit')
    }
  }
}
</script>

<style scoped>
#container {
  margin: 0;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 340px;
  padding: 10px 0 10px 0;
  height: 50px;
}
</style>