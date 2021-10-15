<template>
  <div>
    <form @submit.prevent="handleSubmit">
    <input @input="handleChange" type="text" :value="displayName" name="displayName" placeholder="Display Name" required/>
    <input @input="handleChange" type="email" :value="email" name="email" placeholder="Email" required/>
    <input @input="handleChange" type="password" :value="password" name="password" placeholder="Password" required/>
    <input @input="handleChange" type="password" :value="confrimPassword" name="confrimPassword" placeholder="Confrim Password" required/>
    <button type="submit" :disabled="password != confrimPassword">Submit</button>
    </form>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  name: "Login",
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
    handleSubmit() {
    }
  }
}
</script>
