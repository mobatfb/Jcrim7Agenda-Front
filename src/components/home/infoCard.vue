<template>
<center class="cardModel">
  <br>
    <h3>{{propSelected.title}}</h3>
    <br>
       <div
              class="infoImg"
              :style="{ backgroundImage: 'url(' + propSelected.img + ')' }"
              :alt="propSelected.title"
            ></div>
            <br>
              <span style="justify: left">{{ propSelected.info }}</span>
<br>
<br>
<v-btn color="blue" dark @click="$emit('method', propSelected.path)">ENTRAR</v-btn>

</center>
</template>

<script>
export default {
  props:{
    propSelected:{type:Object}
  },
  data() {
    return {
     
    };
  },
  methods: {
  
  },
};
</script>

<style>
.divText {
  height: 100%;
  border-radius: 1%;
  background-color: rgba(0, 0, 0, 0.393);
}
.cardModel {
  background-color: rgba(255, 255, 255, 0.733);
  border-radius: 2%;
  width: 95%; height:80%;
  left: 10px;
  top: 1%;
  position: relative;
}
.infoImg {
  background-size: cover;
  border-radius: 15%;
  width: 70%;
  height: 50%;
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