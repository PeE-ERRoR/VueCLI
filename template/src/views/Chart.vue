<template>
  <div class="chart">
    <h3 class="mt-3">Chart</h3>
    <Chart :data="datacollection" :options="chartOptions" ></Chart>
    <ChartExaples/>
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/Chart.vue'
import ChartExaples from '@/components/ChartExaples.vue'
import AddFramework from '@/components/AddFramework.vue'

export default {
  name: 'chart',
  data() {
    return {
      datacollection: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      frameworks: [
        {
          name: "AngularJS",
          price: 3000,
          color: '#DA0404'
        },
        {
          name: "React",
          price: 2000,
          color: '#04CDDA'
        },
        {
          name: "Vue.js",
          price: 1000,
          color: '#09D3A2'
        },
      ],
      datasets: [],
    }
  },
  created: function () {
    this.fillData ()
  },
  methods: {
    fillData () {
      var labelName = [];
      for (var setdata of this.frameworks) {
        labelName.push(setdata.name);
        var data = {
          label: setdata.name,
          backgroundColor: setdata.color,
          data: [setdata.price]
        }
        this.datasets.push(data)

      }
      this.datacollection = {
        labels: ['js Framework'],
        datasets: this.datasets
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  components: {
    Chart,
    ChartExaples,
    AddFramework
  }
}
</script>
