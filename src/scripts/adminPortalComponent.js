import { mapActions, mapGetters } from "vuex"
import axios from 'axios'
import adminPortalTable from "../components/adminPortalTable.vue"
import adminPortalComment from '../components/adminPortalComment.vue'
import adminPortalCloseForm from '../components/adminPortalCloseForm.vue'
import addAdminCategory from '../components/addAdminCategory.vue'

export default{
    name:"adminPortalComponent",
    data(){
        return {
             adminId:this.$route.query.id,
             adminName:this.$route.query.name
        }
    },
    mounted(){
       axios.get(`http://10.30.1.12:8081/issue/viewAll`).then(
        (response)=>{
           this.getAdminRequestApi(response.data.issues)
        }
       ).catch((response)=>{
        console.log(response)
       }),

       axios.get(`http://10.30.1.12:8081/issue/getCount`).then(
        (response)=>{
            console.log("count",response.data)
           this.getRequestCount(response.data)
        }
       ).catch((response)=>{
        console.log(response)
       }),
       axios.get(`http://10.30.1.12:8081/issue/getCategories`).then((response)=>
       {
           console.log(response.data)
           this.getCategoriesAdmin(response.data)
       }).catch((response)=>{
           console.log(response)
       })




    },
    computed:{ 
        ...mapGetters('adminStore',['retrieveAdminInfo','retrieveAdminRequestApi','retrieveRequestCount','retrieveAddCategoryFlag','retrieveCategoriesAdmin']),
       
    },
    components:{
        adminPortalTable,
        adminPortalComment,
        adminPortalCloseForm,
        addAdminCategory
    },
    methods:{
        ...mapActions('adminStore',['getAdminRequestApi','getRequestCount','getAddCategoryFlag','getCategoriesAdmin']),
        categoryInfo:function(event){
            console.log(event)
            const categoryInfo=event.target.value;
        axios.get(`http://10.30.1.12:8081/issue/viewByCategories?category=${categoryInfo}`).then((res)=>{
            this.getAdminRequestApi(res.data.issues)
        }).catch((res)=>{
            console.log(res)
        })
       },
        show(){
            this.$router.push('/login')
        },
        addCat(){
            this.getAddCategoryFlag(true)
        },
        filterByOpen(){
            axios.get(`http://10.30.1.12:8081/issue/viewByStatus?status=OPEN`).then((response)=>{
                this.getAdminRequestApi(response.data.issues)

            }).catch((res)=>{
                console.log(res)
            })
        },
        filterByReview(){
            axios.get(`http://10.30.1.12:8081/issue/viewByStatus?status=REVIEWED`).then((response)=>{
                this.getAdminRequestApi(response.data.issues)

            }).catch((res)=>{
                console.log(res)
            })
        },
        filterByComplete(){
            axios.get(`http://10.30.1.12:8081/issue/viewByStatus?status=COMPLETED`).then((response)=>{
                this.getAdminRequestApi(response.data.issues)

            }).catch((res)=>{
                console.log(res)
            })
        },
        filterByOverdue(){
            axios.get(`http://10.30.1.12:8081/issue/viewByStatus?status=OVERDUE`).then((response)=>{
                this.getAdminRequestApi(response.data.issues)

            }).catch((res)=>{
                console.log(res)
            })
        },
        slaFilter:function(event){
            console.log(event)
            const slaFilter=event.target.value;
        axios.get(`/one/issue/viewByPriority?priority=${slaFilter}`).then((res)=>{
            this.getAdminRequestApi(res.data.issues)
        }).catch((res)=>{
            console.log(res)
        })
        },
        all(){
            axios.get(`http://10.30.1.12:8081/issue/viewAll`).then(
                (response)=>{
                   this.getAdminRequestApi(response.data.issues)
                }
               ).catch((response)=>{
                console.log(response)
               })
        },
        refresh(){
            window.location.reload();

        }
    }
}