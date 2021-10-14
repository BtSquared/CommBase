<template>
  <div>
    <div>
      <h2>{{userName}}</h2>
      <p>{{content}}</p>
    </div>
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "postCard",
  props: {
    userName: String,
    content: String
  }
}
</script>
