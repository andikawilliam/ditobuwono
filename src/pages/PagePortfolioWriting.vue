<template>
  <div class="relative text-gray-ivory px-8 lg:px-20 py-40">
    <PortfolioHeading :portfolio="title" :key="title" />
    <PortfolioDescription :portfolio="title" :description="description" />
    <div class="lg:grid lg:grid-cols-2 lg:w-2/3 mx-auto gap-24">
      <div
        class="lg:row-span-1 lg:col-span-1 mb-24"
        v-for="publication in publications"
        :key="publication.id"
      >
        <a :href="publication.src">
          <div class="px-6 grayscale">
            <img :src="publication.cover" class="mx-auto publication-cover" />
          </div>
        </a>
        <div class="px-6 pt-6">
          <p class="text-2xl text-center font-medium pb-2">
            {{ publication.title }}
          </p>
          <p class="text-lg lg:text-2xl text-gray-200 italic pt-2">
            {{ publication.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PortfolioHeading from "../components/PortfolioHeading.vue";
import PortfolioDescription from "../components/PortfolioDescription.vue";
import CoverToleransi from "../assets/cover-toleransi.png";
import CoverKaput from "../assets/cover-kaput.png";

export default Vue.extend({
  name: "PortfolioWriting",
  components: {
    PortfolioHeading,
    PortfolioDescription
  },
  data: function() {
    return {
      description: `
        Dito started writing short stories from elementary school, where 
        since then he has been happy to write wherever he has free time and some
        of his writings are still not published. In 2017, Dito was invited by 
        his college friend to become a contributor for his campus independent 
        zine, 
        <span class="font-semibold">Mati Lampu</span>. 
        And in 2020, he began to create and design his own publications.
      `,
      title: "PUBLICATIONS",
      publications: [
        {
          id: 1,
          src:
            "https://issuu.com/matilampu/docs/mati_lampu_vol4_7f301e70bf19a9",
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
          src: "https://issuu.com/haninditobuwono9413/docs/kaput_rev",
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

<style scoped>
.publication-cover {
  transition: transform 0.5s;
  box-shadow: 0px -2px 10px 2px rgba(15, 15, 15, 0.8);
}
.publication-cover:hover {
  transform: scale(1.03);
}
</style>
