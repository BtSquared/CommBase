<template>
  <div>
    <div class="regBox">
      <h1>Register</h1>
      <form @submit.prevent="handleSubmit">
          <input 
            @input="handleChange" 
            type="text" 
            :value="formData.displayName" 
            name="displayName" 
            placeholder="Display Name" 
            required
          />
          <input 
            @input="handleChange" 
            type="email" 
            :value="formData.email" 
            name="email" 
            placeholder="Email" 
            required
          />
          <input @input="handleChange" type="password" :value="formData.password" name="password" placeholder="Password" required/>
          <input @input="handleChange" type="password" :value="formData.confrimPassword" name="confrimPassword" placeholder="Confrim Password" required/>
          <button type="submit" :disabled="formData.password != formData.confrimPassword">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: "Register",
  data: () => ({
    formData: {
      displayName: '',
      email: '',
      password: '',
      confrimPassword: ''
    }
  }),
  methods: {
    handleChange(e) {
      this.formData[e.target.name] = e.target.value
    },
    async handleSubmit() {
      const res = await Client.post('/auth/register', {
        displayName: this.formData.displayName,
        email: this.formData.email,
        password: this.formData.password
        })
      console.log(res)
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