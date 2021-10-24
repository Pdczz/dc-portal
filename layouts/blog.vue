<template>
  <div>
    <HeadNew></HeadNew>
    <Nuxt/>
    <down></down>
  </div>
</template>

<script>

    import HeadNew from "../components/HeadNew/HeadNew"
    import down from '../components/down/down.vue'
    export default {
        name: "blog",
        components: {
            down,
            HeadNew
        }
    }
</script>

<style scoped>

</style>
