<template>
  <div class="flex-contatiner">
    <div class="timeset">
      <span>입차 시간</span>
      <br />
      <span>{{ now.getHours() }} : {{ now.getMinutes() }}</span>
    </div>
    <!-- <div class="timeset">
      <span>입차 예정 시간</span>
      <br />
      <input v-model="arrTime.dayIn" type="date"/>
      <br />
      <input v-model="arrTime.timeIn" type="time"/>
    </div> -->
    <div class="timeset">
      <span>출차 예정 시간</span>
      <br />
      <input v-model="arrTime.dayOut" type="date"/>
      <br />
      <input v-model="arrTime.timeOut" type="time" />
    </div>
    <div>
      <button class="mainButton button-timeset" @click="[timeRegist, $emit('registComp', arrTime)]">등록 완료</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "TimeState",
  data(){
    return{
      arrTime: {dayIn: 0, timeIn: 0, dayOut: 0, timeOut: 0,},
      now: new Date(),
    }
  },
  methods: {
    getTime(){
      this.dayIn = this.now.getMonth();
      alert("hi");
    }
  },
  props: {

    timeSet: Number,
  },
};
</script>

<style>
.flex-contatiner {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.timeset {
  width: 360px;
  height: 150px;
  margin-top: 10px;
  float: left;
  background-color: aqua;
}

.button-timeset{
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

</style>