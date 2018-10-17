<template>
  <div class="get-data">
    <h1>{{ msg }}</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <td>{{ coin.id }}</td>
          <td>{{ coin.name }}</td>
          <td>{{ coin.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
    this.$store.dispatch('loadCoins')
    this.$store.dispatch('loadItems')
  },
  computed: mapState([
    'coins',
    'items'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
