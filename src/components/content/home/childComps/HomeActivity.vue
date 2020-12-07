<template>
  <div class="home-activity border-top">
    <div class="home-activity-item border-right">
      <img src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png" alt="">
    </div>
     <div class="home-activity-item">
      <img src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeLocation'
}
</script>

<style>
  .home-activity{
    display: flex;
    position: relative;
    border-bottom: 10px solid #f5f5f5 ;
  }
  .home-activity-item{
    flex: 1;
    font-size:  14px;
    text-align: center;
    height: 70px;
  }
  .home-activity-item img{
    width: 100%;
    height: 100%;
  }
</style>