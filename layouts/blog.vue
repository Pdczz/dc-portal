<template>

  <div>
    <HeadNew></HeadNew>
    <Nuxt/>
    <down></down>
  </div>
</template>

<script>
    import HeadTop from '../components/Head/HeadTop.vue'
    import HeadNew from "../components/HeadNew/HeadNew"
    import down from '../components/down/down.vue'
    export default {
        name: "blog",
        components: {
            HeadTop,
            down,
            HeadNew
        }
    }
</script>

<style scoped>

</style>
