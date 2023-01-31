import { mapActions, mapGetters } from "vuex"
import axios from 'axios'

export default {
    name: "loginComponent",
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            userInfo: {},
            adminInfo: {},
            showerror: false
        }
    },
    computed: {
        ...mapGetters('userStore', ['retrieveUserInfo']),
        ...mapGetters('adminStore', ['retrieveAdminInfo'])

    },
    methods: {
        ...mapActions('userStore', ['getUserInfo']),
        ...mapActions('adminStore', ['getAdminInfo']),
        async userAuth() {


            if (this.user.email && this.user.password) {
                let result = await axios.post(`/two/user/authUser?email=${this.user.email}&password=${this.user.password}`)




                console.log(result.data.userData)
                if (result.status == 200 && result.data.userData && result.data.userData.role == "Employee") {
                    this.userInfo = result.data.userData;
                    this.getUserInfo(result.data.userData)
                    localStorage.setItem('userInfo', JSON.stringify(this.retrieveUserInfo))
                    this.$router.push({ path: "/userPortal", query: { id: this.userInfo.userId } })
                    console.log(this.retrieveUserInfo)

                } else if (result.status == 200 && result.data.userData && result.data.userData.role == "Admin") {
                    this.adminInfo = result.data.userData;

                    this.getAdminInfo(result.data.userData)
                    localStorage.setItem('adminInfo', JSON.stringify(this.retrieveAdminInfo))
                    this.$router.push({ path: '/adminPortal', query: { id: this.adminInfo.userId, name: this.adminInfo.userName } })
                    console.log(this.retrieveAdminInfo)



                } else {
                    this.showerror = true

                }




            } else {
                this.showerror = true
            }





        }
    }
}