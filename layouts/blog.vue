<template>
    <div>
      <HeadTop></HeadTop>
      <Nuxt/>
      <down></down>
    </div>
</template>

<script>
  import HeadTop from '../components/Head/HeadTop.vue'
  import down from '../components/down/down.vue'
    export default {
        name: "blog",
      components:{
        HeadTop,
        down
      }
    }
</script>

<style scoped>

</style>
