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
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          const mail = response.data.response;
          this.mails.push(mail);
        });
    },
  },

  created() {
    for (let i = 0; i < 10; i++) {
      this.generateMail();
    }
  },
});
app.mount("#root");
