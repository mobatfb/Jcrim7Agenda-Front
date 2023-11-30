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
          <br />
          <v-row v-if="formTeacher.state == 1">
            <v-col cols="4" lg="4" md="4" sm="4">
              <h4>Login:</h4>
            </v-col>
            <v-col cols="7" lg="7" md="7" sm="7">
              <input
                v-model="formTeacher.name"
                placeholder="Escriba su nombre"
                style="
                  background: white;
                  border-radius: 5%;
                  cursor: text;
                  border: 1px solid black;
                  padding-left: 5px
                "
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" lg="4" md="4" sm="4">
              <h4>E-login:</h4>
            </v-col>

            <v-col cols="7" lg="7" md="7" sm="7">
              <input
                v-model="formTeacher.email"
                placeholder="Escriba su Email"
                style="
                  background: white;
                  border-radius: 5%;
                  cursor: text;
                  border: 1px solid black;
                  padding-left: 5px
                "
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" lg="4" md="4" sm="4">
              <h4>Clave:</h4>
            </v-col>
            <v-col cols="7" lg="7" md="7" sm="7">
              <input
                v-model="formTeacher.pass"
                placeholder="Ingrese su clave"
                type="password"
                style="
                  background: white;
                  border-radius: 5%;
                  cursor: text;
                  border: 1px solid black;
                  padding-left: 5px
                "
              />
            </v-col>
          </v-row>
          <br />
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
      <v-btn :disabled="btnDisable" absolute right bottom text @click="submit()">
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
    goto: { type: Function, default: () => [] },
  },
  data() {
    return {
      btnDisable:false,
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
    async submit() {
      if (
        this.formTeacher.email.length > 8 &&
        this.formTeacher.pass.length > 4
      ) {
      this.btnDisable=true
        localStorage.setItem("teacherEmailMatras", this.formTeacher.email);
        if (this.formTeacher.state == 0) {
          //buscar bd y ininicar
          this.$http
            .post("/userlogin", this.formTeacher)
            .then((res) => {
              if (res.data) {
                this.formTeacher.pass = "";
                if (res.data.user) {
                  if (res.data.user.role == "Docente") {
                    this.$function.alertIni(
                      "success",
                      "Bienvenido " + res.data.user.name
                    );
                    this.$user.data=res.data.user;
                    this.$user.name=res.data.user.name;
                    this.$datos.url = "Principal";
                    this.$datos.topic = 0;
                    this.$datos.seccion = 0;
                    this.$router.push({ name: "Cargando" });
                    this.close();
                  } else {
                    this.$function.alertIni(
                      "warning",
                      "Para usar este perfil, use la opcion Autonomo "
                    );
                  }
                } else {
                  this.$function.alertIni("warning", res.data.message);
                }
              }
            })
            .catch((err) => {
              err = "";
              this.$function.alertIni("error", "Ha ocurrido un error" + err);
            })
            .finally(()=>{
                    this.btnDisable=false
            });
        } else {
          //registar en bd y volver a login
          this.formTeacher.combos = [];
          for (let index = 0; index < 5; index++) {
            var gencombo = {
              title: "Sin definir",
              info: null,
              date: null,
              code: null,
              act: [],
            };
            this.formTeacher.combos.push(gencombo);
            for (let index2 = 0; index2 < 5; index2++) {
              this.formTeacher.combos[index].act.push({ nid: "Sin actividad", results:[] });
            }
          }
          this.$http
            .post("/userregister", this.formTeacher)
            .then((res) => {
              if (res.data) {
                this.$function.alertIni("success", res.data.message);
                if (res.data.user) {
                  this.formTeacher.pass = "";
                  this.formTeacher.state = 0;
                }
              }
            })
            .catch((err) => {
              err = "";
              this.$function.alertIni("error", "Ha ocurrido un error" + err);
            })
            .finally(
              ()=>{
                    this.btnDisable=false
            }
            );
        }
      } else {
        this.$function.alertIni("warning", "Poca información");
      }
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
