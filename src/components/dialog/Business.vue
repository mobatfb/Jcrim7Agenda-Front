<template>
  <div
    class="boxs"
    style="width: 100%; height: 90%"
    :style="{ backgroundImage: 'url(' + imgBg + ')' }"
  >
  <h3>{{data.name.toUpperCase()}}</h3>

    <v-btn :disabled="btnDisable" absolute right bottom text @click="submit(data.name)">
      <v-img
        alt="ok"
        contain
        :src="imgOk"
        transition="scale-transition"
        position="absolute"
        width="130px"
      />
  
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
      btnDisable: false,
      alertCall: false,
      texttitle: [
        { text: "INICIAR SESION" },
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
    submit(aux) {
      this.$router.push({path:aux})
    },
    continuar() {},
    close() {
      this.formTeacher.state = 0;
      this.$emit("goto", "Docente");
    },
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
