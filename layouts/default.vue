<template>
  <div>
    <Nav></Nav>
    <Nuxt/>
<!--    <down></down>-->
  </div>
</template>

<script>

  // import HeadNew from "../components/HeadNew/HeadNew"
  import down from '../components/down/down.vue'
  import Nav from "../components/Nav/Nav";
  export default {
    name: "blog",
    components: {
      down,
      // HeadNew,
      Nav
    }
  }
</script>

<style scoped>

</style>
