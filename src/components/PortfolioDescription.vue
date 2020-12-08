<template>
  <h3
    class="description-text py-2 font-light italic tracking-wide"
    :id="descriptionId"
    v-html="description"
  ></h3>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PortfolioDescription",
  props: ["description", "descriptionId"]
});
</script>

<style scoped>
.description-text {
  position: relative;
  font-size: 1.8vw;
  letter-spacing: 0.0275em;
}

@media screen and (max-width: 960px) {
  .description-text {
    font-size: 4.2vw;
    letter-spacing: 0.0375em;
    line-height: 1.7;
  }
}
</style>
