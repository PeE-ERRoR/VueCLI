<script>
import { Bar } from 'vue-chartjs'
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'Line',
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'a'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'red',
            data: [30, 20, 50]
          },
          {
            label: 'Data One',
            backgroundColor: '#ccc',
            data: [40, 25, 60]
          }
        ]
      }
    }
  },

  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    // this.renderChart(this.data, this.options)
  },
}
</script>
