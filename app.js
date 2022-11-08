new Vue({
  el: "#app",
  data: {
    name: "Saran",
    job: "Developer",
    youtube: "https://www.youtube.com/",
    tag: '<a href="https://www.youtube.com/">Youtube</a>',
  },
  methods: {
    greet(time) {
      return "Good " + time + " " + this.name;
    },
  },
});
