<template>
  <v-toolbar id="nav" outlined elevation="0" flat absolute dense width="100%">
        <v-img @click="$router.push({ path: '/' })" width="40px" style="cursor:pointer; margin: 3px;" :src="logoJcrim"></v-img>
        <div style="width: 100%">
        <span
          style="font-size: 22px; cursor:default"
          >SZ7 UNIDAD DE CRIMINALÍSTICA</span>
    </div>
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
  background-color: yellow;
}
</style>