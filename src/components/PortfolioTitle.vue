<template>
  <h1
    :id="titleId"
    class="heading-text text-center font-medium uppercase pb-2 lg:pb-4"
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
  font-size: 7vw;
}

@media screen and (max-width: 1204px) {
  .heading-text {
    font-size: 11vw;
  }
}
</style>
