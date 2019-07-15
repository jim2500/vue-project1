<template>
    <header>
        <!-- class中设置了导航栏背景的基本样式 :中文文档中的components中的navbar，
        复制其中的背景nav class="navbar navbar-expand-lg navbar-light bg-light"-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- 导航栏中的矢量图：实例中product，右键查看源代码，复制a标签的内容，粘贴如下 -->
            <a class="py-2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto">
                <circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94">
                </line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06">
                </line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16">
                </line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
            </a>
            <a href="/" class="navbar-brand">Pizza点餐系统</a>
            <!-- 水平导航 -->
            <ul class="navbar-nav">
                <!-- nav-link是取消前面的点 -->
                
                <!--router-link标签默认是a标签，tag标签可以修改默认标签 
                <li><router-link tag="div" to="/" class="nav-link">主页</router-link></li> -->

                <!-- to可以绑定动态路由地址 
                <li><router-link :to="homeLink" class="nav-link">主页</router-link></li>-->
                
                <!-- 利用路由名绑定 -->
                <!-- <li><router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link></li> -->

                <li><router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link></li>
                <li><router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link></li>
                <li><router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link></li>
                <li><router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link></li>            
            </ul>
            
            <!-- ml-auto目的是使ul位置在右边 -->
            <ul class="navbar-nav ml-auto">
                <li><router-link :to="{name:'loginLink'}" class="nav-link">登陆</router-link></li>
                <li><router-link :to="{name:'registerLink'}" class="nav-link">注册</router-link></li>          
            </ul>
        </nav>
        
    </header>
</template>

<script>
export default {
    data(){
        return{
            homeLink:'/'
        }
    }
}
</script>

