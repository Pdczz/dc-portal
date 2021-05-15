<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">首页</nuxt-link></li>

    </ul>

  </div>
</template>

<script>
export default {
    name: 'jotter',
    middleware({ store, route, redirect, params, query, req, res }) {
        redirect('/jotter') // 默认跳转页面的路由
    },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
