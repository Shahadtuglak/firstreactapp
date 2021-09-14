import React from 'react'

function Test() {

    const list = ['Captain', 'Iron man', 'THor', 'Hulk'];
    const nameList = list.map(name => <h2>{name}</h2>);
    return (
        <div>
            {
                nameList
                
            }
            
        </div>
    )
}

export default Test
