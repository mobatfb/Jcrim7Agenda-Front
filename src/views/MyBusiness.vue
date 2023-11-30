<template>
  <v-card>
    <v-toolbar dense flat color="primary" dark>
      <v-toolbar-title>Invitado</v-toolbar-title>
      <v-avatar
        size="35"
        @click="toHome()"
        class="pointer"
        style="border: solid white 3px; margin-left: 10px"
      >
        <span style="color: white">
          <v-avatar
        :color="$color.secondary"
        size="35"
        class="pointer"
        style="border: solid white 3px; "
      >
        <img  :src="logo" />
      
      </v-avatar>
        </span>
      </v-avatar>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab class="tabSet" v-for="item in items" :key="item.id" >
        <v-icon left> {{ item.icon }} </v-icon>
        {{ item.name }}
      </v-tab>
      <v-tab-item v-for="item in items" :key="item.id">
        <v-card flat height="100vh">
          <component
            v-bind:is="item.url"
          >
          </component>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
export default {
  components: {},
  name: "business",
  data() {
    return {
        logo: require("@/assets/img/business/moba.png"),
      rol: "Guest", //Guest//User//Owner
      dialog: {
        active: false,
        title: "",
        data: null,
        news: true,
        business: false,
        login: false,
      },
      data: {
        name: "MOBA",
        info: "Brindamos tecnologia para que gestiones de forma rapida tu negocio",
        logo: require("@/assets/img/business/moba.png"),
        banner: require("@/assets/img/business/mobaBanner.png"),
        ubication: "Ecuador-El Oro-Machala",
      },
      items: [
           {id:"app01", icon:"mdi-account", name: "My profile", url: () => import("@/apps/profile/home") },
           {id:"app02", icon:"mdi-shopping", name: "My products", url: () => import("@/apps/inventory/home") },
           {id:"app03", icon:"mdi-cash", name: "CashBox", url: () => import("@/apps/cashbox/home") },
      ],
      searchText: "",
    };
  },
  mounted() {
    //alert(this.$route.params.id)
    if (this.$route) this.route = this.$route.query.redirect;
  },
  created() {
    this.$func.openDialog = this.openDialog;
    this.openDialog("news", { name: "dfdf" });
  },
  computed: {},
  methods: {
    close() {
      this.dialog.active = false;
      this.dialog.news = false;
      this.dialog.business = false;
      this.dialog.login = false;
    },
    search(text) {
      this.searchText = text;
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
.divBusinessCardMax {
  height: 100%;
  border-radius: 1%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.393);
}
.tabSet { 
  display: flex;
  align-items: left;
}
.nameBusiness {
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  transition: 500ms linear;
}
.header-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.header-login h3 {
  color: #607d8b;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
