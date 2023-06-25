<template>
    <div class="container">
<h1 class="text-center">ChikenHouse List</h1>
<table class="table table-striped">
    <thead>
        <th>ChikenHouse Id</th>
    </thead>
    <tbody>
        <tr v-for="chikenHouse in chikenHouses" v-bind:key="chikenHouse.id">
            <td>{{chikenHouse.id}}</td>
        </tr>
    </tbody>
</table>
    </div>

</template>
<script>
import ChikenHouseService from '../service/ChikenHouseService'
export default {
  name: 'ChikenHouses',
  data () {
    return {
      chikenHouses: []
    }
  },
  methods: {
    getChikenHouses () {
      ChikenHouseService.getChikenHouses().then((response) => {
        this.chikenHouses = response.data
      })
    }
  },
  created () {
    this.getChikenHouses()
  }
}
</script>
