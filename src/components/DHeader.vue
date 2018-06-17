<template>
    <el-row :gutter="24">
        <el-col :span="20" :offset="2">
            <div class="head-content">
                <div class="head-item" v-for="(topInfo,index) in topInfos" :key="index" @click="topClick(topInfo)">
                    <div class="com-name" :class="topInfo.position?'com-user':''">{{topInfo.name}}</div>
                    <div class="com-jian" v-if="index!==topInfos.length-1">></div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';
import axios from 'axios';
let depart;
export default {
    data(){
        return{
            departs:[]
        }
    },
    computed:mapGetters(['topInfos']),
    created(){},
    mounted(){},
    methods:{
        topClick(topInfo){
            // 点击的是人员
            if(topInfo.position){return;}
            // 点击的是部门
            this.$store.commit('topClick',topInfo);
            let path = this.$route.path;
            if(path.includes('/diary/')){
                // 日志界面--需跳转回 部门列表页面
                this.$router.push('/list');
            }else{// 部门列表界面

            }
        },
        getDepart(departs,id){
            for(let i =0;i<departs.length;i++){
                let item = departs[i];
                if(id == item.id){
                    depart =  item;
                    break;
                }else{
                    if(item.departmentList){
                        this.getDepart(item.departmentList,id);
                    }
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.head-content{
    display: flex;
    min-height: 60px;
    font-style: normal;
    color: #CACACA;
    font-size: 18px;
    height: 60px;
    line-height: 60px;    
    .head-item {
        display: flex;
        align-content: center;
        .com-name{
            cursor: pointer;
            &:hover{
                color: #ffffff;
            }
        }
        .com-user{
            cursor: default;
            &:hover{
                color: #CACACA;
            }
        }
        .com-jian{
            padding: 0 10px;
        }
    }
}
</style>


