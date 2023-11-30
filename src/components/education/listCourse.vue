<template>
  <div class="windowsPC" style="overflow-y: auto;overflow-x: hidden;"
  >
   <v-dialog persistent v-model="dialogClient.active" width="400px">
      <clientData :propData="dialogClient.data" @method="methodsDialogClient" />
    </v-dialog>
    <v-dialog persistent v-model="dialogProductPreview" width="600px">
      <productPreview :propItem="selected" @method="dialogMethods" />
    </v-dialog>

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
            cols="12"
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
import clientData from "@/components/education/dialog/clientData";
import productPreview from "@/components/education/dialog/productPreview";
import itemCard from "@/components/education/models/itemCard";
export default {
  components: {
    productPreview,
    itemCard,
    clientData
  },
  props: {
    propItems: { type: Array },
  },
  data() {
    return {
      dialogClient: {active:false, data:{} },
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
    methodsDialogClient(aux){
  switch (aux) {
        case "close":
          this.dialogClient.data={}
          this.dialogClient.active=false
          break;
        default:
          break;
      }
    },
    dialogMethods(aux, data) {
      switch (aux) {
        case "openClientInfo":
          this.dialogClient.data={}
          this.dialogClient.data=data
          this.dialogClient.active=true
          break;
        case "openDialogPreview":
          this.selected = data;
          this.dialogProductPreview = true;
          break;
        case "close":
          this.dialogClient.data={}
          this.dialogClient.active=false
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