<template>
  <div>
    <v-card-text style="cursor:default" class="py-2 font-weight-black">
      <h1 class="pa-3">CONSULTAR</h1>
    </v-card-text>
    <v-row>
      <v-col cols="4">
        <h3>MODO</h3>
      </v-col>
      <v-col cols="8">
        <v-select label="SELECCIONAR.." v-model="formOffice.mode" :items="[
          { id: 1, title: 'FILTROS' },
          { id: 2, title: 'FECHA' },
          { id: 3, title: 'AVANZADO' }
        ]" item-text="title" item-value="id" :return-object="false" outlined></v-select>
      </v-col>
    </v-row>
    <v-container v-if="formOffice.mode == 2">
      <v-row>
        <v-col cols="4">
          <h3>FECHA INICIAL:</h3>
        </v-col>
        <v-col cols="8">
          <v-text-field type="date" v-model="formOffice.dateStart" variant="outlined" outlined min="2023-01-01"
            :max="dateMax"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h3>FECHA FINAL:</h3>
        </v-col>
        <v-col cols="8">
          <v-text-field :disabled="formOffice.dateStart == ''" type="date" :min="formOffice.dateStart" :max="dateMax"
            v-model="formOffice.dateEnd" variant="outlined" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="formOffice.mode == 3">
      <v-row>
        <v-col cols="4">
          <h3>ENTRADA</h3>
        </v-col>
        <v-col cols="8">
          <v-text-field v-model="formOffice.info" variant="outlined" label="ESCRIBIR.." outlined></v-text-field>
        </v-col>
      </v-row>
      <span v-if="formOffice.mode == 3">Ingrese UNA SOLA palabra o serie alfa numérica con MÁS de DOS caracteres, ejemplo: 00231, AP001, EXTORCIÓN, FIRMAS.</span>
    </v-container>
    <v-container fluid v-if="formOffice.mode == 1">
      <v-row>
        <v-col cols="4">
          <h3>ASUNTO</h3>
        </v-col>
        <v-col cols="8">
          <v-select label="SELECCIONAR.." v-model="formOffice.subject" v-on:change="subjectChange()" :items="itemSubject"
            item-text="title" :return-object="false" outlined></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <h3>TIPO</h3>
        </v-col>
        <v-col cols="8">
          <v-select label="SELECCIONAR.." :disabled="formOffice.subject == ''" v-model="formOffice.type"
            :items="itemType[formOffice.subject]" item-text="title" :return-object="false" outlined></v-select>
        </v-col>
      </v-row>
      <v-row v-if="formOffice.subject == 'FISCAL'">
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
          <h3>{{ formOffice.subject == 'FISCAL' ? "PERITO" : "ENCARGADO" }}</h3>
        </v-col>
        <v-col cols="8">
          <v-select label="SELECCIONAR.." v-model="formOffice.perito"
            :disabled="(formOffice.subject == 'FISCAL' && formOffice.seccion == '') || (formOffice.subject != 'FISCAL' && formOffice.type == '')"
            :items="itemPerito" item-text="name" :return-object="false" outlined></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-card-text>
      <v-btn :disabled="validBtnSearch(formOffice)" @click="dialog = true; sure = false" class="mb-4 pa-8" block
        color="green" size="x-large">
        <h2>BUSCAR</h2>
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
              <v-checkbox v-model="sure" label="ESTOY DE ACUERDO CON LA INFORMACIÓN INGRESADA."></v-checkbox>
              <v-btn :disabled="!sure" @click="cased = 'fiscal'" class="mb-4 pa-8" block color="green" size="x-large">
                <h2>GUARDAR</h2>
              </v-btn>
              <v-btn @click="dialog = false" class="mb-4 pa-8" text size="large">
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
      dateMax: "2023-01-01",
      formOffice: { mode: "", subject: "", type: "", seccion: "", perito: "", info: "", dateStart: "", dateEnd: "" },
      itemSubject: [
        { id: 1, title: "FISCAL" },
        { id: 2, title: "ADMINISTRATIVO" },
      ],
      itemType: {
        FISCAL: [
          { id: 1, title: "DESCARGO" },
          { id: 2, title: "PERICIA" },
        ], ADMINISTRATIVO: [
          { id: 0, title: "TODOS" },
          { id: 1, title: "ADMINISTRATIVO" },
          { id: 2, title: "MEMO" },
          { id: 3, title: "TELEGRAMA" },
          { id: 4, title: "INFORME" },
          { id: 5, title: "ORDEN SERVICIO" },
          { id: 6, title: "EVALUACION" },
          { id: 7, title: "RESOLUCION" }]
      },
      itemSeccion: [
        { id: 0, tag: "IOT", title: "TODOS" },
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
        { id: 0, name: "TODOS" },
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
    this.genDateMax()
    if (this.$route) this.route = this.$route.query.redirect;
  },

  created() {
    this.formTeacher.email = localStorage.getItem("teacherEmailMatras");
  },
  computed: {},
  methods: {
    subjectChange() {
      this.formOffice.type = ""
      this.formOffice.seccion = ""
      this.formOffice.perito = ""
    },
    genDateMax() {
      this.dateMax = new Date().toISOString().split('T')[0]
      this.dateMax = this.dateMax.replaceAll("/", "-")
      this.formOffice.dateStart=this.dateMax
      this.formOffice.dateEnd=this.dateMax

    },
    validBtnSearch(aux) {
      switch (aux.mode) {
        case 1:
          if (aux.perito == "") {
            return true
          }
          break;
        case 2:
          if (aux.dateEnd == "") {
            return true
          }
          break;
        case 3:
          if (aux.info.length <= 2) {
            return true
          }
          break;
        default:
          return true
      }
    },
    submit() { },
  },
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
