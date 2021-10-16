<template>
  <div>
    <div class="regBox">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <input 
          @input="handleChange" 
          type="email" 
          :value="formData.email" 
          name="email" 
          placeholder="Email" 
          required
        />
        <input 
          @input="handleChange" 
          type="password" 
          :value="formData.password" 
          name="password" 
          placeholder="Password" 
          required
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: "Login",
  data: () => ({
    formData: {
      email: '',
      password: ''
    }
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    handleChange(e) {
      this.formData[e.target.name] = e.target.value
    },
    async handleSubmit() {
      const res = await Client.post('/auth/login', {...this.formData})
      this.$store.commit('setUser', res.data.user)
      localStorage.setItem('token', res.data.token)
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
.regBox {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}
</style>