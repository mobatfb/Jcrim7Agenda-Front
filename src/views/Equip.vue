<template>
  <div>
    <v-dialog persistent v-model="dialogAlert.active" width="400px">
      <alert
        :propType="dialogAlert.type"
        :propText="dialogAlert.text"
        @method="componentMethod"
      />
    </v-dialog>
    <div class="startView">
      <v-dialog persistent v-model="showCart">
        <sideLeft
          class="col1x pa-2 windowsxLA"
          :propItems="myCart"
          :propClass="'windowsxLB'"
          @method="componentMethod"
        />
      </v-dialog>
      <v-row class="ma-5">
        <v-col
          cols="12"
          lg="12"
          md="12"
          sm="12"
          class="col2 windowsPA"
          style="left: 2px"
        >
          <center>
            <div class="formatCard">
              <h4>Alquile o compre un equipo informático a su necesidad</h4>
            </div>
          </center>
          <sideRight :propItems="items" @method="componentMethod" />
        </v-col>
      </v-row>
      <br />
    </div>
  </div>
</template>
<script>
import sideRight from "@/components/equips/listEquips";
import alert from "@/components/equips/dialog/alert";
export default {
  components: {
    sideRight,
    alert,
  },
  name: "home",
  data() {
    return {
      myCart: [],
      showCart: false,
      searchText: "",
      dialogAlert: { active: false, type: "", text: "" },
      items: [
          {
          code: "pcb1",
          name: "Básico",
          img: require("@/assets/img/equips/equip0.png"),
          contact: "0967267405",
          info: "Equipo básico, ideal para estudiantes de primaria y secundaria",
          price: "220.00",
          cuote: "15.00",
          details: [
            {
              tag: "gen",
              info: "1ra"
            },
             {
              tag: "Dual core",
              info: "2Duo"
            },
                {
              tag: "hdd",
              info: "500GB"
            },
            {
              tag: "ram",
              info: "2GB"
            },
             {
              tag: "Monitor",
              info: "17p"
            },
              {
              tag: "NVIDIA",
              info: "NO"
            },
          ],
          avalible: true,
        },
       {
          code: "pcb1",
          name: "Estudiantil",
          img: require("@/assets/img/equips/equip.png"),
          contact: "0967267405",
          info: "Equipo básico, ideal para estudiantes de primaria y secundaria",
          price: "400.00",
          cuote: "25.00",
          details: [
            {
              tag: "gen",
              info: "4ta"
            },
             {
              tag: "core",
              info: "I3"
            },
                {
              tag: "ssd",
              info: "120GB"
            },
            {
              tag: "ram",
              info: "4GB"
            },
             {
              tag: "Monitor",
              info: "19p"
            },
              {
              tag: "NVIDIA",
              info: "NO"
            },
          ],
          avalible: true,
        },
        {
          code: "pcm1",
          name: "Gama media",
          img: require("@/assets/img/equips/equip.png"),
          contact: "0967267405",
          info: "Equipo de gama media, ideal para estudiantes de secundaria y universitarios.",
          price: "500.00",
          cuote: "30.00",
          details: [
              {
              tag: "gen",
              info: "4ta"
            },
            {
              tag: "core",
              info: "I3"
            },
               {
              tag: "ssd",
              info: "240GB"
            },
            {
              tag: "ram",
              info: "8GB"
            },
             {
              tag: "Monitor",
              info: "19p"
            },
              {
              tag: "NVIDIA",
              info: "NO"
            },
          ],
          avalible: true,
        },
        {
          code: "pca1",
          name: "Avanzado",
          img: require("@/assets/img/equips/equip.png"),
          contact: "0967267405",
          info: "Equipo de alta capacidad, ideal para estudiantes de universitarios, profesionales y oficinistas.",
          price: "750.00",
          cuote: "45.00",
          details: [
              {
              tag: "gen",
              info: "4ta"
            },
            {
              tag: "core",
              info: "I5"
            },
             {
              tag: "ssd",
              info: "480GB"
            },
            {
              tag: "ram",
              info: "8GB"
            },
             {
              tag: "Monitor",
              info: "19p"
            },
              {
              tag: "NVIDIA",
              info: "2GB"
            },
          ],
          avalible: true,
        },
        {
          code: "pcg1",
          name: "Gamer",
          img: require("@/assets/img/equips/gamer.png"),
          contact: "0967267405",
          info: "Equipo de alto rendimiento y capacidad en juegos, ideal para vivir una experiencia gamer optima.",
          price: "1300.00",
          cuote: "70.00",
          details: [
              {
              tag: "gen",
              info: "8va"
            },
            {
              tag: "core",
              info: "I7"
            },
              {
              tag: "ssd",
              info: "1TB"
            },
            {
              tag: "ram",
              info: "16GB"
            },
             {
              tag: "Monitor",
              info: "21p"
            },
               {
              tag: "NVIDIA",
              info: "4GB"
            },
        ]},
                    {
          code: "pcg2",
          name: "Gamer Ultra",
          img: require("@/assets/img/equips/gamer2.png"),
          contact: "0967267405",
          info: "Equipo de ultima generacion, alto rendimiento y capacidad en juegos, ideal para vivir una experiencia gamer sin igual.",
          price: "3500.00",
          cuote: "150.00",
          details: [
              {
              tag: "gen",
              info: "12va"
            },
            {
              tag: "core",
              info: "I9"
            },
              {
              tag: "ssd & m2",
              info: "2TB"
            },
            {
              tag: "ram",
              info: "32GB"
            },
             {
              tag: "Mntor curvo",
              info: "27p"
            },
               {
              tag: "NVIDIA",
              info: "8GB"
            },
          ],
          avalible: true,
        },
        {
          code: "imep1",
          name: "EPSON L3250",
          img: require("@/assets/img/equips/epson.png"),
          contact: "0967267405",
          info: "Impresora multifuncional con wifi y tinta continua.",
          price: "350.00",
          cuote: "20.00",
          details: [
            {
              tag: "WIFI",
              info: "SI"
            },
            {
              tag: "Tinta Continua",
              info: ""
            },
          ],
          avalible: true,
        },
      ],
    };
  },
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
  },
  created() {
    // this.$func.openDialog = this.openDialog;
    //this.openDialog("news", { name: "dfdf" });
  },
  computed: {},
  methods: {
    componentMethod(aux, data) {
      switch (aux) {
        case "addCart":
          data.inCart = true;
          var sendItem = {
            code: data.code,
            name: data.name,
            img: data.img,
            info: data.info,
            cant: 1,
            price: data.price,
            price2: data.price2,
            total: data.price,
            date: this.$genDate(),
          };
          this.myCart.push(sendItem);
          break;
        case "removeCart":
          var newMyCart = [];
          var item = this.items.find((item) => item.code === data.code);
          item.inCart = false;
          this.myCart.forEach((element) => {
            if (element.date != data.date) {
              newMyCart.push(element);
            }
          });
          this.myCart = newMyCart;
          break;
        case "sendCart":
          this.sendRequest(data);
          break;
        case "closeCart":
          this.showCart = false;
          break;
        case "closeAlert":
          this.dialogAlert.active = false;
          break;

        default:
          break;
      }
    },
    async sendRequest(aux) {
      if (!aux.name || !aux.contact) {
        return;
      }
      var data = {
        name: aux.name,
        contact: aux.contact,
        date: this.$genDate(),
        total: aux.total,
        request: aux.request,
      };
      this.$http
        .post("/registercart", data)
        .then((res) => {
          if (res.data) {
            this.dialogAlert.text = "Peticion enviada con exito";
            this.dialogAlert.type = "success";
            this.dialogAlert.active = true;
            var url =
              "https://api.whatsapp.com/send?phone=593" +
              this.$salesman.contact +
              "&text=Hola mi nombre es: " +
              aux.name +
              " con numero de telefono: " +
              aux.contact +
              ". Realice el siguiente pedido: " +
              res.data.requestCart;
            window.open(url, "_blank");
          }
        })
        .catch((err) => {
          err = "";
          this.dialogAlert.text = "Error al enviar peticion";
          this.dialogAlert.type = "error";
          this.dialogAlert.active = true;
          console.log("petición erronea", err);
        })
        .finally();
    },
    async searchCode() {
      if (this.searchText == "") {
        return;
      }
      this.$http
        .get("/searchcode/" + this.searchText)
        .then((res) => {
          if (res.data) {
            if (res.data.found) {
              this.myCart = res.data.found;
              this.items.forEach((element) => {
                element.inCart = false;
              });
              this.myCart.forEach((element) => {
                var item = this.items.find(
                  (item) => item.code === element.code
                );
                item.inCart = true;
              });
              this.dialogAlert.text = "Pedido encontrado";
              this.dialogAlert.type = "success";
              this.dialogAlert.active = true;
            } else {
              this.dialogAlert.text = "Pedido no disponible";
              this.dialogAlert.type = "error";
              this.dialogAlert.active = true;
            }
          }
        })
        .catch(() => {
          this.dialogAlert.text = "Ha ocurrido un error";
          this.dialogAlert.type = "error";
          this.dialogAlert.active = true;
        })
        .finally();
    },
  },
};
</script>

<style scoped>
.badge {
  position: absolute;
  top: -9px;
  right: -9px;
  padding: 5px 12px;
  color: white;
}

.startView {
  height: 100%;
  width: 100%;
}

.col1x {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 10px;
  position: relative;
}

.col1 {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 10px;
  position: relative;
}

.col2 {
  background-color: #ffffffbb;
  border-radius: 10px;
  position: relative;
}
</style>
