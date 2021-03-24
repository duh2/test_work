import {Component} from "react";
import {States} from "../Redux/store";
const mapStateToProps = (store:States)=>{
    return {userID:store.value_id}
}

export class ListOfUsers extends Component<any, any>{


    getJSONData(idValue:string){
        const xhr =new XMLHttpRequest()
    }

}