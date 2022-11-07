<script setup lang="ts">

</script>
<template>
  <div class="container">
    <div class="ikon">
      <img src="../../assets/login-ikon-m.svg" alt="" />
    </div>
    <div class="title">欢迎使用网信委OA系统</div>
    <div class="content">
      <n-button class="btn-info">
        <router-link to="/register">创建账号</router-link>
      </n-button>
      <p>已有帐号？去登录吧！</p>
      <n-button class="btn-default">
        <router-link to="/login">登录</router-link>
      </n-button>
    </div>
    <div class="footer">
      <div class="policy">
        <p>如果您创建账户，则表示您同意</p>
        <p>我们的<router-link to="/policy">隐私政策</router-link></p>
      </div>
      <div class="pow">
        <p>Power By 广州城市理工学院·网信委</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  position: relative;
  font-family: 'HarmonyOS_Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: normal;
  a{
    text-decoration: none;
  }
  .ikon{
    margin-bottom: 30px;
  }
  .title {
    width: 257px;
    height: 75px;
    font-size: 36px;
    line-height: 50px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0em;
  }
  .content {
    margin-top: 30px;
    width: 307px;
    button {
      width: 100%;
      height: 61px;
      border-radius: 180px;
      box-shadow: 0px 4px 10px 0px rgba(4, 192, 237, 0.4);
      font-size: 18px;
    }
    .btn-info {
      background-color: #04c0ed;
      border: none;
      a{
        color: #fff;
      }
    }
    .btn-default {
      background-color: transparent;
      border: 1px solid #04c0ed;
      a{
        color: #04c0ed;
      }
    }
    p {
      font-size: 12px;
      font-family: 'Abhaya Libre ExtraBold';
      margin: 22px 0 20px 0;
      color: #9e9e9e;
      text-align: center;
    }
  }
  .footer {
    font-family: 'Abhaya Libre ExtraBold';
    font-style: normal;
    font-weight: 800;
    text-align: center;
    color: #9e9e9e;
    .policy {
      font-size: 18px;
      line-height: 25px;

      margin: 50px 0 30px 0;
      a {
        color: #000;
      }
    }
    .pow{
      font-size: 12px;
      margin-bottom: 24px;
    }
  }
}
</style>
