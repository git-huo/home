<template>
  <div>
    <van-nav-bar title="账号登陆"  left-arrow   @click-left="onClickLeft">

</van-nav-bar>
    <van-form @submit="onSubmit">
  <van-field style="heigth=60px"
    v-model="username"
    name="username"
    placeholder="请输入账号"
    :rules="[{ required: true, message: ' 请输入账号' }]"
  />
  <van-field
    v-model="password"
    type="password"
    placeholder="请输入账号"
    :rules="[{ required: true, message: '请输入密码' }]"
  />
  <div style="margin: 16px;">
    <van-button block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
<div class="van-ellipsis" >还没有账号，去注册~</div>
  </div>
</template>

<script>
import { loginAPI } from '@/api';

export default {
    data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      try {
        const str = await loginAPI({}) 
        console.log(str);
      } catch (error) {
        
      }
    },
     onClickLeft() {
     this.$router.push('/my')
    },
  },

}
</script>

<style scoped >
.van-nav-bar{
  background-color: #21b97a;
}
:deep(.van-nav-bar__title){
color: #fff;
}
:deep(.van-nav-bar .van-icon){
 color: #fff; 
}
.van-button--info{
background-color: #21b97a;
border: 1px solid #21b97a;  
}
.van-ellipsis{
  text-align: center;
  font-size: 14px;
  color: #666666;
}
:deep(.van-field__control){
  height: 60px;
  font-size: 18px;
}
</style>