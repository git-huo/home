<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item.id">
        <van-image
          height="100%"
          width="100%"
          :src="`http://liufusong.top:8080${item.imgSrc}`"
        ></van-image>
      </van-swipe-item>
    </van-swipe>
    <van-grid clickable :column-num="4">
      <van-grid-item icon="wap-home" text="整租" to="/" />
      <van-grid-item icon="friends" text="合租" url="/vant/mobile.html" />
      <van-grid-item
        icon="map-marked"
        text="地图找房"
        url="/vant/mobile.html"
      />
      <van-grid-item icon="shop" text="去出租" url="/vant/mobile.html" />
    </van-grid>
    <div class="box">
      <span class="log">租房小组</span>
      <span>更多</span>
    </div>
    <div>
      <ul class="item">
        <li v-for="str in lists" :key="str.id">
          <van-image
            height="100%"
            width="50%"
            :src="`http://liufusong.top:8080${str.imgSrc}`"
          ></van-image>
          <div>
            <p>{{ str.title }}</p>
            <p>{{ str.desc }}</p>
          </div>
        </li>
      </ul>
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
import { newImgAPI, newHomeAPI } from "@/api";
export default {
  data() {
    return {
      list: [],
      lists: [],
    };
  },
  mounted() {
    this.newImgAPI();
    this.newHomeAPI();
  },
  methods: {
    async newImgAPI() {
      try {
        const res = await newImgAPI({});
        console.log(res);
        this.list = res.data.body;
      } catch (e) {
        console.log(e);
      }
    },
    async newHomeAPI() {
      try {
        const res1 = await newHomeAPI({});
        console.log(res1);
        this.lists = res1.data.body;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 212px;
}

.box {
  display: flex;
  justify-content: space-between;
}
.box .log {
  font-size: 18px;
}
.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item li {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
</style>