<template>
    <div class="acccls">
        <el-menu class="sidebar-el-menu " :default-active="onRoutes"  :collapse="collapse"
                 background-color="#2b3b4b"
                 text-color="rgb(255,255,255)"
                 style="width: 12.9%"
                 active-text-color="rgba(102,175,255)" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title" >
                            <i :class="item.icon"></i>&nbsp;<span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" :class="{tophome:item.title === '系统首页'}">
                        <i :class="item.icon"></i>&nbsp;<span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../apis/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-s-home',
                        index: 'a',
                        title: '系统首页'
                    },
                    {
                        icon: 'iconfont hlvy-icon-xueyuanguanliicon-',
                        index: 'b',
                        title: 'b页面'
                    },
                    {
                        icon: 'iconfont hlvy-icon-paikeguanliicon-',
                        index: 'datepaick',
                        title: '日历本'
                    },
                    {
                        icon: 'iconfont hlvy-icon-jiaowu',
                        index: '',
                        title: '地图',
                        subs: [
                            {
                                index: 'baiduMap',
                                title: '百度地图'
                            },
                            {
                                index: 'gaodeMap',
                                title: '高德地图'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .acccls{
        height: 100%;
    }
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
       width: 100%;
       height: 100%;
    }
    .sidebar > ul {
        height:100%;
    }
    .tophome{margin-top: 70px}
  /*  .tophome:after{
        margin-left: 6%;
        content: "(" attr(href) ")";
    }*/
</style>
