<template>
  <div class="fullCenter" style="background: #45818eff; height: 80%">
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Lobster"
    />
    <v-row v-if="start" class="pa-10" >
      <v-col cols="9" lg="8" md="8" sm="8">
        <div class="fullCenter flexcolum">
          <img height="150px" width="150px" :src="myIcon" />
          <h1 class="specialFont">MB. CASHBOX</h1>
          <span>Organiza el dinero de tu negocio</span>
          <span>Organise your business cash</span>
        </div>
        <br>
        <br>
      </v-col>
      <v-col>
        <center>
          <v-card
            class="fullCenter flexcolum circular"
            color="#ffab40ff"
            style="border: solid black 3px"
          >
            <h1>Bienvenido</h1>
            <v-btn @click="start=false" class="ma-10" rounded color="red" elevation="10" x-large>
              <h1>Acceder</h1>
            </v-btn>
          </v-card>
        </center>
      </v-col>
    </v-row>
    <div v-else>
      <h3>estart</h3>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      myIcon: require("@/assets/apps/cashbox/icon.png"),
      start: true,
      logo: require("@/assets/img/business/moba.png"),
      btnDisable: false,
    };
  },
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
  },

  created() {
    this.formTeacher.email = localStorage.getItem("teacherEmailMatras");
  },
  computed: {},
  methods: {
    changeState() {
      if (this.formTeacher.state == 1) {
        this.formTeacher.state = -1;
      }
      this.formTeacher.state += 1;
    },
    submit() {},
  },
  continuar() {},
  close() {},
};
</script>
<style scoped>
.specialFont {
  font-family: Lobster;
}
.fullCenter {
  display: flex;
  justify-content: center;
  align-content: center;
  place-items: center;
}
.flexcolum {
  height: 50vh;
  flex-direction: column;
}
.circular {
  border-radius: 40px;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
}
.boxs {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
}
.img {
  background-size: 100% 100%;
  background-repeat: none;
}
</style>
