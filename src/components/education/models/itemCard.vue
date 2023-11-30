<template>
  <div
    class="modelCard"
    :style="{ backgroundImage: 'url(' + propItem.back + ')' }"
    style="background-size: 100% 100%; height: 330px"
  >
    <v-card
      id="submodelcourse"
      class="mx-auto"
      max-width="400"
      height="100%"
    >
      <center class="pa-2">
        <v-icon large> mdi-{{ propItem.icon }} </v-icon>
        <br />
        <v-card-text class="text-h7 font-weight-bold">
          {{ propItem.name }}
        </v-card-text>
        <div style="overflow-y: auto; height: 80px">
          <span class="font-weight-light" style="font-size: 10pt">{{
            propItem.info
          }}</span>
        </div>
      </center>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" alt="" :src="propItem.img"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{ propItem.tutor }}</v-list-item-title>
      </v-list-item>
      <center>
        <v-icon large @click="sendRequest(propItem)"> mdi-whatsapp </v-icon>
        <br />
        <span>{{ propItem.contact }}</span>
      </center>
    </v-card>
    <!--    <marquee>
      <span
        ><strong>{{ propItem.name }}</strong></span
      >
    </marquee>
    <v-img style="border-radius: 4px;height:150px" :src="propItem.img"></v-img>
    <span>
      <span
        style="color: blue; cursor: pointer"
        @click="$emit('method', 'openDialogPreview', propItem)"
        >ver detalles</span
      >
    </span>
    <v-divider></v-divider>
    <span><strong>Precio:</strong></span>
<br>
    <span>${{ propItem.price }}, Normal</span>
    <v-icon style="float: right" @click="!propItem.inCart? $emit('method', 'addCart', propItem): null">{{!propItem.inCart? "mdi-cart" : "mdi-check"}}</v-icon>
<br>
<span>${{ propItem.price2 }}, Mayor</span>
 -->
  </div>
</template>

<script>
export default {
  props: {
    propItem: { type: Object },
  },
  data() {
    return {};
  },
  methods: {
    sendRequest(aux) {
      var data = {
        name: aux.name,
        tutor: aux.tutor,
        contact: aux.contact,
      };
      this.$emit("method", "openClientInfo", data);
    },
  },
};
</script>

<style>
#submodelcourse {
  background-color: rgba(255, 255, 255, 0.733);
}
.modelCard {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 4px;
  margin: 1px;
  padding: 5px;
}
</style>