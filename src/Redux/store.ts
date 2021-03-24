import { createStore } from "redux";
import {reducer} from "./reducer";
export const initialState ={
    query:''
}


export const store = createStore(reducer,initialState)
export type States = ReturnType<typeof reducer>