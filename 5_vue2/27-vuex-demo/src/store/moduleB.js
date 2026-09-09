export default {
    namespaced: true,
    state:{
        txt: "text from moduleB",
    },
    getters:{},
    mutations:{
        changeTxt(state) {
            state.txt = "text changed in moduleB";
        }
    },
    actions:{},
    modules:{},
}