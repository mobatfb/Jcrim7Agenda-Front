<template>
  <div
      class="boxs"
      style="width: 100%; height: 90%"
      :style="{ backgroundImage: 'url(' + imgBg + ')' }"
    >
      <center class="boxs" style="top: 3%; width: 100%; height: 80%">
        <div
          class="boxs"
          :style="{
            backgroundImage: 'url(' + imgMatras + ')',
            width: '20%',
            height: '20%',
            left: '40%',
          }"
        ></div>
        <div
          id="tPanelA"
          class="boxs"
          style="top: 20%; width: 60%; height: 10%; left: 20%"
        >
          <h3>{{ texttitle[formTeacher.state].text }}</h3>
  
        </div>
      </center>
      <v-row>
        <v-col> </v-col>
      </v-row>
      <v-btn absolute left bottom text @click="changeState()">
        <h3 style="cursor: pointer">
          {{ texttitle[formTeacher.state + 1].text }}
        </h3>
      </v-btn>
      <v-btn absolute right bottom text @click="submit()">jkjk
      </v-btn>
    </div>
</template>
<script>
export default {
  components: {},
  props: {
    data: { type: Array },
  },
  data() {
    return {
      btnDisable:false,
      alertCall: false,
      texttitle: [
        { text: this.data.name },
        { text: "CREAR CUENTA" },
        { text: "INICIAR SESION" },
      ],
      formTeacher: {
        state: 0,
        name: "",
        email: "",
        pass: "",
        role: "Docente",
        combos: [],
      },
      items: [
        {
          name: "new",
          text: "Nuevo",
          icon: "",
        },
        {
          name: "open",
          text: "Nuevo",

          icon: "",
        },
      ],
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
     submit() {
      }
    },
    continuar() {},
    close() {
  },
};
</script>
<style scoped>
.boxs {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
}
</style>
