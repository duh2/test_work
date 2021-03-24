export const reducer = (state, action)=>{
    switch (action.type) {
        case "ACTION_ID": return {...state, value_id: action.value};
        default: return state;
    }
}
