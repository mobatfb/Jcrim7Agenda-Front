<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<template>
  <div>
    <center>
      <table style="margin-bottom: 3px;border:solid .5pt;">
        <table name="YEAR" cellspacing=0 cellpadding=0 style='margin-bottom: 5px; border-collapse:collapse;'>
          <tr>
            <td>
              <v-btn :disabled="this.state.year == this.stateLimitBack.year" small
                @click="state.year--; state.month = 1; get()" rounded :color="$color.primary">
                <v-icon> mdi-arrow-left </v-icon>
              </v-btn>
            </td>
            <td width=200>
              <p align=center style='margin:0cm;text-align:center;'>{{ state.year }}</p>
            </td>
            <td>
              <v-btn :disabled="this.state.year == this.stateLimitNext.year" @click="state.year++; get(); state.month = 1"
                rounded small :color="$color.primary">
                <v-icon> mdi-arrow-right </v-icon>
              </v-btn>
            </td>
          </tr>
        </table>
        <table name="MONTH" cellspacing=0 cellpadding=0>
          <tr>
            <td>
              <v-btn style="float: right;"
                :disabled="this.state.year == this.stateLimitBack.year && this.state.month == this.stateLimitBack.month"
                @click="btnMonthBack()" rounded small :color="$color.primary">
                <v-icon> mdi-arrow-left </v-icon>
              </v-btn>
            </td>
            <td width=200>
              <p v-on:change="get()" align=center style='margin:0cm;text-align:center;'> {{
                calendar[state.year][state.month - 1].month }}</p>
            </td>
            <td>
              <v-btn style="float: left"
                :disabled="this.state.year == this.stateLimitNext.year && this.state.month == this.stateLimitNext.month"
                @click="btnMonthNext()" rounded small :color="$color.primary">
                <v-icon> mdi-arrow-right </v-icon>
              </v-btn>
            </td>
          </tr>
        </table>
      </table>
      <table name="SCHEDULE" v-bind="waitingGetData == false" class=tableMy style="cursor: default" border=1 cellspacing=0
        cellpadding=0 width=95%>
        <tr name="headerDaysWeek">
          <td v-for="day in daysWeek" v-show="day != 'SABADO' && day != 'DOMINGO'" :key="'Day:' + day" width=1000
            class="tdMy" style="background-color: yellow;">
            <p style="margin: 0cm; font-size:small;" align=center><b>{{ day }}</b></p>
          </td>
        </tr>
        <tr v-for="colS in 6" :key="'colsS:' + colS" :name="'colsS:' + colS">
          <td v-for="campoS in 7" v-show="campoS <= 5" :key="'campoS:' + campoS">
            <table name="miniTabla"
              v-show="(((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start) <= calendar[state.year][state.month - 1].days"
              v-if="((colS - 1) * 7) + campoS >= calendar[state.year][state.month - 1].start" border=1 cellspacing=0
              cellpadding=0 style=' border-collapse:collapse; margin: 2px; width: 98%'>
              <tr v-for="hour, index in hours" :key="'hour:' + hour" :name="'hour:' + hour">
                <td v-if="hour == '09:00 - 10:00'" rowspan=4>
                  <p align=center style='margin-bottom:0cm;text-align:center'>
                    {{ returnformatDay(((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start) }}
                  </p>
                </td>
                <td>
                  <p style="margin: 0cm; font-size: small" align=center><b>{{ hour }}</b></p>
                </td>
                <td
                  v-if="!fieldsState[((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start][index].status"
                  style='background:#00B050;border:solid 1.0pt'>
                  <p style="cursor: pointer;margin: 0cm; font-size: small;" align=center
                    @click="selected.dayWeek = daysWeek[campoS - 1]; selected.day = ((colS - 1) * 7) + (campoS + 1) - calendar[state.year][state.month - 1].start; selected.hour = hour; addCite('DISP')">
                    <b>DISPONIBLE</b>
                  </p>
                </td>
                <td v-else style='background:#C00000; border:solid 1.0pt'>
                  <p style="cursor: pointer;margin: 0cm;color:white; cursor: pointer;font-size: small;"
                    @click="addCite('OCUP')" align=center><b>RESERVADO</b> </p>
                </td>
              </tr>
            </table>
          </td>

        </tr>

      </table>

    </center>
    <!-- VENTANA DE AJUSTES EN DIALOGO -->
    <v-dialog v-model="dialog" persistent width="600px">
      <v-card>
        <v-toolbar color="primary" dense>
          <v-toolbar-title>RESERVAR CITA</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="" outlined icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <center>
          <v-card-text style="cursor:default" class="py-2 font-weight-black">
            <h3 class="pa-3">{{ selected.dayWeek }} {{ selected.day }} DE {{ calendar[state.year][state.month - 1].month
            }}
              DE {{ state.year }} HORA: {{ selected.hour }}</h3>
          </v-card-text>
          <v-card class="mx-auto" flat max-width="90%">
            <table cellspacing=0 cellpadding=0 style='border-collapse:collapse'>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>FISCALÍA:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-select dense label="SELECCIONAR..." v-model="formReserver.fiscalie" style="margin-bottom: -20px;"
                    :items="fiscalies" :return-object="false" outlined></v-select>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>FISCAL:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-select dense label="SELECCIONAR..." v-model="formReserver.fiscal" style="margin-bottom: -20px;"
                    :items="fiscals" :return-object="false" outlined></v-select>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>ETAPA:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-select dense label="SELECCIONAR..." v-model="formReserver.etap" style="margin-bottom: -20px;"
                    :items="etaps" :return-object="false" outlined></v-select>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>NÚMERO I.P/I.F:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="margin-bottom: -20px;" dense v-model="formReserver.num"
                    outlined></v-text-field>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>NÚMERO OFICIO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="margin-bottom: -20px;" dense v-model="formReserver.nroOfice"
                    outlined></v-text-field>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>PRESUNTO DELITO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="margin-bottom: -20px;" dense v-model="formReserver.delit"
                    outlined></v-text-field>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>EVIDENCIA/INDICIO:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-text-field label="ESCRIBIR..." style="margin-bottom: -20px;" dense v-model="formReserver.evidence"
                    outlined></v-text-field>
                </td>
              </tr>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>INFORMACIÓN ADICIONAL:</b></p>
                </td>
                <td style='padding:0cm'>
                  <v-textarea rows=3 label="ESCRIBIR..." no-resize style="margin-bottom: -20px; re font-size: 12px;" dense
                    v-model="formReserver.info" outlined></v-textarea>
                </td>
              </tr>
            </table>
            <v-card-text>
              <h1 class="pb-3" style="color:red">{{ sms }}</h1>
              <v-checkbox v-model="sure" label="ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."></v-checkbox>
              <v-btn :disabled="!sure" :loading="waiting" @click="save()" class="mb-4 pa-8" block color="green"
                size="x-large">
                <h2>GUARDAR</h2>
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
      waitingGetData: false,
      cased: "",
      dialog: false,
      sure: false,
      waiting: false,
      sms: "",
      dayConter: 0,
      getdataSchedule: [{ usedDay: "", status: "" }],
      selected: { dayWeek: "", day: "", hour: "" },
      fieldsState: [
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
        [{status:false, data:{}}, {status:false, data:{}}, {status:false, data:{}},{status:false, data:{}}],
      ],
      fiscalies: ["SOLUCIONES RÁPIDAS", "PERSONAS Y GARANTÍAS", "PATRIMONIO CIUDADANO", "VIOLENCIA DE GÉNERO", "ADMINISTRACIÓN PÚBLICA", "ADOLESCENTES INFRACTORES", "DELINCUENCIA ORGANIZADA, TRANSNACIONAL E INTERNACIONAL", "FLAGRANCIA", "MULTICOMPETENTE", "DELITOS ACUÁTICOS", "ACCIDENTES DE TRÁNSITO", "OTRO"],
      fiscals: ["Alexander Hernan Apolo Vivanco", "Andrea Lucia Mendez Quintanilla",
        "Bolivar Enrique Figueroa Arevalo", "Carlos Augusto Franco León",
        "Carlos Julio Vera Chavez", "Christian Kerlin Ayala Piedra",
        "Dalton Freddy Macas Lozano", "Dannys Kleber Campoverde Requelme",
        "Diana Sofia Sanchez Gutierrez", "Edgar Benigno Morocho Rosales",
        "Eduardo Fabian Marchant Guaman", "Gabriel Santiago Pereira Gomez",
        "Galo Francisco Torres Torres", "George Vicente Espinoza Loayza",
        "Guido Estuardo Coronel Nuñez", "Heidy León Santin",
        "Jaime Rodrigo Morocho Morocho", "Jamil Rodrigo Castro Solorzano",
        "Javier Ulises Tocto Palacios", "John Hernan Gonzalez Torres",
        "Johnny Patricio Gonzalez Galarza", "Jorge Luis Cuenca Rios",
        "Jorge Byron Mora Zumba", "Jose Sachez Gutierrez",
        "Juan Diego Garcia Amoroso", "Junot Francisco Minuche Cuesta",
        "Karla Katherine Zurita Chango", "Lady Esther Cuenca Hernandez",
        "Lenin Stalin Salinas Betancourt", "Lizardo Antonio Espinoza Bustamante",
        "Lucrecia Alexandra Espinoza Jaramillo", "Luis Alberto Caivinagua Uyaguari",
        "Manuel Lenin Espinoza Aviles", "Marcos Flores Calle",
        "Maria Elvira Carpio Erraez", "Maria de Lourdes Bustamante Acaro",
        "Maria Dolores Rodriguez Solorzano", "Maria Isabel Tenesaca Blacio",
        "Nancy Elizabeth Pesantez Marquez", "Orlando Efrain Palomeque Beltran",
        "Rene Vicente Ormaza Torres", "Paola Francisca Vivanco Murillo",
        "Paul Armando Iñiguez Apolo", "Ramiro Angel Carrion Bravo",
        "Romulo Tito Espinoza Torres", "Segundo Luis Cañafe Villa",
        "Sixto Cervilio Minga Sarango", "Vilma Elcira Gonzalez Cedillo",
        "Wilson Emiliano Cuenca Armijos", "OTROS"],
      etaps: ['INVESTIGACIÓN PREVIA', 'INSTRUCCIÓN FISCAL', 'OTROS'],
      formReserver: { userId: "",dateUsed: "", yearUsed: "", monthUsed: "", dayUsed: "", hourUsed: "", fiscalie: "", fiscal: "", nroOfice: "", etap: "", section: "pendiente", num: "", delit: "", evidence: "", info: "" },
      appAccess: {
        name: "sz7crimUser",
        password: "qwAS123",
      },
      testx: [{ name: "aa" }, { name: "bb" }],
      testAlternate: true,
      testState: [{ dayUsed: 2, yearUsed: 2022 }, { dayUsed: 10, yearUsed: 2022 }, { dayUsed: 5, yearUsed: 2022 }, { dayUsed: 7, yearUsed: 2022 }],
      daysWeek: ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"],
      state: { year: 2023, month: 11, day: 1, dayWeek: 5 },
      stateLimitBack: { year: 2023, month: 1 },
      stateLimitNext: { year: 2024, month: 12 },

      hours: ["09:00 - 10:00", "11:00 - 12:00", "14:30 - 15:30", "16:00 - 17:00"],
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
    /* if (this.$user.id==null) {
      this.$router.push({ name: "home" })
    } */
    this.get()
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
    returnformatDay(aux) {
      if (aux <= 9) {
        aux = "0" + aux
      }
      return aux
    },
    addCite(aux) {
      if (aux == "DISP") {
        this.sure = false
        this.waiting = false
        this.dialog = true
      }
    },
    save() {
      this.waiting = true;
      this.formReserver.dateUsed = this.selected.dayWeek + " " + this.selected.day + " DE " + this.calendar[this.state.year][this.state.month - 1].month + " DE " + this.state.year + " HORA: " + this.selected.hour
      this.formReserver.yearUsed = this.state.year
      this.formReserver.monthUsed = this.state.month
      this.formReserver.dayUsed = this.selected.day
      this.formReserver.hourUsed = this.selected.hour
      this.sms = ""
      this.$http({
        method: "POST",
        url: "/save",
        data: {
          req: this.formReserver,
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
        .catch(() => { })
        .finally(() => {
          this.waiting = false;
        });
    },
    async get() {
      this.resetStatus()
      console.log("in Get")
      this.waitingGetData = true
      this.waiting = true
      this.sms = ""
      this.$http
        .get("/read/" + this.state.month + "/" + this.state.year)
        .then((res) => {
          if (res.data) {
            if (res.data.schedule) {
              this.setStatus(res.data.schedule)
              console.log(res.data.schedule)
              this.waiting = false
              this.dialog = false
            }
          } else {
            this.showNotification("error")

          }
        })
        .catch(() => {
          this.$function.alertIni("error", "Error. vuelva a intentar")
          this.waiting = false
        })
        .finally(() => {
          this.waitingGetData = false
        });
    },
    setStatus(auxData) {
      for (let index = 0; index < auxData.length; index++) {
        //  console.log("principal:", auxData[index])
        for (let index2 = 0; index2 < this.hours.length; index2++) {
          //    console.log("hourFor:", this.hours[index2])
          const hour = this.hours[index2];
          //  console.log("hour:", hour)
          //  console.log("hourUsed:",auxData[index].hourUsed)
          if (auxData[index].hourUsed == hour) {
            //    console.log("hourTRUE")
            //    console.log("FINISH:",this.fieldsState[auxData[index].dayUsed][index2])
            this.fieldsState[auxData[index].dayUsed][index2].data = auxData[index]
            this.fieldsState[auxData[index].dayUsed][index2].status = true
            //     console.log("FINISH:",this.fieldsState[auxData[index].dayUsed][index2])
            //
          } 
        }
        //    console.log(auxData)
      }
    },
    resetStatus() {
      for (let index = 0; index < this.fieldsState.length; index++) {
        for (let index2 = 0; index2 < this.hours.length; index2++) {
          this.fieldsState[index][index2].status = false
        }
      }
    },
    btnMonthBack() {
      if (this.state.month == 1) {
        this.state.year--
        this.state.month = 12
      } else {
        this.state.month--
      }
      this.get()
    },
    btnMonthNext() {
      if (this.state.month == 12) {
        this.state.year++
        this.state.month = 1
      } else {
        this.state.month++
      }
      this.get()
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
          this.get()
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

    },

  }
}
</script>

<style scoped>
* {
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
