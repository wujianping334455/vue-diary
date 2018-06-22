<template>
    <el-row :gutter="24">
        <el-col :span="20" :offset="2">
            <div id="department">
              <div class="list-content" v-for="(depart,index) in list" :key="index" @click="listDepart(depart)">
                {{depart.name}}
              </div>                          
            </div>
            <div id="person">
              <div class="list-person" v-for="(user,index) in users" :key="index" @click="listUser(user)">
                <el-row :gutter="24">
                  <el-col :span="12" class="person-item">
                    <div class="name-img">
                      {{user.name}}
                      <div class="tar-count">{{user.count}}</div>
                    </div>
                    <div class="person-info">
                      <div class="person-name">{{user.name}}</div>
                      <div class="person-position">{{user.position}}</div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="person-pro">
                      <div class="pro-100">
                        <div class="pro-pre"></div>
                      </div>
                      <div class="pro-count">{{user.precount}}%</div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex';
import { Buried } from '@/decorators';
import axios from 'axios';
export default {
  data () {
    return {
      users: []
    }
  },
  computed : mapGetters(['list']),
  @Buried methods:{
    _$init(){},
    listDepart(item){
      // axios加载用户信息
      if(item.parentid){
        // 获取用户信息 
        axios.get('/getUser',{item}).then(res=>{
          // 提交数据
          this.$store.commit('topClick',item);
          // user
          this.users = res.data;
        }).catch(err=>{
          console.log(err);
        })
      }
    }
    ,listUser(user){
      // 改变头部数据
      this.$store.commit('listUser',user);
      // 跳转到日志页面
      this.$router.push('/diary/'+user.id);
    }
  },
  mounted() {
    this._$init();
  }
}
</script>
<style scoped lang='scss'>
.list-content{
  color: #666666;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px #d8d8d8;
  cursor: pointer;
  padding: 0 10px;
  transition:padding 0.3s linear;
  &:hover{
    padding: 5px 10px;
    border-left: solid 1px #d8d8d8;
    border-right: solid 1px #d8d8d8;
    background-color: rgba(102,167,230,0.1);
  }
}
.list-person{
  color: #666666;
  font-size: 18px;
  height: 80px;
  border-bottom: solid 1px #d8d8d8;
  cursor: pointer;
  padding: 0 10px;
  &:hover{
    border-left: solid 1px #d8d8d8;
    border-right: solid 1px #d8d8d8;
    background-color: rgba(102,167,230,0.1);
  }
  .person-item{
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 50px;
    margin: 15px 0;
    .name-img{
      position: relative;
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      color: #fff;
      background-color: #4d81b3;
      border: solid 1px #4d81b3;
      border-radius:50%;
      .tar-count{
        position: absolute;
        top: -11px;
        right: 0;
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        color: #fff;
        font-size: 10px;
        background-color: #f14908;
        border: solid 1px #fff;
        border-radius:50%;
      }
    }
    .person-info{
      height: 50px;
      margin-left: 20px;
      .person-name{
        height: 30px;
        line-height: 30px;
      }
      .person-position{
        height: 20px;
        line-height: 20px;
        color: #3C3C3C;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .person-pro{
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 50px;
    margin: 15px 0;
    .pro-100{
      position: relative;
      width: 200px;
      height: 30px;
      background-color: #ddd;
      border-radius:15px; 
      .pro-pre{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #ddd;
        width: 20%;
        background: #F7B55D;
        height: 30px;
        border-radius:15px; 
      }
    }
    .pro-count{
      margin-left: 20px;
    }
  }
}
</style>
