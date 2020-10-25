<template>
  <div class="pb-24 lg:pb-32">
    <div class="flex justify-center">
      <div
        class="portfolios-main text-black-onyx font-semibold lg:font-medium lg:leading-snug"
      >
        <p>FILM.</p>
        <p>MUSIC.</p>
        <p>PODCAST.</p>
        <p>WRITING.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PageMain"
});
</script>

<style scoped>
.portfolios-main {
  font-size: 15vw;
}
</style>
