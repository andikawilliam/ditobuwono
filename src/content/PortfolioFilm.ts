import Vue from "vue";
import PortfolioHeading from "../components/PortfolioHeading.vue";
import PortfolioDescription from "../components/PortfolioDescription.vue";

import FilmWork from "../components/FilmWork.vue";
import CoverGerajak from "../assets/ss-gerajak.jpeg";
import CoverBelrusak from "../assets/ss-belrusak.webp";
import CoverMenyusulmu from "../assets/ss-menyusulmu.webp";
import CoverTerbelenggu from "../assets/ss-terbelenggu.webp";


export default Vue.extend({
  name: "PortfolioFilm",
  components: {
    PortfolioHeading,
    FilmWork,
    PortfolioDescription
  },
  data: function() {
    return {
      title: "filmography",
      description: `
        Dito's passion for cinema has existed since early childhood influenced  
        by his father.
        He started by making short films with his friends when 
        he was in high school.
        <span class="italic"> Terbelenggu (2014) </span>
        and 
        <span class="italic"> Menyusulmu Bisa Menunggu (2015) </span>
        are short films that he has starred in. In 2020, 
        <span class="italic">Belrusak</span> will be 
        Dito's directorial debut in the form of a short documentary.
      `,
      activeFilm: 0,
      films: [
        {
          id: 1,
          image: CoverGerajak,
          title: "Gerajak (2021)",
          type: "Short Surrealist Dance Film",
          role: "Roles: Still Photographer, Script Continuity",
          accolades: ["MIP Awards Moving Image of the Year 2021"],
          href: "",
        },
        {
          id: 2,
          image: CoverBelrusak,
          title: "Belrusak (2020)",
          type: "Short Documentary Film",
          role: "Role: Director",
          accolades: [
            "Official Selection Viddsee Juree Awards Indonesia 2020",
            "Official Selection Lift-Off Global Network Lift-Off Sessions 2020",
            "Official Selection Lift-Off Global Network First-Time Filmmaker Sessions 2020",
            "Official Selection Feel The Reel International Film Festival 2020",
            "Best Documentary October Edition Feel The Reel International Film Festival 2020"
          ],
          href: "https://www.viddsee.com/video/belrusak/ywxkh",
        },
        {
          id: 3,
          image: CoverMenyusulmu,
          title: "Menyusulmu Bisa Menunggu (2015)",
          type: "Short Fiction Film",
          role: "Roles: Actor, Producer",
          accolades: ["Winner SMA Global Jaya Film Festival 2015"],
          href: "https://youtu.be/BMIpvCrxou4",
        },
        {
          id: 4,
          image: CoverTerbelenggu,
          title: "Terbelenggu (2014)",
          type: "Short Fiction Film",
          role: "Roles: Actor, Music Director",
          accolades: ["Winner 8Schoolastic SMAN 8 Jakarta Film Festival 2014"],
          href: "https://youtu.be/_Q2Xg5CHHf8",
        }
      ]
    };
  }
});
