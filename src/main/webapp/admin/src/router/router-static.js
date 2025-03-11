import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
    import kaoshi from '@/views/modules/kaoshi/list'
    import kaoshiYuyue from '@/views/modules/kaoshiYuyue/list'
    import kecheng from '@/views/modules/kecheng/list'
    import kechengYuyue from '@/views/modules/kechengYuyue/list'
    import liuyan from '@/views/modules/liuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import jiaolian from '@/views/modules/jiaolian/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryKaoshi from '@/views/modules/dictionaryKaoshi/list'
    import dictionaryKaoshiYuyue from '@/views/modules/dictionaryKaoshiYuyue/list'
    import dictionaryKecheng from '@/views/modules/dictionaryKecheng/list'
    import dictionaryKechengYuyueYesno from '@/views/modules/dictionaryKechengYuyueYesno/list'
    import dictionaryKemu from '@/views/modules/dictionaryKemu/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'

    import adminexam from '@/views/modules/exampaper/exam'




//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
	  ,{
	      path: '/adminexam',
	      name: 'adminexam',
	      component: adminexam,
	      meta: {icon:'', title:'adminexam'}
	    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryKaoshi',
        name: '考试类型',
        component: dictionaryKaoshi
    }
    ,{
        path: '/dictionaryKaoshiYuyue',
        name: '预约状态',
        component: dictionaryKaoshiYuyue
    }
    ,{
        path: '/dictionaryKecheng',
        name: '课程类型',
        component: dictionaryKecheng
    }
    ,{
        path: '/dictionaryKechengYuyueYesno',
        name: '预约状态',
        component: dictionaryKechengYuyueYesno
    }
    ,{
        path: '/dictionaryKemu',
        name: '科目',
        component: dictionaryKemu
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷表',
        component: exampaper
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '考试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/kaoshi',
        name: '考试',
        component: kaoshi
      }
    ,{
        path: '/kaoshiYuyue',
        name: '考试预约',
        component: kaoshiYuyue
      }
    ,{
        path: '/kecheng',
        name: '课程',
        component: kecheng
      }
    ,{
        path: '/kechengYuyue',
        name: '课程预约',
        component: kechengYuyue
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/yonghu',
        name: '学员',
        component: yonghu
      }
    ,{
        path: '/jiaolian',
        name: '教练',
        component: jiaolian
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
