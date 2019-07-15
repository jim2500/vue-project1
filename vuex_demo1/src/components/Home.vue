 <template>
     <div>
         <h1>home</h1>
         <button @click="gotoMenu" class="btn btn-success">跳转</button>
     </div>
 </template>

 <script>
 export default {
     methods:{
        gotoMenu(){
            //指定跳转到上次浏览的页面
            //this.$router.go(-1)

            //指定跳转的地址
            //this.$router.replace('/menu')

            //指定跳转路由的名字下
            //this.$router.replace({name:'menuLink'})

            //通过push进行跳转，push可以传更多的参数
            //this.$router.replace('/menu')
            this.$router.push({name:'menuLink'})
        }
     }
 }
 </script>
 
 