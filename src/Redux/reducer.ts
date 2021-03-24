export const reducer = (state:any, action:{type:string, value: string})=>{
    switch (action.type) {
        case "ACTION_ID": return {...state, query: action.value};
        case "ACTION_PAGE_SELECT": return {...state, page:action.value}
        default: return state;
    }
}
