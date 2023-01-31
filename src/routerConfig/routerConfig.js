import userPortalComponent from "../components/userPortalComponent.vue";
import VueRouter from "vue-router";
import loginComponent from "../components/loginComponent.vue";
import adminPortalComponent from "../components/adminPortalComponent.vue";

let routes = [{
    path:'/login',
    name:"loginComponent",
    component:loginComponent
},
{
    path:'/',
    name:"loginComponent",
    component:loginComponent
},
{
    path:'/userPortal',
    name:"userPortalComponent",
    component:userPortalComponent
},
{
    path:'/adminPortal',
    name:"adminPortalComponent",
    component:adminPortalComponent
}
]

const router = new VueRouter(
    {
        mode:"history",
        routes
    }
)
export default router

