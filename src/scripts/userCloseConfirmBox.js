import { mapActions, mapGetters } from "vuex"

export default{
    name:"userCloseConfirmBox",
    data(){
        return{
   
        }
    },
    props:{
        message:{ 
         type:String,
         default:""}    
      },
    
    computed:{
       ...mapGetters('userStore',['retrieveCloseConfirmBoxFlag'])
    },
    methods:{
        ...mapActions('userStore',['getCloseConfirmBoxFlag']),
        flagCloseTrue()
        {
          this.getCloseConfirmBoxFlag(true)
         
        }
    }
}