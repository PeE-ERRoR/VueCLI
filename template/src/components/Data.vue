<template>
  <div class="data">
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'getData',
  data() {
    return {
      info: null,
    }
  },
  props: {
    msg: String
  },
  mounted () {
    axios
      .get('http://localhost:4000/results')
      .then(response => (this.info = response))
      // .then(function(response){
      //   console.log(response);
      // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
