const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "Hello Vue!",
      mails: [],
    };
  },

  methods: {
    generateMail() {
      this.mails = [];

      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            const mail = response.data.response;
            this.mails.push(mail);
          });
      }
    },

    deleteMails() {
      this.mails = [];
    },
  },

  created() {},
});
app.mount("#root");
