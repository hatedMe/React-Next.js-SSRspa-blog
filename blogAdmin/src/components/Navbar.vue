<template>
    <div class="app-wrapper">
        <div class='menu-wrapper sidebar-container'>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">

                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        文章管理
                    </template>
                    <router-link to="../articlemanagement/editor">
                        <el-menu-item index="1-1">发布文章</el-menu-item>
                    </router-link>
                    <router-link to="../articlemanagement/articleList"><el-menu-item index="1-2">文章列表</el-menu-item></router-link>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        分类管理
                    </template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-share"></i>
                        管理员
                    </template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        系统设置
                    </template>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="main-container">
            <section class="app-main" style="min-height: 100%">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </section>
        </div>
    
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style scoped>
.app-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    
}
.app-wrapper::after{
    content: "";
        display: table;
        clear: both;
}
.sidebar-container {
    -webkit-transition: width 0.28s ease-out;
    transition: width 0.28s ease-out;
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
    background-color: #eef1f6;
}

.main-container {
    min-height: 100%;
    -webkit-transition: margin-left 0.28s ease-out;
    transition: margin-left 0.28s ease-out;
    margin-left: 180px;
}
a{ text-decoration: none;}
/* .el-submenu .el-menu {
    background-color: #1f2d3d;
}
.el-menu{    background-color: #324157;} */
</style>
