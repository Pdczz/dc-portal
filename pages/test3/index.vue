<template>
  <div>

  </div>
</template>

<script>
  import {getuserId} from '@/api/user'

  export default {
    name: "index",
    created() {
      getuserId("3").then(res => {
        console.log(res)
      });
    }
  }
</script>



<style scoped>

</style>
