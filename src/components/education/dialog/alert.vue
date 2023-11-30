<template>
  <div
    class="pa-5"
    :style="{
      background: this.$color.primary,
    }"
  >
<center>
  <v-icon x-large>
    {{propType=='success'?"mdi-check-circle": "mdi-alert"}}
  </v-icon>
    <h3 class="pa-3">{{propText.toUpperCase()}}</h3>
      <v-btn @click="$emit('method', 'closeAlert', null)" color="success">LISTO</v-btn>
    </center>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    propType:{type:String},
    propText:{type:String}
  },
  data() {
    return {
      form: { name: "", contact: "" },
      sms: "",
    };
  },
  computed: {},
  methods: {
    sendForm() {
      this.sms=""
      if (!Number(this.form.contact) || this.form.contact< 800000000) {
        this.sms = "ingrese correctamente el numero de telefono";
        return;
      }
      if (!(this.form.name.length > 4 && this.form.contact.length > 4)) {
        this.sms = "ingrese correctamente su nombre y numero de telefono";
        return;
      }
      this.$emit("method", "sendCart", this.form);
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
