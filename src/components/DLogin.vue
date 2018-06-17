<template>
    <div id="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"   class="demo-ruleForm">
            <div class="login_title">
                <span>管理员登录</span>
            </div>
            <el-form-item label="用户名：" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item> 
            <el-form-item label="性别：" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>                      
            <el-form-item label="所属部门：" prop="department">
                <el-select v-model="ruleForm.department" placeholder="请选择所属部门" style="width: 100%;">
                    <el-option label="研发部" value="yanfabu"></el-option>
                    <el-option label="人事部" value="renshibu"></el-option>
                    <el-option label="营销部" value="yingxiaobu"></el-option>
                    <el-option label="总经办" value="zongjingban"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选填资料：" prop="delivery">
                <el-switch v-model="ruleForm.delivery" @change="selectInfo"></el-switch>
            </el-form-item>
            <div v-show="ruleForm.delivery">
                <el-form-item label="出生日期：">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="兴趣爱好：" prop="hobby">
                    <el-checkbox-group v-model="ruleForm.hobby">
                        <el-checkbox label="音乐" name="hobby"></el-checkbox>
                        <el-checkbox label="球类" name="hobby"></el-checkbox>
                        <el-checkbox label="书法" name="hobby"></el-checkbox>
                        <el-checkbox label="登山" name="hobby"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其他：" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
            </div>
            <el-form-item class="btn">
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isShowSelectInfo : false,
            ruleForm: {
                name: '',
                password: '',
                sex: '',
                department: '',
                delivery: false,
                date1: '',
                hobby: [],
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                department: [
                    { required: true, message: '请选择所属部门', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 登陆
                    let param = this.ruleForm;
                    axios.post('/login',param).then(res=>{
                        let resObj = res.data.resObj;
                        if(resObj.status == 200){
                            this.$router.push('/list')
                        }
                    }).catch(err=>{

                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        selectInfo(e){
            console.log(e);
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
  }
</script>
<style lang="scss" scoped>
#login{
    position: fixed;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-size: 16px;
    background-repeat: no-repeat;
    background-position: left top;
    background-color: #242645;
    color: #fff;
    font-family: 'Source Sans Pro';
    background-size: 100% 100%;
    background-image: url(/static/img/login_bj.jpg);
    .demo-ruleForm{
        box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
        opacity: 1;
        top: 50%;
        transition-property: transform,opacity,box-shadow,top,left;
        transition-duration: .5s;
        transform-origin: 161px 100%;
        transform: translateY(-50%);
        position: relative;
        width: 300px;
        height: auto;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        padding: 40px 40px 40px 40px;
        background: #35394a;
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #35394a), color-stop(100%, rgb(0, 0, 0)));
        background: -webkit-linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
        .login_title{
            color: #D3D7F7;
            height: 60px;
            text-align: left;
            font-size: 20px; 
            text-align: center;           
        }
        .el-checkbox {
            margin-right: 10px;
        }
        .btn{
            display: flex;
            justify-content: space-between;
            margin-left: 0;
            .el-button{
                padding: 12px 20px;
            }
        }
    }     
}
</style>

