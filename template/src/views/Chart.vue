<template>
  <div class="chart">
    <h3 class="mt-3">Chart</h3>
    <h4>Vue Chart</h4>
    <VueChart :data="datacollection" :options="chartOptions" ></VueChart>
    <h4>Vue Chart Exaples</h4>
    <VueChartExaples/>
    <h4>Vue Google Chart</h4>
    <VueGoogleCharts></VueGoogleCharts>
  </div>
</template>

<script>
// @ is an alias to /src
import VueGoogleCharts from '@/components/VueGoogleCharts.vue'
import VueChart from '@/components/VueChart.vue'
import VueChartExaples from '@/components/VueChartExaples.vue'
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
    VueChart,
    VueChartExaples,
    VueGoogleCharts,
    AddFramework
  }
}
</script>
