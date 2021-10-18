<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <input 
        @input="handleChange" 
        type="file"
        name="serverIcon"
        placeholder="Server Icon"
      />
      <button type="Submit">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ServerIconForm',
  data: () => ({
    formData: {
      serverId: '',
      serverIcon: ''
    }
  }),
  mounted() {
    this.setServerId()
  },
  watch: {
    '$route.params.serverId': 'setServerId'
  },
  methods: {
    handleChange(e){
      this.formData.serverIcon = e.target.files[0]
    },
    async handleSubmit() {
      await this.$emit('handleIconSubmit', this.formData)
    },
    setServerId(){
      this.formData.serverId = this.$route.params.serverId
    }
  }
}
</script>

<style scoped>
input[type="file"] {
  width: 218px;
  padding: 6px 10px;
}
button {
  margin: 6px 10px;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>