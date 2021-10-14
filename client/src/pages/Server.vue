<template>
  <div>
    <div>
      <Channel />
    </div>
  </div>
</template>

<script>
import Channel from '../components/MessageBoard.vue'

export default {
  name: "Server",
  components: {
    Channel
  },
  props: {
    server: Object
  },
  data: () => {

  },
  mounted: function(){},
  methods: {

  },

}
</script>