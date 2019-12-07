<template>
  <div class="container" @click="clickHandle">
    <!-- <div class="message">{{msg}}</div> -->
    <img class='mainBg' src="/static/images/miniProjectBg1.png"/>
  </div>
</template>

<script>
// 导入 click-counter 组件
// import ClickCounter from "@/components/click-counter";
export default {
  // components: { ClickCounter },
  data () {
    // return {
    //   msg: 'Hello'
    // }
  },

  methods: {
    clickHandle () {
      this.msg = 'Clicked!!!!!!';
      console.log('222');
    }
  }
}
</script>

<style scoped>
/* .message {
  color: red;
  padding: 10px;
  text-align: center;
} */


/* .container{
  height:100%;
}  */
/* .mainBg {
  	width: 100%;
		height: 100%;
} */
</style>