<template>
  <div>
    <div>
        <button class="listButton" @click="$emit('getChatRoom')"> 16무 9907님과의 대화</button>
    </div>
    <div>
        <button class="listButton"> 17허 9907님과의 대화</button>
    </div>
    <div>
        <button class="listButton"> 22바 9907님과의 대화</button>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'ChatList',
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

.listButton{
    width: 250px;
    height: 40px;
    color: rgb(102, 206, 116);
    font-size: 15px;
    background-color: white;
    margin-top: 20px;
    margin-left: 55px;
    float: left;
    position: relative;
    border-radius: 10px;
    border-color: rgb(102, 206, 116);
    cursor: pointer;
}

</style>