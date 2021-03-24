import { createStore } from "redux";
import {reducer} from "./reducer";
export const initialState ={
    value_id:''
}


export const store = createStore(reducer,initialState)
export type States = ReturnType<typeof reducer>