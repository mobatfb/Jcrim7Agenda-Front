<template>
  <div class="ma-1">
    <h4 class="ml-5">AGENDA</h4>
    <center>
      <v-row name="YEAR SHOW">
        <v-col></v-col>
        <v-col>
          <v-btn :disabled="this.state.year == this.stateLimitBack.year" style="float: right;" x-small
            @click="state.year--; state.month = 1" rounded :color="$color.primary">
            <v-icon> mdi-arrow-left </v-icon>
          </v-btn>

        </v-col>
        <v-col>
          <h3>
            {{ state.year }}</h3>
        </v-col>
        <v-col>
          <v-btn :disabled="this.state.year == this.stateLimitNext.year" style="float: left"
            @click="state.year++; state.month = 1" rounded x-small :color="$color.primary">
            <v-icon> mdi-arrow-right </v-icon>
          </v-btn>
        </v-col>
        <v-col></v-col>

      </v-row>
      <v-row name="MONTH SHOW">
        <v-col></v-col>
        <v-col>
          <v-btn style="float: right;"
            :disabled="this.state.year == this.stateLimitBack.year && this.state.month == this.stateLimitBack.month"
            @click="btnMonthBack()" rounded x-small :color="$color.primary">
            <v-icon> mdi-arrow-left </v-icon>
          </v-btn>

        </v-col>
        <v-col>
          <h3>
            {{ calendar[state.year][state.month - 1].month }}</h3>
        </v-col>
        <v-col>
          <v-btn style="float: left"
            :disabled="this.state.year == this.stateLimitNext.year && this.state.month == this.stateLimitNext.month"
            @click="btnMonthNext()" rounded x-small :color="$color.primary">
            <v-icon> mdi-arrow-right </v-icon>
          </v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>
      <br>
      <br>
      <br>
      <table class=tableMy style="cursor: default" border=1 cellspacing=0 cellpadding=0 width=1300>
        <tr name="headerDaysWeek">
          <td v-for="day in daysWeek" :key="day" width=1000 class="tdMy">
            <h3 align=center>{{ day }}</h3>
          </td>
        </tr>
        <tr name="campo1">
          <td>
            <table border=1 cellspacing=0 cellpadding=0 style='width: 98%; margin: 2px; border-collapse:collapse;'>
              <tr >
                <td colspan=2>
                  <h3 align=center>1</h3>
                </td>
              </tr>
              <tr>
                <td style=';border:solid 1.0pt'>
                  <h3 align=center>09:00 - 10:00</h3>
                </td>
                <td  style='background:#00B050;border:solid 1.0pt'>
                  <h3 style="cursor: pointer;" @click="addCite('DISP')" align=center>DISPONIBLE</h3>
                </td>
              </tr>
              <tr>
                <td style=';border:solid 1.0pt;'>
                  <h3 align=center>11:00 - 12:00</h3>
                </td>
                <td style='background:#00B050;border:solid 1.0pt'>
                  <h3 style="cursor: pointer;" @click="addCite('DISP')" align=center>DISPONIBLE</h3>
                </td>
              </tr>
              <tr>
                <td style=';border:solid 1.0pt; cursor: default'>
                  <h3 align=center>14:30 - 15:30</h3>
                </td>
                <td style='background:#C00000; border:solid 1.0pt'>
                  <h3 style="color:white; cursor: pointer;" @click="addCite('OCUP')" align=center>OCUPADO</h3>
                </td>
              </tr>
              <tr>
                <td style='border:solid 1.0pt;'>
                  <h3 align=center>16:00 - 17:00</h3>
                </td>
                <td style='background:#C00000; border:solid 1.0pt'>
                  <h3 style="color:white; cursor: pointer;" @click="addCite('OCUP')" align=center>OCUPADO</h3>
                </td>
              </tr>
            </table>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 1.2</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 1.3</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 1.4</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 1.5</p>
          </td>



        </tr>

        <tr style='mso-yfti-irow:1;height:74.2pt'>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 2.1</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 2.2</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 2.3</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 2.4</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 2.5</p>
          </td>

        </tr>
        <tr style='mso-yfti-irow:1;height:74.2pt'>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 3.1</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 3.2</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 3.3</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 3.4</p>
          </td>
          <td class="tdMy" width=201 valign=top>
            <p>HOLA 3.5</p>
          </td>

        </tr>
      </table>

      <!--  <v-card v-if="cased == ''" name="ASUNTO" class="mx-auto" elevation="1" max-width="500">
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
      </v-card> -->

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
export default {
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
      daysWeek: ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"],
      state: { year: 2023, month: 11, day: 1, dayWeek: 5 },
      stateLimitBack: { year: 2023, month: 1 },
      stateLimitNext: { year: 2024, month: 12 },
      calendar:
      {
        "2023": [{ month: "ENERO", start: 7, days: 31 }, { month: "FEBRERO", start: 3, days: 28 }, { month: "MARZO", start: 3, days: 31 },
        { month: "ABRIL", start: 6, days: 30 }, { month: "MAYO", start: 1, days: 31 }, { month: "JUNIO", start: 4, days: 30 },
        { month: "JULIO", start: 6, days: 31 }, { month: "AGOSTO", start: 2, days: 31 }, { month: "SEPTIEMBRE", start: 5, days: 30 },
        { month: "OCTUBRE", start: 7, days: 31 }, { month: "NOVIEMBRE", start: 3, days: 30 }, { month: "DICIEMBRE", start: 5, days: 31 }],
        "2024": [{ month: "ENERO", start: 1, days: 31 }, { month: "FEBRERO", start: 4, days: 29 }, { month: "MARZO", start: 5, days: 31 },
        { month: "ABRIL", start: 1, days: 30 }, { month: "MAYO", start: 3, days: 31 }, { month: "JUNIO", start: 6, days: 30 },
        { month: "JULIO", start: 1, days: 31 }, { month: "AGOSTO", start: 4, days: 31 }, { month: "SEPTIEMBRE", start: 7, days: 30 },
        { month: "OCTUBRE", start: 2, days: 31 }, { month: "NOVIEMBRE", start: 5, days: 30 }, { month: "DICIEMBRE", start: 7, days: 31 }]
      },
    };
  },
  mounted() {
    const fecha = new Date();
    this.state.year = fecha.getFullYear()
    this.state.month = fecha.getMonth() + 1
    this.state.day = fecha.getDate()
    this.state.dayWeek = fecha.getDay()
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
    addCite(aux){
      if (aux=="DISP") {
        this.dialog=true        
      }
    },
    btnMonthBack() {

      if (this.state.month == 1) {
        this.state.year--
        this.state.month = 12
      } else {
        this.state.month--
      }
    },
    btnMonthNext() {
      if (this.state.month == 12) {
        this.state.year++
        this.state.month = 1
      } else {
        this.state.month++
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
      this.sms = ""
      this.appAccess.password = ""
      this.$http
        .get("/readsetting/" + this.appAccess.name)
        .then((res) => {
          if (res.data) {
            if (res.data.setting.gen) {
              this.createSetting()
            } else {
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
*{
  user-select: none
}
.tableMy {
  border-collapse: collapse;
}

.tdMy {
  border: solid windowtext 1.0pt;
}

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
