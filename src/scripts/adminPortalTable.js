import { mapActions, mapGetters } from "vuex"
import axios from 'axios'
export default{
    name:"adminPortalTable",
    data(){
        return{
        }
    },
    computed:{
       ...mapGetters('adminStore',['retrieveAdminCommentFlag','retrieveAdminRequestApi','retrievePageNumber'])
    },
    methods:{
        ...mapActions('adminStore',['getAdminRequestApi','getAdminCommentFlag','getAdminCommentFlagAction','getAdminSelectedInfo','getNextPageNumber','getBackPageNumber']),
        commentAdminFlagTrue(data){
             this.getAdminCommentFlag(true)
             this.getAdminSelectedInfo(data)

        },
        commentAdminFlagAction(data){
            this.getAdminCommentFlagAction(true)
            this.getAdminSelectedInfo(data)
        },
        NextPagination(){

             this.getNextPageNumber()
             axios.get(`/one/issue/details/${this.retrievePageNumber}`).then((res)=>{
                this.getAdminRequestApi(res.data)
                  console.log(res)
             })
             console.log(this.retrievePageNumber)
        },
        BackPagination(){
            if(this.retrievePageNumber!=0)
            {
                this.getBackPageNumber()
                axios.get(`/one/issue/details/${this.retrievePageNumber}`).then((res)=>{
                    this.getAdminRequestApi(res.data)
                      console.log(res)
                 })
                 console.log(this.retrievePageNumber)
                console.log(this.retrievePageNumber)
            }
       

        }

    }
}