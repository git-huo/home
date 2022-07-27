<template>
  <div>
    我的
    <van-tabbar  router>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/service">咨询</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>