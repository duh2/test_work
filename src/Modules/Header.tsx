import React, {useState} from "react";
import '../ProjectCSS.css'

export const Header :React.FC=() => {
    const [selectedID, setSelectedID] = useState('')
    const handleChangeID =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setSelectedID(event.target.value)
    }
    return(
        <div className='header'>
            <label>User ID:
                <input type='text' onChange={handleChangeID}/>
            </label>
        </div>
    )
}