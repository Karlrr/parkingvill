<template>
  <button class="mainButton" @click="$emit('register-Now')" v-if="timeSet == 0">
    주차 완료
  </button>
  <div>
    <!-- <button class="mainButton" @click="$emit('register-Future')" >주차 미리 등록</button> -->
    <div class="show-time" v-if="timeSet == 1">
      <div>
        <span>입차 시간</span>
        <br />
        <span>{{ time_arr.dayIn }} {{ time_arr.timeIn }}</span>
      </div>
      <div>
        <br />
        <span>출차 예정 시간</span>
        <br />
        <span>{{ time_arr.dayOut }} {{ time_arr.timeOut }}</span>
      </div>
    </div>
  </div>
  <button class="mainButton" @click="$emit('in-lot')">
    우리 단지 주차 현황
  </button>

  <button class="mainButton" @click="$emit('exit')">출차하기</button>
</template>

<script>
export default {
  name: "BasicState",
  data() {
    return {
      now: new Date(),
    };
  },
  props: {
    timeSet: Number,
    time_arr: Array,
    parkingState: Number,
  },
  methods: {},
};
</script>

<style>
.mainButton {
  height: 40px;
  width: 250px;
  margin-top: 20px;
  margin-left: 55px;
  background-color: rgb(102, 206, 116);
  color: white;
  border: 0px;
  border-radius: 5px;
  float: left;
  position: relative;
}

.show-time {
  height: 100px;
  width: 250px;
  background-color: rgb(221, 255, 150);
  border: 0px;
  border-radius: 5px;
  margin-left: 55px;
  float: left;
  position: relative;
}
</style>