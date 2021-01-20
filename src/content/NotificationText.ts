import Vue from "vue";

export default Vue.extend({
  name: "TheNotification",
  data() {
    return {
      // to turn off change notifState to : false
      notifState: true,
      notifText: `
        Belrusak won Best Documentary October 
        Edition Feel The Reel International Film Festival 2020! ✨
      `,
      notifLink: "https://www.viddsee.com/video/belrusak/ywxkh"
    }
  },
  methods: {
    closeNotification() {
      this.notifState = false;
    }
  },
  
});
