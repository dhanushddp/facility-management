import { mapActions, mapGetters } from "vuex"
import axios from 'axios'
import userPortalRequestTable from "../components/userPortalRequestTable.vue"
import userPortalRequestForm from "../components/userPortalRequestForm.vue"
import userPortalComment from "../components/userPortalComment.vue"
import userPortalViewAction from '../components/userPortalViewAction.vue'
import submittedForm from '../components/submittedForm.vue'
import userProfile from '../components/userProfile.vue'
import userCloseConfirmBox from '../components/userCloseConfirmBox.vue'
export default{
    name:"userPortalComponent",
    data(){
        return{
             message:false,
             userId:this.$route.query.id,
             userData:{}
        }
    },
   
      mounted(){
           axios.get(`http://10.30.1.12:8081/issue/viewIssuesByAssigneeId/${this.userId}`).then(
            (response)=>{
               console.log(response)
                this.getRequestApi(response.data.issues)
            }
        ).catch((response)=>{
            console.log(response)
        })
       
            axios.get(`http://10.30.1.12:8081/issue/getCategories`).then((response)=>
            {
                console.log(response.data)
                this.getCategories(response.data)
            }).catch((response)=>{
                console.log(response)
            })

            axios.get(`http://10.30.1.12:8080/user/viewByUserId?userId=${this.userId} `).then((response)=>{
                this.userData = response.data.userData
                this.getUserPersonalInfo(this.userData)
            })
    
    },
    components:{
        userPortalRequestTable,
        userPortalRequestForm,
        userPortalComment,
        userPortalViewAction,
        submittedForm,
        userProfile,
        userCloseConfirmBox
        
        
    },
    computed:{
        ...mapGetters('userStore',['retrieveUserInfo','retrieveFormFlag','retrieveRequestApi','retrieveCategories','retrieveUserProfileFlag'])
    },
    methods:{
        ...mapActions('userStore',['addFormFlag','getRequestApi','getCategories','getUserProfileFlag','getUserPersonalInfo']),
        show(){
            this.$router.push('/login')
        },
        addForm(){
             this.addFormFlag(true)
             console.log(this.userId)
        },
        userProfileShow(){
            this.getUserProfileFlag(true)
        },
        home(){ 
               window.location.reload();

        }
        
    }
}