<template>
  <div class="datatable">
    <h1>Data Table</h1>
    <h4>Vue Table-2</h4>
    <v-client-table
          :data="tableData"
          :columns="columns"
          :options="options">
    </v-client-table>

    <h4>BV table component</h4>
    <BvTable></BvTable>
  </div>
</template>

<script>
// @ is an alias to /src
import BvTable from '@/components/BvTable.vue'

export default {
  name: 'datatable',
  data() {
    return {
      columns: ['id', 'name', 'album'],
      tableData: [
        {
          "id": "1",
          "name": "Thriller",
          "album": "Thriller"
        },
        {
          "id": "2",
          "name": "Dangerous",
          "album": "Dangerous"
        },
        {
          "id": "3",
          "name": "Stranger In Moscow",
          "album": "History"
        },
      ],
      options: {
          headings: {
              id: 'ID',
              name: 'Song Name',
              album: 'Album'
          },
          sortable: ['name', 'album'],
          filterable: ['name', 'album']
      }
    }
  },
  mounted() {
    // this.axios.get('http://localhost:4000/songs').then(res => {
    //     this.tableData = res.data
    // })
  },
  components: {
    BvTable
  }
}
</script>
