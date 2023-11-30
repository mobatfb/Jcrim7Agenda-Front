<template>
  <div>
    <div class="mediaPhone">
      <v-btn fab color="secondary" @click="$emit('method')" x-small
        ><v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <center>
      <img :src="moba" class="exagono" />
    </center>
    <div class="windowsHB" style="overflow-y: auto; overflow-x: hidden">
      <hr style="margin-bottom: 20px" />
      <p v-for="(line,num) in info" :key="'line'+num" class="textInfo">
        {{ line.line }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moba: require("@/assets/default/moba.svg"),
      info: [
        {
          line: "MOBA TECHNOLOGY es una empresa dedicada a la creación de sistemas administrativos, plataformas, sitios webs, aplicaciones móviles tanto educativas y para negocios.",
        },
        {
          line: "Al mismo tiempo tiene a disponibilidad su centro de educación tecnológico para capacitar a niños y jóvenes en las nuevas tendencias tecnológicas: estudiantes y personas interesadas en aprender sobre las Tecnologías de Información y Comunicación (TICs), programación, robótica educativa, ofimática, etc.",
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
.textInfo {
  font-size: 20px;
  text-align: justify;
}
.exagono {
  background-size: contain;
  width: 60%;
  position: relative;
}
</style>