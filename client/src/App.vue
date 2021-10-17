<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    
  },
  // created() {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     this.checkSession()
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
