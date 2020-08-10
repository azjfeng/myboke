
import Test from './src/components/test.vue'
import Home from './src/components/home.vue'
const routers = [
    {
        path:'/',component:Home
    },
    {
        path:'/home',component:Home
    },
    {
        path:'/test/:id',component:Test
    },
]

export default routers