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
            label: 'Data Two',
            backgroundColor: '#ccc',
            data: [40, 25, 60]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  },
}
</script>
