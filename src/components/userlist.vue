<template>
    <div>
        <h1>个人信息</h1>
        <div id="userlist">
            <p>学生姓名：{{student}}</p>
            <p>准考证号：{{studentid}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            
        }
    },
    methods:{
        
    },
    computed:{
        student(){
            return this.$store.state.student;
        },
        studentid(){
            return this.$store.state.id;
        }
    },
}
</script>

<style scoped>
#userlist{
    position: relative;
    margin: 50px auto;
    width: 500px;
    opacity: .8;
    box-shadow: 0 10px 10px rgba(10, 16, 20, .24), 0 0 10px rgba(10, 16, 20, .12);
}
</style>