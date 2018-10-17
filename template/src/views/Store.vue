<template>
  <div class="store">
    <Data/>

  </div>
</template>

<script>
// @ is an alias to /src
import Data from '@/components/Data.vue'

export default {
  name: 'store',
  data() {
    return {

    }
  },
  components: {
    Data
  }
}
</script>
