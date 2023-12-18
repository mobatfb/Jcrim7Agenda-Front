<template>
<div>
  <div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
<div class="firefly"></div>
</div>
</template>

<script>

</script>
<style scoped>
html, body {
  height: 100%;
}

.firefly {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.8vw;
  height: 0.8vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
}
.firefly::before, .firefly::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: -10vw;
}
.firefly::before {
  background: black;
  opacity: 0.4;
  animation: drift ease alternate infinite;
}
.firefly::after {
  background: white;
  opacity: 0;
  box-shadow: 0 0 0vw 0vw yellow;
  animation: drift ease alternate infinite, flash ease infinite;
}

.firefly:nth-child(1) {
  animation-name: move1;
}
.firefly:nth-child(1)::before {
  animation-duration: 10s;
}
.firefly:nth-child(1)::after {
  animation-duration: 10s, 6883ms;
  animation-delay: 0ms, 8139ms;
}

@keyframes move1 {
  0% {
    transform: translateX(27vw) translateY(-24vh) scale(0.73);
  }
  3.8461538462% {
    transform: translateX(18vw) translateY(-19vh) scale(0.34);
  }
  7.6923076923% {
    transform: translateX(39vw) translateY(27vh) scale(0.32);
  }
  11.5384615385% {
    transform: translateX(4vw) translateY(-42vh) scale(0.32);
  }
  15.3846153846% {
    transform: translateX(46vw) translateY(-4vh) scale(0.66);
  }
  19.2307692308% {
    transform: translateX(35vw) translateY(5vh) scale(0.6);
  }
  23.0769230769% {
    transform: translateX(32vw) translateY(-3vh) scale(0.37);
  }
  26.9230769231% {
    transform: translateX(43vw) translateY(-37vh) scale(0.62);
  }
  30.7692307692% {
    transform: translateX(-5vw) translateY(49vh) scale(0.51);
  }
  34.6153846154% {
    transform: translateX(-14vw) translateY(-29vh) scale(0.94);
  }
  38.4615384615% {
    transform: translateX(48vw) translateY(-37vh) scale(0.52);
  }
  42.3076923077% {
    transform: translateX(-38vw) translateY(-31vh) scale(0.5);
  }
  46.1538461538% {
    transform: translateX(-28vw) translateY(-9vh) scale(0.56);
  }
  50% {
    transform: translateX(-47vw) translateY(-17vh) scale(0.92);
  }
  53.8461538462% {
    transform: translateX(35vw) translateY(40vh) scale(0.74);
  }
  57.6923076923% {
    transform: translateX(-32vw) translateY(-7vh) scale(0.83);
  }
  61.5384615385% {
    transform: translateX(-28vw) translateY(30vh) scale(0.8);
  }
  65.3846153846% {
    transform: translateX(-8vw) translateY(-6vh) scale(0.74);
  }
  69.2307692308% {
    transform: translateX(-5vw) translateY(37vh) scale(0.85);
  }
  73.0769230769% {
    transform: translateX(-24vw) translateY(4vh) scale(0.72);
  }
  76.9230769231% {
    transform: translateX(50vw) translateY(4vh) scale(0.33);
  }
  80.7692307692% {
    transform: translateX(20vw) translateY(-41vh) scale(0.82);
  }
  84.6153846154% {
    transform: translateX(26vw) translateY(-10vh) scale(0.49);
  }
  88.4615384615% {
    transform: translateX(-39vw) translateY(6vh) scale(0.7);
  }
  92.3076923077% {
    transform: translateX(-35vw) translateY(-12vh) scale(0.66);
  }
  96.1538461538% {
    transform: translateX(48vw) translateY(-4vh) scale(0.82);
  }
  100% {
    transform: translateX(-37vw) translateY(11vh) scale(0.98);
  }
}
.firefly:nth-child(2) {
  animation-name: move2;
}
.firefly:nth-child(2)::before {
  animation-duration: 9s;
}
.firefly:nth-child(2)::after {
  animation-duration: 9s, 7192ms;
  animation-delay: 0ms, 3150ms;
}

@keyframes move2 {
  0% {
    transform: translateX(31vw) translateY(-38vh) scale(0.46);
  }
  4.347826087% {
    transform: translateX(-48vw) translateY(-26vh) scale(0.96);
  }
  8.6956521739% {
    transform: translateX(-14vw) translateY(-4vh) scale(0.79);
  }
  13.0434782609% {
    transform: translateX(-11vw) translateY(2vh) scale(0.96);
  }
  17.3913043478% {
    transform: translateX(-42vw) translateY(-11vh) scale(0.82);
  }
  21.7391304348% {
    transform: translateX(-38vw) translateY(31vh) scale(0.8);
  }
  26.0869565217% {
    transform: translateX(-6vw) translateY(-31vh) scale(0.33);
  }
  30.4347826087% {
    transform: translateX(38vw) translateY(39vh) scale(0.4);
  }
  34.7826086957% {
    transform: translateX(-34vw) translateY(33vh) scale(0.71);
  }
  39.1304347826% {
    transform: translateX(17vw) translateY(36vh) scale(0.75);
  }
  43.4782608696% {
    transform: translateX(-7vw) translateY(-29vh) scale(0.59);
  }
  47.8260869565% {
    transform: translateX(-1vw) translateY(37vh) scale(0.63);
  }
  52.1739130435% {
    transform: translateX(2vw) translateY(4vh) scale(0.35);
  }
  56.5217391304% {
    transform: translateX(49vw) translateY(-36vh) scale(0.65);
  }
  60.8695652174% {
    transform: translateX(33vw) translateY(49vh) scale(0.89);
  }
  65.2173913043% {
    transform: translateX(47vw) translateY(-36vh) scale(0.64);
  }
  69.5652173913% {
    transform: translateX(-5vw) translateY(-46vh) scale(0.93);
  }
  73.9130434783% {
    transform: translateX(-6vw) translateY(22vh) scale(0.31);
  }
  78.2608695652% {
    transform: translateX(24vw) translateY(-35vh) scale(0.59);
  }
  82.6086956522% {
    transform: translateX(15vw) translateY(-21vh) scale(0.26);
  }
  86.9565217391% {
    transform: translateX(-49vw) translateY(-28vh) scale(0.89);
  }
  91.3043478261% {
    transform: translateX(6vw) translateY(-6vh) scale(0.27);
  }
  95.652173913% {
    transform: translateX(-13vw) translateY(16vh) scale(0.86);
  }
  100% {
    transform: translateX(-40vw) translateY(12vh) scale(0.31);
  }
}
.firefly:nth-child(3) {
  animation-name: move3;
}
.firefly:nth-child(3)::before {
  animation-duration: 16s;
}
.firefly:nth-child(3)::after {
  animation-duration: 16s, 5359ms;
  animation-delay: 0ms, 6553ms;
}

@keyframes move3 {
  0% {
    transform: translateX(39vw) translateY(45vh) scale(0.44);
  }
  3.8461538462% {
    transform: translateX(-26vw) translateY(27vh) scale(0.29);
  }
  7.6923076923% {
    transform: translateX(17vw) translateY(42vh) scale(0.27);
  }
  11.5384615385% {
    transform: translateX(-14vw) translateY(6vh) scale(0.4);
  }
  15.3846153846% {
    transform: translateX(26vw) translateY(-17vh) scale(0.51);
  }
  19.2307692308% {
    transform: translateX(-14vw) translateY(16vh) scale(0.26);
  }
  23.0769230769% {
    transform: translateX(-13vw) translateY(38vh) scale(0.27);
  }
  26.9230769231% {
    transform: translateX(-38vw) translateY(-20vh) scale(0.87);
  }
  30.7692307692% {
    transform: translateX(19vw) translateY(-8vh) scale(0.35);
  }
  34.6153846154% {
    transform: translateX(19vw) translateY(-42vh) scale(0.67);
  }
  38.4615384615% {
    transform: translateX(3vw) translateY(-38vh) scale(0.64);
  }
  42.3076923077% {
    transform: translateX(-29vw) translateY(-11vh) scale(0.58);
  }
  46.1538461538% {
    transform: translateX(9vw) translateY(-18vh) scale(0.81);
  }
  50% {
    transform: translateX(-49vw) translateY(-13vh) scale(0.68);
  }
  53.8461538462% {
    transform: translateX(-7vw) translateY(0vh) scale(0.75);
  }
  57.6923076923% {
    transform: translateX(-30vw) translateY(-31vh) scale(0.73);
  }
  61.5384615385% {
    transform: translateX(-33vw) translateY(21vh) scale(1);
  }
  65.3846153846% {
    transform: translateX(45vw) translateY(25vh) scale(0.87);
  }
  69.2307692308% {
    transform: translateX(-4vw) translateY(9vh) scale(0.39);
  }
  73.0769230769% {
    transform: translateX(-33vw) translateY(38vh) scale(0.99);
  }
  76.9230769231% {
    transform: translateX(29vw) translateY(-16vh) scale(0.66);
  }
  80.7692307692% {
    transform: translateX(24vw) translateY(-4vh) scale(0.79);
  }
  84.6153846154% {
    transform: translateX(18vw) translateY(21vh) scale(0.86);
  }
  88.4615384615% {
    transform: translateX(-40vw) translateY(-44vh) scale(0.78);
  }
  92.3076923077% {
    transform: translateX(-44vw) translateY(34vh) scale(0.94);
  }
  96.1538461538% {
    transform: translateX(-35vw) translateY(22vh) scale(0.98);
  }
  100% {
    transform: translateX(28vw) translateY(32vh) scale(0.96);
  }
}
.firefly:nth-child(4) {
  animation-name: move4;
}
.firefly:nth-child(4)::before {
  animation-duration: 11s;
}
.firefly:nth-child(4)::after {
  animation-duration: 11s, 8587ms;
  animation-delay: 0ms, 4505ms;
}

@keyframes move4 {
  0% {
    transform: translateX(-47vw) translateY(-44vh) scale(0.35);
  }
  3.8461538462% {
    transform: translateX(-23vw) translateY(0vh) scale(0.92);
  }
  7.6923076923% {
    transform: translateX(-19vw) translateY(-35vh) scale(0.39);
  }
  11.5384615385% {
    transform: translateX(-49vw) translateY(29vh) scale(0.83);
  }
  15.3846153846% {
    transform: translateX(-30vw) translateY(33vh) scale(0.97);
  }
  19.2307692308% {
    transform: translateX(13vw) translateY(-28vh) scale(0.65);
  }
  23.0769230769% {
    transform: translateX(-23vw) translateY(-3vh) scale(0.7);
  }
  26.9230769231% {
    transform: translateX(32vw) translateY(19vh) scale(0.61);
  }
  30.7692307692% {
    transform: translateX(-41vw) translateY(16vh) scale(0.49);
  }
  34.6153846154% {
    transform: translateX(24vw) translateY(50vh) scale(0.81);
  }
  38.4615384615% {
    transform: translateX(28vw) translateY(-24vh) scale(0.58);
  }
  42.3076923077% {
    transform: translateX(12vw) translateY(8vh) scale(0.87);
  }
  46.1538461538% {
    transform: translateX(-15vw) translateY(46vh) scale(0.8);
  }
  50% {
    transform: translateX(-36vw) translateY(-28vh) scale(0.39);
  }
  53.8461538462% {
    transform: translateX(-12vw) translateY(44vh) scale(0.62);
  }
  57.6923076923% {
    transform: translateX(4vw) translateY(37vh) scale(0.48);
  }
  61.5384615385% {
    transform: translateX(18vw) translateY(-7vh) scale(0.39);
  }
  65.3846153846% {
    transform: translateX(23vw) translateY(-30vh) scale(0.46);
  }
  69.2307692308% {
    transform: translateX(-43vw) translateY(-35vh) scale(0.64);
  }
  73.0769230769% {
    transform: translateX(42vw) translateY(18vh) scale(0.78);
  }
  76.9230769231% {
    transform: translateX(-21vw) translateY(-34vh) scale(0.9);
  }
  80.7692307692% {
    transform: translateX(-48vw) translateY(-6vh) scale(0.7);
  }
  84.6153846154% {
    transform: translateX(-1vw) translateY(47vh) scale(0.89);
  }
  88.4615384615% {
    transform: translateX(-12vw) translateY(25vh) scale(0.27);
  }
  92.3076923077% {
    transform: translateX(-19vw) translateY(-37vh) scale(0.75);
  }
  96.1538461538% {
    transform: translateX(-20vw) translateY(-9vh) scale(0.3);
  }
  100% {
    transform: translateX(25vw) translateY(-43vh) scale(0.27);
  }
}
.firefly:nth-child(5) {
  animation-name: move5;
}
.firefly:nth-child(5)::before {
  animation-duration: 10s;
}
.firefly:nth-child(5)::after {
  animation-duration: 10s, 8717ms;
  animation-delay: 0ms, 4691ms;
}

@keyframes move5 {
  0% {
    transform: translateX(-37vw) translateY(-40vh) scale(0.54);
  }
  4.5454545455% {
    transform: translateX(6vw) translateY(-26vh) scale(0.63);
  }
  9.0909090909% {
    transform: translateX(48vw) translateY(3vh) scale(0.51);
  }
  13.6363636364% {
    transform: translateX(4vw) translateY(39vh) scale(0.8);
  }
  18.1818181818% {
    transform: translateX(-31vw) translateY(40vh) scale(0.27);
  }
  22.7272727273% {
    transform: translateX(14vw) translateY(36vh) scale(0.36);
  }
  27.2727272727% {
    transform: translateX(38vw) translateY(-16vh) scale(0.96);
  }
  31.8181818182% {
    transform: translateX(-22vw) translateY(-5vh) scale(0.32);
  }
  36.3636363636% {
    transform: translateX(19vw) translateY(18vh) scale(0.6);
  }
  40.9090909091% {
    transform: translateX(-2vw) translateY(6vh) scale(0.9);
  }
  45.4545454545% {
    transform: translateX(6vw) translateY(36vh) scale(0.93);
  }
  50% {
    transform: translateX(6vw) translateY(-37vh) scale(0.39);
  }
  54.5454545455% {
    transform: translateX(-22vw) translateY(-30vh) scale(0.69);
  }
  59.0909090909% {
    transform: translateX(1vw) translateY(35vh) scale(0.39);
  }
  63.6363636364% {
    transform: translateX(42vw) translateY(-10vh) scale(0.42);
  }
  68.1818181818% {
    transform: translateX(-34vw) translateY(-5vh) scale(0.59);
  }
  72.7272727273% {
    transform: translateX(20vw) translateY(-34vh) scale(0.45);
  }
  77.2727272727% {
    transform: translateX(-27vw) translateY(-4vh) scale(0.61);
  }
  81.8181818182% {
    transform: translateX(47vw) translateY(-7vh) scale(0.99);
  }
  86.3636363636% {
    transform: translateX(-4vw) translateY(33vh) scale(0.74);
  }
  90.9090909091% {
    transform: translateX(-37vw) translateY(24vh) scale(0.41);
  }
  95.4545454545% {
    transform: translateX(18vw) translateY(-15vh) scale(0.43);
  }
  100% {
    transform: translateX(-44vw) translateY(34vh) scale(0.98);
  }
}
.firefly:nth-child(6) {
  animation-name: move6;
}
.firefly:nth-child(6)::before {
  animation-duration: 15s;
}
.firefly:nth-child(6)::after {
  animation-duration: 15s, 8625ms;
  animation-delay: 0ms, 718ms;
}

@keyframes move6 {
  0% {
    transform: translateX(-45vw) translateY(20vh) scale(0.68);
  }
  3.5714285714% {
    transform: translateX(-48vw) translateY(18vh) scale(0.7);
  }
  7.1428571429% {
    transform: translateX(34vw) translateY(13vh) scale(0.98);
  }
  10.7142857143% {
    transform: translateX(-21vw) translateY(49vh) scale(0.57);
  }
  14.2857142857% {
    transform: translateX(-5vw) translateY(21vh) scale(0.9);
  }
  17.8571428571% {
    transform: translateX(-7vw) translateY(-27vh) scale(0.48);
  }
  21.4285714286% {
    transform: translateX(43vw) translateY(16vh) scale(0.77);
  }
  25% {
    transform: translateX(-10vw) translateY(-46vh) scale(0.29);
  }
  28.5714285714% {
    transform: translateX(-45vw) translateY(6vh) scale(0.82);
  }
  32.1428571429% {
    transform: translateX(-25vw) translateY(-14vh) scale(0.79);
  }
  35.7142857143% {
    transform: translateX(-19vw) translateY(2vh) scale(0.73);
  }
  39.2857142857% {
    transform: translateX(-18vw) translateY(-37vh) scale(0.88);
  }
  42.8571428571% {
    transform: translateX(-12vw) translateY(-38vh) scale(0.59);
  }
  46.4285714286% {
    transform: translateX(28vw) translateY(16vh) scale(0.74);
  }
  50% {
    transform: translateX(1vw) translateY(-7vh) scale(0.89);
  }
  53.5714285714% {
    transform: translateX(0vw) translateY(-25vh) scale(0.82);
  }
  57.1428571429% {
    transform: translateX(-1vw) translateY(11vh) scale(0.47);
  }
  60.7142857143% {
    transform: translateX(-10vw) translateY(-47vh) scale(0.81);
  }
  64.2857142857% {
    transform: translateX(16vw) translateY(-48vh) scale(0.46);
  }
  67.8571428571% {
    transform: translateX(-22vw) translateY(47vh) scale(0.83);
  }
  71.4285714286% {
    transform: translateX(-18vw) translateY(-9vh) scale(0.45);
  }
  75% {
    transform: translateX(7vw) translateY(23vh) scale(0.78);
  }
  78.5714285714% {
    transform: translateX(26vw) translateY(-25vh) scale(0.76);
  }
  82.1428571429% {
    transform: translateX(38vw) translateY(5vh) scale(0.44);
  }
  85.7142857143% {
    transform: translateX(-14vw) translateY(-42vh) scale(0.35);
  }
  89.2857142857% {
    transform: translateX(-38vw) translateY(1vh) scale(0.59);
  }
  92.8571428571% {
    transform: translateX(18vw) translateY(41vh) scale(0.69);
  }
  96.4285714286% {
    transform: translateX(24vw) translateY(29vh) scale(0.69);
  }
  100% {
    transform: translateX(20vw) translateY(8vh) scale(0.97);
  }
}
.firefly:nth-child(7) {
  animation-name: move7;
}
.firefly:nth-child(7)::before {
  animation-duration: 13s;
}
.firefly:nth-child(7)::after {
  animation-duration: 13s, 9273ms;
  animation-delay: 0ms, 3821ms;
}

@keyframes move7 {
  0% {
    transform: translateX(-5vw) translateY(-17vh) scale(0.98);
  }
  3.5714285714% {
    transform: translateX(-37vw) translateY(-15vh) scale(0.63);
  }
  7.1428571429% {
    transform: translateX(41vw) translateY(45vh) scale(0.39);
  }
  10.7142857143% {
    transform: translateX(26vw) translateY(-23vh) scale(0.98);
  }
  14.2857142857% {
    transform: translateX(-12vw) translateY(44vh) scale(0.79);
  }
  17.8571428571% {
    transform: translateX(-16vw) translateY(29vh) scale(0.58);
  }
  21.4285714286% {
    transform: translateX(-26vw) translateY(44vh) scale(0.4);
  }
  25% {
    transform: translateX(46vw) translateY(-49vh) scale(0.43);
  }
  28.5714285714% {
    transform: translateX(-11vw) translateY(-44vh) scale(0.38);
  }
  32.1428571429% {
    transform: translateX(32vw) translateY(-3vh) scale(0.3);
  }
  35.7142857143% {
    transform: translateX(-29vw) translateY(-7vh) scale(0.28);
  }
  39.2857142857% {
    transform: translateX(-42vw) translateY(35vh) scale(0.89);
  }
  42.8571428571% {
    transform: translateX(-8vw) translateY(-9vh) scale(0.92);
  }
  46.4285714286% {
    transform: translateX(12vw) translateY(-46vh) scale(0.79);
  }
  50% {
    transform: translateX(-25vw) translateY(-13vh) scale(1);
  }
  53.5714285714% {
    transform: translateX(5vw) translateY(14vh) scale(0.49);
  }
  57.1428571429% {
    transform: translateX(6vw) translateY(32vh) scale(0.62);
  }
  60.7142857143% {
    transform: translateX(7vw) translateY(36vh) scale(0.82);
  }
  64.2857142857% {
    transform: translateX(45vw) translateY(-35vh) scale(0.47);
  }
  67.8571428571% {
    transform: translateX(48vw) translateY(30vh) scale(0.34);
  }
  71.4285714286% {
    transform: translateX(26vw) translateY(-17vh) scale(0.77);
  }
  75% {
    transform: translateX(-46vw) translateY(24vh) scale(0.71);
  }
  78.5714285714% {
    transform: translateX(1vw) translateY(-18vh) scale(0.71);
  }
  82.1428571429% {
    transform: translateX(-3vw) translateY(31vh) scale(0.3);
  }
  85.7142857143% {
    transform: translateX(-44vw) translateY(-43vh) scale(0.37);
  }
  89.2857142857% {
    transform: translateX(-9vw) translateY(-3vh) scale(0.77);
  }
  92.8571428571% {
    transform: translateX(-44vw) translateY(44vh) scale(0.79);
  }
  96.4285714286% {
    transform: translateX(32vw) translateY(27vh) scale(0.77);
  }
  100% {
    transform: translateX(2vw) translateY(-3vh) scale(0.57);
  }
}
.firefly:nth-child(8) {
  animation-name: move8;
}
.firefly:nth-child(8)::before {
  animation-duration: 17s;
}
.firefly:nth-child(8)::after {
  animation-duration: 17s, 8992ms;
  animation-delay: 0ms, 857ms;
}

@keyframes move8 {
  0% {
    transform: translateX(-8vw) translateY(12vh) scale(0.44);
  }
  4.347826087% {
    transform: translateX(45vw) translateY(-42vh) scale(1);
  }
  8.6956521739% {
    transform: translateX(41vw) translateY(-9vh) scale(0.73);
  }
  13.0434782609% {
    transform: translateX(-11vw) translateY(-38vh) scale(0.35);
  }
  17.3913043478% {
    transform: translateX(3vw) translateY(11vh) scale(0.98);
  }
  21.7391304348% {
    transform: translateX(-21vw) translateY(34vh) scale(0.82);
  }
  26.0869565217% {
    transform: translateX(-12vw) translateY(15vh) scale(0.75);
  }
  30.4347826087% {
    transform: translateX(-14vw) translateY(-47vh) scale(0.64);
  }
  34.7826086957% {
    transform: translateX(15vw) translateY(45vh) scale(0.39);
  }
  39.1304347826% {
    transform: translateX(-14vw) translateY(-9vh) scale(0.86);
  }
  43.4782608696% {
    transform: translateX(-17vw) translateY(-46vh) scale(0.69);
  }
  47.8260869565% {
    transform: translateX(8vw) translateY(45vh) scale(0.48);
  }
  52.1739130435% {
    transform: translateX(-31vw) translateY(-29vh) scale(0.61);
  }
  56.5217391304% {
    transform: translateX(-4vw) translateY(31vh) scale(0.94);
  }
  60.8695652174% {
    transform: translateX(41vw) translateY(-37vh) scale(0.39);
  }
  65.2173913043% {
    transform: translateX(-42vw) translateY(45vh) scale(0.46);
  }
  69.5652173913% {
    transform: translateX(-16vw) translateY(36vh) scale(0.32);
  }
  73.9130434783% {
    transform: translateX(-45vw) translateY(19vh) scale(0.52);
  }
  78.2608695652% {
    transform: translateX(28vw) translateY(24vh) scale(0.63);
  }
  82.6086956522% {
    transform: translateX(-8vw) translateY(9vh) scale(0.73);
  }
  86.9565217391% {
    transform: translateX(-33vw) translateY(-1vh) scale(0.96);
  }
  91.3043478261% {
    transform: translateX(-1vw) translateY(29vh) scale(0.35);
  }
  95.652173913% {
    transform: translateX(-48vw) translateY(-39vh) scale(0.76);
  }
  100% {
    transform: translateX(20vw) translateY(11vh) scale(0.5);
  }
}
.firefly:nth-child(9) {
  animation-name: move9;
}
.firefly:nth-child(9)::before {
  animation-duration: 13s;
}
.firefly:nth-child(9)::after {
  animation-duration: 13s, 5642ms;
  animation-delay: 0ms, 6736ms;
}

@keyframes move9 {
  0% {
    transform: translateX(16vw) translateY(-13vh) scale(0.85);
  }
  4.347826087% {
    transform: translateX(-11vw) translateY(43vh) scale(0.94);
  }
  8.6956521739% {
    transform: translateX(35vw) translateY(45vh) scale(0.71);
  }
  13.0434782609% {
    transform: translateX(-20vw) translateY(4vh) scale(0.6);
  }
  17.3913043478% {
    transform: translateX(-32vw) translateY(-25vh) scale(0.95);
  }
  21.7391304348% {
    transform: translateX(37vw) translateY(22vh) scale(0.6);
  }
  26.0869565217% {
    transform: translateX(-3vw) translateY(12vh) scale(0.95);
  }
  30.4347826087% {
    transform: translateX(-22vw) translateY(-45vh) scale(0.51);
  }
  34.7826086957% {
    transform: translateX(-38vw) translateY(-14vh) scale(0.33);
  }
  39.1304347826% {
    transform: translateX(-4vw) translateY(-24vh) scale(0.89);
  }
  43.4782608696% {
    transform: translateX(-13vw) translateY(47vh) scale(0.98);
  }
  47.8260869565% {
    transform: translateX(31vw) translateY(-2vh) scale(0.98);
  }
  52.1739130435% {
    transform: translateX(-24vw) translateY(41vh) scale(0.66);
  }
  56.5217391304% {
    transform: translateX(-2vw) translateY(47vh) scale(0.96);
  }
  60.8695652174% {
    transform: translateX(-23vw) translateY(-35vh) scale(0.71);
  }
  65.2173913043% {
    transform: translateX(10vw) translateY(-23vh) scale(0.45);
  }
  69.5652173913% {
    transform: translateX(22vw) translateY(-46vh) scale(0.3);
  }
  73.9130434783% {
    transform: translateX(-1vw) translateY(49vh) scale(0.52);
  }
  78.2608695652% {
    transform: translateX(-1vw) translateY(4vh) scale(0.61);
  }
  82.6086956522% {
    transform: translateX(-30vw) translateY(-14vh) scale(0.33);
  }
  86.9565217391% {
    transform: translateX(-10vw) translateY(5vh) scale(0.31);
  }
  91.3043478261% {
    transform: translateX(18vw) translateY(23vh) scale(0.89);
  }
  95.652173913% {
    transform: translateX(29vw) translateY(47vh) scale(0.87);
  }
  100% {
    transform: translateX(26vw) translateY(3vh) scale(0.67);
  }
}
.firefly:nth-child(10) {
  animation-name: move10;
}
.firefly:nth-child(10)::before {
  animation-duration: 14s;
}
.firefly:nth-child(10)::after {
  animation-duration: 14s, 7192ms;
  animation-delay: 0ms, 5584ms;
}

@keyframes move10 {
  0% {
    transform: translateX(40vw) translateY(-29vh) scale(0.36);
  }
  3.7037037037% {
    transform: translateX(-4vw) translateY(4vh) scale(0.51);
  }
  7.4074074074% {
    transform: translateX(38vw) translateY(-34vh) scale(0.95);
  }
  11.1111111111% {
    transform: translateX(8vw) translateY(0vh) scale(0.27);
  }
  14.8148148148% {
    transform: translateX(43vw) translateY(-32vh) scale(0.39);
  }
  18.5185185185% {
    transform: translateX(49vw) translateY(-47vh) scale(0.35);
  }
  22.2222222222% {
    transform: translateX(-37vw) translateY(32vh) scale(0.98);
  }
  25.9259259259% {
    transform: translateX(-35vw) translateY(-8vh) scale(0.8);
  }
  29.6296296296% {
    transform: translateX(37vw) translateY(-47vh) scale(0.37);
  }
  33.3333333333% {
    transform: translateX(-32vw) translateY(-3vh) scale(0.71);
  }
  37.037037037% {
    transform: translateX(41vw) translateY(-38vh) scale(0.71);
  }
  40.7407407407% {
    transform: translateX(-5vw) translateY(29vh) scale(0.67);
  }
  44.4444444444% {
    transform: translateX(12vw) translateY(23vh) scale(0.61);
  }
  48.1481481481% {
    transform: translateX(-1vw) translateY(-44vh) scale(0.9);
  }
  51.8518518519% {
    transform: translateX(-20vw) translateY(8vh) scale(0.58);
  }
  55.5555555556% {
    transform: translateX(-21vw) translateY(-34vh) scale(0.92);
  }
  59.2592592593% {
    transform: translateX(-12vw) translateY(16vh) scale(0.76);
  }
  62.962962963% {
    transform: translateX(-37vw) translateY(-12vh) scale(0.47);
  }
  66.6666666667% {
    transform: translateX(22vw) translateY(-12vh) scale(0.77);
  }
  70.3703703704% {
    transform: translateX(39vw) translateY(-25vh) scale(0.33);
  }
  74.0740740741% {
    transform: translateX(-48vw) translateY(44vh) scale(0.74);
  }
  77.7777777778% {
    transform: translateX(24vw) translateY(15vh) scale(0.34);
  }
  81.4814814815% {
    transform: translateX(41vw) translateY(25vh) scale(0.43);
  }
  85.1851851852% {
    transform: translateX(-43vw) translateY(6vh) scale(0.57);
  }
  88.8888888889% {
    transform: translateX(22vw) translateY(-10vh) scale(0.51);
  }
  92.5925925926% {
    transform: translateX(16vw) translateY(9vh) scale(0.91);
  }
  96.2962962963% {
    transform: translateX(-10vw) translateY(-25vh) scale(0.89);
  }
  100% {
    transform: translateX(10vw) translateY(45vh) scale(0.45);
  }
}
.firefly:nth-child(11) {
  animation-name: move11;
}
.firefly:nth-child(11)::before {
  animation-duration: 17s;
}
.firefly:nth-child(11)::after {
  animation-duration: 17s, 6360ms;
  animation-delay: 0ms, 3662ms;
}

@keyframes move11 {
  0% {
    transform: translateX(-14vw) translateY(40vh) scale(1);
  }
  4.1666666667% {
    transform: translateX(-1vw) translateY(17vh) scale(0.51);
  }
  8.3333333333% {
    transform: translateX(41vw) translateY(41vh) scale(0.52);
  }
  12.5% {
    transform: translateX(8vw) translateY(4vh) scale(0.92);
  }
  16.6666666667% {
    transform: translateX(12vw) translateY(50vh) scale(0.81);
  }
  20.8333333333% {
    transform: translateX(30vw) translateY(-18vh) scale(0.32);
  }
  25% {
    transform: translateX(-39vw) translateY(31vh) scale(0.38);
  }
  29.1666666667% {
    transform: translateX(-25vw) translateY(-45vh) scale(0.69);
  }
  33.3333333333% {
    transform: translateX(-12vw) translateY(21vh) scale(0.44);
  }
  37.5% {
    transform: translateX(-37vw) translateY(-43vh) scale(0.37);
  }
  41.6666666667% {
    transform: translateX(38vw) translateY(-7vh) scale(0.47);
  }
  45.8333333333% {
    transform: translateX(25vw) translateY(11vh) scale(0.71);
  }
  50% {
    transform: translateX(38vw) translateY(36vh) scale(0.73);
  }
  54.1666666667% {
    transform: translateX(-32vw) translateY(-44vh) scale(0.93);
  }
  58.3333333333% {
    transform: translateX(10vw) translateY(18vh) scale(0.77);
  }
  62.5% {
    transform: translateX(9vw) translateY(35vh) scale(0.93);
  }
  66.6666666667% {
    transform: translateX(7vw) translateY(50vh) scale(0.94);
  }
  70.8333333333% {
    transform: translateX(-6vw) translateY(42vh) scale(0.73);
  }
  75% {
    transform: translateX(40vw) translateY(44vh) scale(0.98);
  }
  79.1666666667% {
    transform: translateX(22vw) translateY(9vh) scale(0.55);
  }
  83.3333333333% {
    transform: translateX(48vw) translateY(-8vh) scale(0.34);
  }
  87.5% {
    transform: translateX(-6vw) translateY(-19vh) scale(0.42);
  }
  91.6666666667% {
    transform: translateX(-29vw) translateY(-35vh) scale(0.43);
  }
  95.8333333333% {
    transform: translateX(-34vw) translateY(-28vh) scale(0.86);
  }
  100% {
    transform: translateX(-1vw) translateY(11vh) scale(0.78);
  }
}
.firefly:nth-child(12) {
  animation-name: move12;
}
.firefly:nth-child(12)::before {
  animation-duration: 18s;
}
.firefly:nth-child(12)::after {
  animation-duration: 18s, 5413ms;
  animation-delay: 0ms, 4797ms;
}

@keyframes move12 {
  0% {
    transform: translateX(-25vw) translateY(46vh) scale(0.96);
  }
  4.7619047619% {
    transform: translateX(35vw) translateY(-38vh) scale(0.61);
  }
  9.5238095238% {
    transform: translateX(50vw) translateY(5vh) scale(0.83);
  }
  14.2857142857% {
    transform: translateX(37vw) translateY(-4vh) scale(0.31);
  }
  19.0476190476% {
    transform: translateX(-17vw) translateY(6vh) scale(0.29);
  }
  23.8095238095% {
    transform: translateX(-46vw) translateY(-39vh) scale(0.77);
  }
  28.5714285714% {
    transform: translateX(-7vw) translateY(-43vh) scale(0.27);
  }
  33.3333333333% {
    transform: translateX(20vw) translateY(27vh) scale(0.45);
  }
  38.0952380952% {
    transform: translateX(29vw) translateY(-16vh) scale(0.97);
  }
  42.8571428571% {
    transform: translateX(48vw) translateY(-28vh) scale(0.72);
  }
  47.619047619% {
    transform: translateX(49vw) translateY(-44vh) scale(0.33);
  }
  52.380952381% {
    transform: translateX(2vw) translateY(45vh) scale(0.53);
  }
  57.1428571429% {
    transform: translateX(-38vw) translateY(7vh) scale(0.51);
  }
  61.9047619048% {
    transform: translateX(1vw) translateY(-33vh) scale(0.82);
  }
  66.6666666667% {
    transform: translateX(-4vw) translateY(-16vh) scale(0.3);
  }
  71.4285714286% {
    transform: translateX(44vw) translateY(-29vh) scale(0.76);
  }
  76.1904761905% {
    transform: translateX(16vw) translateY(-29vh) scale(0.51);
  }
  80.9523809524% {
    transform: translateX(6vw) translateY(-48vh) scale(0.54);
  }
  85.7142857143% {
    transform: translateX(49vw) translateY(-42vh) scale(0.78);
  }
  90.4761904762% {
    transform: translateX(24vw) translateY(3vh) scale(0.51);
  }
  95.2380952381% {
    transform: translateX(-31vw) translateY(-49vh) scale(0.95);
  }
  100% {
    transform: translateX(35vw) translateY(44vh) scale(0.96);
  }
}
.firefly:nth-child(13) {
  animation-name: move13;
}
.firefly:nth-child(13)::before {
  animation-duration: 9s;
}
.firefly:nth-child(13)::after {
  animation-duration: 9s, 8651ms;
  animation-delay: 0ms, 3375ms;
}

@keyframes move13 {
  0% {
    transform: translateX(-10vw) translateY(21vh) scale(0.77);
  }
  5.8823529412% {
    transform: translateX(36vw) translateY(-12vh) scale(0.83);
  }
  11.7647058824% {
    transform: translateX(-9vw) translateY(-16vh) scale(0.3);
  }
  17.6470588235% {
    transform: translateX(-21vw) translateY(19vh) scale(0.96);
  }
  23.5294117647% {
    transform: translateX(-19vw) translateY(-2vh) scale(0.69);
  }
  29.4117647059% {
    transform: translateX(-39vw) translateY(10vh) scale(0.51);
  }
  35.2941176471% {
    transform: translateX(29vw) translateY(-12vh) scale(0.4);
  }
  41.1764705882% {
    transform: translateX(44vw) translateY(50vh) scale(0.47);
  }
  47.0588235294% {
    transform: translateX(23vw) translateY(-49vh) scale(0.89);
  }
  52.9411764706% {
    transform: translateX(-20vw) translateY(42vh) scale(0.9);
  }
  58.8235294118% {
    transform: translateX(-17vw) translateY(-2vh) scale(0.44);
  }
  64.7058823529% {
    transform: translateX(0vw) translateY(27vh) scale(0.95);
  }
  70.5882352941% {
    transform: translateX(7vw) translateY(-17vh) scale(0.42);
  }
  76.4705882353% {
    transform: translateX(39vw) translateY(21vh) scale(0.98);
  }
  82.3529411765% {
    transform: translateX(-49vw) translateY(8vh) scale(0.52);
  }
  88.2352941176% {
    transform: translateX(1vw) translateY(-5vh) scale(0.52);
  }
  94.1176470588% {
    transform: translateX(17vw) translateY(-35vh) scale(0.75);
  }
  100% {
    transform: translateX(-20vw) translateY(36vh) scale(0.55);
  }
}
.firefly:nth-child(14) {
  animation-name: move14;
}
.firefly:nth-child(14)::before {
  animation-duration: 10s;
}
.firefly:nth-child(14)::after {
  animation-duration: 10s, 6363ms;
  animation-delay: 0ms, 733ms;
}

@keyframes move14 {
  0% {
    transform: translateX(-9vw) translateY(-21vh) scale(0.39);
  }
  3.7037037037% {
    transform: translateX(25vw) translateY(37vh) scale(0.93);
  }
  7.4074074074% {
    transform: translateX(-23vw) translateY(-5vh) scale(0.68);
  }
  11.1111111111% {
    transform: translateX(45vw) translateY(-9vh) scale(0.26);
  }
  14.8148148148% {
    transform: translateX(24vw) translateY(23vh) scale(0.45);
  }
  18.5185185185% {
    transform: translateX(-47vw) translateY(44vh) scale(0.99);
  }
  22.2222222222% {
    transform: translateX(-29vw) translateY(29vh) scale(0.39);
  }
  25.9259259259% {
    transform: translateX(-45vw) translateY(25vh) scale(0.93);
  }
  29.6296296296% {
    transform: translateX(5vw) translateY(6vh) scale(0.66);
  }
  33.3333333333% {
    transform: translateX(7vw) translateY(-40vh) scale(0.83);
  }
  37.037037037% {
    transform: translateX(-33vw) translateY(48vh) scale(0.51);
  }
  40.7407407407% {
    transform: translateX(3vw) translateY(-19vh) scale(0.46);
  }
  44.4444444444% {
    transform: translateX(-11vw) translateY(-20vh) scale(0.98);
  }
  48.1481481481% {
    transform: translateX(-10vw) translateY(-15vh) scale(0.93);
  }
  51.8518518519% {
    transform: translateX(3vw) translateY(49vh) scale(0.7);
  }
  55.5555555556% {
    transform: translateX(-44vw) translateY(13vh) scale(0.49);
  }
  59.2592592593% {
    transform: translateX(29vw) translateY(5vh) scale(0.67);
  }
  62.962962963% {
    transform: translateX(13vw) translateY(2vh) scale(0.8);
  }
  66.6666666667% {
    transform: translateX(38vw) translateY(17vh) scale(0.51);
  }
  70.3703703704% {
    transform: translateX(-21vw) translateY(12vh) scale(0.63);
  }
  74.0740740741% {
    transform: translateX(46vw) translateY(25vh) scale(0.9);
  }
  77.7777777778% {
    transform: translateX(14vw) translateY(26vh) scale(0.44);
  }
  81.4814814815% {
    transform: translateX(-24vw) translateY(-18vh) scale(0.44);
  }
  85.1851851852% {
    transform: translateX(46vw) translateY(5vh) scale(0.44);
  }
  88.8888888889% {
    transform: translateX(43vw) translateY(47vh) scale(0.52);
  }
  92.5925925926% {
    transform: translateX(3vw) translateY(-48vh) scale(0.47);
  }
  96.2962962963% {
    transform: translateX(-5vw) translateY(-32vh) scale(0.32);
  }
  100% {
    transform: translateX(0vw) translateY(47vh) scale(0.44);
  }
}
.firefly:nth-child(15) {
  animation-name: move15;
}
.firefly:nth-child(15)::before {
  animation-duration: 17s;
}
.firefly:nth-child(15)::after {
  animation-duration: 17s, 7375ms;
  animation-delay: 0ms, 2957ms;
}

@keyframes move15 {
  0% {
    transform: translateX(-12vw) translateY(44vh) scale(0.3);
  }
  4.5454545455% {
    transform: translateX(22vw) translateY(-38vh) scale(0.26);
  }
  9.0909090909% {
    transform: translateX(5vw) translateY(48vh) scale(0.64);
  }
  13.6363636364% {
    transform: translateX(-16vw) translateY(-28vh) scale(0.38);
  }
  18.1818181818% {
    transform: translateX(-37vw) translateY(36vh) scale(0.28);
  }
  22.7272727273% {
    transform: translateX(-8vw) translateY(18vh) scale(0.32);
  }
  27.2727272727% {
    transform: translateX(3vw) translateY(-5vh) scale(0.57);
  }
  31.8181818182% {
    transform: translateX(-4vw) translateY(-8vh) scale(0.86);
  }
  36.3636363636% {
    transform: translateX(47vw) translateY(29vh) scale(0.31);
  }
  40.9090909091% {
    transform: translateX(1vw) translateY(-42vh) scale(0.33);
  }
  45.4545454545% {
    transform: translateX(-9vw) translateY(44vh) scale(0.64);
  }
  50% {
    transform: translateX(25vw) translateY(26vh) scale(0.39);
  }
  54.5454545455% {
    transform: translateX(-23vw) translateY(27vh) scale(0.67);
  }
  59.0909090909% {
    transform: translateX(8vw) translateY(-42vh) scale(0.96);
  }
  63.6363636364% {
    transform: translateX(-36vw) translateY(-46vh) scale(0.31);
  }
  68.1818181818% {
    transform: translateX(-27vw) translateY(-41vh) scale(0.61);
  }
  72.7272727273% {
    transform: translateX(15vw) translateY(26vh) scale(0.3);
  }
  77.2727272727% {
    transform: translateX(-23vw) translateY(1vh) scale(0.7);
  }
  81.8181818182% {
    transform: translateX(-35vw) translateY(17vh) scale(0.78);
  }
  86.3636363636% {
    transform: translateX(29vw) translateY(15vh) scale(0.78);
  }
  90.9090909091% {
    transform: translateX(-9vw) translateY(-24vh) scale(0.49);
  }
  95.4545454545% {
    transform: translateX(-49vw) translateY(24vh) scale(0.83);
  }
  100% {
    transform: translateX(-25vw) translateY(32vh) scale(0.57);
  }
}
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flash {
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
}

.loader {
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
