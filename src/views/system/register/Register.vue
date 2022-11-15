<!--
 * @Author: xuan
 * @LastEditors: xuan
 * @Date: 2022-11-10 13:32:32
 * @LastEditTime: 2022-11-14 11:27:03
 * @FilePath: \gcuwomd-oa\src\views\system\register\Register.vue
 * @Description: 
-->
<script setup lang="ts">
const model = ""
const rules = ""
const size = ""
const generalOptions = ""
</script>
<template>
  <div>
    <div class="contaiter">
      <div class="header">
        <div class="headbase">
          <img src="../../../assets/头部底子.png" alt="" class="topbase" />
          <p class="join">Join Us</p>
        </div>
        <div class="head">
          <div class="return">
            <router-link to="">
              <img src="../../../assets/返回按钮.png" alt="" />
            </router-link>
          </div>
          <div class="portrait">
            <img src="../../../assets/头像.png" alt="" />
            <div class="name">
              <p class="namesytle">姓名 : 小樱</p>
              <p class="gendersytle">性别 : 女</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <n-form>

          
          <n-form-item img src="../../../assets/Frame.png" alt="" label="所属组织" >
            <n-select />
          </n-form-item>
          <n-form-item label="所属部门">
            <n-select />
          </n-form-item >
          <n-form-item label="学号">
            <n-input />
          </n-form-item >
          <n-form-item label="联系电话">
            <n-input />
          </n-form-item>
        </n-form>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
.contaiter {
  font-weight: normal;
  font-family: 'Abhaya Libre ExtraBold';
}
/* .header {

} */
.headbase {
  position: absolute;
  right: 0px;
  /* display: inline-block; */
  width: 233px;
  height: 232px;

  font-size: 30px;
  font-style: normal;
  line-height: 20px;
  font-weight: 500;
  color: #a87de1;
  background-color: transparent;
}
.topbase {
  position: absolute;
}
.join {
  position: absolute;
  right: 34px;
  top: 82px;
}
.head {
  background-color: transparent;
  position: absolute;
  top: 26px;
  left: 26px;
}
.portrait {
  margin-top: 41px;
  margin-left: 17px;
  display: flex;
}
.name {
  padding-top: 20px;
  margin-left: 16px;
  line-height: 25px;
}
.namesytle {
  font-weight: 600;
  font-size: 20px;
}
.gendersytle {
  font-size: 12px;
  transform: scale(0.9);
}
.content{
  position: relative;
  top: 257px;
  width: 314px;
  height: 365px;
  margin: auto;
}

</style>
