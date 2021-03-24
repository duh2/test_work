import React, {useState} from "react";
import '../ProjectCSS.css'
import {useDispatch} from "react-redux";
import {actionIdEntered} from "../Redux/idActionCreator";

export const Header: React.FC = () => {
    const [selectedQuery, setSelectedQuery] = useState('')
    const dispatch = useDispatch()
    const handleChangeID = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedQuery(event.target.value)
    }
    const handleEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(actionIdEntered(selectedQuery))
        }
    }
    return (
        <div className='header'>
            <label>User query:
                <input type='text' onChange={(event) => {
                    handleChangeID(event)
                }} onKeyPress={(event) => {
                    handleEnterPressed(event)
                }}/>
            </label>
        </div>
    )
}