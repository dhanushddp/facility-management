const userStore = {
    state: {
        user: {},
        showmodal:false,
        showmodalAction:false,
        showForm:false,
        requests:[],
        requestApi:[],
        selectedInfo:{},
        categories:[],
        messageFlag:false,
        userProfileFlag:false,
        closeConfirmBoxFlag:false,
        personalInfo:{}

    },
    mutations: {
        setUserDetail(state,data){
            state.user=data
        },
        setUserCommentFlag(state,data){
            state.showmodal=data
        },
        setUserCommentFlagAction(state,data){
            state.showmodalAction=data
        },
        setAddFormFlag(state,data){
            state.showForm = data
        },
        setRequest(state,data){
            state.requests.push(data)
        },
        setRequestApi(state,data){
            let dummy=[...data];
            console.log(dummy)
            state.requestApi=dummy;
            //state.requestApi=[...state.requestApi,...dummy]
        },
        setUserSelectedInfo(state,data){
            state.selectedInfo=data
        },
        setCategories(state,data){
            state.categories = data
        },
        setThankMessage(state,data){
            state.messageFlag=data
        },
        setUserProfileFlag(state,data){
            state.userProfileFlag=data
        },
        setCloseConfirmBoxFlag(state,data){
            state.closeConfirmBoxFlag = data
        },
        setUserPersonalInfo(state,data){
            state.personalInfo = data
        }

    },
    actions: {
        getUserInfo({commit},data){
            commit('setUserDetail',data)
        },
        getUserCommentFlag({commit},data)
        {
            commit('setUserCommentFlag',data)
        },
        getUserCommentFlagAction({commit},data)
        {
            commit('setUserCommentFlagAction',data)
        },
        addFormFlag({commit},data){
            commit('setAddFormFlag',data)
        },
        getRequest({commit},data){
            commit('setRequest',data)
        },
        getRequestApi({commit},data){
            console.log(data)
            commit('setRequestApi',data)
        },
        getUserSelectedInfo({commit},data){
            commit('setUserSelectedInfo',data)
        },
        getCategories({commit},data){
            commit('setCategories',data)
        },
        thankMessage({commit},data){
            commit('setThankMessage',data)
        },
        getUserProfileFlag({commit},data){
            commit('setUserProfileFlag',data)
        },
        getCloseConfirmBoxFlag({commit},data){
            commit('setCloseConfirmBoxFlag',data)
        },
        getUserPersonalInfo({commit},data){
            commit('setUserPersonalInfo',data)
        }



    },
    getters: {
       retrieveUserInfo(state){
        return state.user
       },
       retrieveUserCommentFlag(state){
        return state.showmodal
       },
       retrieveUserCommentFlagAction(state){
        return state.showmodalAction
       },
       retrieveFormFlag(state){
        return state.showForm
       },
       retrieveRequests(state){
        return state.requests
       },
       retrieveRequestApi(state){
        return state.requestApi
       },
       retrieveUserSelectedInfo(state){
        return state.selectedInfo
       },
       retrieveCategories(state){
        return state.categories
       },
       retrievethankMessage(state){
        return state.messageFlag
       },
       retrieveUserProfileFlag(state){
        return state.userProfileFlag
       },
       retrieveCloseConfirmBoxFlag(state){
        return state.closeConfirmBoxFlag
       },
       retrieveUserPersonalInfo(state){
        return state.personalInfo
       }
       
    },
    namespaced: true

}

export default userStore