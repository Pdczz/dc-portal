<template>
  <div class="collapse-sidebar mobile-visible">
    <MyHead></MyHead>
    <Nuxt/>
    <MyFooter></MyFooter>
  </div>
  <!--<div>
    <HeadNew></HeadNew>
    <Nuxt/>
    <down></down>
  </div>-->
</template>

<script>
    import HeadTop from '../components/Head/HeadTop.vue'
    import HeadNew from "../components/HeadNew/HeadNew";
    import down from '../components/down/down.vue'
    import MyHead from "../components/MyHead/MyHead";
    import MyFooter from "../components/MyFooter/MyFooter";
    export default {
        name: "blog",
        components: {
            HeadTop,
            down,
            HeadNew,
            MyHead,
            MyFooter
        }
    }
</script>

<style scoped>

</style>
