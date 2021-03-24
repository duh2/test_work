import {Component} from "react";
import {States} from "../Redux/store";
const mapStateToProps = (store:States)=>{
    return {userID:store.value_id}
}

export class ListOfUsers extends Component<any, any>{


    getJSONData(idValue:string){
        const xhr =new XMLHttpRequest();
        let getAllUsers = idValue ==='';
        if (getAllUsers){
            xhr.open("GET", "https://api.github.com/users",true)
        } else {
            xhr.open("GET", `https://api.github.com/users?q=${idValue}`, true)
        }
        xhr.send()
        xhr.onreadystatechange =()=>{
            if (xhr.readyState!==4){
                return {false}
            }
        }
    }

}