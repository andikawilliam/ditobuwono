<template>
  <div class="relative text-gray-ivory px-8 pt-40 pb-12 lg:px-20 lg:py-40">
    <PortfolioHeading :title="title" :description="description" />
    <div class="lg:grid lg:grid-cols-2 lg:w-2/3 mx-auto gap-24">
      <div
        class="lg:row-span-1 lg:col-span-1 mb-12 lg:mb-24"
        v-for="publication in publications"
        :key="publication.id"
      >
        <a :href="publication.src">
          <div class="px-2 grayscale">
            <img :src="publication.cover" class="mx-auto publication-cover" />
          </div>
        </a>
        <div class="px-2 pt-6">
          <p class="title-text text-center font-medium pb-2">
            {{ publication.title }}
          </p>
          <p class="description-text font-light pt-2">
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
import CoverToleransi from "../assets/cover-toleransi.png";
import CoverKaput from "../assets/cover-kaput.png";

export default Vue.extend({
  name: "PortfolioWriting",
  components: {
    PortfolioHeading,
  },
  data: function() {
    return {
      title: "PUBLICATIONS",
      description: `
        Dito started writing short stories from elementary school, where 
        since then he has been happy to write wherever he has free time and some
        of his writings are still not published. 
        <br><br>
        In 2017, Dito was invited by 
        his college friend to become a contributor for his campus independent 
        zine, 
        <span class="font-semibold">Mati Lampu</span>. 
        And in 2020, he began to create and design his own publications.
      `,
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
  transform: translateY(-1vw);
}

.title-text {
  font-size: 1.5vw;
}

.description-text {
  font-size: 1.2vw;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 1204px) {
  .title-text {
    font-size: 5vw;
  }

  .description-text {
    font-size: 3.5vw;
  }
}
</style>
