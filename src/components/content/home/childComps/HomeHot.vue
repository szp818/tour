<template>
  <div class="home-hot">
    <div class="home-hot-top">
      <img src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <span>本周热门榜单</span>
      <span class="home-hot-top-right">全部榜单 ></span>
    </div>
    <ul class="home-hot-list">
      <li class="home-hot-list-item" v-for="item in hotLists" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <p class="textOverflow">{{item.title}}</p>
        <p>
          <span class="price">￥{{item.price}}</span>起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeHot',
  data(){
    return {
      hotLists:[
        {
          id:'001',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
          title:'故宫',
          price:'40'
        },
        {
          id:'002',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_250x250_e1b08a5e.jpg',
          title:'八达岭长城',
          price:'34.5'
        },
        {
          id:'003',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg',
          title:'恭王府',
          price:'33.5'
        },
        {
          id:'004',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_250x250_ee99c18e.jpg',
          title:'天坛公园',
          price:'11.3'
        },
        {
          id:'005',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_250x250_d76001d5.jpg',
          title:'颐和园',
          price:'20'
        },
        {
          id:'006',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
          title:'圆明园',
          price:'25'
        },
        {
          id:'007',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_250x250_d76e727c.jpg',
          title:'北京动物园',
          price:'15'
        },
        {
          id:'008',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_250x250_cf0207b1.jpg',
          title:'景山公园',
          price:'3.7'
        },
        {
          id:'009',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/201306/13/bdf22f69fab0ee4ec8d65eac.jpg_250x250_b23119c8.jpg',
          title:'八达岭长城缆车',
          price:'58'
        },
        {
          id:'010',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/2005/5b/5b413402d60a1e26a3.water.jpg_250x250_aee93b8d.jpg',
          title:'慕田峪长城',
          price:'52'
        },
      ]
    }
  }
}
</script>

<style scoped>
@import '~assets/css/common.css';

  .home-hot{
    margin-top: 5px;
    font-size: 14px;
  }
  .home-hot-top{
    padding: 10px;
    position: relative;
  }
  .home-hot-top img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  .home-hot-top span{
    font-size: 16px;
  }
  .home-hot-top .home-hot-top-right{
    position: absolute;
    right: 10px;
    top: 15px;
    color: #616161;
    font-size: 13px;
  }

  .home-hot-list{
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 155px;
  }
  .home-hot-list-item{
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 0 5px;
  }
  .home-hot-list-item img{
    width: 100%;
    height: 100%;  
  }
  .home-hot-list-item p{
    margin-top: 5px;
    text-align: center;
  }
  .home-hot-list-item p .price{
    color: #ff8300;
    font-size: 16px;
  }
</style>