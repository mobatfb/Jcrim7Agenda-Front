<template>
  <div class="modelCard">
    <marquee>
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
  },
};
</script>

<style>
.modelCard {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 4px;
  margin: 1px;
  padding: 5px;
}

</style>