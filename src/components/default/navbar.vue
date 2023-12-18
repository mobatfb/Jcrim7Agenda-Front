<template>
  <v-toolbar id="nav" outlined elevation="0" flat absolute dense width="100%">
    <v-img width="40px" style="cursor:pointer; margin: 3px;"
      :src="logoJcrim"></v-img>
    <div style="width: 100%">
      <span style="font-size: 22px; cursor:default">JEFATURA DE CRIMINALÍSTICA EL ORO</span>
    </div>
    <v-btn v-if="$route.name=='Agenda'" small right style="background-color: red;" @click="$router.push({ path: '/' })">
          <v-icon>mdi-close</v-icon>
      </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      logoJcrim: require("@/assets/default/imgJcrim.png"),
    };
  },
  methods: {},
};
</script>

<style>
.textSlogan {
  font-family: "Agency FB";
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 1px black;
  word-break: break-all;
}

#nav {
  background-color: #40cfff;
}
</style>