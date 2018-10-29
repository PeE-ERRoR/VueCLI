<script>
  import { Bar } from 'vue-chartjs'
  import { Line } from 'vue-chartjs' 

  export default {
    extends: Bar,
    name: 'Chart',
    props: ['data', 'options'],
    mounted () {
      this.renderChart(this.data, this.options)
    },
  }
</script>
