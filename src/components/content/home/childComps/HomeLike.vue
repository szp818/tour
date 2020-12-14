<template>
  <div class="home-like">
    <div class="home-like-top">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span>猜你喜欢</span>
    </div>
    <ul>
       <li class="home-like-item border-bottom" v-for="item in likeList" :key="item.id">
        <div class="home-like-img">
          <img :src="item.imgUrl">
        </div>
        <div class="home-like-text">
          <div class="text-title">{{item.title}}</div>
          <div class="text-msg">{{item.msg}}</div>
          <div class="text-map">
            <span class="price">￥<b class="price-num">{{item.price}}</b></span>起
            <span class="location">{{item.location}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeLike',
  data(){
    return {
      likeList:[
        {
          id:'1',
          imgUrl:'http://img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_200x200_39faf9c6.jpg',
          title:'颐和园',
          msg:'80383条评论',
          price:'158',
          location:'海淀区'
        },
        {
          id:'2',
          imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title:'故宫',
          msg:'602163条评论',
          price:'40',
          location:'东城区'
        },
        {
          id:'3',
          imgUrl:'http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg',
          title:'恭府井',
          msg:'54687条评论',
          price:'37',
          location:'西城区'
        },
        {
          id:'4',
          imgUrl:'http://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_200x200_325a015d.jpg',
          title:'八达岭长城',
          msg:'112470条评论',
          price:'35',
          location:'延庆县'
        },
      ]
    }
  }
}
</script>

<style>
  .home-like{
    font-size: 16px;
  }
  .home-like-top{
    height: 44px;
    line-height: 44px;
  }
  .home-like-top img{
    width: 16px;
    height: 16px;
    margin:0 5px 0 10px;
  }

  .home-like-item{
    padding: 10px;
    position: relative;
    overflow: hidden;
  }
  .home-like-img{
    float: left;
  }
  .home-like-img img{
    width: 100px;
    height: 100px;
  }
  .home-like-text{
    overflow: hidden;
    padding-left: 10px;
  }
  .text-title{
    margin-top: 20px;
    font-size:16px;
    color: #212121;
  }
  .text-msg{
    margin-top: 15px;
    font-size: 12px;
    color: #616161;
  }
  .text-map{
    margin-top: 15px;
    position: relative;
  }
   .text-map .price{
    font-size: 14px;
    color: #ff8300;
   }
   .text-map .price .price-num{
    font-size: 30px;
    color: #ff8300;
   }
   .text-map .location{
    font-size: 12px;
    color: #616161;
    position: absolute;
    right: 0;
    top: 14px;
   }
</style>