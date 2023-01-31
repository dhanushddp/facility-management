import { mapActions, mapGetters } from "vuex"
import axios from "axios"

export default{
    name:"userRequestRequestForm",
    data(){
        return{
            requestDetails:{
                type:"",
                category:"",
                sla:"",
                description:"",
                assigneeUserId:this.userId
            },
            isType:false
        }
    },
    props:{
        userId:{
         type:String,}

    },
    
    computed:{
        ...mapGetters('userStore',['retrieveFormFlag','retrieveRequests','retrieveUserInfo','retrieveCategories','retrievethankMessage'])
    },
    methods:{
        ...mapActions('userStore',['addFormFlag','getRequest','thankMessage','getRequestApi']),
        closeForm(){
             this.addFormFlag(false)
        },
         submitForm(){
            if(this.requestDetails.type && this.requestDetails.category && this.requestDetails.sla && this.requestDetails.description){
               this.getRequest(this.requestDetails)
               this.addFormFlag(false)
               this.thankMessage(true)
               setTimeout(() => {
                this.thankMessage(false)

               }, 2000);

               console.log(this.requestDetails)
               

             axios.post(`/one/issue/add`,this.requestDetails).then((response)=>{
                console.log(response)
                axios.get(`/one/issue/viewIssuesByAssigneeId/${this.userId}`).then(
                    (response)=>{
                       console.log(response)
                        this.getRequestApi(response.data.issues)
                    }
                ).catch((response)=>{
                    console.log(response)
                })
             }).catch((response)=>{
                console.log(response)
             })
            }
            else{
              this.isType=true
            }
        }
    }
}