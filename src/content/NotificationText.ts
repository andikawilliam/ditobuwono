import Vue from "vue";

export default Vue.extend({
  name: "TheNotification",
  data() {
    return {
      // to turn off change notifState to : false
      notifState: true,
      notifText: `
        Pre-order "Because the End Is Really
        the Beginning" now! ✨
      `,
      notifLink: "https://linktr.ee/EndIsBeginning"
    }
  },
  methods: {
    closeNotification() {
      this.notifState = false;
    }
  },
  
});
