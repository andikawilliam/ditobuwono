<template>
  <div
    class="flex justify-center items-center px-8 md:px-16 pb-16 lg:px-24 lg:pt-40 lg:pb-24"
  >
    <div class="about-container">
      <div class="about-text font-light italic text-current">
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

.about-container {
  width: 75%;
}

.about-text {
  font-size: 1.9vw;
  letter-spacing: 0.025em;
  line-height: 1.5em;
}
@media screen and (max-width: 960px) {
  .about-container {
    width: 100%;
  }

  .about-text {
    font-size: 4.2vw;
    letter-spacing: 0.03em;
    line-height: 1.5em;
  }
  .about-line {
    border-top: 3.5px solid currentColor;
  }
}
</style>
