<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <v-footer id="foot"  fixed>
    <v-row>
      <v-col style="padding-left: 20px;" cols="12" lg="4" md="4">
        powered by:<br />
        <strong
          >{{ this.$appInfo.autor }} — {{ new Date().getFullYear() }}</strong
        >
      </v-col>
    </v-row>
    <v-btn dark style="float: right;"  @click="$router.push({ path: '/' })"  x-large>
      <h3>VOLVER A INICIO</h3>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    btnBrindar() {
      this.$func.openDialog("login");
    },
  },
};
</script>

<style>
.btnBrindar {
  margin: 3px;
  border: solid 3px blue;
  float: right;
}
#foot {
  background-color: yellow;
}
/* Media Query For different screens */
@media (min-width: 320px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .btnBrindar {
    margin: 3px;
    border: solid 3px rosybrown;
  }
}
@media (min-width: 480px) and (max-width: 599px) {
  /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
</style>