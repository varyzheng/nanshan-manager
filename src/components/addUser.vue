<template>
  <el-container>
    <left-sidebar></left-sidebar>
    <el-main>
      <div class="title">添加用户</div>
      <user-form></user-form>
    </el-main>
  </el-container>
</template>
<script>
import leftSidebar from './left-sidebar'
import userForm from './userForm'
export default {
  name: 'addUser',
  components: { leftSidebar, userForm }
}
</script>
<style scoped>
.title {
  font-size: 30px;
  margin-bottom: 30px;
}
</style>
