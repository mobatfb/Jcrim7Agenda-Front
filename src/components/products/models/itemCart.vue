<template>
  <div class="modelCard">
    <v-icon style="float: right" @click="removeCart(propItem)"
      >mdi-close</v-icon
    >
    <v-row>
      <v-col cols="3" lg="3" md="3" sm="3">
        <v-img
          class="ma-1"
          style="border-radius: 4px"
          :src="propItem.img"
        ></v-img>
      </v-col>
      <v-col>
        <marquee>
          <span
            ><strong>{{ propItem.name }}</strong></span
          >
          <span>
            <br />
            <span>{{ propItem.info }}</span>
          </span>
          <br />
        </marquee>
     
     <span> Precio Normal: ${{ propItem.price }}
      <v-icon class="mb-1" small color="success" v-if="propItem.cant<=2">mdi-check-circle</v-icon>
     </span>
        <br>
       <span> Precio Mayor: ${{ propItem.price2 }}
      <v-icon class="mb-1" small color="success" v-if="propItem.cant>=3">mdi-check-circle</v-icon>
       
       </span>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <center>
      <v-row>
        <v-col cols="6" lg="6" md="6">
          <span>Cantidad: </span>
          <br />
<v-icon
            :disabled="propItem.cant == 20"
            @click="
              propItem.cant++;
              calcSubTotal(propItem);
            "
            >mdi-plus-circle</v-icon
          >
          <span class="ml-2 mr-2">{{ propItem.cant }}</span>
          <v-icon
            :disabled="propItem.cant == 1"
            @click="
              propItem.cant--;
              calcSubTotal(propItem);
            "
            >mdi-minus-circle</v-icon
          >
        </v-col>
        <v-col cols="6" lg="6" md="6">
          <span class="mr-1">Total:</span>
          <br />
          <span> ${{ propItem.total }} </span>
        </v-col>
      </v-row>
    </center>
  </div>
</template>

<script>
export default {
  props: {
    propItem: { type: Object },
  },
  data() {
    return {
      subtotal: 0,
    };
  },
  methods: {
    calcSubTotal(aux) {
      var subA = (aux.cant<=2? aux.price.split(".")[0]:aux.price2.split(".")[0]) * aux.cant;
      var subB = (aux.cant<=2? aux.price.split(".")[1]:aux.price2.split(".")[1]) * aux.cant;
      if (subB > 99) {
        subA += parseInt(subB * 0.01);
        var _subB = "" + subB * 0.01;
        subB = _subB.split(".")[1];
        if (subB > 99) {
          subB = subB[0] + subB[1];
        }
      }
      if (subB == undefined) {
        subB = "00";
      } else if (subB < 10) {
        subB += "0";
      }

      aux.total = subA + "." + subB;
      this.$emit("method", "calculateCart", null);
    },
    removeCart(aux) {
      this.$emit("method", "removeCart", aux);
    },
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