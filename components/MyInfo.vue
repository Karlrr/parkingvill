<template>
  <div class="myinfo-wrapper">
    <div>
      <div class="myinfo-carnumModal myinfo-modalbg" v-if="carnumModal == 1">
        <div class="myinfo-modal">
          <p>차량번호 변경 팝업입니다</p>
          <div class="myinfo-btn">
            <button @click="carnumModal = 0">완료</button>
          </div>
        </div>
      </div>
      <div class="myinfo-phonenumModal myinfo-modalbg" v-if="phonenumModal == 1">
        <div class="myinfo-modal">
          <p>전화번호 변경 팝업입니다</p>
          <div class="myinfo-btn">
            <button @click="phonenumModal = 0">완료</button>
          </div>
        </div>
      </div>
      <div class="myinfo-adressModal myinfo-modalbg" v-if="adressModal == 1">
        <div class="myinfo-modal">
          <p>주소찾기 팝업입니다</p>
          <div class="myinfo-btn">
            <button @click="adressModal = 0">완료</button>
          </div>
        </div>
      </div>
    </div>
    <div class="myinfo-id myinfo-row">
      <div class="myinfo-left"><span>계정</span></div>
      <div class="myinfo-content"><span>사용자1</span></div>
      <div class="clear-both"></div>
    </div>
    <div class="myinfo-password myinfo-row">
      <div class="myinfo-left"><span>패스워드</span></div>
      <div class="myinfo-content">
        <input
          type="password"
          class="myinfo-passinput"
          placeholder="패스워드 입력"
          @input="changePass1 = $event.target.value"
        />
        <input
          type="password"
          class="myinfo-passinput"
          placeholder="패스워드 확인"
          @input="changePass2 = $event.target.value"
        />
      </div>
      <div class="myinfo-btn">
        <button @click="changePassword">수정</button>
      </div>
      <div class="clear-both"></div>
    </div>
    <div class="myinfo-carnum myinfo-row">
      <div class="myinfo-left"><span>차량번호</span></div>
      <div class="myinfo-content"><span>16무 9907</span></div>
      <div class="myinfo-btn">
        <button @click="carnumModal = 1">수정</button>
      </div>
      <div class="clear-both"></div>
    </div>
    <div class="myinfo-phonenum myinfo-row">
      <div class="myinfo-left"><span>전화번호</span></div>
      <div class="myinfo-content"><span>010-0000-1234</span></div>
      <div class="myinfo-btn">
        <button @click="phonenumModal = 1">수정</button>
      </div>
      <div class="clear-both"></div>
    </div>
    <div class="myinfo-adress myinfo-row">
      <div class="myinfo-left"><span>주소</span></div>
      <div class="myinfo-content">
        <span>서울특별시 강서구 화곡동 355-37</span>
      </div>
      <div class="myinfo-btn">
        <button style="width: 70px" @click="adressModal = 1">주소 찾기</button>
      </div>
      <div class="clear-both"></div>
    </div>
    <div class="myinfo-complete">
      <button class="mainButton" @click="$emit('myinfoComplete')">
        정보 수정 완료
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  data() {
    return {
      changePass1: "",
      changePass2: "",
      carnumModal: 0,
      phonenumModal: 0,
      adressModal: 0,
    };
  },
  props: {},
  methods: {
    changePassword() {
      if (this.changePass1 != this.changePass2) {
        alert("변경할 패스워드가 일치하지 않습니다");
      } else if (this.changePass1 == "" || this.changePass2 == "") {
        alert("패스워드 입력 또는 확인란에 변경할 패스워드를 입력해주세요");
      } else {
        alert("패스워드가 변경되었습니다");
      }
    },
  },
};
</script>

<style>
.clear-both {
  clear: both;
}

.myinfo-wrapper {
  box-sizing: border-box;
  width: 360px;
  height: 460px;
  position: relative;
}

.myinfo-row {
  padding-top: 15px;
  margin-left: 30px;
  width: 320px;
}

.myinfo-left {
  float: left;
  width: 70px;
  margin-right: 20px;
}

.myinfo-left {
  float: left;
  width: 70px;
}

.myinfo-content {
  float: left;
  width: 150px;
}

.myinfo-passinput {
  width: 100px;
}

.myinfo-btn {
  float: left;
}

.myinfo-btn button {
  width: 40px;
  height: 25px;
  border: none;
  border-radius: 5px;
  background-color: lightgreen;
  color: white;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
}

.myinfo-btn button:hover {
  background: green;
}

.myinfo-btn button:focus {
  background: rgb(15, 65, 15);
}

.myinfo-btn button:active {
  background: darkgreen;
}

.myinfo-complete {
  position: fixed;
  top: 400px;
}

.myinfo-modalbg {
  width: 360px;
  height: 460px;
  background-color: #eee;
  position: fixed;
  z-index: 2;
}

.myinfo-modal {
  width: 300px;
  height: 360px;
  position: fixed;
  background-color: white;
  z-index: 3;
  left: 30px;
  top: 100px;
}
</style>