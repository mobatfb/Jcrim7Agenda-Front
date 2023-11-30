<template>
  <div style="background: #45818eff; height: 80%">
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Lobster"
    />
    <div style="height: 100%;" class="fullCenter pa-10" v-if="start">
      <v-row>
        <v-col cols="9" lg="8" md="8" sm="8">
          <div class="fullCenter flexcolum">
            <img height="150px" width="150px" :src="myIcon" />
            <h1 class="specialFont">MB. CASHBOX</h1>
            <span>Organiza el dinero de tu negocio</span>
            <span>Organise your business cash</span>
          </div>
        </v-col>
        <v-col>
          <center>
            <v-card
              class="fullCenter flexcolum circular"
              color="#ffab40ff"
              style="border: solid black 3px"
            >
              <h1>Bienvenido</h1>
              <v-btn
                @click="start = false"
                class="ma-10"
                rounded
                color="red"
                elevation="10"
                x-large
              >
                <h1>Acceder</h1>
              </v-btn>
            </v-card>
          </center>
        </v-col>
      </v-row>
    </div>
    <div v-else style="overflow: scroll; height: 80vh;">
      <center>
        <v-dialog v-model="dialog" max-width="500px">
          <movAdd :propForm="form" @propMethod="actionComponents" />
        </v-dialog>
        <div>
          <v-row>
            <v-col cols="4" lg="4" md="4" sm="4"> </v-col>
            <v-col cols="4" lg="4" md="4" sm="4">
              <img class="img" height="80px" width="80px" :src="myIcon" />
              <h2 class="specialFont">MB. CASHBOX</h2>
              <span>Organiza el dinero de tu negocio</span>
              <br />
              <span>Organise your business cash</span>
            </v-col>
            <v-col cols="4" lg="4" md="4" sm="4">
              <cashModel :propCash="cash" />
            </v-col>
          </v-row>
          <movTable
          class="ma-2"
            :propHeaders="headers"
            :propItems="items"
            @propMethod="actionComponents"
          />
        </div>
      </center>
      <br>
    </div>
  </div>
</template>
<script>
import movTable from "./components/table";
import movAdd from "./components/dialog";
import cashModel from "./components/cash";
export default {
  components: {
    movAdd,
    movTable,
    cashModel,
  },
  data() {
    return {
      myIcon: require("./assets/icon.png"),
      cashImg: require("./assets/mycash.svg"),
      cashColor: "#00ff003a",
      start: true,
      dialog: false,
      form: { topic: "", dolar: 0, cent: 0 },
      cash: 0,
      headers: [
        {
          text: "Tipo",
          align: "start",
          value: "type",
        },
        {
          text: "Asunto",
          value: "topic",
        },
        { text: "Valor", value: "value" },
        { text: "Fecha", value: "date" },
        { text: "Total", value: "total" },
        { text: "Activo", value: "active", sortable: false },
      ],
      items: [],
    };
  },
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
    this.cashUpdate();
  },

  created() {},
  computed: {},
  watch: {
    items() {
      this.cashUpdate();
    },
  },
  methods: {
    cashUpdate() {
      this.cash = 0;
      this.items.forEach((element) => {
        if (element.active == true) {
          console.log(parseFloat(element.value));
          if (element.type == 0) {
            this.cash += parseFloat(element.value);
          } else {
            this.cash -= parseFloat(element.value);
          }
        }
      });
      var text = this.cash.toString();
      var split = text.split(".");
      if (split[1]) {
        this.cash = split[0] + "." + split[1][0];
        if (split[1][1]) {
          this.cash += split[1][1];
        } else {
          this.cash += "0";
        }
      }
    },
    getColor(type) {
      if (type == 0) return "green";
      else return "red";
    },
    continuar() {},
    actionComponents(aux, data, event) {
      switch (aux) {
        case "openDialog":
          (this.form = { topic: "", dolar: 0, cent: 0 }), (this.dialog = true);
          break;
        case "closeDialog":
          this.dialog = false;
          break;
        case "saveItem":
          this.items.push(data);
          this.dialog = false;
          break;
        case "changeActive":
          var index = this.items.indexOf(data);
          this.items[index].active = event;
          this.cashUpdate();
          break;
        default:
          break;
      }
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
