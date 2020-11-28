<template>
  <div
    class="relative text-gray-ivory px-8 md:px-12  pt-40 pb-12 lg:px-20 lg:py-40"
  >
    <PortfolioHeading :title="title" :description="description" />
    <div class="lg:grid lg:grid-cols-2 lg:w-2/3 mx-auto gap-24">
      <div
        class="lg:row-span-1 lg:col-span-1 mb-12 lg:mb-24"
        v-for="publication in publications"
        :key="publication.id"
      >
        <a :href="publication.src">
          <div class="cover-container grayscale">
            <img :src="publication.cover" class="mx-auto publication-cover w-full">
            <div class="absolute description-text bottom-0 p-2">
              <p class="font-light pt-2">
                {{ publication.description }}
              </p>
            </div>
          </div>
        </a>
        <div class="px-2 pt-4">
          <p class="title-text text-center font-medium pb-2">
            {{ publication.title }}
          </p>
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
  position: relative;
}
.cover-container:hover {
  transform: translateY(-1vw);
}

.title-text {
  font-size: 1.5vw;
}

.description-text {
  font-size: 1vw;
  letter-spacing: 0.05em;
  background-color: #18181881;
  backdrop-filter: blur(1px);
}

@media screen and (max-width: 960px) {
  .title-text {
    font-size: 5vw;
  }

  .description-text {
    font-size: 3.5vw;
  }
}
</style>
