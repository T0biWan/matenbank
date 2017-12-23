<template>
  <div>
    <div v-for="mate in mates">
      <mate :mate="mate"></mate>
    </div>
  </div>
</template>

<script>
import mate from "./mate.vue"

export default {
  name: "mates",

  components: {
    'mate': mate,
  },

  props: {
    mates: this.mates,
  }

};
</script>
