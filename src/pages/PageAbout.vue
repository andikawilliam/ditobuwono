<template>
  <div
    class="lg:flex lg:justify-center lg:items-center px-8 md:px-16 pb-16 md:py-16 lg:px-24 lg:py-32 lg:pb-40"
  >
    <div
      class="about-content image-container pb-4 lg:pb-0 lg:pt-8 lg:w-1/2 lg:mr-12 xl:mr-8"
    >
      <img class="w-2/3 md:w-1/2 lg:w-3/5 xl:w-1/2 mx-auto" :src="picture" />
      <div class="font-cormorant mt-2 text-sm text-center lg:text-base">
        Hanindito Buwono.
      </div>
    </div>
    <div class="about-content about-container mx-auto text-center lg:text-left">
      <div
        class="about-text font-light md:font-normal md:opacity-75 text-current"
      >
        <p v-for="text in texts" :key="text" v-html="text" />
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
  width: 35%;
}

.about-text {
  font-size: 1.2vw;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

@media screen and (max-width: 1279px) {
  .about-text {
    font-size: 1.5vw;
    letter-spacing: 0.01em;
    line-height: 1.4em;
  }
}

@media screen and (max-width: 1023px) {
  .about-container {
    width: 75%;
  }

  .about-text {
    font-size: 2.4vw;
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
    line-height: 1.6em;
  }
  .about-line {
    border-top: 3.5px solid currentColor;
  }
}
</style>
