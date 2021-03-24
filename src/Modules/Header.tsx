import React from "react";
import '../ProjectCSS.css'

export const Header :React.FC=() => {
    return(
        <div className='header'>
            <label>User ID:
                <input type='text'/>
            </label>
        </div>
    )
}