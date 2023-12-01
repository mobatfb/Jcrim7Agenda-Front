<template>
  <div class="ma-1">
    <h3 class="ml-5">AGENDA</h3>
    <center>
      <v-card v-if="cased == ''" name="ASUNTO" class="mx-auto" elevation="1" max-width="500">
        <v-card-text style="cursor:default" class="py-2 font-weight-black">
          <h1 class="pa-3">TIPO DE ASUNTO:</h1>
        </v-card-text>
        <br>
        <v-card-text>
          <v-btn @click="cased = 'fiscal'" class="mb-4 pa-8" block color="green" size="x-large">
            <h2>FISCAL</h2>
          </v-btn>
          <v-btn @click="cased = 'administrativo'" class="mb-4 pa-8" block color="green" size="x-large">
            <h2>ADMINISTRATIVO</h2>
          </v-btn>
          <v-btn @click="cased = 'consulta'" class="mb-4 pa-8" block color="green" size="x-large">
            <h2>CONSULTA</h2>
          </v-btn>
          <v-btn :loading="waiting" @click="getSetting()" class="mb-4 pa-8" block color="green" size="x-large">
            <h2>AJUSTES</h2>
          </v-btn>
        </v-card-text>
      </v-card>
      <v-card name="ASUNTO" class="mx-auto" elevation="1" max-width="500">
        <fiscal v-if="cased == 'fiscal'" @propMethod="Actioncomponents" />
        <administrativo v-if="cased == 'administrativo'" @propMethod="Actioncomponents" />
        <consulta v-if="cased == 'consulta'" @propMethod="Actioncomponents" />
        <v-btn v-if="!cased == ''" @click="cased = ''" class="mb-4 pa-8" text size="large">
          <h2>VOLVER</h2>
        </v-btn>
      </v-card>

    </center>
    <!-- VENTANA DE AJUSTES EN DIALOGO -->
    <v-dialog v-model="dialog" persistent width="80%">
      <v-card>
        <center>
          <v-card-title class="text-h5">
            AJUSTES
          </v-card-title>
          <v-card-text style="cursor:default" class="py-2 font-weight-black">
            <h1 class="pa-3">SECUENCIA DE NUMERO DE OFICIO</h1>
          </v-card-text>
          <br>
          <v-card class="mx-auto" flat max-width="50%">
            <v-row>
              <v-col cols="4">
                <h3>DESCARGO DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numDescargo" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>PERICIA DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numPericia" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <h3>ADMINISTRATIVO DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numAdmin" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>MEMO DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numMemo" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>TELEGRAMA DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numTelegram" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>INFORME DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numInform" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>ORDEN DE SERVICIO DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numOrdService" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>EVALUACIÓN DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numEvaluation" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>RESOLUCIÓN DESDE:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field v-model="setting.numResolution" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <h3>CLAVE ADMINISTRATIVA:</h3>
              </v-col>
              <v-col cols="8">
                <v-text-field type="password" v-model="appAccess.password" variant="outlined" outlined></v-text-field>
              </v-col>
            </v-row>
            <br>
            <v-card-text>
              <h1 class="pb-3" style="color:red">{{ sms }}</h1>
              <v-checkbox v-model="sure" label="ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."></v-checkbox>
              <v-btn :disabled="!sure" @click="updateSetting()" class="mb-4 pa-8" block color="green" size="x-large">
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
import fiscal from "@/components/NroOffices/Fiscal.vue";
import administrativo from "@/components/NroOffices/Admin.vue";
import consulta from "@/components/NroOffices/Request.vue";
export default {
  components: { fiscal, administrativo, consulta },
  name: "home",
  data() {
    return {
      logoJcrim: require("@/assets/default/imgJcrim.png"),
      cased: "",
      dialog: false,
      sure: false,
      waiting: false,
      sms: "",
      appAccess: {
        name: "sz7crimadm",
        password: "",
      },
      setting: {numDescargo: "0001", numPericia: "0001", numAdmin: "0001", numMemo: "0001", numTelegram: "0001", numInform: "0001", numOrdService: "0001", numEvaluation: "0001", numResolution: "0001" }
    };
  },
  mounted() {
  },
  created() {
    this.$func.openDialog = this.openDialog;
    this.openDialog("news", { name: "dfdf" });
  },
  computed: {},
  methods: {
    Actioncomponents(aux, data) {
      switch (aux) {
        case "alert":
          this.$function["alertIni"](data.status, data.sms);
          break;
        default:
          break;
      }
    },
    goTo(aux) {
      this.$router.push({ name: aux })
    },
    test(aux) {
      alert(aux.type)
    },
    contact() {
      window.open(this.url, "_blank");
    },
    close() {
      this.dialog.news = false;
    },
    openDialog(aux, data) {
      this.dialog.data = data;
      this.close();
      switch (aux) {
        case "news":
          this.dialog.title = "Noticias";
          this.dialog.news = true;
          break;
        case "business":
          this.dialog.title = "Negocios";
          this.dialog.business = true;
          break;
        case "login":
          this.dialog.title = "Ingresar / Iniciar Sesión";
          this.dialog.login = true;
          break;
        default:
          break;
      }
      this.dialog.active = true;
    },
    async createSetting() {
      this.$http({
        method: "POST",
        url: "/createsetting",
        data: {
          req: this.setting,
          appAccess: { name: "sz7crimSuperAdm", password: "aassleodffiIAs9" }
        },
      })
        .then((res) => {
          if (res.data) {
            this.showNotification(res.data.status)
          } else {
            this.$function.alertIni("error", "Error, Vuelva a intentar")
          }
        })
        .catch(() => { })
        .finally(() => {
          //  this.waiting = false;
        });
    },
    async getSetting() {
      this.sure = false
      this.waiting = true
      this.sms=""
      this.appAccess.password=""
      this.$http
        .get("/readsetting/" + this.appAccess.name)
        .then((res) => {
          if (res.data) {
            if (res.data.setting.gen) {
              this.createSetting()
            }else{
              this.setting.numDescargo = res.data.setting.numDescargo
              this.setting.numPericia = res.data.setting.numPericia
              this.setting.numAdmin = res.data.setting.numAdmin
              this.setting.numMemo = res.data.setting.numMemo
              this.setting.numTelegram = res.data.setting.numTelegram
              this.setting.numInform = res.data.setting.numInform
              this.setting.numOrdService = res.data.setting.numOrdService
              this.setting.numEvaluation = res.data.setting.numEvaluation
              this.setting.numResolution = res.data.setting.numResolution
              this.dialog = true
              this.waiting = false
              }
        } else {
              this.showNotification("error")

            }
        })
        .catch(() => {
          this.$function.alertIni("error", "Error. vuelva a intentar")
          this.waiting = false
        })
        .finally(() => { });
    },
    async updateSetting() {
      this.sure = false
      this.waiting = true
      this.$http({
        method: "PUT",
        url: "/updatesetting/sz7crimSuperAdm",
        data: {
          req: this.setting,
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
  },
};
</script>

<style scoped>
.centerFull {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.textTitle {
  font-size: 30px;
}

.textSubtitle {
  font-size: 100px;
}

.View {
  width: 100%;
}

.col1 {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 4%;
}

.col2 {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 2%;
  left: 10px;
  position: relative;
}
</style>
