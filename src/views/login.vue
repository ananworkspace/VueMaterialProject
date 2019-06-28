<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :span="6">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>


<script>
import axios from "axios"
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "请输入6至12位数字", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
              url:"http://localhost:8888/api/private/v1/login",
              method:"post",
              data:this.ruleForm
          }).then(({data:{data,meta}})=>{
              if(meta.status==200){
                //   将令牌token存入localstorage中
                  localStorage.getItem("token",data.token)
                //   跳转至home页面
                  this.$router.push("/home")
              }
            console.log(data)
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
    .row-bg{
        height: 100%;
        background: skyblue;
    }
    .demo-ruleForm{
        background-color: #fff;
        padding: 40px 20px; 
    }
</style>
