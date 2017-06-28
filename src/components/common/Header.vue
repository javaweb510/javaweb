<template>
    <div class="header">
        <div class="logo">软件工程管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                session: {},                //?admin=0&username=lily&u=1&i=1&o=1
                username: ''
            }
        },
        mounted() {
            var url = window.location.href;
            if(url.split('?').length > 1) {
                var paramArr = url.split('?')[1].split('&');
                this.session[paramArr[0].split('=')[0]] = paramArr[0].split('=')[1];
                this.session[paramArr[1].split('=')[0]] = paramArr[1].split('=')[1];
                this.session[paramArr[2].split('=')[0]] = paramArr[2].split('=')[1];
                this.session[paramArr[3].split('=')[0]] = paramArr[3].split('=')[1];
                this.session[paramArr[4].split('=')[0]] = paramArr[4].split('=')[1];
                this.username = this.session.username;
                window.localStorage.setItem("session", window.JSON.stringify((this.session)));
            } else {
                this.username = window.JSON.parse(localStorage.getItem("session")).username;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
