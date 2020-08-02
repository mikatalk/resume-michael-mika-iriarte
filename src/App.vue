<template>
  <div id="michael-iriarte-resume">
    <header-bar />
    <menu-bar />
    <div class="main-content">
      <main-block />
      <side-bar />
    </div>
    <social-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderBar from './components/HeaderBar.vue';
import SocialBar from './components/SocialBar.vue';
import MenuBar from './components/MenuBar.vue';
import SideBar from './components/SideBar.vue';
import MainBlock from './components/MainBlock.vue';

@Component({
  components: {
    HeaderBar,
    MenuBar,
    MainBlock,
    SideBar,
    SocialBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./styles/variables";
@import "./styles/theme";

#michael-iriarte-resume {
  .main-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: calc(1000px + 4rem);
    margin: 0 auto;
    .main-block {
      width: 66%;
      // background: hotpink;
    }
    .side-bar {
      width: 30%;
      // background: purple;
    }
  }
}

@media only screen and (max-width: $max-mobile-size) {
  #michael-iriarte-resume {
    .main-content {
      flex-direction: column;
      padding: 1rem;
      .main-block {
        width: 100%;
      }
      .side-bar {
        width: 100%;
      }
    }
  }
}
</style>
