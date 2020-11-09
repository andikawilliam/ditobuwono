import Vue from "vue";
import PortfolioHeading from "../components/PortfolioHeading.vue";

import FilmWork from "../components/FilmWork.vue";
import CoverBelrusak from "../assets/ss-belrusak.jpeg";
import CoverMenyusulmu from "../assets/ss-menyusulmu.png";
import CoverTerbelenggu from "../assets/ss-terbelenggu.png";

export default Vue.extend({
  name: "PortfolioFilm",
  components: {
    PortfolioHeading,
    FilmWork
  },
  data: function() {
    return {
      title: "filmography",
      description: `
        Dito's passion for cinema has existed since early childhood influenced  
        by his father.
        He started by making short films with his friends when 
        he was in high school.
        <br><br>
        <span class="font-semibold"> Terbelenggu (2014) </span>
        and 
        <span class="font-semibold"> Menyusulmu Bisa Menunggu (2015) </span>
        are short films that he has starred in. In 2020, 
        <span class="font-semibold">Belrusak</span> will be 
        Dito's directorial debut in the form of a short documentary.
      `,
      activeFilm: 0,
      films: [
        {
          id: 1,
          image: CoverBelrusak,
          title: "Belrusak (2020)",
          type: "Short Documentary Film",
          role: "Role: Director",
          accolades: [
            "Official Selection Viddsee Juree Awards Indonesia 2020",
            "Official Selection Lift-Off Global Network Lift-Off Sessions 2020",
            "Official Selection Lift-Off Global Network First-Time Filmmaker Sessions 2020"
          ],
          href: "https://www.viddsee.com/video/belrusak/ywxkh",
          embed: "https://www.viddsee.com/player/ywxkh"
        },
        {
          id: 2,
          image: CoverMenyusulmu,
          title: "Menyusulmu Bisa Menunggu (2015)",
          type: "Short Fiction Film",
          role: "Roles: Actor, Producer",
          accolades: ["Winner SMA Global Jaya Film Festival"],
          href: "https://youtu.be/BMIpvCrxou4",
          embed: "https://www.youtube-nocookie.com/embed/BMIpvCrxou4"
        },
        {
          id: 3,
          image: CoverTerbelenggu,
          title: "Terbelenggu (2014)",
          type: "Short Fiction Film",
          role: "Roles: Actor, Music Director",
          accolades: ["Winner 8Schoolastic SMAN 8 Jakarta Film Festival"],
          href: "https://youtu.be/_Q2Xg5CHHf8",
          embed: "https://www.youtube-nocookie.com/embed/_Q2Xg5CHHf8"
        }
      ]
    };
  }
});
