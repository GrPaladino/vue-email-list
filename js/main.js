const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "Hello Vue!",
      mails: [],
      show: false,
    };
  },

  methods: {
    generateMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const mail = response.data.response;
            this.mails.push(mail);
          });
      }
    },

    showMails() {
      this.show = true;

      if (this.mails.length < 10) this.generateMail();
    },

    deleteMails() {
      this.show = false;
      this.mails.splice(0, 10);
    },
  },

  created() {
    this.generateMail();
  },
});
app.mount("#root");
