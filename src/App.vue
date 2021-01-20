<template>
  <div id="app">
    <scroll-animation></scroll-animation>
    <app-header></app-header>
    <app-inicio></app-inicio>
    <app-servicios></app-servicios>
    <cursor-animation></cursor-animation>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppInicio from './components/Inicio'
import AppServicios from './components/Servicios'
import cursorAnimation from './components/commons/cursorAnimation'
import scrollAnimation from './components/commons/scrollAnimation'
export default {
  name: 'App',
  components: { AppHeader, AppInicio, AppServicios, scrollAnimation, cursorAnimation }
}
</script>
<style lang="scss">
  @import './src/styles/vendor.scss';
  @import './src/styles/main.scss';
  @font-face {
    font-family: "SpaceGrotesk-SemiBold";
    src: url('./assets/fonts/SpaceGrotesk-SemiBold.otf') format("truetype"), ;
  }

  @font-face {
    font-family: "SpaceGrotesk-Regular";
    src: url('./assets/fonts/SpaceGrotesk-Regular.otf') format("truetype"), ;
  }

  @font-face {
    font-family: "SpaceGrotesk-Light";
    src: url('./assets/fonts/SpaceGrotesk-Light.otf') format("truetype"), ;
  }
</style>