<template>
  <div>
    <!-- <div onClick={ () => { history.push('/city') } } className="location">
          <span className="name">{ cityName }</span>
          <i className="iconfont icon-arrow" />
        </div> -->
    <van-search show-action  placeholder="请输入搜索关键词">
      <template #label>
        <div>北京</div>
        <i ></i>
      </template>
      <template #action>
        <div>搜索</div>
      </template>
    </van-search>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/service">咨询</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>