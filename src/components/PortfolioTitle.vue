<template>
  <h1
    :id="titleId"
    class="heading-text text-center font-roboto-slab opacity-80 capitalize"
  >
    {{ title }}
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PortfolioHeading",
  props: ["title", "titleId"]
});
</script>

<style scoped>
.heading-text {
  font-size: 3vw;
  opacity: 0.9;
}

@media screen and (max-width: 1023px) {
  .heading-text {
    font-size: 6vw;
  }
}

@media screen and (max-width: 639px) {
  .heading-text {
    font-size: 9vw;
  }
}
</style>
