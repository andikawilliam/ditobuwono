<template>
  <div class="pb-24 lg:pb-32">
    <div class="flex justify-center">
      <div
        class="portfolios-main text-black-onyx font-semibold lg:font-medium lg:leading-snug"
      >
        <a href="#filmography">
          <p>FILM.</p>
        </a>
        <a href="#mixtapes">
          <p>MUSIC.</p>
        </a>
        <a href="#talks">
          <p>PODCAST.</p>
        </a>
        <a href="#publications">
          <p>WRITING.</p>
        </a>
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

.portfolios-main p {
  transition: all 0.4s ease-in-out;
}

.portfolios-main p:hover {
  transform: translateX(2vw);
  opacity: 0.5;
}
</style>
