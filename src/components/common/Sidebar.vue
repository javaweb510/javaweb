<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                session: {},
                items: [{
                    index: 'readme',
                    title: '主页'
                },
                {
                    index: 'personinfo',
                    title: '个人信息管理'
                }
//                    {
//                        icon: 'el-icon-setting',
//                        index: 'readme',
//                        title: '自述'
//                    },
//                    {
//                        icon: 'el-icon-menu',
//                        index: '2',
//                        title: '表格',
//                        subs: [
//                            {
//                                index: 'basetable',
//                                title: '基础表格'
//                            },
//                            {
//                                index: 'vuetable',
//                                title: 'Vue表格组件'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-date',
//                        index: '3',
//                        title: '表单',
//                        subs: [
//                            {
//                                index: 'baseform',
//                                title: '基本表单'
//                            },
//                            {
//                                index: 'vueeditor',
//                                title: '编辑器'
//                            },
//                            {
//                                index: 'markdown',
//                                title: 'markdown'
//                            },
//                            {
//                                index: 'upload',
//                                title: '文件上传'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-star-on',
//                        index: 'basecharts',
//                        title: '图表'
//                    },
//                    {
//                        icon: 'el-icon-upload2',
//                        index: 'drag',
//                        title: '拖拽'
//                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        mounted() {
            this.session = window.JSON.parse(localStorage.getItem("session"));
            if(this.session.admin == 0) {       // superAdmin
                this.items.push({
                    index: 'itermbase',
                    title: '设置学期基点'
                });
                this.items.push({
                    index: 'userinfo',
                    title: '用户信息管理'
                });
            } else if(this.session.admin == 1) {      // admin
                this.items.push({
                    title: '监考管理',
                    index: 'examadmin',
                });
                this.items.push({
                    title: '任务管理',
                    index: 'taskadmin'
                });
            } else if(this.session.admin == 2) {                  // teacher
                this.items.push({
                    title: '监考信息',
                    index: 'examinfo',
                });
                this.items.push({
                    title: '任务信息',
                    index: 'taskinfo',
                });
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
