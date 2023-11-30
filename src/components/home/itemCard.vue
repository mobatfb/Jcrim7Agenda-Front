<template>
  <div class="divItem">
    <div id="imgItemThis" style="width: 100px; height: 100px; float: left">
      <div
        class="divItemImg"
        v-if="propItem.img"
        :style="{ backgroundImage: 'url(' + propItem.img + ')' }"
        :alt="propItem.by"
      ></div>
      <div v-else class="divItemImg">
        <center>
          <span class="white--text text-h5">{{
            propItem.title[0].toUpperCase() +
            propItem.title[1].toUpperCase() +
            propItem.title[2].toUpperCase()
          }}</span>
        </center>
      </div>
      <center class="ma-1">
    <h2 style="justify: left">{{ propItem.avalible.toUpperCase() }}</h2>
      </center>
    </div>
    <div>
    <div class="mediaPc">
      <v-card-title>
        {{ propItem.title }}
      </v-card-title>
    </div>
    <h2 class="mediaPhone">
      {{ propItem.title }}
    </h2>
<div>
    <span style="justify: left">{{ propItem.info }}</span>
</div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    propItem: { type: Object },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.divText {
  height: 100%;
  border-radius: 1%;
  background-color: rgba(0, 0, 0, 0.393);
}
.divItem {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.393);
  height: 120px;
  cursor: pointer;
  margin: 10px;

}
.divItem:hover {
  transform: scale(1.05);
  border: 1px solid red;
}
.divItemImg {
  background-size: cover;
  border-radius: 15%;
  width: 90px;
  left: 5px;
  top: 5px;
  height: 90px;
  position: relative;
}

.cardTitle {
  -webkit-text-stroke: 1px black;
  word-break: break-all;
  font-size: 20px;
  position: relative;
}
.cardModel {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 2%;
  width: 95%;
  height: 80%;
  left: 10px;
  top: 1%;
  position: relative;
}

.cardImg {
  background-size: cover;
  border-radius: 15%;
  width: 60%;
  height: 30%;
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
@media (min-width: 320px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
}
@media (min-width: 480px) and (max-width: 599px) {
  /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
}
@media (min-width: 801px) and (max-width: 1250px) {
}
</style>