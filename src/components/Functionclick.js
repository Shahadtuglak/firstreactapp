import React from 'react';

function Functionclick() {

    function clickHandler(){
        alert("HEllo")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
           
            
        </div>
    )
}

export default Functionclick;
