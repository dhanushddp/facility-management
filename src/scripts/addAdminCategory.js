import { mapActions, mapGetters } from "vuex"
import axios from 'axios'

export default{
    name:"addAdminCategory",
    data(){
        return {
            category:"",
            pleaseAdd:false
        }
    },
    computed:{
        ...mapGetters('adminStore',['retrieveAddCategoryFlag'])
    },
    methods:{
        ...mapActions('adminStore',['getAddCategoryFlag','getCategoriesAdmin']),
        commentAddFlagTrue(){
            this.getAddCategoryFlag(true)
        },
        commentAddFlagFalse(){
            if(this.category){
                axios.post(`/one/issue/addCategory?category=${this.category}`).then(()=>{
                    axios.get(`http://10.30.1.12:8081/issue/getCategories`).then((response)=>
                    {
                        console.log(response.data)
                        this.getCategoriesAdmin(response.data)
                        window.location.reload();
    
    
                    })
                })
    
                this.getAddCategoryFlag(false)
            }else{
                this.pleaseAdd=true
                
            }
           
        },
        closeCategory(){
            this.getAddCategoryFlag(false)

        }
    }
}