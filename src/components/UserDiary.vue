<template>
<div>
    <el-row :gutter="24">
        <el-col :span="20" :offset="2">
            <div  v-for="(diary,index) in diarys" :key="index">
                <div class="wt-content">
                    <div class="date">日期：{{diary.date}}</div>
                    <div class="star" :class="diary.isImportant?'imp':''"></div>
                </div >
                <p class="write_texa">{{diary.decs}}</p>
            </div>
        </el-col>
    </el-row>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            diarys : [],
            scroll : ''
        }
    }
    ,created(){
        console.log("当前页面参数----》",this.$route.params)
        this.getDiary();
    },
    methods: {
        menu() {
        　　if(this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()){
                console.log("已经到最底部了！");
                this.getDiary();
        　　}
        },
        getDiary(){
            axios.get('/getDiary').then(res=>{
                this.diarys = this.diarys.concat(res.data);
            }).catch(err=>{
                console.log(err)
            })
        },
        // 滚动条在Y轴上的滚动距离
        getScrollTop(){
        　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        　　if(document.body){
        　　　　bodyScrollTop = document.body.scrollTop;
        　　}
        　　if(document.documentElement){
        　　　　documentScrollTop = document.documentElement.scrollTop;
        　　}
        　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        　　return scrollTop;
        },
        //  文档的总高度
        getScrollHeight(){
        　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        　　if(document.body){
        　　　　bodyScrollHeight = document.body.scrollHeight;
        　　}
        　　if(document.documentElement){
        　　　　documentScrollHeight = document.documentElement.scrollHeight;
        　　}
        　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        　　return scrollHeight;
        },
        //  浏览器视口的高度
        getWindowHeight(){
        　　var windowHeight = 0;
        　　if(document.compatMode == "CSS1Compat"){
        　　　　windowHeight = document.documentElement.clientHeight;
        　　}else{
        　　　　windowHeight = document.body.clientHeight;
        　　}
        　　return windowHeight;
        }
    },
    mounted() {
      window.addEventListener('scroll', this.menu);
    }
}
</script>
<style lang="scss">
.wt-content{
    display: flex;
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 16px;
    align-items: center;
    .star{
        height: 18px;
        width: 18px;
        margin-left: 10px;
        background: #fff;
        border-radius: 50%;
        border: solid 1px #CACACA;        
    }
    .imp{
        border: solid 1px #f14c4c;   
        background: #f14c4c;
    }
}
.write_texa{
    width: 100%;
    min-height: 105px;
    font-size: 16px;
    line-height: 32px;
    color: #5E5E5E;
    resize: none;
    word-break: break-all;
    padding: 20px 30px;
    outline-color: #fff;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(56,58,65,0.1);
}
</style>


