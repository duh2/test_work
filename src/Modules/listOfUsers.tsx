import {Component} from "react";
import {States} from "../Redux/store";

const mapStateToProps = (store:States)=>{
    return {userID:store.value_id}
}
interface User {
    login:string
}
interface ListOfUsersInterface {
isLoaded:boolean;
data:Array<User>
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
        xhr.onreadystatechange = () => {
            if (xhr.readyState!==4) {
                return {isLoaded:false}
            }
            if (xhr.status!==200) {
                console.log(xhr.status +":"+xhr.statusText);
            } else {
                let data = JSON.parse(xhr.responseText)
                this.setState({
                    data: getAllUsers? data : data.items,
                    isLoaded:true
                });
            }
        }
    }

}