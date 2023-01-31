import { mapActions, mapGetters } from "vuex"

export default{
    name:'userProfile',
    data(){
        return {

        }
    },
    computed:{
       ...mapGetters('userStore',['retrieveUserProfileFlag','retrieveUserPersonalInfo'])
    },
    methods:{
        ...mapActions('userStore',['getUserProfileFlag']),
        commentFlagTrue(){
            this.getUserProfileFlag(true)
        },
        commentFlagFalse(){
            this.getUserProfileFlag(false)
        }
    }

}