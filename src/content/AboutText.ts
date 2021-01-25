import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PersonalPhoto from "../assets/dito-picture.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PageAbout",
  data() {
    return {
      title: "About",
      picture: PersonalPhoto,
      texts: [
        `
          In the course of his creative process, Dito always raises the theme of
          <span class="">the meaning of honesty</span>
          from a sense of loss, where according to him that feeling is a
          <span class="">depiction of a complete human figure.</span>
        `,
        `
          This idea developed into one of Dito's quests to
          <span class="">explore different perspectives</span>
          from different mediums, which later could describe and preserve
          <span class="">the meaning of human beings.</span>
        `,
        `
          Currently, Dito is completing his undergraduate thesis at the Faculty
          of Psychology, Gadjah Mada University.
        `
      ]
    };
  },
  mounted: function() {
    this.aboutScroll();
  },
  methods: {
    aboutScroll() {
      gsap.fromTo(
        ".about-content",
        { autoAlpha: 0, y: 30 },
        {
          scrollTrigger: {
            id: "about-content",
            trigger: ".image-container",
            start: "top 60%",
            end: "top 60%",
            toggleActions: "play none none none"
          },
          y: 0,
          autoAlpha: 1,
          stagger: 0.4,
          duration: 0.5,
          rotation: 0.01
        }
      );
    }
  }
});
