<template>
  <div
    class="flex items-center px-8 md:px-16  pb-24 lg:px-24 lg:pt-40 lg:pb-64"
  >
    <div class="lg:w-1/2 lg:right-0">
      <div class="about-text font-light text-current">
        <p v-for="text in texts" :key="text" v-html="text"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../content/AboutText.ts"></script>

<style scoped>
p {
  padding-top: 1em;
}

.bolded {
  font-weight: 500;
}

.about-line {
  width: 100%;
  transform: scaleX(0.12);
  border-top: 8px solid currentColor;
}

.about-text {
  font-size: 2vw;
  letter-spacing: 0.025em;
  line-height: 1.4em;
}
@media screen and (max-width: 960px) {
  .about-text {
    font-size: 3.8vw;
    letter-spacing: 0.03em;
    line-height: 1.8em;
  }
  .about-line {
    border-top: 3.5px solid currentColor;
  }
}
</style>
