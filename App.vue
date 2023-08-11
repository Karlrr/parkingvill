<template>
  <div class="wrapper">
    <div class="upperBar" @click.self="hamModal = 0">
      <div>
        <div class="hamButton">
          <button @click="hamModalToggle">
            <img src="./assets/ham_button.png" alt="" />
          </button>
        </div>
        <div class="appName">
          <p style="padding-top: 15px">Application Name</p>
        </div>
        <div class="alrim">
          <span class="alrimNum" @click="parkingState = 3">{{ alrim }}</span>
        </div>
      </div>
      <div class="hamModal" v-if="hamModal == 1">
        <div style="margin-top: 50px">
          <button
            class="hamModalButton"
            @click="(parkingState = 0), (hamModal = 0)"
          >
            홈으로
          </button>
          <button
            class="hamModalButton"
            @click="(parkingState = 1), (hamModal = 0)"
          >
            주차 등록
          </button>
          <button class="hamModalButton">출차 하기</button>
          <button
            class="hamModalButton"
            @click="(parkingState = 2), (hamModal = 0)"
          >
            주차 현황
          </button>
          <button
            class="hamModalButton"
            @click="(parkingState = 3), (hamModal = 0)"
          >
            대화
          </button>
          <button
            class="hamModalButton"
            @click="say('미구현기능'), (hamModal = 0)"
          >
            나의 주차
          </button>
          <button
            class="hamModalButton"
            @click="(parkingState = 5), (hamModal = 0)"
          >
            마이페이지
          </button>
          <button
            class="hamModalButton"
            @click="say('미구현기능'), (hamModal = 0)"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>

    <div class="main" @click.self="hamModal = 0">
      <BasicState
        v-if="parkingState == 0"
        :timeSet="timeSet"
        :time_arr="time_arr"
        :parkingState="parkingState"
        @exit="timeSet = 0"
        @register-Now="parkingState = 1"
        @in-lot="parkingState = 2"
      />
      <TimeState
        v-if="parkingState == 1"
        :now="now"
        :timeSet="timeSet"
        @registComp="(parkingState = 0), (timeSet = 1), (time_arr = $event)"
      />
      <ParkingLot
        v-if="parkingState == 2"
        @home="parkingState = 0"
        @inTouch="parkingState = 4"
      />
      <ChatList v-if="parkingState == 3" @getChatRoom="parkingState = 4" />
      <ChatRoom v-if="parkingState == 4" @toChatlist="parkingState = 3" />
      <MyInfo
        v-if="parkingState == 5"
        @myinfoComplete="(parkingState = 0), completeAlert()"
      />
    </div>

    <div class="lowerBar" @click.self="hamModal = 0">
      <button class="button lowerButton" @click="parkingState = 0">
        홈으로
      </button>
      <button class="button lowerButton" @click="parkingState = 1">등록</button>
      <button class="button lowerButton" @click="parkingState = 2">현황</button>
      <button class="button lowerButton" @click="parkingState = 3">대화</button>
      <button class="button lowerButton" @click="parkingState = 5">마이</button>
    </div>
  </div>
</template>

<script>
import BasicState from "./components/BasicState.vue";
import TimeState from "./components/TimeState.vue";
import ParkingLot from "./components/ParkingLot.vue";
import ChatList from "./components/ChatList.vue";
import ChatRoom from "./components/ChatRoom.vue";
import MyInfo from "./components/MyInfo.vue";

export default {
  name: "App",
  data() {
    return {
      alrim: 10,
      hamModal: 0,
      parkingState: 0,
      timeSet: 0,
      time_arr: {},
      carNum1: "16무 9907",
      carNum2: "24하 4455",
    };
  },
  components: {
    BasicState: BasicState,
    TimeState: TimeState,
    ParkingLot: ParkingLot,
    ChatList: ChatList,
    ChatRoom: ChatRoom,
    MyInfo: MyInfo,
  },
  methods: {
    hamModalToggle() {
      if (this.hamModal == 0) {
        this.hamModal = 1;
      } else {
        this.hamModal = 0;
      }
    },
    alert1() {
      if (this.timeSet == 1) {
        alert("hi");
      }
    },
    completeAlert() {
      alert("정보 수정 완료");
    },
    say(message) {
      alert(message);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

html {
  line-height: 1.15;
}

.warpper {
  height: 600px;
  width: 360px;
  background-color: black;
}

.main {
  width: 360px;
  height: 460px;
}

.upperBar {
  width: 360px;
  height: 55px;
  background-color: rgb(102, 206, 116);
  padding: 1px;
  z-index: 10;
}

.hamButton {
  margin-left: 10px;
  margin-top: 10px;
  float: left;
}

.appName {
  color: white;
  float: left;
  margin-left: 20px;
}

.alrim {
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  background-color: red;
  height: 30px;
  width: 30px;
  float: left;
  border-radius: 20px;
  margin-left: 115px;
  margin-top: 10px;
}

.alrimNum {
  cursor: pointer;
}

.lowerBar {
  width: 360px;
  height: 65px;
  background-color: rgb(102, 206, 116);
  clear: both;
  justify-content: space-around;
}

.button {
  background-color: rgb(102, 206, 116);
  height: 60px;
  width: 58px;
  color: white;
  font-weight: bold;
  margin-left: 12px;
  border: 0px;
  z-index: 4;
}

.hamModal {
  width: 140px;
  height: 470px;
  background: white;
  color: rgb(102, 206, 116);
  font-size: medium;
  font-weight: bold;
  border: 1px;
  border-radius: 2px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.15);
  float: left;
  position: fixed;
  z-index: 10;
}
.hamModalButton {
  margin-top: 8px;
  height: 30px;
  width: 115px;
  background-color: white;
  color: black;
  font-size: large;
  text-align: left;
  border: 0px;
  cursor: pointer;
}

.main {
  width: 360px;
  position: relative;
  z-index: 1;
}

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

.mainButton:hover {
  background: green;
}

.mainButton:focus {
  background: rgb(15, 65, 15);
}

.mainButton:active {
  background: darkgreen;
}

.lowerButton:hover {
  background: green;
}

.lowerButton:focus {
  background: rgb(15, 65, 15);
}

.lowerButton:active {
  background: darkgreen;
}

.hamModalButton:hover {
  color: green;
}

.hamModalButton:focus {
  color: rgb(15, 65, 15);
}

.hamModalButton:active {
  color: darkgreen;
}
</style>
