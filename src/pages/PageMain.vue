<template>
  <div class="pb-32 lg:pb-40">
    <div class="flex justify-center">
      <div
        class="portfolios-main text-black-onyx font-semibold lg:font-medium leading-snug"
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
