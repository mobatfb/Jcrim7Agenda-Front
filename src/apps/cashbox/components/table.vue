<template>
  <v-card width="70%" class="pa-6">
    <v-card-title class="pa-1"> Movimientos </v-card-title>
    <v-card-title class="pa-1">
      <v-btn
        color="blue"
        dark
        left
        @click="$emit('propMethod', 'openDialog', null)"
      >
        <v-icon>mdi-plus</v-icon>
        NUEVO
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :search="search"
      :headers="propHeaders"
      :items="propItems"
      :page.sync="page"
      :items-per-page="'5'"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <template v-slot:item.type="{ item }">
        <v-chip :color="getColor(item.type)" dark>
          {{ typeList[item.type] }}
        </v-chip>
      </template>
      <template v-slot:item.active="{ item }">
        <v-checkbox
          v-model="item.active"
          v-on:change="$emit('propMethod', 'changeActive', item, $event)"
        >
        </v-checkbox>
      </template>
    </v-data-table>
    <v-pagination v-model="page" :length="pageCount"></v-pagination>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: {
    propHeaders: { type: Object },
    propItems: { type: Array },
  },
  data() {
    return {
      cashColor: "#00ff003a",
      start: true,
      btnDisable: false,
      dialog: false,
      typeList: ["Ingreso", "Retiro"],
      form: { topic: "", dolar: 0, cent: 0 },
      search: "",
      page: 1,
      pageCount: 0,
      cash: 0,
      headers: [
        {
          text: "Tipo",
          align: "start",
          value: "type",
        },
        {
          text: "Asunto",
          value: "topic",
        },
        { text: "Valor", value: "value" },
        { text: "Fecha", value: "date" },
        { text: "Total", value: "total" },
        { text: "Activo", value: "active", sortable: false },
      ],
      items: [],
    };
  },
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
  },

  created() {},
  computed: {},
  methods: {
    getColor(type) {
      if (type == 0) return "green";
      else return "red";
    },
  },
};
</script>
<style scoped>
.img {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.specialFont {
  font-family: Lobster;
}
.fullCenter {
  display: flex;
  justify-content: center;
  align-content: center;
  place-items: center;
}
.flexcolum {
  height: 50vh;
  flex-direction: column;
}
.circular {
  border-radius: 40px;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
}
.boxs {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
}
.img {
  background-size: 100% 100%;
  background-repeat: none;
}
</style>
