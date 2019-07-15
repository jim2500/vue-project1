<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
             <router-link tag="li" class="nav-link" :to="{name:'contacterLink'}">
                <!-- ?为啥还用a标签,且不用href属性,list-group-item list-group-item-action什么意思 -->
                <a class="list-group-item list-group-item-action">联系人</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'phoneLink'}">
                <a class="list-group-item list-group-item-action">电话号码</a>
            </router-link>
            <router-link tag="li" class="nav-link" :to="{name:'adressLink'}">
                <a class="list-group-item list-group-item-action">地址</a>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
