import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PersonalPhoto from "../assets/dito-picture-3.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PageAbout",
  data() {
    return {
      title: "About",
      picture: PersonalPhoto,
      texts: [
        `
          In the course of his creative process, Dito always raises
          <span class="">the meaning of honesty and hope</span>
          from a sense of loss. Because according to him, those feeling are
          <span class="">depiction of a complete human figure.</span>
        `,
        `
          This idea developed into one of Dito's quests to
          <span class="">explore different perspectives</span>
          from different mediums, which later could describe and preserve
          <span class="">the meaning of human beings.</span>
        `,
        `
          Completed his psychology study at Gadjah Mada University, currently Dito are
          interested in working as well as developing more in the creative and research fields.</span>
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
