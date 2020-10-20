<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <HeadingPortfolio :portfolio="title" :key="title" />
    <div class="lg:flex lg:w-2/3 mx-auto gap-24">
      <div
        class="lg:w-1/2 mb-24"
        v-for="publication in publications"
        :key="publication.id"
      >
        <div id="publication-cover" class="grayscale">
          <img :src="publication.cover" class="mx-auto" />
        </div>
        <div class="pt-6">
          <p class="text-2xl text-center font-medium pb-2">
            {{ publication.title }}
          </p>
          <p class="text-lg text-gray-200 italic pt-2">
            {{ publication.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeadingPortfolio from "../components/HeadingPortfolio.vue";
import CoverToleransi from "../assets/cover-toleransi.png";
import CoverKaput from "../assets/cover-kaput.png";

export default Vue.extend({
  name: "PortfolioWriting",
  components: {
    HeadingPortfolio
  },
  data: function() {
    return {
      title: "PUBLICATIONS",
      publications: [
        {
          id: 1,
          cover: CoverToleransi,
          title: "Mati Lampu Vol.4: Toleransi",
          description: `
            Became a contributor to the fourth volume of “Mati Lampu” zine. This
            zine raises about tolerance, where it is moved to see a "reality of
            tolerance" with differences as a principle of analysis: seeing the
            distance from idealization of tolerance, with empirical reality.
          `
        },
        {
          id: 2,
          cover: CoverKaput,
          title: "Kaput",
          description: `
            Starting to make his own publication, Kaput is one of Dito’s 
            cathartic medium in the midst of this pandemic. Where he tries to
            maintain his sanity with a choice of songs, which he thinks can help
            him to get through this uncertainty.
          `
        }
      ]
    };
  }
});
</script>
