export function actionIdEntered(value:string|undefined) {
    return {
        type:"ACTION_ID",
        value:value
    }

}
export function actionPageSelected(value:number) {
    return{
        type:"ACTION_PAGE_SELECT",
        value:value
    }

}