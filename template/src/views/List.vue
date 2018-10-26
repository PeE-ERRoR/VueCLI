<template>
  <div class="list">
    <GetData msg="List Data Sotre Vue.js App"/>
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
