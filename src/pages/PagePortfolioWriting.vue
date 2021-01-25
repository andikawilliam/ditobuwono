<template>
  <div
    class="relative px-8 md:px-16 pt-40 pb-12 lg:px-20 py-32 sm:py-20 lg:py-40"
  >
    <PortfolioHeading :title="title" :description="description" />
    <div
      class="mx-auto sm:grid sm:grid-cols-3 lg:pt-4 lg:w-4/5 md:gap-2 lg:gap-16 xl:gap-24"
    >
      <div
        class="lg:row-span-1 lg:col-span-1 px-0 my-24 sm:my-0"
        v-for="publication in publications"
        :key="publication.id"
      >
        <a :href="publication.src">
          <div class="cover-container relative grayscale lg:px-4">
            <img
              :src="publication.cover"
              class="mx-auto publication-cover w-full grayscale"
            />
          </div>
        </a>
        <div class="lg:px-2 pt-6 lg:pt-4">
          <p class="title-text text-center font-medium font-cormorant pb-2">
            {{ publication.title }}
          </p>
          <p
            class="description-text font-light pb-4"
            v-html="publication.description"
          />
          <div class="flex justify-center" v-if="publication.orderLink">
            <button
              class="order-text button mx-auto p-1 lg:px-4 underline rounded-lg hover:bg-white hover:text-black"
            >
              <a :href="publication.orderLink">
                Pre-Order Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../content/PortfolioWriting.ts"></script>

<style scoped>
.publication-cover {
  box-shadow: 1px 1px 4px 0px rgba(15, 15, 15, 0.8);
}

.cover-container {
  transition: transform 0.5s;
}
.cover-container:hover {
  transform: translateY(-1vw);
}

.cover-container:hover .description-text {
  height: 100%;
}

.title-text {
  font-size: 1.3vw;
}

.description-text {
  font-size: 0.9vw;
  letter-spacing: 0.02em;
}
.order-text {
  font-size: 0.9vw;
}

@media screen and (max-width: 1023px) {
  .title-text {
    font-size: 2vw;
  }

  .description-text {
    font-size: 1vw;
    height: auto;
  }

  .order-text {
    font-size: 1vw;
  }
}

@media screen and (max-width: 639px) {
  .title-text {
    font-size: 5vw;
  }
  .description-text {
    font-size: 3.5vw;
  }

  .order-text {
    font-size: 3.5vw;
  }
}
</style>
