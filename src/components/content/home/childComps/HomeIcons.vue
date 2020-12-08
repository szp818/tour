<template>
  <div class="home-icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in page" :key="item.id">
        <div class="home-icons-item" v-for="page in item">
          <img :src="page.url" alt="">
          <p class="textOverflow">{{page.title}}</p> 
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name:'HomeIcons',
  data(){
    return{
      swiperOptions:{},
      icons:[
        {
          id:'01',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png', 
          title:'景点门票'
        },
        {
          id:'02',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          title:'一日游' 
        },
        {
          id:'03',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/a9d33792bd961b1692638d86cf3e6b83.png',
          title:'万龙滑雪场' 
        },  
        {
          id:'04',
          url:'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          title:'故宫' 
        },  
        {
          id:'05',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/d706a4d71c57c53ee8863b75a7af30cf.png',
          title:'圆明园' 
        },  
        {
          id:'06',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/cd9c5d035aa48862c3695becc06764e6.png',
          title:'八达岭长城' 
        },  
        {
          id:'07',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/b526fe902327e59922374bf24927a87c.png',
          title:'颐和园' 
        },  
        {
          id:'08',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/bd121884123cceb4da978047423421ce.png',
          title:'恭王府' 
        },  
        {
          id:'09',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
          title:'游乐场' 
        },  
        {
          id:'10',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/50357a9f88fe84bcf9d20961059c8611.png',
          title:'全部玩乐' 
        },      
      ]  
    }
  },
  computed:{
    page(){
      let pages = [];
      this.icons.forEach((item,index)=>{
        console.log(index);
        let idx = Math.floor(index/8);
        if(!pages[idx])  
        pages[idx] = [];
        pages[idx].push(item);
      })
      return pages;
    }
  }
}
</script>

<style scoped>
@import '~assets/css/common.css';

  .home-icons-item{
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    float: left;
  }

  .home-icons-item img{
    height: 55px;
    width: 55px;
    display: block;
    margin: 0 auto;
    padding-top: 7px;
  }

  .home-icons-item p{
    font-size: 14px;
    color: #212121;
    text-align: center;
    padding-top: 5px;
  }
</style>
