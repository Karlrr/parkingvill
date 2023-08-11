<template>
  
    <div class="cr-wrapper">

        <div class="back">
            <button class="back-btn" @click="$emit('toChatlist')">◀</button>
        </div>

        <div class="chatroom-title"><p> 16무 9907님과 대화</p></div>

        <div class="chatroom-content">
            <div class="chatroom-msg chatroom-msg_my"> <span>내 메시지 1</span> </div>
            <div class="float-clear"></div>
            <div class="chatroom-msg chatroom-msg_my"> <span>내 메시지 2</span> </div>
            <div class="float-clear"></div>
            <div class="chatroom-msg chatroom-msg_your"> <span>상대 메시지 1</span> </div>    
            <div class="float-clear"></div>
        </div>

        <div class="chatroom-send">
            <div class="float-left">
                <input class="chatroom-send_box" type="text" placeholder="내용을 입력해주세요">
            </div>                
            <div class="float-left">
                <button class="chatroom-send_button">▶</button>
            </div>
        </div> 

    </div>


</template>

<script>
export default {
    name:'ChatRoom',
    data(){
      return{
        
      }
    },
    props:{

    },
    methods:{
    },
}
</script>

<style>

.cr-wrapper{
    width: 360px;
    height: 460px;
    box-sizing: border-box;
    position: relative;
}


.back-btn{
    width: 40px;
    height: 40px;
    border: none;
    background-color: white;
    color: lightgrey;
    font-size: 25px;
    position: fixed;
    top: 55px;
    margin-top: 10px;
    margin-left: 5px;
    cursor: pointer;
}

.chatroom-title{
    position: absolute;
    left: 0;
    right: 0; 
    margin: auto;
    width: 150px;
    font-weight: bold;

}

.chatroom-content{
    box-sizing: border-box;
    position: absolute;
    top: 50px;
    width: 360px;
}

.chatroom-msg{
    width: 200px;
    height: 50px;
    margin-top: 10px;
    border: 1px solid none;
    border-radius: 5px;
    background-color: lightgreen;
    color: white;
    font-weight: 700;
    text-align: center;
}

.chatroom-msg_my{
    float: right;
    background-color: lightgreen;
    color: white;
}

.chatroom-msg_your{
    float: left;
    background-color: lightgrey;
    color: grey;
}

.float-left{
    float: left;
}

.float-clear{
    clear: both;
}

.chatroom-send{
    position: fixed;
    top: 480px;
}


.chatroom-send_box{
    width: 320px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 5px;
    
}

.chatroom-send_button{
    width: 40px;
    height: 40px;
    background-color: lightgreen;
    text-align: center;
    color: white;
    font-size: 25px;
    border: none;
    cursor: pointer;
}

.chatroom-send_button:hover{
background-color: lightgrey;
color: lightgreen;
}

.chatroom-send_button:focus{
    background-color: grey;
    color: lightgreen;
}


.chatroom-send_button:active{
    background-color: lightgreen;
    color: white;
}


</style>