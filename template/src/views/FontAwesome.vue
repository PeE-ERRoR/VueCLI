<template>
  <div class="">
    <font-awesome-icon icon="coffee" />
    <font-awesome-icon icon="home" />
    <font-awesome-icon icon="edit" />
    <font-awesome-icon icon="cog" />
    <font-awesome-icon icon="angle-double-left" />
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHome, faEdit, faCog, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faHome, faEdit, faCog, faAngleDoubleLeft)

export default {
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
