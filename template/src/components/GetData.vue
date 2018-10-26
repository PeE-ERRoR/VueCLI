<template>
  <div class="get-data">
    <h1 class="mt-3">{{ msg }}</h1>
    <div class="row">
      <div class="col-6">
        <h3>List Coin</h3>
        <table class="table table-striped mt-3">
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

      <div class="col-6">
        <h3>List Item</h3>
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

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
<style lang="scss" scoped>
  .get-data {
    text-align: center;

    div.form-group {
      text-align: left
    }
  }

</style>
