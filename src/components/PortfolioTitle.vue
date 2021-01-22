<template>
  <h1
    :id="titleId"
    class="heading-text text-center font-roboto-slab font-semibold uppercase"
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
  font-size: 4vw;
}

@media screen and (max-width: 1023px) {
  .heading-text {
    font-size: 7vw;
  }
}

@media screen and (max-width: 639px) {
  .heading-text {
    font-size: 9vw;
  }
}
</style>
