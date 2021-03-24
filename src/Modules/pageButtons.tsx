import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {actionPageSelected} from "../Redux/idActionCreator";

export const PageButtons: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState(1)
    const dispatch=useDispatch()
   const handleButtonClicked=(event:React.MouseEvent<HTMLInputElement>, pageNumber:number)=>{
       setSelectedPage(pageNumber)
       dispatch(actionPageSelected(pageNumber))
    }

    return(
        <div className='buttons'>
           <input type='button' onClick={(event)=>handleButtonClicked(event,1)}  />
            <input type='button' onClick={(event)=>handleButtonClicked(event,2)}  />
            <input type='button' onClick={(event)=>handleButtonClicked(event,3)}  />
            <div className='pageNow'>{selectedPage}</div>
        </div>

    )
}