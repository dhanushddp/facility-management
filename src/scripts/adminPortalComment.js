import { mapActions, mapGetters } from "vuex"
import axios from 'axios'
export default{
    name:"adminPortalComment",
    data(){
        return{
         comment:""
        }
    },
    computed:{
        ...mapGetters('adminStore',['retrieveAdminCommentFlag','retrieveAdminSelectedInfo'])
    },
    methods:{
        ...mapActions('adminStore',['getAdminCommentFlag','getAdminRequestApi']),
        commentAdminFlagTrue(){
            this.getAdminCommentFlag(true)
        },
        commentAdminFlagFalse(){
            this.getAdminCommentFlag(false)
        },
        postComment(){
            if(this.comment)
            {
                let id = this.retrieveAdminSelectedInfo.issueId;
                axios.put(`/one/issue/addComment?issueId=${id}&comment=${this.comment}`).then(
                    (response)=>{
                        console.log(response)
                        axios.get(`/one/issue/viewAll`).then(
                            (response) => {
                                this.getAdminRequestApi(response.data.issues)
                            }
                        ).catch((response) => {
                            console.log(response)
                        })
                    }
                ).catch(
                    (response)=>{
                        console.log(response)
                    }
                )
           
                this.getAdminCommentFlag(false)
                window.location.reload();
            }
            




        }
    }
}