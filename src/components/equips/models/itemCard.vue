<template>
  <v-card
    class="modelCard"
    :style="{ backgroundImage: 'url(' + pcBack + ')' }"
    style="background-size: 100% 100%; height: 300px"
  >
    <div
      :style="{ backgroundImage: 'url(' + propItem.img + ')' }"
      style="background-size: 100% 100%; height: 100%"
    >
      <div class="titleText pa-2">
        <span class="font-weight-bold"> Equipo </span>
        <br />
        <span class="text-h6 font-weight-bold">
          {{ propItem.name }}
        </span>
      </div>
      <div
        class="pa-1 infoMarquee"
        style="float: right; width: 70px; height: 50px"
      >
        <center>
          <span class="font-weight-bold" style="font-size: 8pt;">
            {{ propItem.details[contDetails].tag }}
          </span>
          <br>
          <span class="font-weight-bold" style="font-size: 13pt;">
            {{ propItem.details[contDetails].info }}
          </span>
        </center>
      </div>

      <v-footer absolute color="transparent">
        <div class="infoTextEquip">
          <div style="float: left">
            <span class="infoMarquee text-h5 pa-1">
              ${{ propItem.price }}
              <span>Venta</span>
            </span>
            <br />
            <span class="infoMarquee text-h5 pa-1">
              ${{ propItem.cuote }}
              <span> Alquiler</span>
            </span>
          </div>
          <v-btn
            color="success"
            style="float: right"
            fab
            @click="sendRequest(propItem)"
          >
            <v-icon large> mdi-whatsapp </v-icon>
          </v-btn>
          <marquee class="infoMarquee font-weight-bold ma-1">
            {{ propItem.info }}
          </marquee>
          <center>
            <span> cel. {{ propItem.contact }}</span>
          </center>
        </div>
      </v-footer>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    propItem: { type: Object },
  },
  data() {
    return {
      contDetails: 0,
      pcBack: require("@/assets/img/equips/pcback.jpg"),
    };
  },
  mounted() {
    setInterval(this.autoChange, 2000);
  },
  methods: {
    autoChange() {
      if (this.contDetails + 1 == this.propItem.details.length) {
        this.contDetails = 0;
        return;
      } else {
        this.contDetails++;
      }
    },
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
.titleText {
  background-color: rgba(173, 3, 3, 0.541);
  display: inline-table;
  border-radius: 10px;
  color: white;
}
.infoTextEquip {
  border-radius: 10px;
  color: white;
}
.infoMarquee {
  background-color: rgba(77, 3, 173, 0.541);
  border-radius: 10px;
  color: white;
}
.modelCard {
  background-color: rgba(255, 255, 255, 0.733);
  margin: 1px;
  padding: 5px;
}
</style>