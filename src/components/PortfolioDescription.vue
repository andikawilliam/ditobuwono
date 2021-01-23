<template>
  <div class="py-2 lg:text-justify tracking-wide font-light md:font-normal md:opacity-75">
    <h3
      class="description-text "
      :id="descriptionId"
      v-html="description"
    >
    </h3>
  </div>
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
  font-size: 1.3vw;
  letter-spacing: 0.025em;
}

@media screen and (max-width: 1023px) {
  .description-text {
    font-size: 2.2vw;
    letter-spacing: 0.035em;
    line-height: 1.6;
  }
}

@media screen and (max-width: 639px) {
  .description-text {
    font-size: 4.4vw;
    letter-spacing: 0.03em;
    line-height: 1.5;
  }
}
</style>
