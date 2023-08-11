<template>
  <div class="pl-content">
    <div>
      <div class="box">
        <p>
          차량번호: {{ arrInfo[1].차량번호 }} 출차예정시간:
          {{ arrInfo[1].출차예정시간 }}
        </p>
      </div>
      <div>
        <button @click="$emit('inTouch')">연락</button>
      </div>
    </div>
    <div>
      <div class="box">
        <p>
          차량번호: {{ arrInfo[1].차량번호 }} 출차예정시간:
          {{ arrInfo[1].출차예정시간 }}
        </p>
      </div>
      <div>
        <button>연락</button>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
  name: "ParkingLot",
  data() {
    return {
      arrInfo: [
        { 차량번호: "16무 9906", 출차예정시간: "13:30" },
        { 차량번호: "16무 9907", 출차예정시간: "14:30" },
        { 차량번호: "16무 9908", 출차예정시간: "16:30" },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style>

p{
  margin: 0;
}

.home {
  width: 100%;
  height: 50px;
  margin-top: 50px;
  position: fixed;
  bottom: -70px;
}

.box {
  float: left;
  width: 300px;
  height: 50px;
  margin-top: 5px;
}

.pl-content {
  width: 360px;
  height: 460px;
  padding: 1px;
  position: relative;
}
</style>