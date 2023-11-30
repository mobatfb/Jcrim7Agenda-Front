<template>
  <div>
    <div class="mediaPhone">
      <v-fab-transition>
        <v-btn color="secondary" fab dark absolute right @click="showCart = !showCart">

          <v-icon>mdi-cart</v-icon>
          <span class="badge">{{ myCart.length }}</span>

        </v-btn>
      </v-fab-transition>
    </div>

    <v-dialog persistent v-model="dialogAlert.active" width="400px">
      <alert :propType="dialogAlert.type" :propText="dialogAlert.text" @method="componentMethod" />
    </v-dialog>
    <div style="background: green; width: 326px; border-radius: 6px">
      <button @click="searchCode()" class="ml-1 mr-1 pl-2 pr-2"
        style="background: green; height: 22px; border-radius: 6px">
        Buscar
      </button>
      <input v-model="searchText" class="pl-2 pr-2" style="
          width: 250px;
          height: 20px;
          background: white;
          border-radius: 6px;
        " placeholder="Ingrese codigo de pedido" background-color="white" />
    </div>
    <div class="startView">
      <center style="color: white">
        <h4>BENEFICIOS:</h4>
        <div style="width: 500px">
          <marquee class="pr-5 pl-5" style="background: blue; border-radius: 30px" behavior="alternate" direction="left"
            scrollamount="5">
            <span> Cupon de descuento por cada compra - </span>
            <span> Envio gratis por compras mayores a 25$ - </span>
            <span> Regalo sorpresa por compras mayores a 50$ - </span>
            <span> Aproveche nuestras promociones </span>
          </marquee>
        </div>
      </center>
      <v-dialog persistent v-model="showCart">
        <sideLeft class="col1x pa-2 windowsxLA" :propItems="myCart" :propClass="'windowsxLB'"
          @method="componentMethod" />
      </v-dialog>
      <v-row class="ma-1">
        <v-col cols="12" lg="3" md="3" sm="3" class="col1 windowsPA mediaPc">
          <center>
            <sideLeft :propItems="myCart" :propClass="'windowsPB'" @method="componentMethod" />
          </center>
        </v-col>
        <v-col cols="12" lg="9" md="9" sm="9" class="col2 windowsPA" style="left: 2px">
          <sideRight :propItems="items" @method="componentMethod" />
        </v-col>
      </v-row>
      <br />
    </div>
  </div>
</template>
<script>
import sideLeft from "@/components/products/sideLeft";
import sideRight from "@/components/products/sideRight";
import alert from "@/components/products/dialog/alert";
export default {
  components: {
    sideLeft,
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
          code: "dyx-03-008",
          name: "Parlantes para computadora Grande",
          img: "https://cf.shopee.com.my/file/6eb6e8a387b35df92d8213549ed7dca5",
          info: "Con entrada de audio, solo uso computadora",
          price: "15.00",
          price2: "7.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "dyx-03-016",
          name: "Parlantes para computadora Mediano",
          img: "https://importadorambplus.com/web/image/product.template/1110/image",
          info: "Con entrada de audio, solo uso computadora",
          price: "10.00",
          price2: "5.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "dyx-03-018",
          name: "Parlantes para computadora Pequeño",
          img: "https://cf.shopee.ph/file/1ba7338f01b22f6219e037ade7e3688e",
          info: "Con entrada de audio, solo uso computadora",
          price: "8.00",
          price2: "4.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "eac-01-044",
          name: "Lampara nocturna",
          img: "https://ae01.alicdn.com/kf/H6fca7eada2f84c2bbb800a76700cf845l/LED-Night-Light-UFO-Projector-Starry-Sky-Star-Moon-Master-USB-Projection-Lamp-Light-Children-Kids.jpg_Q90.jpg_.webp",
          info: "Proyecta bonitos juegos de luces para dormitorios",
          price: "10.00",
          price2: "5.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "aud097",
          name: "Lampara musical via bluetooth",
          img: "https://static-01.daraz.com.bd/p/bc4346cb2f593707b6ca15b16ce985c8.jpg",
          info: "Ilumina dormitorios y permite reproducir musicas desde dispositivos  moviles",
          price: "15.00",
          price2: "7.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "83088",
          name: "Lampara musical Bulb/App USB",
          img: "https://i.pinimg.com/236x/ff/18/23/ff182310a73d1d0a68847c434a94b762.jpg",
          info: "Esta lampara permite conectar por aplicacion movil para cambiar colores, incluye control remoto",
          price: "10.00",
          price2: "5.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "mzm-05-005",
          name: "Lampara musical Bulb/App",
          img: "https://ae01.alicdn.com/kf/Hbb41c4c63f124b9a82504e8f27ae08d7F/Smart-E27-RGB-White-Bluetooth-Speaker-Led-Light-Bulb-Adjustable-Music-Light-Wireless-APP-and-Remote.jpg_Q90.jpg_.webp",
          info: "Esta lampara permite conectar por aplicacion movil para cambiar colores, incluye control remoto",
          price: "8.00",
          price2: "4.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "000001",
          name: "Mini parlante bluetooth",
          img: "https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/speaker/mobile-tablet-speaker/e/q/b/mini-boost-tapfuture-original-imag92vufmpj9fyn.jpeg?q=70",
          info: "Potente mini parlante via bluetooth",
          price: "8.00",
          price2: "4.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "dyc-01-001",
          name: "Mini Parlante portable Bluetooth",
          img: "https://maxitec.vteximg.com.br/arquivos/ids/164969-1000-1000/maxitec-steren-mini-parlante-bluetooth-boc-830-1.jpg?v=637809751988100000",
          info: "es un pr",
          price: "8.30",
          price2: "5.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "dyc-01-001x",
          name: "Mini Parlante Hongo portable Bluetooth",
          img: "https://importadorambplus.com/web/image/product.template/858/image",
          info: "Mini parlante tipo hongo",
          price: "7.00",
          price2: "4.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "zqs-13-14",
          name: "Parlante portable bluetooth USB",
          img: "http://sc04.alicdn.com/kf/H9b781eb0006443aea533113492a11e6eA.jpg",
          info: "Parlante portable de 8W",
          price: "10.00",
          price2: "5.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "abs-31-02",
          name: "Parlante portable bluetooth USB",
          img: "https://dojiw2m9tvv09.cloudfront.net/27188/product/parlantepequenomlab0273.jpeg",
          info: "Parlante portable de 8W",
          price: "12.00",
          price2: "6.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "h00-00-002",
          name: "Huminificador 300ml",
          img: "https://cf.shopee.com.co/file/c04e51e7eeebc40e11c230ed7c73e7b6",
          info: "Humificador usb tipo capsula capacidad 300ml",
          price: "6.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "h00-00-003",
          name: "Huminificador 300ml con cuernos",
          img: "https://m.media-amazon.com/images/I/71feaXgz6GL._AC_SX522_.jpg",
          info: "Humificador usb tipo capsula capacidad 300ml",
          price: "7.00",
          price2: "3.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "h00-00-004",
          name: "Huminificador 480ml",
          img: "https://i.linio.com/p/686a0a096538e64766101bca80af6d17-product.jpg",
          info: "Humificador usb tipo vaso capacidad 480ml",
          price: "12.00",
          price2: "6.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "rup-01-001-01",
          name: "Micro SD 4GB Kingston",
          img: "http://www.tienda.uiolibre.com/wp-content/uploads/2020/06/MICRO-SD4GB.jpg",
          info: "Micro tarjetas de 4GB de marca Kingston",
          price: "5.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "rup-01-001-02",
          name: "Micro SD 8GB Kingston",
          img: "https://sistemasyprogramas.com/5329-medium_default/tarjeta-micro-.jpg",
          info: "Micro tarjetas de 8GB de marca Kingston",
          price: "8.00",
          price2: "4.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "rup-01-001-03",
          name: "Micro SD 16GB Kingston",
          img: "https://dojiw2m9tvv09.cloudfront.net/46444/product/memoriamicrosd16gb2510.jpeg",
          info: "Micro tarjetas de 16GB de marca Kingston",
          price: "12.50",
          price2: "6.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "rup-01-002-04",
          name: "Pendrive 32GB Kingston|",
          img: "https://www.larebaja.ec/wp-content/uploads/2020/07/10816-FLASH-KINGSTON-32GB-DTSE9-PLATEADO.png",
          info: "Pendrive de 32GB de marca Kingston",
          price: "15.00",
          price2: "8.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "cdi-00-001",
          name: "Iphone cargador USB-C",
          img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/40f1d28a-0317-4709-810d-ca21a57e1d42.dc7c29134761876db09a7ce88cf044a7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
          info: "Solo adaptador de energia para equipos Iphone, no incluye cable USB",
          price: "7.00",
          price2: "4.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "cds-00-001",
          name: "Samsung cargador usb",
          img: "https://ae01.alicdn.com/kf/H78965c38ddd04262b4069abe6daf024di.jpg",
          info: "Adaptador de energia para celulares Samsung, incluye cable USB",
          price: "6.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "cds-00-111",
          name: "Samsung cargador usb carga rapida",
          img: "https://cf.shopee.co.id/file/3face6a7e1692627425f7bc4e0981530",
          info: "Adaptador de energia para celulares Samsung carga rapida, incluye cable USB",
          price: "5.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "cdh-00-001",
          name: "Huawei cargador usb",
          img: "https://www.smartbd.com/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/4/1/41d5ltmroxl_1.jpg",
          info: "Adaptador de energia para celulares Huawei, incluye cable USB",
          price: "6.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "cdn-00-001",
          name: "Cable usb de tela",
          img: "https://i.pinimg.com/736x/f7/a7/70/f7a770b475544fd7ac709784aa4fa52a.jpg",
          info: "Cable USB de tela de alta resistencia",
          price: "2.00",
          price2: "1.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "cdb-00-001",
          name: "Cable usb de 3 metros con filtro",
          img: "https://http2.mlstatic.com/D_NQ_NP_868669-MLM44906166163_022021-O.jpg",
          info: "Cable USB de de alta resistencia 3 metros de extensor",
          price: "2.50",
          price2: "1.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "cdb-00-002",
          name: "Cable usb tipo C de 3 metros",
          img: "https://http2.mlstatic.com/D_NQ_NP_957192-MEC47535685404_092021-O.webp",
          info: "Cable USB tipo C de de alta resistencia 3 metros de extensor",
          price: "3.00",
          price2: "1.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "cdb-00-012",
          name: "Cable usb tipo C reforzado",
          img: "https://m.media-amazon.com/images/I/31PT66v4EmL._SX385_.jpg",
          info: "Cable USB tipo C de de alta resistencia",
          price: "3.00",
          price2: "1.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "cnp-00-012",
          name: "Cable de energia universal",
          img: "https://media.startech.com/cms/products/main/pxt1011010pk.main.jpg",
          info: "Cable de energia universal para equipos electronicos",
          price: "2.00",
          price2: "1.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "eaf-91-153",
          name: "Audifonos para Iphone",
          img: "http://www.cellularmarket.com.ec/web/image/product.template/1228/image",
          info: "Audifonos con cable para celulares y equipos Iphone o Mac",
          price: "5.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "eaf-01-153",
          name: "Audifonos para Huawei Originales",
          img: "https://cdn.shopify.com/s/files/1/0253/0895/4690/products/streetiz-collection-ecouteurs-blanc-ecouteurs-huawei-jack-3-5-mm-original-14933369946178_1024x1024.jpg?v=1619170346",
          info: "Audifonos con cable para celulares y equipos Huawei",
          price: "3.50",
          price2: "2.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "pps-01-004",
          name: "Audifonos AKG para Samsung Originales",
          img: "https://img.clasf.pe/2020/08/05/Audifonos-Akg-Handsfree-Genericos-Samsung-S8-S8-Plus-A8-Note-20200805014339.2997720015.jpg",
          info: "Audifonos de marca AKG originales alta calidad",
          price: "2.50",
          price2: "1.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "pec001",
          name: "Tableta LCD para dibujar y escribir de 21.5cm (8.5)",
          img: "https://n2.sdlcdn.com/imgs/i/g/l/Picture2-6cf46.jpg",
          info: "Tableta con pantalla de escritura digital de 21.5 cm",
          price: "10.00",
          price2: "6.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "nzj-02-009",
          name: "Respaldar portable para celulares",
          img: "https://rukminim1.flixcart.com/image/416/416/kuipea80/mobile-holder/m/q/h/stand-desktop-foldable-mobile-phone-bracket-holder-s806-lifting-original-imag7mh2kzd5yzry.jpeg?q=70",
          info: "Respaldar para dispositivos moviles portable",
          price: "2.00",
          price2: "1.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "hol368",
          name: "Respaldar portable para celulares",
          img: "https://www.dhresource.com/0x0/f2/albu/g5/M01/F7/04/rBVaI1kz6piAb6qbAAV5ImNetsg667.jpg",
          info: "Respaldar para dispositivos moviles portable",
          price: "2.00",
          price2: "1.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "hold466",
          name: "Respaldar portable para celulares animado",
          img: "https://ae01.alicdn.com/kf/Haee6cf75b86247808f2026cd72890ba5o/Jellico-2021-Cute-Cartoon-Foldable-Portable-Cellphone-Tablet-Desktop-Holder-for-Mobile-Phone-Holder-for-iPad.jpg_Q90.jpg_.webp",
          info: "Respaldar para dispositivos moviles portable",
          price: "3.00",
          price2: "2.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "fsb-02-009",
          name: "Mouse diseño 3D JEQANG",
          img: "https://sc04.alicdn.com/kf/H4863a8f183454a3bb94db2d523ce184b8/243850105/H4863a8f183454a3bb94db2d523ce184b8.jpg",
          info: "Mouse optimo tipo 3D modelo JM-600",
          price: "6.00",
          price2: "3.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "fsb-02-014",
          name: "Mouse gaming JEQANG",
          img: "https://sc01.alicdn.com/kf/H91f72998579b40c88d8374f51d76fd1cw/243850105/H91f72998579b40c88d8374f51d76fd1cw.jpg",
          info: "Mouse optimo tipo gaming modelo JM-066",
          price: "5.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "fsb-02-016",
          name: "Mouse Inalambrico JEQANG",
          img: "http://compuwebsistemas.com/CompuwebStore/public/uploads/mouse%20ina.jpg",
          info: "Mouse optimo inalambrico modelo JM-210",
          price: "8.00",
          price2: "4.50",
          avalible: true,
          inCart: false,
        },
        {
          code: "bw-02-006",
          name: "Mouse optico marca Weibo modelo 3D",
          img: "data:image/jpeg;base64,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",
          info: "Mouse multiuso marca Weibo usb",
          price: "7.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "bw-01-008",
          name: "Mouse optico marca YBH durable",
          img: "https://biponymart.com/storage/2022/01/Rapoo-N100-Wired-Optical-Mouse2.png",
          info: "Mouse multiuso marca YBH usb",
          price: "6.00",
          price2: "3.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "ljp-01-001",
          name: "Teclado ultra comfort YBH ",
          img: "https://www.tech21century.com/wp-content/uploads/2019/10/Computer-Keyboards-Explained.jpg",
          info: "Teclado usb de marca YBH de alta duracion.",
          price: "8.00",
          price2: "5.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "tte004",
          name: "Combo teclado y mouse con iluminacion.",
          img: "https://img.tvc-mall.com/uploads/scenes/C0002883-1.jpg",
          info: "El combo incluye teclado y mouse usb con iluminacion.",
          price: "16.00",
          price2: "8.00",
          avalible: true,
          inCart: false,
        },
        {
          code: "tte019",
          name: "Combo teclado y mouse alta duracion y confort.",
          img: "https://img.joomcdn.net/bdf1f8ad3f7aaab6fef6990a09bb4b94d5e1c094_original.jpeg",
          info: "El combo incluye teclado y mouse usb.",
          price: "16.00",
          price2: "8.00",
          avalible: true,
          inCart: false,
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
                var item = this.items.find((item) => item.code === element.code);
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
