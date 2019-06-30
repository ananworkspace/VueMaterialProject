<template>
  <el-container>
    <el-header>
      <el-row type="flex" class="row-bg" justify="space-between" align="middle">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../assets/logo.png" alt>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <h1>电商后台管理系统</h1>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="welcom">
              <span>欢迎您！</span>
              <a href="#">退出</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
              <el-menu-item index="/user">
                  <i class="el-icon-menu"></i>
                  <span>用户列表</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>角色列表</span>
              </el-menu-item>
              <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商品管理</span>
            </template>
              <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>商品列表</span>
              </el-menu-item>
              <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>分数参数</span>
              </el-menu-item>
              <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>商品分类</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>订单管理</span>
            </template>
              <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>订单列表</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>数据统计</span>
            </template>
              <el-menu-item index="1-4-1">
                  <i class="el-icon-menu"></i>
                  <span>数据列表</span>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<style>
.el-container .el-header {
  padding: 0;
}
.el-header img {
  width: 200px;
  height: 50px;
}
.grid-content h1 {
  text-align: center;
}
.grid-content .welcom {
  text-align: right;
  padding-right: 25px;
  font-weight: 700;
}
.grid-content .welcom a {
  color: #a1a1a1;
  text-decoration: none;
}
.el-aside,.el-container{
    height: 100%;
}
.el-menu-vertical-demo{
    height: 100%;
}
.el-menu-vertical-demo ul{
    height: 100%;
}
</style>
