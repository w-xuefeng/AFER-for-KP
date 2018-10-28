<template>
  <div id="app">
    <Book />
  </div>
</template>

<script>
import Book from './components/book.vue'

export default {
  name: 'app',
  components: {
    Book
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  padding-top: 60px;
}
</style>
