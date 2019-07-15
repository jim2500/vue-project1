 <template>
     <div>
         <!--? 有个疑问，row mb-5,col-4什么意思 -->
         <div class="row mb-5">
            <div class="col-4">
            <!-- 导航 -->
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                        <!-- ?为啥还用a标签,且不用href属性,样式问题.list-group-item list-group-item-action什么意思 -->
                        <a class="list-group-item list-group-item-action">历史订单</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
                        <a class="list-group-item list-group-item-action">联系我们</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
                        <a class="list-group-item list-group-item-action">快递信息</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'oderingGuideLink'}">
                        <a class="list-group-item list-group-item-action">点餐文档</a>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
            <!-- 导航对应的内容 -->
                <router-view></router-view>
            </div>
         </div>
     </div>
 </template>
 