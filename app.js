new Vue({
  el: "#app",
  data: {
    name: "",
    job: "Developer",
    age: 24,
    myAge: 20,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: true,
    nearby: false,
    error: false,
    suc: false,
    characters: ["mario", "lara", "como", "sala"],
    family: [
      { name: "Saran", age: 24 },
      {
        name: "barath",
        age: 20,
      },
    ],
  },
  methods: {
    greet(time) {
      return "Good " + time + " " + this.name;
    },
    add(inc) {
      this.age += inc;
    },
    subtract(dec) {
      this.age -= dec;
    },
    updateXY(track) {
      this.x = track.offsetX;
      this.y = track.offsetY;
    },
    logName() {
      console.log("You entered a Name");
    },
    logAge() {
      console.log("You entered a Age");
    },
  },
  computed: {
    addToA() {
      console.log("addToA");
      return this.a + this.myAge;
    },
    addToB() {
      console.log("addToB");
      return this.b + this.myAge;
    },
    compClasses() {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});
