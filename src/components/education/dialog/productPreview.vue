<template>
  <div
    class="pa-5 formatCard"
  >
    <v-row>
      <v-spacer></v-spacer>
      <v-icon @click="$emit('method', 'cloaseDialogPreview', null)"
        >mdi-close</v-icon
      >
    </v-row>
    <center>
      <h3 class="pa-3">DETALLES DEL PRODUCTO</h3>
    </center>
    <v-divider class="pa-3"></v-divider>
    <v-row>
      <v-col cols="4" lg="4" md="4" sm="4">
        <v-img style="border-radius: 8px" :src="propItem.img"></v-img>
      </v-col>
      <v-col cols="8" lg="8" md="8" sm="8">
        <span><strong>Nombre: </strong>{{ propItem.name }}</span>
        <br />
        <span><strong>Info: </strong>{{ propItem.info }}</span>
        <br />
        <span><strong>Precio Normal: </strong>${{ propItem.price }}</span>
        <br />
        <span><strong>Precio Mayor: </strong>${{ propItem.price2 }} <strong> - (3 productos o mas)</strong></span>
      </v-col>
    </v-row>
    <br />
    <v-divider class="pa-3"></v-divider>
    <center>
      <h2 class="pb-2" v-if="propItem.inCart">Actualmente añadido a su lista de pedidos</h2>
      <v-btn  color="success" @click="$emit('method', !propItem.inCart?'addCart':'cloaseDialogPreview', propItem)"
        >{{!propItem.inCart? 'AÑADIR AL CARRITO' : 'CERRAR'}}  <v-icon class="ml-2">{{!propItem.inCart? 'mdi-cart' : ''}}</v-icon></v-btn
      >
    </center>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    propItem: { type: Object },
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
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
