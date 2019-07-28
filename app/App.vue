<template>
  <div id="app">
    <project-menu/>

    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
export default class App extends Vue {
  data() {
    return {
      'project-menu': Menu
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: "Flexo", sans-serif
</style>
