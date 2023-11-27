// State
export const state=()=>({
    isDarkMode:false
})

// Mutations
export const mutations={
    setIsDarkMode(state,item){
        state.isDarkMode=item
    },
}

// Getters
export const getters={
    isDarkMode: (state)=>state.isDarkMode,
}
