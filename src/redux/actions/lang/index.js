export const lang_actions ={
    changeLang:(state,action)=>{
        state.lang = action.payload.lang
        localStorage.setItem('lang',action.payload.lang)
    }
}