import { mapGetters,mapActions} from "vuex"

export default{
    name:"submittedForm",
    data(){
        return {

        }
    },
    computed:{
      ...mapGetters('userStore',['retrievethankMessage'])
    },
    methods:{
        ...mapActions('userStore',['thankMessage']),
        flagTrue(){
            this.thankMessage(true)
            

        }
    }
}