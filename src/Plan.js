import React from 'react';
function Plan(props){
    return(
        <React.Fragment>
            <li className='shadow text-white col-sm-9 p-2 my-2'>{props.value}</li>
            <button className='btn btn-primary my-2 col-sm-2 offset-1'
            onClick={()=>{props.sendData(props.id)}}>X
            </button>
        </React.Fragment>
    )
}
export default Plan;