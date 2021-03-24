import React, {useState} from "react";
import '../ProjectCSS.css'
import {useDispatch} from "react-redux";
import {actionIdEntered} from "../Redux/idActionCreator";

export const Header :React.FC=() => {
    const [selectedID, setSelectedID] = useState('')
    const dispatch = useDispatch()
    const handleChangeID =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedID(event.target.value)
    }
    const handleEnterPressed = (event:React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key =='Enter'){
            dispatch(actionIdEntered(selectedID))
        }
    }
    return(
        <div className='header'>
            <label>User ID:
                <input type='text' onChange={(event)=>{handleChangeID(event)}} onKeyPress={(event)=>{handleEnterPressed(event)}}/>
            </label>
        </div>
    )
}