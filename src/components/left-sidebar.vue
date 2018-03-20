<template>
  <el-aside width="200px" class="aside">
    <el-menu class="el-menu-vertical-demo" router>
      <el-submenu class="menu" index="user">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item :route="{path:'/admin/user/add'}" index="addUser">添加用户</el-menu-item>
        <el-menu-item :route="{path:'/admin/user'}" index="listUser">查看用户</el-menu-item>
      </el-submenu>
      <el-submenu class="menu" index="article">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">文章管理</span>
        </template>
        <el-menu-item :route="{path:'/admin/article/add'}" index="addArticle">添加文章</el-menu-item>
        <el-menu-item :route="{path:'/admin/article'}" index="listArticle">编辑文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {}
</script>
<style scoped>
.aside {
  padding: 0;
  border-right: 1px solid #eee;
}
.el-menu-vertical-demo {
  width: 100%;
  min-height: 100vh;
}
.menu li {
  text-align: center;
}
</style>
