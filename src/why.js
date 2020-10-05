import React from 'react';

function Why(props){
    return(
        <div>
            <p>So,without energy we can't {props.why}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.name}<sup>TM</sup>
            </p>
        </div>
    )    
}
export default Why;