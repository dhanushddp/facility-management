import { mapActions, mapGetters } from "vuex"
import axios from 'axios'
import userCloseConfirmBox from '../components/userCloseConfirmBox.vue'
export default{
    name:"userPortalRequestTable",
    data(){
        return{
            isNoRequests:false,
            deleteMessage:""
        
        }
    },
    components:{
        userCloseConfirmBox
    },
    computed:{
        ...mapGetters('userStore',['retrieveUserCommentFlag','retrieveRequestApi','retrieveUserSelectedInfo']),
        ...mapGetters('userStore',['retrieveCloseConfirmBoxFlag'])

    },
    methods:{
        ...mapActions('userStore',['getUserCommentFlag','getUserCommentFlagAction','getUserSelectedInfo']),
        ...mapActions('userStore',['getCloseConfirmBoxFlag','getRequestApi']),

        commentFlagTrue(data){
            this.getUserCommentFlag(true)
            this.getUserSelectedInfo(data)

        },
        commentFlagActionTrue(data){
             this.getUserCommentFlagAction(true)
             this.getUserSelectedInfo(data)
        },
        deleteRequest(data){
           if(data.status=="OPEN")
           {
            this.deleteMessage="Deleted"
            this.getCloseConfirmBoxFlag(true)
           
            axios.delete(`/one/issue/deleteIssue?issueId=${data.issueId}`).then(()=>{
               
                
                // axios.get(`/two/issue/viewIssuesByAssigneeId/${this.retrieveUserSelectedInfo.assigneeUserId}`).then(
                //     (response)=>{
                //         this.getRequestApi(response.data.issues)

                //     }
                // )
            })
            setTimeout(() => {
                this.getCloseConfirmBoxFlag(false)
                window.location.reload();


            }, 2000);
            console.log(this.retrieveRequestApi,"sacsc")
            console.log("Request Deleted")
           }

           
        
        }
    }
}