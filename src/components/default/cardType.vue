<template>
  <div style="width: 95%">
    <h4 style="color: white">Seleccione el tipo de servicio requerido</h4>
    <br />
    <v-row>
      <v-col style="" cols="6" lg="2" md="2" v-for="item in items" :key="item">
        <v-card
          class="cardType"
          height="100%"
          :style="{ 'background-color': $color.secondary }"
        >
          <v-img class="white--text" height="100%" :src="item.img">
            <div class="divText">
              <v-card-subtitle
                @click="$func.openDialog('business', { name: item.by })"
                class="cardBy"
              >
                <v-avatar :color="$color.primary" size="30">
                  <img v-if="imgMoba" :src="imgMoba" :alt="item.by" />
                  <span v-else class="white--text text-h5">{{
                    item.by[0]
                  }}</span>
                </v-avatar>
                {{ item.by }}
              </v-card-subtitle>
              <br />
              <v-card-title class="cardTitle">
                {{ item.title }}
              </v-card-title>

              <v-card-text class="text--primary">
                <div>
                  {{ item.info }}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  @click="btnPlay(item.title)"
                  fab
                  dark
                  x-large
                  :color="$color.secondary"
                >
                  <v-icon dark> mdi-play </v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgMoba: require("@/assets/img/business/moba.png"),
      items: [
        {
          title: "Salud",
          by: "moba",
          info: "",
        },
        {
          img: require("@/assets/img/services/hogar.jpg"),
          title: "Hogar",
          by: "moba",
          info: "",
        },
        {
          img: require("@/assets/img/services/transporte.jpg"),
          title: "Transporte",
          by: "moba",
          info: "",
        },
        {
          img: require("@/assets/img/services/educacion.jpg"),
          title: "Educación",
          by: "moba",
          info: "",
        },
        {
          img: require("@/assets/img/services/produccion.jpg"),
          title: "Producción",
          by: "moba",
          info: "",
        },
        {
          img: require("@/assets/img/services/tecnologia.jpg"),
          title: "Tecnología",
          by: "moba",
          info: "",
        },
      ],
    };
  },
  methods: {
    btnPlay(txt) {
      this.$emit("search", txt);
    },
  },
};
</script>

<style>
.divText {
  height: 100%;
  border-radius: 1%;
  background-color: rgba(0, 0, 0, 0.393);
}

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

.cardType {
  border: 1px solid red;
}
.cardType:hover {
  transform: scale(1.2);
  border: 1px solid red;
}
/* Media Query For different screens */

</style>