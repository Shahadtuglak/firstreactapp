import React from "react";

//FUNCTIONAL COMPONENTS

// Normal Function
// function Greet(){
//     return <h1>Good Morning</h1>
// }



// Arrow Function
// const Greet = ({name, age}) => { //USe of destruction in React {no use of props}
//     return(
//         <div>
//             <h1>Good Morning {name}  {age} </h1>
    
//         </div>
//     )
// }



const Greet = (props) => { //USe of destruction in React { use of props}
    return(
        <div>
            <h1>Good Morning {props.name}  {props.age} </h1>
    
        </div>
    )
}



export default Greet;