<template>
  <el-container>
    <left-sidebar></left-sidebar>
  </el-container>
</template>
<script>
import leftSidebar from './left-sidebar'
export default {
  name: 'admin',
  components: { leftSidebar }
}
</script>
<style scoped>
.aside {
  padding: 0;
  border-right: 1px solid #eee;
  overflow-x: hidden;
}
.el-menu-vertical-demo {
  width: 100%;
  min-height: 100vh;
}
.menu li {
  text-align: center;
}
</style>
