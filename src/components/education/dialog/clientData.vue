<template>
  <div class="formatCard pa-5 ">
    <v-row>
      <v-spacer></v-spacer>
      <v-icon @click="$emit('method', 'close', null)">mdi-close</v-icon>
    </v-row>
    <h3 class="pa-3">INGRESE SU INFORMACIÓN</h3>
    <span>Nombre y apellido</span>
    <v-text-field
      v-model="form.name"
      dense
      outlined
      rounded
      clearable
      placeholder="Escribir aquí"
      background-color="white"
    ></v-text-field>
    <span>Número de teléfono</span>
    <v-text-field
      v-model="form.contact"
      dense
      outlined
      rounded
      clearable
      placeholder="Escribir aquí"
      background-color="white"
    ></v-text-field>
    <center>
      <h4 class="mb-3">{{ sms }}</h4>
      <v-btn color="success" @click="sendForm(propData)">CONTACTAR</v-btn>
    </center>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    propData:{type: Object},
    goto: { type: Function, default: () => [] },
  },
  data() {
    return {
      form: { name: "", contact: "" },
      sms: "",
    };
  },
  computed: {},
  methods: {
    sendForm(aux) {
      this.sms = "";
      if (!Number(this.form.contact) || this.form.contact < 800000000) {
        this.sms = "ingrese correctamente el numero de telefono";
        return;
      }
      if (!(this.form.name.length > 4 && this.form.contact.length > 4)) {
        this.sms = "ingrese correctamente su nombre y numero de telefono";
        return;
      }
       var url =
              "https://api.whatsapp.com/send?phone=593" +
              aux.contact +
              "&text=Hola mi nombre es: " +
              this.form.name +
              " con numero de telefono: " +
              this.form.contact +
              ". Estoy interesado en el siguiente curso: " +
              aux.name;
            window.open(url, "_blank");
      this.$emit("method", "close");
            
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
