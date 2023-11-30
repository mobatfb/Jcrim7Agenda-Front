<template>
  <div
      style="width: 100%; height: 90%; background:red"
    >
<h3>productos</h3>
<v-btn>
  dfdf
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
