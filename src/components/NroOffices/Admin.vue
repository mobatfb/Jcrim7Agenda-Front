<template>
  <div>
    <v-card-text style="cursor:default" class="py-2 font-weight-black">
      <h1 class="pa-3">OFICIOS ADMINISTRATIVOS</h1>
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
          <h3>ENCARGADO</h3>
        </v-col>
        <v-col cols="8">
          <v-select label="SELECCIONAR.." v-model="formOffice.perito" :disabled="formOffice.type == ''"
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
      <v-btn :disabled="formOffice.perito == ''" @click="dialog=true; sure=false" class="mb-4 pa-8" block color="green"
        size="x-large">
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
              <h2 class="pa-3"><strong>{{formOffice.type}}</strong></h2>
            </v-card-text>
            <v-card-text style="cursor:default" class="py-2 font-weight-black">
              <h2 class="pa-3">Encargado</h2>
              <h2 class="pa-3"><strong>{{formOffice.perito}}</strong></h2>
            </v-card-text>
            <v-card-text style="cursor:default" class="py-2 font-weight-black">
              <h2 class="pa-3">Detalles</h2>
              <h2 class="pa-3"><strong>" {{formOffice.info}} "</strong></h2>
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
      sure:false,
      formOffice: { type: "", seccion: "", perito: "", info:"" },
      itemType: [
        { id: 1, title: "ADMINISTRATIVO" },
        { id: 2, title: "MEMO" },
        { id: 3, title: "TELEGRAMA" },
        { id: 4, title: "INFORME" },
        { id: 5, title: "ORDEN SERVICIO" },
        { id: 6, title: "EVALUACION" },
        { id: 7, title: "RESOLUCION" },
      ],
      itemPerito: [
        { id: 1, name: "MYOR. MASACHE" },
        { id: 2, name: "MYOR. SALINAS" },
        { id: 3, name: "SECRETARÍA" },
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
