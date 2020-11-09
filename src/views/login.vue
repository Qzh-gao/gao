<template>
  <div id="box">
    <div id="loginbox">
      <h1>考试登录</h1>
      <el-form label-width="120px" style="" id="form" label-position="right">
        <el-form-item label="学生姓名:">
          <el-input
            placeholder="请输入姓名"
            style="width: 250px"
            v-model="studentdata.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="学生准考证号:">
          <el-input
            placeholder="请输入8位数的准考证号"
            style="width: 250px"
            v-model="studentdata.id"
          ></el-input>
        </el-form-item>
        <el-form-item label="学生登录密码:">
          <el-input
            placeholder="请输入登陆密码"
            style="width: 250px"
            type="password"
            v-model="studentdata.pwd"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginbtn" id="btn">登录</el-button>
          <el-button type="primary" @click="registerbtn" id="btn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      studentdata: {
        name: "",
        id: "",
      },
    };
  },
  methods: {
    /**********
     * 正则判断姓名和准考证号密码
     * 将填入的信息准入VUEX的store中
     ***********/
    loginbtn: function () {
      let yhm = /^[\u0391-\uFFE5]+$/;
      let zkz = /^\d{0,7}$/;
      let mm = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
      if (this.studentdata.name == "" || this.studentdata.id == "" || this.studentdata.pwd == "") {
        this.$message.error("请输入学生姓名,准考证号和密码");
      } else if (zkz.test(this.studentdata.id) ||this.studentdata.id.length > 8 ) {
        this.$message.error("准考证号格式错误");
      } else if (!yhm.test(this.studentdata.name)) {
        this.$message.error("请输入中文名");
      } else if (!mm.test(this.studentdata.pwd)) {
        this.$message.error("密码需包含字母和数字且在6-16位之间");
      }else {
        this.$message({ message: "登录成功", type: "success",});
        this.$router.replace({ path: "main" });
        this.$store.state.student = this.studentdata.name;
        this.$store.state.id = this.studentdata.id;
      }
    },
    registerbtn: function () {
      
    },
  },
};
</script>

<style scoped>
#box {
  background-image: url("../assets/bg1.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-size: 100% 100%;
}
#loginbox {
  margin: 160px auto;
  width: 400px;
  height: 350px;
  background: #4fc44b;
  opacity: 0.8;
  color: rgba(7, 67, 71, 0.966);
  border-radius: 25px;
}
#loginbox #form {
  width: 400px;
  height: 200px;
  margin: 50px auto;
  color: white;
}
#btn {
  position: relative;
  right: 50px;
}
</style>