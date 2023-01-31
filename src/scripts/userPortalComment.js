import { mapActions, mapGetters } from "vuex"

export default{
    name:"userPortalComment",
    data(){
        return {
        }
    },
    computed:{
        ...mapGetters('userStore',['retrieveUserCommentFlag','retrieveUserSelectedInfo'])
    },
    methods:{
        ...mapActions('userStore',['getUserCommentFlag']),
        commentFlagTrue(){
            this.getUserCommentFlag(true)
        },
        commentFlagFalse(){
            this.getUserCommentFlag(false)

        }

    }

}