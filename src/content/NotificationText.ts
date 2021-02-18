import Vue from "vue";

export default Vue.extend({
  name: "TheNotification",
  data() {
    return {
      // to turn off change notifState to : false
      notifState: true,
      notifText: `
        "Because the End Is Really
        the Beginning" is sold out! ✨
      `,
      notifLink: "https://linktr.ee/EndIsBeginning"
    };
  },
  methods: {
    closeNotification() {
      this.notifState = false;
    }
  }
});
