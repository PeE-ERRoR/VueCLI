<template>
  <div class="list">
    <img alt="Vue logo" src="../assets/logo.png">
    <GetData msg="List Data Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GetData from '@/components/GetData.vue'

export default {
  name: 'list',
  components: {
    GetData
  }
}
</script>
