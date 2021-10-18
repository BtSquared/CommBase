<template>
  <div>
    <div class="ULCardFlexCon">
      <img :src="user.profilePicture" class="ULCimg"/>
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
.ULCardFlexCon {
  margin: 7px;
  display: flex;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
}
.ULCimg {
  margin: 0 7px 0 0;
  border-radius: 15px;
}
</style>