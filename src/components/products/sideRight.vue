<template>
  <div class="windowsPC" style="overflow-y: auto;overflow-x: hidden;"
  >
    <v-dialog persistent v-model="dialogProductPreview" width="600px">
      <productPreview :propItem="selected" @method="dialogMethods" />
    </v-dialog>
<div class="formatCard" style="position: absolute; z-index: 1;">
    <h4>Añada productos a su carrito de compras</h4>
</div>
    <div class="mb-8"></div>
    <v-row
    >
      <v-col
        cols="12"
        lg="12"
        md="12"
        sm="12"
      >
        <v-row>
          <v-col
            v-for="item in propItems"
            :key="item.code"
            cols="6"
            lg="2"
            md="4"
            sm="6"
          >
            <itemCard :propItem="item" @method="dialogMethods" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import productPreview from "@/components/products/dialog/productPreview";
import itemCard from "@/components/products/models/itemCard";
export default {
  components: {
    productPreview,
    itemCard,
  },
  props: {
    propItems: { type: Array },
  },
  data() {
    return {
      dialogProductPreview:false,
      selected: {},
    };
  },
  methods: {
    btnPlay(txt) {
      this.$emit("search", txt);
    },
    btnVisit(aux) {
      this.$router.push({ name: aux });
    },
    dialogMethods(aux, data) {
      switch (aux) {
        case "addCart":
          this.$emit("method", aux, data);
          break;
        case "openDialogPreview":
          this.selected = data;
          this.dialogProductPreview = true;
          break;
        case "cloaseDialogPreview":
          this.selected = {};
          this.dialogProductPreview = false;
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style>
*{padding: 0px;}
.cardBy {
  -webkit-text-stroke: 0.8px black;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  transition: 500ms linear;
}
.cardBy:hover {
  background-color: rgba(0, 0, 0, 0.496);
}
</style>