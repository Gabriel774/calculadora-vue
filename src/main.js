import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: createElement => createElement(App)
  /*para renderização de elemento root o vue usa a propriedade render, que recebe como parametro
  a função createElement, o elemento passado como parametro em create element será renderizado*/
}).$mount("#app")