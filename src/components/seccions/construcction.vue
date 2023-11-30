<template>
  <div>
    <v-row class="ma-2">
      <v-col lg="3" cols="6" v-for="item in items" :key="item.title">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="item.img" height="200px"></v-img>

          <v-card-title style="font-size: 12pt;">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ item.info }}
          </v-card-subtitle>

          <v-card-actions style="display: none">
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition style="display: none">
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    propItems: { type: Array },
  },
  data() {
    return {
      dialogClient: { active: false, data: {} },
      dialogProductPreview: false,
      items: [
        {
          title: "Edificio 4 plantas",
          info: "",
          img: require("@/assets/img/constructions/Imagen1.png"),
        },
{
          title: "Casa de 2 plantas",
          info: "",
          img: require("@/assets/img/constructions/Imagen2.png"),
        },
        {
          title: "Casa planta baja",
          info: "",
          img: require("@/assets/img/constructions/Imagen3.png"),
        },
      ],
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
    methodsDialogClient(aux) {
      switch (aux) {
        case "close":
          this.dialogClient.data = {};
          this.dialogClient.active = false;
          break;
        default:
          break;
      }
    },
    dialogMethods(aux, data) {
      switch (aux) {
        case "openClientInfo":
          this.dialogClient.data = {};
          this.dialogClient.data = data;
          this.dialogClient.active = true;
          break;
        case "openDialogPreview":
          this.selected = data;
          this.dialogProductPreview = true;
          break;
        case "close":
          this.dialogClient.data = {};
          this.dialogClient.active = false;
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style>
* {
  padding: 0px;
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
</style>