<template>
  <div
    class="fullCenter img ma-5 circular"
    :style="{
      backgroundColor: propCash >= 0 ? '#00ff003a' : '#ff00003a',
      width: '30vh',
      height: '10vh',
      float: 'right',
      border: 'solid green 2px',
    }"
  >
    <v-img class="fullCenter" :src="require('../assets/mycash.svg')" alt="" style="height: 100%">
      <h2 style="color: white">
        <b
          ><em>$ {{ propCash }}</em></b
        >
      </h2>
    </v-img>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    propCash: { type: String },
  },
  data() {
    return {
    };
  },
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
  },

  created() {},
  computed: {},
  watch: {},
  methods: {},
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
