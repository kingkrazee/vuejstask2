<template lang="">
  <div>
    <h1>Counter -> <span>{{counter}}</span></h1>
    <button @click="increment()">Increment</button>
  </div>
  <div>
    <button @click ="decrement()">Decrement</button>

  </div>
  <img v-bind:src="imgUrl">
  <div>
    <h4 :class="{hello:check}">conditional rendering</h4>
    <h1 v-if="check">The value is true</h1>
    <h1 v-else>The Value is false</h1>
    <button  @click="change()">Change state</button>
    <ul>
      <!-- <li v-for="sport in sports" :key="sport">{{sport}}</li> -->
      <li v-for="({message},index) in objects" :key="index">{{message}}</li>
    </ul>
    <!-- one way binding data -->
    <h3>{{oneWayText}}</h3>
    
    <!-- two way data binding -->
     <h3>{{twoWayText}}</h3>
    <input type="text" v-model="twoWayText">
  </div>
  <!-- <info-comp first-name="hehe" last-name="hehehehehe"/>
  <info-comp first-name="hehe1"/>
  <info-comp :object-data='singleObject'/> -->
  <info-comp>
    hehe i am using slots
  </info-comp>
  <slot-comp>
    <template #slotTitle>
      Card Slot
    </template>
    <template #default>
      <img :src="imgUrl">
    </template>
  </slot-comp>
</template>
<script>

import InfoComp from '../components/InfoComp.vue'
import SlotComp from '../components/SlotComp.vue'
export default {
  data(){
    return{
      counter: 0,
      imgUrl:'https://kingkrazee.github.io/eccomerce/images/FITZ.png',
      check:true,
      sports:['soccer','netball','volleyball'],
      objects:[
        {message:'Hello There 1',id:1},
        {message:'Hello There 2',id:2},
        {message:'Hello There 3',id:3},
      ],
      oneWayText:'hehe',
      twoWayText:'hehe2.0',

      singleObject:{
        name:'Kayden',
        surname:'Hendricks'
      }
    }
  },
  components:{
    InfoComp,
    SlotComp
  
  },
  methods:{
    increment(){
      this.counter++
    },
    decrement(){
      this.counter--
    },
    change(){
      this.check = !this.check;
    }
  }
}
</script>
<style scoped>
  .hello{
    color: rgb(255, 94, 0);
  }
  img{
    width: 10rem;
  }
</style>
