<template>
  <div class="ma-1">
    <center>

      <v-card class="mx-auto" elevation="1" max-width="450" style="background-color: hsl(180, 76%, 84%);">
        <v-img width="40%" style="margin: 3px;" :src="logoJcrim"></v-img>
        <v-card-text style="cursor:default" class="py-2 font-weight-black">
          <h2 >JEFATURA DE CRIMINALÍSTICA EL ORO</h2>
          <h3 class="pa-1">TURNOS PERICIAS</h3>
          <h4>EXHIBICIÓN AVA</h4>
        </v-card-text>
        <v-card-text>
          <v-text-field @keydown.enter="goTo('Agenda')" style="font-size: large;" class="centered-input" v-model="user" variant="outlined" label="Identificacion" outlined></v-text-field>
          <v-btn :disabled="user.length<4"  @click="goTo('Agenda')" class="mb-4 pa-8" block style="background-color: #40cfff;" size="x-large">
            <h2>INGRESAR</h2>
          </v-btn>
        </v-card-text>
      </v-card>
    </center>
    <v-fab-transition>
        <v-btn absolute right label="Actualizar" :color="$color.primary" dark fab small @click="dialog=true">
          <v-icon>mdi-information</v-icon>
              <!-- VENTANA DE AJUSTES EN DIALOGO INFO -->
    <v-dialog v-model="dialog" persistent width="600px">
      <v-card style="background-color: rgba(205, 255, 255, 0.956);">
        <v-toolbar color="primary" dense>
          <v-toolbar-title>INFORMACIÓN</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="" outlined icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <center>
          <v-card-text style="cursor:default" class="py-2 font-weight-black">
            <h3>CREDITOS</h3>
          </v-card-text>
          <v-card class="mx-auto" flat max-width="90%" style="background-color: transparent;">
            <table cellspacing=0 cellpadding=0 style='border-collapse:collapse'>
              <tr>
                <td width=141 style='padding-right:5px'>
                  <p align=right style='margin-bottom:0cm;text-align:right'><b>RECURSOS:</b></p>
                </td>
                <td style='padding:0cm'>
                  <p style='margin-bottom:0cm;text-align:left'>
                    <a
            href="https://onaircode.com/html-css-background-animation-examples/"
            target="_blank"
            >backgroundby:onaircode.com</a
          >
                  </p>
                </td>
              </tr>
            </table>
            <br>
          </v-card>
        </center>
      </v-card>
    </v-dialog>
        </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  name: "home",
  data() {
    return {
      dialog:false,
      logoJcrim: require("@/assets/default/imgJcrim.png"),
user:""
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
      if (this.user.length<4) {
        return
      }
      this.$user.id=this.user
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
.centered-input >>> input {
  text-align: center
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
