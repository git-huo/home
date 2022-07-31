<template>
  <div class="Mybox">
    <van-image :src="require('./images/bg.png')" />
    <div class="box">
      <div class="el">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
      </div>
      <p>游客</p>
      <van-button type="primary" to="/login">去登陆</van-button>
    </div>
    <van-grid clickable :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" to="/" />
      <van-grid-item icon="wap-home-o" text="我的出租" to="/" />
      <van-grid-item icon="clock-o" text="看房记录" to="/" />
      <van-grid-item icon="debit-pay" text="成为房主" to="/" />
      <van-grid-item icon="manager-o" text="个人资料" to="/" />
      <van-grid-item icon="service-o" text="联系我们" to="/" />
    </van-grid>
   <div class="img1">
     <img  src="./images/join.png" alt="照片"></img>
   </div>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/service">咨询</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>

   
  </div>
  
</template>

<script>
export default {};
</script>

<style scoped >
.Mybox {
  position: relative;
}
.box {
  position: absolute;
  position: relative;
  top: -75px;
  width: 320px;
  height: 165px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 0 10px 3px #ddd;
  margin: auto;
  font-size: 12px;
}
.box .el {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.box p {
  margin-top: -30px;
  margin-bottom: 10px;
}
.box .el img {
  width: 100%;
}
.van-button {
  height: 35px;
  border-radius: 5px;
  font-size: 14px;
}
.van-grid{
  position: absolute;
  top:300px
}
.img1{

margin-top: 120px;
width: 345px;
height: 85px;
}
.img1 img{
width: 100%;
height: 100%;
margin: 0 15px;
}
</style>