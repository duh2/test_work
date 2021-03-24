import React, {useState} from "react";
import '../ProjectCSS.css'
import {useDispatch} from "react-redux";

export const Header :React.FC=() => {
    const [selectedID, setSelectedID] = useState('')
    const dispatch = useDispatch()
    const handleChangeID =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedID(event.target.value)
    }
    const handleEnterPressed
    return(
        <div className='header'>
            <label>User ID:
                <input type='text' onChange={(event)=>{handleChangeID(event)}} onKeyPress={(event)=>{handleEnterPressed(event)}}/>
            </label>
        </div>
    )
}