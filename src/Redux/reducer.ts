export const reducer = (state:any, action:{type:string, value: string})=>{
    switch (action.type) {
        case "ACTION_ID": return {...state, value_id: action.value};
        default: return state;
    }
}
