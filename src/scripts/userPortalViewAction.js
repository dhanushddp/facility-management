import { mapActions, mapGetters } from "vuex"
import userCloseConfirmBox from '../components/userCloseConfirmBox.vue'
import axios from 'axios'

export default{
    name:"userPortalViewAction",
    data(){
        return {
            closeNot:false,
        }
    },
    components:{
        userCloseConfirmBox
    },
    computed:{
        ...mapGetters('userStore',['retrieveUserCommentFlagAction','retrieveUserSelectedInfo','retrieveCloseConfirmBoxFlag'])
    },
    methods:{
        ...mapActions('userStore',['getUserCommentFlagAction','getCloseConfirmBoxFlag','getRequestApi']),
        commentFlagActiontrue(){
            this.getUserCommentFlagAction(true)
        },
        commentFlagActionFalse(){
            this.getUserCommentFlagAction(false)
        },
        CloseRequest(){

            if(this.retrieveUserSelectedInfo.status=="COMPLETED")
            {
               axios.post(`http://10.30.1.12:8081/issue/close?issueId=${this.retrieveUserSelectedInfo.issueId}`).then(()=>{
                axios.get(`http://10.30.1.12:8081/issue/viewIssuesByAssigneeId/${this.retrieveUserSelectedInfo.assigneeUserId}`).then(
                    (response)=>{
                       console.log(response)
                        this.getRequestApi(response.data.issues)
                    }
                ).catch((response)=>{
                    console.log(response)
                })
               })
               this.getCloseConfirmBoxFlag(true)
               setTimeout(() => {
                this.getCloseConfirmBoxFlag(false)
              }, 2000);
               this.getUserCommentFlagAction(false)

            }
            else{
                this.closeNot=true
                setTimeout(() => {
                    this.closeNot=false
                }, 2000);
            }
            console.log("Request closed")
            console.log(this.retrieveUserSelectedInfo)

        }
        
    }
}