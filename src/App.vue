<template>
  <div id="app">
    <h1 >CALCULADORA<span style="color: #41B883;">VUE</span></h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./main/calculator";
export default {
  components: { Calculator },
};
</script>

<style>
* {
  font-family: "RobotoMono";
}

body {
  margin: 0;
  background: #4B79A1;
  background: -webkit-linear-gradient(to right, #283E51, #4B79A1);
  background: linear-gradient(to right, #283E51, #4B79A1);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-VariableFont_wght.ttf");
}
</style>
