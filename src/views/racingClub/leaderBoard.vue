<template>
<!-- 1Depth tabMenu -->
<!-- <section id="leagueTab">
  <div class="leagueTabMenu">
    <ul class="league">
      <li class="leagueList">racingClub</li>
      <li class="leagueList">KrouEn</li>
      <li class="leagueList">PolarBear</li>
    </ul>
  </div>
</section> -->
<!-- 2Depth tabMenu  -->
<!-- <section id="carTab">
  <div class="carTabMenu">
    <ul class="car">
      <li class="carLicense">ALL</li>
      <li class="carLicense">GT3</li>
      <li class="carLicense">GT4</li>
      <li class="carLicense">CUP</li>
      <li class="carLicense">ST</li>
    </ul>
  </div>
</section> -->
<!-- leaderBoards -->
<section id="leaderBoard">
  <table>
    <thead>
      <th v-for="list in tableRowList" :key="list.index">{{list}}</th>
    </thead>
    <tbody>
      <tr v-for="(list, index) in data" :key="list.index">
        <td class="score">{{index + 1}}</td>
        <td>{{list.car.drivers[0].lastName}}</td>
        <td class="car"><img class= 'carLogo' :src="carFunc(list.car.carModel).carLogo"/>
        <div class="carName">{{carFunc(list.car.carModel).carName}}</div>
        </td>
        <td>{{list.timing.bestLap}}</td>
        <td>{{list.timing.bestLap}}</td>
        <td>{{list.timing.bestSplits[0]}}</td>
        <td>{{list.timing.bestSplits[1]}}</td>
        <td>{{list.timing.bestSplits[2]}}</td>
        <td @click="routerPage"><i class="fa-sharp fa-solid fa-circle-info" ></i></td>
      </tr>
    </tbody>
  </table>
</section>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
import carModel from '@/assets/utils/carModel'
import { useRouter } from 'vue-router'
// import brand from '@/racingResult/220827_000043_R.json'
export default {
  setup () {
    const carFunc = carModel
    const router = useRouter()
    const data = ref('')
    const leaderBoardData = reactive({
      teamName: '',
      drivers: '',
      cars: [],
      bestLap: ''
    })

    const map = ref('')

    const tableRowList = ['RANKS', 'DRIVER', 'CAR', 'LAP TIME', 'GAP', 'S1', 'S2', 'S3', 'ACTIONS']

    const jsonData = async () => {
      await axios.get('/resultData/220827_000043_R.json').then((res) => {
        console.log(res)
        raceResultProcess(res)
      })
    }

    const raceResultProcess = (res) => {
      map.value = res.data.trackName
      const leaderBoardLines = res.data.sessionResult.leaderBoardLines
      data.value = leaderBoardLines

      const drivers = leaderBoardLines.map((data) => data.car.drivers)
      leaderBoardData.drivers = drivers
      console.log(leaderBoardData.drivers)

      const cars = leaderBoardLines.map((data) => data.car.carModel)
      carModelData(cars)
    }

    const carModelData = (data) => {
      for (let i = 0; i < data.length; i++) {
        const aa = carModel(data[i])
        leaderBoardData.cars.push(aa)
      }
      console.log(leaderBoardData.cars)
    }

    const routerPage = () => {
      console.log('a')
      router.push('/leaderboardDetail')
    }
    onMounted(() => {
      jsonData()
    })
    return {
      data,
      carFunc,
      jsonData,
      leaderBoardData,
      tableRowList,
      routerPage
    }
  }

}
</script>

<style scoped>

</style>
