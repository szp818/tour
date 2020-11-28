<template>
  <nav-bar class="home-header">
    <div slot="left" class="iconfont">&#xe600;</div>  
    <div slot="center" class="iconfont center"> &#xe670;请输入城市/景点/游玩主题</div>  
    <div slot="right" class="iconfont left">北京&#xe601;</div> 
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'HomeHeader',
  components:{
    NavBar
  }
}
</script>

<style scoped>

  .home-header{
    width: 100%;
    height: 44px;
    background: #00bcd4;
    color: #fff;
  }

  .center{
    background: #fff;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin: 7px 0;
    color: #e4e7ea;
    text-align: left;
    padding-left: 10px;
    border-radius: 5px;
  }

  .left{
    text-align: center;
    font-size: 14px;
  }
</style>
