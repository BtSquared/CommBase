<template>
  <div>
    <div>
      <img :src="user.profilePicture" />
      <div>{{user.displayName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserListCard",
  props: {
    user: Object
  }
}
</script>

<style scoped>
img {
  height: 30px;
  width: 30px;
}
</style>