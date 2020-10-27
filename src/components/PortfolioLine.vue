<template>
  <hr :id="lineId" class="line-border" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PortfolioLine",
  props: ["lineId"]
});
</script>

<style scoped>
.line-border {
  left: 0px;
  top: 0%;
  border-top: 8px solid;
  /* transition: transform 250ms ease-in-out; */
}

@media screen and (max-width: 1204px) {
  .line-border {
    border-top: 3px solid;
  }
}
</style>
