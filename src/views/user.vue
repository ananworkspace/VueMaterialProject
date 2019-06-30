<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="username" label="姓名" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
    <el-table-column prop="mobile" label="手机号" ></el-table-column>
    <el-table-column label="用户状态" width="180">
      <template v-slot="{row}">
        <el-switch v-model="row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <el-button type="primary" plain size="mini">
        <i class="el-icon-edit"></i>
      </el-button>
      <el-button type="danger" plain size="mini">
        <i class="el-icon-delete"></i>
      </el-button>
      <el-button type="success" plain size="mini">
        <i class="el-icon-check"></i>
        <span>分配角色</span>
      </el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    axios({
      url: "http://localhost:8888/api/private/v1/users",
      method: "get",
      params: {
        pagenum: 1,
        pagesize: 5
      },
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res.data.data.users);
      if (res.status == 200) {
        this.tableData = res.data.data.users;
      }
    });
  }
};
</script>