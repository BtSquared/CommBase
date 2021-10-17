<template>
  <div>
    <div class="PFGridCon">
      <div id="PFcontainer">
        <form @submit.prevent="handleSubmit">
          <input 
            @input="handleChange" 
            :value="content" 
            placeholder="Create a Message"
          />
        </form>
      </div>
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
::placeholder{
  color: rgb(206, 206, 206);
  font-size: 16px;
  padding: 20px;
}
input {
  width: 95%;
  height: 30px;
  background-color: rgb(144, 144, 144);
  border: none;
  border-radius: 7px;
  font-size: 16px;
}
#PFcontainer {
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 0 5px 0;
  background-color: rgb(114, 114, 114);
  height: 60px;
}
</style>