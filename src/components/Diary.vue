<template>
  <div id="app">
    <el-container>
      <el-header>
        <DHeader></DHeader>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <button class="feedback" @click="showFeedback">反馈</button>
    <el-dialog title="反馈意见" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item  prop="desc">
          <textarea name="" id="" class="feedback_textarea" v-model="form.desc"  ></textarea>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import DHeader from './DHeader';
import {mapGetters,mapMutations} from 'vuex';
import axios from 'axios';
export default {
  name: 'Diary',
  data(){
    return{
      dialogFormVisible : false,
      formLabelWidth: '120px',
      form: {
        desc: ''
      }
    }
  },
  created(){
    axios.get('/static/data/depart.json',{}).then(res=>{
        if(res.status == 200){
          let departs = res.data;
          departs.length && departs.map(item =>{
            // 提交数据
            this.$store.commit('topClick',item);
          });
        }
    }).catch(err=>{
      console.log(err);
    })    
  },
  methods:{
    showFeedback(){
      this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  components:{DHeader}
}
</script>

<style lang="scss" scoped>
.el-header{
  background: #66A7E6;
}
.el-main{
  padding: 0 20px;
  overflow:hidden;
}
.el-footer{
  margin:0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: solid 1px #ddd;
  z-index: 1;
  background-color: #ffffff;
}
.feedback{
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 150px;
  width: 30px;
  height: 60px;
  color: #5E5E5E;
  outline: none;
  padding: 0 5px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(56,58,65,0.1);
  &:active{
    transform: scale(.95)
  }
}
.el-form-item{
  margin-bottom: 0;
}
.feedback_textarea{
  min-height: 200px;
  height: auto;
  width: 100%;
  box-sizing: border-box;
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
  box-shadow: 0px 2px 10px rgba(56, 58, 65, 0.5);  
}
</style>
