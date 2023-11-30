<template>
  <div>
    <v-card-text style="cursor:default" class="py-2 font-weight-black">
      <h1 class="pa-3">OFICIOS FISCALES</h1>
    </v-card-text>
    <br>
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <h3>TIPO</h3>
        </v-col>
        <v-col cols="8">
          <v-select label="SELECCIONAR.." v-model="formOffice.type" :items="itemType" item-text="title"
            :return-object="false" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h3>SECCION</h3>
        </v-col>
        <v-col cols="8">
          <v-select label="SELECCIONAR.." v-model="formOffice.seccion" :disabled="formOffice.type == ''"
            :items="itemSeccion" item-text="title" :return-object="false" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h3>PERITO</h3>
        </v-col>
        <v-col cols="8">
          <v-select label="SELECCIONAR.." v-model="formOffice.perito" :disabled="formOffice.seccion == ''"
            :items="itemPerito" item-text="name" :return-object="false" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h3>DETALLES</h3>
        </v-col>
        <v-col cols="8">
          <v-text-field v-model="formOffice.info" variant="outlined" label="Info:(opcional)" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card-text>
      <v-btn :disabled="formOffice.perito == '' || formOffice.info.length < 3" @click="dialog = true; sure = false"
        class="mb-4 pa-8" block color="green" size="x-large">
        <h2>APLICAR</h2>
      </v-btn>
    </v-card-text>
    <!-- VENTANA DE CONFIRMACION EN DIALOGO -->
    <v-dialog v-model="dialog" persistent width="80%">
      <v-card>
        <center>
          <v-card-title class="text-h5">
            ¡ CONFIRMAR
          </v-card-title>
          <v-card class="mx-auto" flat max-width="50%">
            <v-card-text style="cursor:default" class="py-2 font-weight-black">
              <h2 class="pa-3">Tipo de Oficio</h2>
              <h2 class="pa-3"><strong>{{ formOffice.type }}</strong></h2>
            </v-card-text>
            <v-card-text style="cursor:default" class="py-2 font-weight-black">
              <h2 class="pa-3">Sección</h2>
              <h2 class="pa-3"><strong>{{ formOffice.seccion }}</strong></h2>
            </v-card-text>
            <v-card-text style="cursor:default" class="py-2 font-weight-black">
              <h2 class="pa-3">Perito</h2>
              <h2 class="pa-3"><strong>{{ formOffice.perito }}</strong></h2>
            </v-card-text>
            <v-card-text style="cursor:default" class="py-2 font-weight-black">
              <h2 class="pa-3">Detalles</h2>
              <h2 class="pa-3"><strong>" {{ formOffice.info }} "</strong></h2>
            </v-card-text>
            <br>
            <v-card-text>
              <h1 class="pb-3" style="color:red">{{ sms }}</h1>
              <v-checkbox v-model="sure" label="ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."></v-checkbox>
              <v-btn :loading="waiting" :disabled="!sure" @click="validData(formOffice)" class="mb-4 pa-8" block
                color="green" size="x-large">
                <h2>GUARDAR</h2>
              </v-btn>
              <v-btn :disabled="waiting" @click="dialog = false" class="mb-4 pa-8" text size="large">
                <h2>VOLVER</h2>
              </v-btn>


            </v-card-text>
          </v-card>
        </center>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      dialog: false,
      sure: false,
      waiting: false,
      sms: "",
      formOffice: { num: "", type: "", seccion: "", perito: "", info: "", date: "" },
      appAccess: {
        name: "sz7crimUser",
        password: "qwAS123",
      },
      itemType: [
        { id: 1, title: "DESCARGO" },
        { id: 2, title: "PERICIA" },
      ],
      itemSeccion: [
        { id: 1, tag: "IOT", title: "INSPEC. OCULAR. TECN." },
        { id: 2, tag: "AVA", title: "AUDIO, VIDEO Y AFINES" },
        { id: 3, tag: "BAL", title: "BALISTICO" },
        { id: 4, tag: "DOC", title: "DOCUMENTOLOGIA" },
        { id: 5, tag: "IGM", title: "IDENT. GRABADOS/MARCAS" },
        { id: 6, tag: "IFH", title: "IDENT. HUMANA" },
        { id: 7, tag: "RLH", title: "REC. LUG. HECHOS" },
        { id: 8, tag: "INF", title: "INFORMATICA" },
      ],
      itemPerito: [
        { id: 1, name: "MYOR. MASACHE" },
        { id: 2, name: "MYOR. SALINAS" },
        { id: 3, name: "SBOS. MOROCHO" },
        { id: 4, name: "SGOS. COLCHA" },
        { id: 5, name: "SGOS. MIÑO" },
        { id: 6, name: "SGOS. YANEZ" },
        { id: 7, name: "SGOS. TOAQUIZA" },
        { id: 8, name: "SGOS. PUGA" },
        { id: 9, name: "CBOP. ASANZA" },
        { id: 10, name: "CBOP. TORRES" },
        { id: 11, name: "CBOP. DELGADO" },
        { id: 12, name: "CBOS. CANGO" },
        { id: 13, name: "CBOS. MACHAI" },
        { id: 14, name: "CBOS. PILOCO" },
        { id: 15, name: "CBOS. ARMIJOS" },
        { id: 16, name: "POLI. ALVAREZ" },
        { id: 17, name: "POLI. HERRERA" },
        { id: 18, name: "POLI. VEINTIMILLA" },
        { id: 19, name: "POLI. PAREDES" },
      ]
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
    submit() { },
    async save(data) {
      var numFiscal = 0
      //GETNUM
      this.$http
        .get("/readsetting/sz7crimadm")
        .then((res) => {
          if (res.data) {
            if (res.data.setting) {
              numFiscal = res.data.setting.numFiscal
              if (numFiscal) {
                data.num=numFiscal
                this.$http({
                  method: "POST",
                  url: "/createfiscal",
                  data: {
                    req: data,
                    appAccess: this.appAccess,
                  },
                })
                  .then((res) => {
                    if (res.data) {
                      if (res.data.status=="success") {
                      alert("TO INCREASED")
                      numFiscal++
                      alert(numFiscal)
                      this.$http({
                        method: "PUT",
                        url: "/increasesetting/sz7crimadm/numFiscal",
                        data: {
                          req: numFiscal,
                          appAccess: this.appAccess
                        },
                      })
                        .then((res) => {
                          if (res.data) {
                            this.showNotification(res.data.status)
                          } else {
                            this.$function.alertIni("error", "Error, Vuelva a intentar")
                          }
                        })
                        .catch(() => {
                          this.$function.alertIni("error", "Error, contácte con administrador")
                        })
                        .finally(() => {
                          //  this.waiting = false;
                        });
                      }

                    } else {
                      this.$function.alertIni("error", "Error, contácte con administrador")
                    }
                  })
                  .catch(() => { })
                  .finally(() => {
                    //  this.waiting = false;
                  });



              }
            } else {
              this.showNotification("error")
            }
          }
        })
        .catch(() => {
          this.$function.alertIni("error", "Error. vuelva a intentar")
          this.waiting = false
        })
        .finally(() => { });

    },
    validData(aux) {
      this.waiting = true;
      if (this.dataCheck(aux.type) || this.dataCheck(aux.seccion) || this.dataCheck(aux.perito) || this.dataCheck(aux.info)) {
        this.waiting = false
        this.dialog = false
        this.sure = false
        this.$emit("propMethod", "alert", {
          status: "warning",
          sms: "LOS DATOS NO SON VALIDOS",
        });
        return
      }
      var today = new Date();
      var date =
        today.getDay() +
        "/" +
        today.getMonth() +
        "/" +
        today.getFullYear() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();
      var data = { num:aux.num, type: aux.type, seccion: aux.seccion, perito: aux.perito, info: aux.info, date: date }
      this.save(data)
    },
    dataCheck(aux) {
      if (aux.length < 3) {
        return true
      }
    },
    showNotification(aux) {
      switch (aux) {
        case "created":
          this.waiting = false
          this.dialog = true
          break;
        case "updated":
          this.sms = "INFORMACION GUARDADA CORRECTAMENTE"
          this.waiting = false
          break;
        case "password":
          this.sms = "CLAVE INCORRECTA"
          this.waiting = false
          break;
        case "empty":
          this.sms = "FALTAN CAMPOS POR LLENAR"
          this.waiting = false
          break;
        case "number":
          this.sms = "INGRESE SOLO NUMEROS"
          this.waiting = false
          break;
        case "fail":
          this.$function.alertIni("Error", "Error. vuelva a intentar")
          this.waiting = false
          break;
        case "error":
          this.$function.alertIni("error", "Error, contácte con administrador")
          this.waiting = false
          this.sure = false
          break;
        default:
          break;
      }

    }
  }
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
