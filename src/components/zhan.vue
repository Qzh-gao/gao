<template>
    <div>
      <div id="box">
          <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
          </el-steps>
          
          <div v-if="show1">
              <h1>请修改密码</h1>
          </div>
          <div v-if="show2">
              <h1>验证邮箱</h1>
          </div>


          <el-button style="margin-top: 12px;" @click="next" v-if="count">下一步</el-button>
          <el-button style="margin-top: 12px;" @click="on" v-if="count1">提交</el-button>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        count:true,
        count1:false,
        show1:false,
        show2:false,
      };
    },

    methods: {
      next() {
        if (this.active++ > 1){
            this.count=false
            this.count1=true
        }else if(this.active == 1){
            this.show1=true;
            this.show2=false;
        }else if(this.active == 2){
            this.show1=false;
            this.show2=true;
        }
      }
    }
  }
</script>

<style scoped>
#box{
  width: 40%;
  margin: 25px auto;
  color: black;
}
</style>