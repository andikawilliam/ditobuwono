import Vue from "vue";
import PortfolioHeading from "../components/PortfolioHeading.vue";
import CoverTheEnd from "../assets/cover-the-end.webp";
import CoverToleransi from "../assets/cover-toleransi.webp";
import CoverKaput from "../assets/cover-kaput.webp";

export default Vue.extend({
  name: "PortfolioWriting",
  components: {
    PortfolioHeading
  },
  data: function() {
    return {
      title: "publications",
      description: `
        Dito started writing short stories from junior high school.
        Since then he has been happy to write whenever he has free time, with some
        of his writings still not published. In 2017, Dito was invited by 
        his college friend to become a contributor for his campus independent 
        zine, 
        <span class="italic">Mati Lampu</span>. 
        And finally, on the 20th of January 2021, he published his first book called
        <span class="italic">Because the End Is Really the Beginning</span>.
      `,
      publications: [
        {
          id: 1,
          src: "https://linktr.ee/EndIsBeginning",
          cover: CoverTheEnd,
          title: "Because the End Is Really the Beginning",
          description: `
          Dito wrote a short story book about regrets.
          Where according to him, a mistake will remain forever
          and it is part of our life. <br>
          It cannot be forced to
          be erased or transferred, we must embraced it in
          our body and soul. With the illustration and audio
          in this book, Dito hopes that his readers can feel
          the feelings that he has felt during his life until now.
          `,
          accolades: [
            "Indie Book Corner Best Sellers List",
            "Editors' Choice at bukuindie.com",
            "Book Talks at “Bedah Buku Madania“"
          ],
          orderLink: "https://linktr.ee/EndIsBeginning"
        },
        {
          id: 2,
          src:
            "https://issuu.com/matilampu/docs/mati_lampu_vol4_7f301e70bf19a9",
          cover: CoverToleransi,
          title: "Mati Lampu Vol.4: Toleransi",
          description: `
            Became a contributor to the fourth volume of “Mati Lampu” zine.
            This zine raises about tolerance, where it is moved to see a "reality of
            tolerance" with differences as a principle of analysis: seeing the
            distance from idealization of tolerance, with empirical reality.
          `
        },
        {
          id: 3,
          src: "https://issuu.com/haninditobuwono9413/docs/kaput_rev",
          cover: CoverKaput,
          title: "Kaput",
          description: `
            Kaput is one of Dito’s cathartic medium in the midst of this pandemic. 
            Where he tries to maintain his sanity with a choice of songs, 
            which he thinks can help him to get through this uncertainty.
          `
        }
      ]
    };
  }
});
