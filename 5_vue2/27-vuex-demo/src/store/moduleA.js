export default {
    state:{
        txt: "text from moduleA"
    },
    getters:{},
    mutations:{
        changeTxt(state){
            state.txt = "data changed in moduleA";
        }
    },
    actions:{},
    modules:{},
}