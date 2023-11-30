<template>
  <div style="width: 95%">
    <h4 style="color: white">Seleccione el tipo de servicio requerido</h4>
    <br />
    <v-row >
      <v-col class="textPhone windowsHC"  cols="12" lg="7" md="12" sm="12" style="overflow-y: auto;overflow-x: hidden">
        <div v-for="item in propItems" :key="item.title"
            @mouseenter="selected = item"
            @click="btnVisit(item.path)"
        >
          <itemCard
            :propItem="item"
            @method="btnVisit"
          />
        </div>
      </v-col>
      <v-col class="mediaPc" cols="5" lg="5" md="5" sm="5">
        <infoCard :propSelected="selected" @method="btnVisit" />
      </v-col>
    </v-row>
    <br />
  </div>
</template>

<script>
import infoCard from "@/components/home/infoCard";
import itemCard from "@/components/home/itemCard";
export default {
  components: {
    infoCard,
    itemCard,
  },
  props:{
propItems:{type:Array}
  },
  data() {
    return {
selected:{}
    };
  },
  methods: {
    btnPlay(txt) {
      this.$emit("search", txt);
    },
    btnVisit(aux) {
      this.$router.push({name:aux})
    },
  },
};
</script>

<style>
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