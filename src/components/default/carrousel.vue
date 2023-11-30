<template>
  <v-toolbar id="nav" elevation="0" flat absolute dense width="100%">
    <div style="width: 100%">
      <center>
        <span
          class="textSlogan"
          style="cursor: pointer; font-size: 22px"
          @click="$router.push({ path: '/' })"
          >★ asas{{ this.$appInfo.slogan }} ★</span
        >
      </center>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
  }),
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
  background-color: var(--v-primary-base);
  background: transparent;
}
</style>