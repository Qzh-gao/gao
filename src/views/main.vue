<template>
    <div id="box">
        <el-container>
        <el-header>亲爱的{{studentname}}同学，欢迎来到考试系统</el-header>
        <el-container>
            <el-aside width="200px">
                <div id="usermsg">
                    <div id="userbox">
                        <img src="@/assets/userhead.jpg">
                        <p>
                            {{studentname}}
                        </p>
                    </div>
                    <div id="usermenu">
                        <ul>
                            <li>
                                <router-link to="/main/">主页</router-link>
                            </li>
                            <li>
                                <router-link to="/main/1">个人信息</router-link>
                            </li>
                            <li>
                                <router-link to="/main/2">开始答题</router-link>
                            </li>
                            <li>
                                <router-link to="/main/3">已完成的课程</router-link>
                            </li>
                            <li>
                                <router-link to="/main/4">修改账户密码</router-link>
                            </li>
                            <li>
                                <router-link to="/main/5">关于我们</router-link>
                            </li>
                        </ul>
                        <span><el-button type="warning" @click="open">注销</el-button></span>
                    </div>
                </div>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
           
        }
    },
    methods:{
        open() {
            if(this.$store.state.student == ''){
                this.$router.replace({path:'/'})
                this.$message({
                type: 'warning',
                message: '登录失效，请重新登录'
                });
            }else{
                this.$confirm('此操作将注销当前账号, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '已退出登录'
                });
                this.$router.replace({path:'/'})
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已撤销当前操作'
                });          
                });
            }
        }
        
    },
    computed:{
        studentname(){
            return this.$store.state.student;
        },
        studentid(){
            return this.$store.state.id;
        }
    }
}
</script>

<style scoped>
.router-link-active {
    text-decoration: none;
}
a{
    text-decoration: none;
}
#box{
    background-image: url("../assets/back5.jpg");
    width:100%;	
    height:100%;
    position:fixed;
    left: 0;
    top: 0;
    background-size:100% 100%;
    color: black;
}
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    opacity: .8;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
    opacity: .8;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    background-image: url("../assets/mainback.jpg");
    left: 0;
    top: 0;
    background-size:100% 100%;
  }
  #userbox{
      height: 200px;
  }
 img{
     margin-top: 30px;
     border-radius: 50%;
     height: 100px;
 }
 #usermenu{
     height: 500px;
 }
 #usermenu ul{
     height: 350px;
     list-style: none;
     padding-left: 0;
 }
 #usermenu li{
     height: 10%;
     line-height: 40px;
     margin-top: 10px;
     cursor: pointer;
 }
 #usermenu li:hover{
     background: #FCFCFC;
 }
 #usermenu span{
     position: relative;
 }
</style>