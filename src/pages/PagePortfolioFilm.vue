<template>
  <div class="relative px-8 md:px-20 lg:px-20 py-32 lg:py-40">
    <PortfolioHeading :title="title" :description="description" />
    <div class="relative">
      <div class="sm:w-2/3 md:w-4/5 lg:w-1/2 mx-auto overflow-hidden">
        <FilmWork
          v-for="film in films"
          :key="film.id"
          v-bind:id="film.id"
          v-bind:image="film.image"
          v-bind:title="film.title"
          v-bind:type="film.type"
          v-bind:role="film.role"
          v-bind:accolades="film.accolades"
          v-bind:href="film.href"
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
