<template>
  <div class="relative text-gray-ivory px-8 md:px-16 lg:px-20 py-32">
    <PortfolioHeading :title="title" :description="description" />
    <div class="relative">
      <div class="lg:w-2/3 mx-auto">
        <FilmWork
          v-for="film in films"
          :key="film.id"
          v-bind:image="film.image"
          v-bind:title="film.title"
          v-bind:type="film.type"
          v-bind:role="film.role"
          v-bind:accolades="film.accolades"
          v-bind:href="film.href"
          v-bind:embed="film.embed"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../content/PortfolioFilm.ts"></script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
