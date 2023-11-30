<template>
  <div class="formatCard pa-5 ">
    <v-row>
      <v-spacer></v-spacer>
      <v-icon @click="$emit('method', 'close', null)">mdi-close</v-icon>
    </v-row>
    <h3 class="pa-3">Iniciando whatsapp</h3>
  <iframe :src="propUrl" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    propUrl:{type: String},
  },
  data() {
    return {
    };
  },
  computed: {},
  methods: {
  
  },
};
</script>
<style scoped>
.boxs {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
}
</style>
