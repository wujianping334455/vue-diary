<template>
    <div class="foo-content">
        <el-row :gutter="24">
            <el-col :span="20" :offset="2">
                <button class="list">列表</button>
                <button class="save">保存</button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'DFooter'
}
</script>
<style lang="scss" scoped>
.foo-content{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: solid 1px #ddd;
    background-color: #fff;
    box-shadow: 0px -2px 5px #ddd;
    .el-col{
        align-items: center;
        height: 60px;
        display: flex;
        button{
            height: 30px;
            width: 80px;
            color: #ffffff;
            border-radius:15px;
            text-align: center;
            outline: none;
            cursor: pointer;
            &:active{
                border: solid 1px #ddd;
            }
        }
        .list{
            margin-right: 20px;
            background-color: #DE6862;
            border: solid 1px #DE6862;
        }
        .save{
            background-color: #66A7E6;
            border: solid 1px #66A7E6;
        }        
    }
}
</style>

