const adminStore = {
    state: {
        admin: {},
        showModal:false,
        showAdminModalAction:false,
        adminRequestApis:[],
        selectedAdminUserInfo:{},
        requestCount:{},
        addCategory : false,
        categoriesAdmin:[],
        page:0

    },
    mutations: {
        setAdminInfo(state,data){
            state.admin=data;
        },
        setAdminCommentFlag(state,data){
            state.showModal=data
        },
        setAdminCommentFlagAction(state,data){
            state.showAdminModalAction = data
        },
        setAdminRequestApi(state,data){
            let dummy=[...data]
            state.adminRequestApis=dummy
        },
        setAdminSelectedInfo(state,data){
            state.selectedAdminUserInfo=data
        },
        setRequestCount(state,data){
            state.requestCount = data;
        },
        setAddCategoryFlag(state,data){
             state.addCategory=data;
        },
        setCategoriesAdmin(state,data){
            state.categoriesAdmin=data
        },
        setNextPageNumber(state){
            state.page+=1
        },
        setBackPageNumber(state){
            if(state.page>0)
            {
                state.page-=1
            }
        }

    },
    actions: {
        getAdminInfo({commit},data){
            commit('setAdminInfo',data)
        },
        getAdminCommentFlag({commit},data){
            commit('setAdminCommentFlag',data)
        },
        getAdminCommentFlagAction({commit},data){
            commit('setAdminCommentFlagAction',data)
        },
        getAdminRequestApi({commit},data){
            commit('setAdminRequestApi',data)
        },
        getAdminSelectedInfo({commit},data){
            commit('setAdminSelectedInfo',data)
        },
        getRequestCount({commit},data){
            commit('setRequestCount',data)
        },
        getAddCategoryFlag({commit},data){
            commit('setAddCategoryFlag',data)
        },
        getCategoriesAdmin({commit},data){
            commit('setCategoriesAdmin',data)
        },
        getNextPageNumber({commit})
        {
            commit('setNextPageNumber')
        },
        getBackPageNumber({commit}){
            commit('setBackPageNumber')
        }


    },
    getters: {
        retrieveAdminInfo(state){
            return state.admin
        },
        retrieveAdminCommentFlag(state){
            return state.showModal
        },
        retrieveAdminCommentFlagAction(state){
            return state.showAdminModalAction
        },
        retrieveAdminRequestApi(state){
            return state.adminRequestApis
        },
        retrieveAdminSelectedInfo(state){
            return state.selectedAdminUserInfo
        },
        retrieveRequestCount(state){
            return state.requestCount
        },
        retrieveAddCategoryFlag(state){
            return state.addCategory
        },
        retrieveCategoriesAdmin(state){
            return state.categoriesAdmin
        },
        retrievePageNumber(state){
            return state.page
        }
        
       
    },
    namespaced: true

}

export default adminStore