<template>
  <div class="ma-1">
    <center>

      <v-card class="mx-auto" elevation="1" max-width="500">
        <v-img width="50%" style="margin: 3px;" :src="logoJcrim"></v-img>
        <v-card-text style="cursor:default" class="py-2 font-weight-black">
          <h1 class="pa-3">UNIDAD DE CRIMINALÍSTICA</h1>
          <h2>UTILITARIOS</h2>
        </v-card-text>
        <br>
        <v-card-text>
          <v-btn  @click="goTo('Oficios')" class="mb-4 pa-8" block color="green" size="x-large">
            <h2>NRO. OFICIO</h2>
          </v-btn>
          <v-btn @click="goTo('Datos')" class="mb-4 pa-8" disabled block color="green" size="x-large">
            <h2>DATOS</h2>
          </v-btn>
          <v-btn @click="goTo('Gestion')" class="mb-4 pa-8" disabled block color="green" size="x-large">
            <h2>GESTIÓN</h2>
          </v-btn>
        </v-card-text>
      </v-card>
    </center>

  </div>
</template>
<script>
export default {
  components: {},
  name: "home",
  data() {
    return {
      logoJcrim: require("@/assets/default/imgJcrim.png"),
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
    goTo(aux) {
      this.$router.push({ name: aux })
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

.startView {
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
