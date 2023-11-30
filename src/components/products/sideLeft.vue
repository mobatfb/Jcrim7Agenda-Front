<template>
  <div>
    <v-dialog persistent v-model="dialogClient" width="400px">
      <clientData @method="methodsDialogClient" />
    </v-dialog>
    <div class="formatCard mediaPhone navBarCart pa-1 rounded">
      <div>
        <v-icon @click="$emit('method', 'closeCart')">mdi-arrow-left</v-icon>
        MIS PEDIDOS
        <h3 class="ml-4" style="float: right">Total a pagar: ${{ total }}</h3>
      </div>
      <v-btn
        @click="dialogClient = true"
        v-show="propItems.length != 0"
        color="secondary"
        block
        >ENVIAR PEDIDOS
        <v-icon class="ml-3"> mdi-whatsapp </v-icon>
      </v-btn>
    </div>
    <div class="mediaPhone ma-16"></div>
    <div class="mediaPc">
      <h3 class="ma-1">MIS PEDIDOS</h3>
      <hr style="margin-bottom: 10px" />
      <h3 class="ma-1">Total a pagar: ${{ total }}</h3>
      <v-btn
        @click="dialogClient = true"
        v-show="propItems.length != 0"
        block
        color="secondary"
        >ENVIAR PEDIDOS
        <v-icon class="ml-3"> mdi-whatsapp </v-icon>
      </v-btn>
    </div>

    <div class="mt-2" :class="propClass" style="overflow-y: auto;">
      <itemCart
        v-for="item in propItems"
        :key="item.date"
        class="textInfo ma-2"
        :propItem="item"
        @method="cardAction"
      />
      <div class="mb-3"></div>
    </div>
  </div>
</template>

<script>
import itemCart from "@/components/products/models/itemCart";
import clientData from "@/components/products/dialog/clientData";
export default {
  components: {
    itemCart,
    clientData,
  },
  props: {
    propItems: { type: Array },
    propClass:{type:String}
  },
  data() {
    return {
      dialogClient: false,
      total: 0,
    };
  },
  watch: {
    propItems() {
      this.calculateCart();
    },
  },
  mounted(){
if (!this.propItems.length==0) {
  this.calculateCart()
}
  },
  methods: {
    cardAction(aux, data) {
      switch (aux) {
        case "calculateCart":
          this.calculateCart();
          break;
        case "removeCart":
          this.btnRemoveCart(data);
          this.calculateCart();
          break;

        default:
          break;
      }
    },
    calculateCart() {
      this.total = 0;
      var subA = 0;
      var subB = 0;
      this.propItems.forEach((element) => {
        subA += parseInt(element.total.split(".")[0]);
        subB += parseInt(element.total.split(".")[1]);
      });
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

      this.total = subA + "." + subB;
    },
    btnPlay(txt) {
      this.$emit("search", txt);
    },
    methodsDialogClient(aux, data) {
      if (aux == "sendCart") {
        this.$emit("method", aux, {
          name: data.name,
          contact: data.contact,
          request: this.propItems,
          total: this.total,
        });
      }
      this.dialogClient = false;
    },
    btnRemoveCart(data) {
      this.$emit("method", "removeCart", data);
    },
  },
};
</script>

<style>
.navBarCart {
  position: absolute;
  z-index: 1;
}
.textInfo {
  text-align: justify;
}
.exagono {
  background-size: contain;
  width: 60%;
  position: relative;
}
</style>