import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/readme'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/itermbase',
                    component: resolve => require(['../components/page/ItermBase.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/personinfo',
                    component: resolve => require(['../components/page/PersonInfo.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/userinfo',
                    component: resolve => require(['../components/page/UserInfo.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/examadmin',
                    component: resolve => require(['../components/page/ExamAdmin.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/examinfo',
                    component: resolve => require(['../components/page/ExamInfo.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/taskinfo',
                    component: resolve => require(['../components/page/TaskInfo.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/taskadmin',
                    component: resolve => require(['../components/page/TaskAdmin.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve)
        },
    ]
})
