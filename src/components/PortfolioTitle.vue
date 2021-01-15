<template>
  <h1 :id="titleId" class="heading-text text-center font-oxygen font-bold uppercase">
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
  font-size: 5vw;
}

@media screen and (max-width: 1023px) {
  .heading-text {
    font-size: 8vw;
  }
}

@media screen and (max-width: 639px) {
  .heading-text {
    font-size: 9vw;
  }
}
</style>
