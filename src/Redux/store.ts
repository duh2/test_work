import { createStore } from "redux";
import {reducer} from "./reducer";
export const initialState ={
    query:'',
    page:1
}


export const store = createStore(reducer,initialState)
export type States = ReturnType<typeof reducer>