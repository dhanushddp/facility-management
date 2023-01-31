import { mapActions, mapGetters } from "vuex"
import axios from 'axios'
import userCloseConfirmBox from '../components/userCloseConfirmBox.vue'
export default{
    name:"adminPortalCloseForm",
    data(){
        return {
            message1:"",
            formattedCreateDate:""
        }
    },
    components:{
        userCloseConfirmBox
    },
    computed:{
     ...mapGetters('adminStore',['retrieveAdminCommentFlagAction','retrieveAdminSelectedInfo']),
     ...mapGetters('userStore',['retrieveCloseConfirmBoxFlag'])

    },
    updated(){

    },
    methods:{
        ...mapActions('adminStore',['getAdminCommentFlagAction','getAdminRequestApi','getRequestCount']),
        ...mapActions('userStore',['getCloseConfirmBoxFlag']),
        commentAdminFlagActiontrue(){
            this.getAdminCommentFlagAction(true)
        },
        commentAdminFlagActionFalse(){
            this.getAdminCommentFlagAction(false)
        },
        Reviewed(){
            let review = "REVIEWED"
              console.log("reviewed")
              axios.put(`/one/issue/updateStatus?issueId=${this.retrieveAdminSelectedInfo.issueId}&status=${review}`).then((response)=>{
                console.log(response)
                axios.get(`/one/issue/viewAll`).then(
                    (response) => {
                        this.getAdminRequestApi(response.data.issues)
                    }
                ).catch((response) => {
                    console.log(response)
                }),
                axios.get(`http://10.30.1.12:8081/issue/getCount`).then(
                    (response)=>{
                        console.log("count",response.data)
                       this.getRequestCount(response.data)
                    }
                   ).catch((response)=>{
                    console.log(response)
                   })
               
              })
              this.getAdminCommentFlagAction(false)
              this.message1 = "REVIEWED "

              this.getCloseConfirmBoxFlag(true)
              setTimeout(() => {
                this.getCloseConfirmBoxFlag(false)

              }, 2000);


        },
        Completed(){
            let review = "COMPLETED"
            console.log("completed")
            axios.put(`/one/issue/updateStatus?issueId=${this.retrieveAdminSelectedInfo.issueId}&status=${review}`).then((response)=>{
                console.log(response)
                axios.get(`/one/issue/viewAll`).then(
                    (response) => {
                        this.getAdminRequestApi(response.data.issues)
                    }
                ).catch((response) => {
                    console.log(response)
                }),
                axios.get(`http://10.30.1.12:8081/issue/getCount`).then(
                    (response)=>{
                        console.log("count",response.data)
                       this.getRequestCount(response.data)
                    }
                   ).catch((response)=>{
                    console.log(response)
                   })
               
              })
            this.getAdminCommentFlagAction(false)
            this.message1 = "COMPLETED"

            this.getCloseConfirmBoxFlag(true)
            setTimeout(() => {
                this.getCloseConfirmBoxFlag(false)

              }, 2000);


        }
    }
}