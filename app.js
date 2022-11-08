new Vue({
  el: "#app",
  data: {
    name: "Saran",
    job: "Developer",
  },
  methods: {
    greet(time) {
      return "Good " + time + " " + this.name;
    },
  },
});
