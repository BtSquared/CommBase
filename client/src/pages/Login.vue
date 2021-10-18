<template>
  <div>
    <div class="flex">
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
      <div>
        <Register />
      </div>
    </div>
    <div class="ref">
      <div>server defualt icon made by <a href="https://www.flaticon.com/authors/webalys" title="Webalys">Webalys</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>user defualt icon made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'
import Register from './Register.vue'

export default {
  name: "Login",
  components: {
    Register
  },
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
      const res = await Client.post('/auth/login', this.formData)
      localStorage.setItem('token', res.data.token)
      this.$store.commit('setUser', res.data.user)
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
.flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.ref {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>