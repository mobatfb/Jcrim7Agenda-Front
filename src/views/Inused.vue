<template>
  <div class="startView">
    <div class="fullCenter flexcolum">
      <h1 style="font-size:20pt; color:white">
        {{($route.name).toUpperCase()}}
      </h1>
      <h1 class="ma-5" style="color: white">
        Comunícate con nosotros en el siguiente botón
      </h1>
      <v-btn elevation="2" fab x-large color="success" @click="sendReq()">
        <v-icon> mdi-whatsapp </v-icon>
      </v-btn>
    <v-btn
    @click="$router.push({name:'Inicio'})"
    class="ma-5"
    style="color:white" 
    text
    >
      volver
    </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "inused",
  data() {
    return {};
  },
  mounted() {},
  created() {},
  computed: {},
  methods: {
    sendReq() {
      var topic = this.$route.name;
      var url =
        "https://api.whatsapp.com/send?phone=593" +
        this.$salesman.contact +
        "&text=Hola, estoy interesado en el siguiente servicio: " +
        topic;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
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
.startView {
  height: 100%;
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
