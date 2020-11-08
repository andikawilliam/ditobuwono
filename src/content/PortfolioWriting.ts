import Vue from "vue";
import PortfolioHeading from "../components/PortfolioHeading.vue";
import CoverToleransi from "../assets/cover-toleransi.png";
import CoverKaput from "../assets/cover-kaput.png";

export default Vue.extend({
  name: "PortfolioWriting",
  components: {
    PortfolioHeading
  },
  data: function() {
    return {
      title: "publications",
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