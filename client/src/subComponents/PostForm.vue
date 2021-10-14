<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input @input="handleChange" :value="content" placeholder="Message {{channelName}}">
    </form>
  </div>
</template>

<script>

export default {
  name: "PostForm",
  props: {
    channelName: String,
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
