<template>
  <h1 :id="titleId" class="heading-text text-center font-medium uppercase">
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

@media screen and (max-width: 960px) {
  .heading-text {
    font-size: 9vw;
  }
}
</style>
