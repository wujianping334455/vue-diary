<template>
<div id="write">
     <el-row :gutter="24">
        <el-col :span="20" :offset="2">
            <div class="wt-content">
                <div class="date">日期：2018-05-24</div>
                <div class="star"></div>
            </div >
            <textarea name="" id="" cols="30" rows="10" placeholder="内容要求：1) 今日小结（必填）; 2) 明日计划（必填）; 3) 问题记录 ; 4) 求助／建议 。（1000字以内）" class="write_texa"></textarea>
        </el-col>
    </el-row>   
    <DFooter></DFooter>
</div>
</template>
<script>
import DFooter from './DFooter'
export default {
    name:'DWrite',
    components:{DFooter}
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
        cursor: pointer;
        height: 18px;
        width: 18px;
        margin-left: 10px;
        background: #fff;
        border-radius: 50%;
        border: solid 1px #CACACA;        
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
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(56,58,65,0.1);
}
</style>


