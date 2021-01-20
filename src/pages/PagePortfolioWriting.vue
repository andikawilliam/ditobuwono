<template>
  <div
    class="relative text-gray-ivory px-8 md:px-16 pt-40 pb-12 lg:px-20 py-12 sm:py-20 lg:py-40"
  >
    <PortfolioHeading :title="title" :description="description" />
    <div class="lg:grid lg:grid-cols-2 lg:w-2/3 mx-auto gap-24">
      <div
        class="lg:row-span-1 lg:col-span-1 px-8 sm:px-16 lg:px-0 mb-12 sm:mb-20 lg:mb-24"
        v-for="publication in publications"
        :key="publication.id"
      >
        <a :href="publication.src">
          <div class="cover-container relative grayscale">
            <div class="absolute h-0 description-text bottom-0 flex items-center overflow-hidden">
              <p
                class="font-light pt-2 px-2 lg:px-6"
                v-html="publication.description"
              />
            </div>
            <img
              :src="publication.cover"
              class="mx-auto publication-cover w-full"
            />
          </div>
        </a>
        <div class="px-2 pt-4">
          <p class="title-text text-center font-medium pb-2">
            {{ publication.title }}
          </p>
          <div class="flex justify-center" v-if="publication.orderLink">
            <button
              class="order-text button mx-auto p-1 lg:px-4 border border-white rounded-lg hover:bg-white hover:text-black"
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
  box-shadow: 0px -2px 10px 2px rgba(15, 15, 15, 0.8);
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
  font-size: 1.5vw;
}

.description-text {
  transition: height 0.4s ease;
  font-size: 1.2vw;
  letter-spacing: 0.0375em;
  background-color: #181818b7;
  backdrop-filter: blur(1px);
}

 .order-text {
    font-size: 1.2vw;
  }

@media screen and (max-width: 1023px) {
  .title-text {
    font-size: 5vw;
  }

  .description-text {
    font-size: 3.2vw;
    height: auto;
  }

  .order-text {
    font-size: 3.5vw;
  }
}

@media screen and (max-width: 639px) {
  .description-text {
    font-size: 2.8vw;
  }

  .order-text {
    font-size: 3vw;
  }
}
</style>
