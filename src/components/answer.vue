<template>
    <div>
        <el-button type="primary" @click="check" v-show="show1">开始答题</el-button>
        <div v-if="count" id="answerbox">
            <div>
                <p>第{{indexx}}题</p>
                <span v-if="count">{{Mydata[index].answer_title}}(单选题)</span><br>
                <el-radio-group :max="length" v-model="checkList" @change="checka(index,$event)" v-if="count">
                    <el-radio :label="Mydata[index].options_list[0].options_id">{{Mydata[index].options_list[0].options_title}}</el-radio>
                    <el-radio :label="Mydata[index].options_list[1].options_id">{{Mydata[index].options_list[1].options_title}}</el-radio>
                    <el-radio :label="Mydata[index].options_list[2].options_id">{{Mydata[index].options_list[2].options_title}}</el-radio>
                    <el-radio :label="Mydata[index].options_list[3].options_id">{{Mydata[index].options_list[3].options_title}}</el-radio>
                </el-radio-group>
                <p>【{{indexx}}/5】</p>
            </div>
            <div>
                <el-button type="primary" @click="next" v-show="show2">下一题</el-button>
                <el-button type="primary" @click="on" v-if="sure">提交</el-button>
            </div>
        </div>
        <div v-if="show3" id="Myscore">
            <span id="cjd">成绩单</span>
            <div>
                <ul>
                    <li>
                        <span class="s1">第一题：{{answername[0]}}&nbsp;<i>&nbsp;{{dc[0]}}&nbsp;</i></span>
                        <span v-show="s0" class="s1">正确答案：{{zqdaan[0]}}</span>
                    </li>
                    <li>
                        <span class="s1">第二题：{{answername[1]}}&nbsp;<i>&nbsp;{{dc[1]}}&nbsp;</i></span>
                        <span v-show="s1" class="s1">正确答案：{{zqdaan[1]}}</span>
                    </li>
                    <li>
                        <span class="s1">第三题：{{answername[2]}}&nbsp;<i>&nbsp;{{dc[2]}}&nbsp;</i></span>
                        <span v-show="s2" class="s1">正确答案：{{zqdaan[2]}}</span>
                    </li>
                    <li>
                        <span class="s1">第四题：{{answername[3]}}&nbsp;<i>&nbsp;{{dc[3]}}&nbsp;</i></span>
                        <span v-show="s3" class="s1">正确答案：{{zqdaan[3]}}</span>
                    </li>
                    <li>
                        <span class="s1">第五题：{{answername[4]}}&nbsp;<i>&nbsp;{{dc[4]}}&nbsp;</i></span>
                        <span v-show="s4" class="s1">正确答案：{{zqdaan[4]}}</span>
                    </li>
                </ul>
                <span id="scoreshow1">得分：<span id="scoreshow">{{score}}分</span></span>
                <el-button type="primary" @click="againtext" v-if="sure1" id="again">再测一次</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            count:false,
            show1:true,
            Mydata:[],
            radio:4,
            answerid:[],
            answername:[],
            checked:'',
            checkList:'',
            length:5,
            chose:[],
            num:0,
            index:0,
            indexx:1,
            sure:false,
            sure1:false,
            show2:true,
            show3:false,
            zqdaan:[],
            score:0,
            s0:false,
            s1:false,
            s2:false,
            s3:false,
            s4:false,
            sjs:[],
            dc:[]
        }
    },
    methods:{
        /**********
         *开始答题判断（确定与取消）
         * 确定后执行axios获取mock数据
         ************/
        check:function(){
            this.$confirm('是否开始答题?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            
            
            if(this.$store.state.student == ''){
                this.$message({
                type: 'warning',
                message: '登录失效，请重新登录'
                });
                this.$router.replace({path:'/'});
            }else if(this.$store.state.student != ''){
                this.$message({
                type: 'success',
                message: '请开始答题'
                });
                
                this.checkList=false
                this.$api.timu.gettimu().then(res=>{
                    this.Mydata=res.data.list
                    this.count=true;
                    this.show1=false;
                    this.index=Number.parseInt(Math.random()*19)
                    this.sjs.push(this.index)
                }).catch(error=>{
                    console.log(error)
                })
            }

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '未完成答题/已取消当前答题操作'
                });          
            });
        },
        /*********
         * 获取单选框的选中状态
         * 参数：index（所点击单选框的下表）和event（获取所点击的单选框的value/lable）
         ********/
        checka:function(index,event){
            this.answerid=event
            // this.zqdaan.push(this.Mydata[this.index].answer_daan)
            console.log(this.answerid,event,this.answername)
        },
        /****************
         *下一题的点击事件
         ********************/
        next:function(){
            if(this.checkList != false){
                this.answername.push(this.answerid)
                this.zqdaan.push(this.Mydata[this.index].answer_daan)
                let a=Number.parseInt((Math.random()*19))
                //题目去重（减低重复率）
                for(let i=0;i<this.sjs.length;i++){
                    if(this.sjs[i] == this.sjs[i-1] || this.sjs[i] == this.sjs[i-2]){
                        console.log(1)
                        let b=Number.parseInt( ((Number.parseInt((Math.random()*6))) + (Number.parseInt((Math.random()*11)))) )
                        if(b == this.sjs[i-1]){
                            this.index=(19-Number.parseInt((Math.random()*10)))
                            console.log(2)
                        }
                    }else{
                        if(a == this.sjs[0] || a == this.sjs[1] || a == this.sjs[2] || a == this.sjs[3] || a == this.sjs[4]){
                            this.index=(19-Number.parseInt((Math.random()*19)))
                            console.log(3)
                            break;
                        }else{
                            this.index = a;
                            console.log(4)
                            break;
                        }
                    }
                }
                this.sjs.push(this.index)
                this.indexx++
                if(this.indexx=='5'){
                    this.sure=true;
                    this.show2=false
                }
                this.checkList=false
                console.log(this.sjs)
            }else{
                this.$message.error('请选择答案');
            }
        },
        /***********
         * 提交函数
         *************/
        on:function(){
            this.show3=true;
            this.count=false
            this.answername.push(this.answerid)
            this.zqdaan.push(this.Mydata[this.index].answer_daan)
            this.sure1=true
            this.score=0
            for(let i = 0 ; i< this.answername.length ; i++){
                if(this.answername[i] == this.zqdaan[i]){
                    this.score+=20;
                    this.dc.push('√')
                }else{
                    this.dc.push('×')
                    if(i == 0){
                        this.s0=true;
                    }else if(i == 1){
                        this.s1=true
                    }else if(i == 2){
                        this.s2=true
                    }else if(i == 3){
                        this.s3=true
                    }else if(i == 4){
                        this.s4=true
                    }
                }
            }
            console.log(this.sjs)
        },
        /***********
         * 再次答题按钮的点击事件
         * 将所有相关的值进行重置
         *************/
        againtext:function(){
            this.show3=false
            this.show2=true
            this.show1=true
            this.sure1=false
            this.sure=false
            this.sjs=[]
            this.indexx=1
            this.answername=[]
            this.zqdaan=[]
            this.dc=[]
            this.s0=false
            this.s1=false
            this.s2=false
            this.s3=false
            this.s4=false
            console.log(this.sjs)
        }
    }
}
</script>

<style scoped>
.el-button{
    position: relative;
    top: 200px;
}
.el-radio-group{
    position: relative;
    display: line-flex;
    color: black;
    z-index: 10;
    text-align: left;
    /* flex-direction: column-reverse; */
    overflow: hidden;
}
#answerbox{
    position: relative;
    /* border: 1px solid #BEBEBE; */
    width: 480px;
    margin: 20px auto;
    /* background: #BEBEBE; */
    opacity: .8;
    box-shadow: 0 10px 10px rgba(10, 16, 20, .24), 0 0 10px rgba(10, 16, 20, .12);
}
#Myscore{
    width: 500px;
    margin: 40px auto;
    opacity: .8;
    box-shadow: 0 10px 10px rgba(10, 16, 20, .24), 0 0 10px rgba(10, 16, 20, .12);
}
ul{
    list-style: none;
    padding-left: 0;
    text-align: left;
}
li{
    /* margin-top: 10px; */
    padding-left: 35%;
    margin: 10px auto;
}
#cjd{
    font-size: 30px;
    font-weight: bold;
}
#scoreshow1{
    font-size: 50px;
    font-weight: bold;
}
#scoreshow{
    color: #2c1c15;
    font-size: 50px;
    font-weight: bold;
}
span{
    cursor: pointer;
}
#again{
    position: fixed;
    top: 500px;
    left: 54%;
}
i{
    font-size:25px ;
    font-weight:bold ;
}
.s1{
    font-weight: bold;
    font-size: 20px;
}
</style>