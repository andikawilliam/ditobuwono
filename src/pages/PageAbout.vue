<template>
  <div
    class="flex justify-center items-center px-8 md:px-16 pb-16 lg:px-24 lg:py-24"
  >
    <div class="about-container">
      <div class="about-text font-light font-ubuntu text-current lg:text-justify">
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
  width: 67%;
}

.about-text {
  font-size: 1.8vw;
  letter-spacing: 0.024em;
  line-height: 1.5em;
}

@media screen and (max-width: 1279px) {
  .about-text {
    font-size: 2.5vw;
    letter-spacing: 0.01em;
    line-height: 1.4em;
  }
}

@media screen and (max-width: 1023px) {
  .about-container {
    width: 90%;
  }

  .about-text {
    font-size: 3.2vw;
    letter-spacing: 0.03em;
    line-height: 1.5em;
  }
  .about-line {
    border-top: 3.5px solid currentColor;
  }
}

@media screen and (max-width: 639px) {
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
