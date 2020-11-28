import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import PortfolioHeading from "../components/PortfolioHeading.vue";

export default Vue.extend({
  name: "PortfolioPodcast",
  components: {
    PortfolioHeading
  },
  data: function() {
    return {
      title: "talks",
      description: `
        Dito started his own podcast with 
        <span class="font-semibold">Dara Dan Pemuda</span>,
        then within the same year in 2018, 
        <span class="font-semibold">Loka Bersua</span> 
        was made with his friends as a guest star. Both podcast's talking about 
        sharing the perspective and experience listening to variant genre of 
        music. 
        <br>
        In 2019, he was entrusted to manage the
        <span class="font-semibold">EksotisMerauke</span> 
        podcast, where the podcast tells about the experiences when he and his 
        college friends participated in social services in Merauke, Papua.
      `,
      podcasts: [
        {
          id: 1,
          show: false,
          name: "EksotisMerauke",
          type: "spotify",
          src: [
            "https://open.spotify.com/embed-podcast/episode/4t7sqCp8WUWrBPQMxxIwn9",
            "https://open.spotify.com/embed-podcast/episode/0Yi88NzUtsbTtoWTAFIRCM",
            "https://open.spotify.com/embed-podcast/episode/1EHnsS90cf8GrxbxWPtwj6",
            "https://open.spotify.com/embed-podcast/episode/14fE8Q1JiaXRwm9LQAPuSX",
            "https://open.spotify.com/embed-podcast/episode/28yLAnbOHFlNOq5zMIh6V7",
            "https://open.spotify.com/embed-podcast/episode/1RUbojWjWv4wnDLESMbcq7",
            "https://open.spotify.com/embed-podcast/episode/3mnaUMwIP0Sa3wmB71psFc"
          ],
          active: 1
        },
        {
          id: 2,
          show: false,
          name: "Loka Bersua",
          type: "soundcloud",
          src: [
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440655900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ],
          active: 1
        },
        {
          id: 3,
          show: false,
          name: "Dara Dan Pemuda",
          type: "mixcloud",
          src: [
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol1%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol2%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol4%2F"
          ],
          active: 1
        }
      ]
    };
  },
  methods: {
    loopNext: function(id: number, length: number) {
      const len = length;
      if (id > len) {
        id = 1;
      } else if (id < 1) {
        id = len;
      }
      return id;
    }
  }
});
