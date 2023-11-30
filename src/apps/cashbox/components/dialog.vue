<template>
  <v-card class="pa-5">
    <v-card-title>
      <v-icon color="blue" x-large>mdi-plus-circle</v-icon>
      <span class="text-h5 ml-3">Nuevo movimiento</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-combobox
          v-model="propForm.type"
          :items="typeList"
          filled
          outlined
          solo
        ></v-combobox>
        <v-row v-if="propForm.type != ''">
          <v-col cols="12" lg="12" md="12" sm="12">
            <v-text-field
              v-model="propForm.topic"
              label="Asunto"
              placeholder="Escriba un asunto"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6" lg="6" md="6" sm="6">
            <v-text-field
              v-model="propForm.dolar"
              label="Dolar"
              type="number"
              placeholder="Escriba un valor"
              outlined
              min="0"
              max="99"
            ></v-text-field>
          </v-col>
          <v-col cols="6" lg="6" md="6" sm="6">
            <v-text-field
              v-model="propForm.cent"
              label="Centavos"
              type="number"
              min="0"
              max="99"
              placeholder="Escriba un valor"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="blue darken-1"
        text
        @click="$emit('propMethod', 'closeDialog', null)"
      >
        Cancelar
      </v-btn>
      <v-btn color="blue darken-1" text @click="preSave()"> Guardar </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: {
    propForm: { type: Object },
  },
  data() {
    return {
      btnDisable: false,
      typeList: ["Ingreso", "Retiro"],
      search: "",
      page: 1,
      pageCount: 0,
      cash: 0,
    };
  },
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
  },

  created() {},
  computed: {},
  watch: {},
  methods: {
    preSave() {
      if (
        !(
          this.validate(this.propForm.type, 2) &&
          this.validate(this.propForm.topic, 4)
        )
      ) {
        return;
      }
      var today = new Date();
      var data = {
        type: this.typeList.indexOf(this.propForm.type),
        topic: this.propForm.topic,
        date:
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
          today.getSeconds(),
        value:
          this.propForm.dolar +
          "." +
          (this.propForm.cent < 10
            ? "0" + this.propForm.cent
            : this.propForm.cent),
        active: true,
      };
      this.$emit('propMethod', 'saveItem', data);
    },
     validate(val, len) {
      if (!val || val.length < len) {
        return false;
      }
      return true;
    },
  },
};
</script>
<style scoped>
.img {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
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
