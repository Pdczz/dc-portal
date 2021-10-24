<template>
    <div>
      <h1 v-if="error.statusCode=404">页面找不到了</h1>
      <h1 v-else>服务器内部错误</h1>
    </div>
</template>

<script>
    export default {
        name: "error",
        props:['error']
    }
</script>

<style scoped>

</style>
