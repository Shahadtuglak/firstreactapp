import React, { Component } from 'react'

class Usergreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    
    render() {

        let message;
        if(this.state.isLoggedin){
            message = "HEllo Shahad"
        }
        else{
            message = "Hello Guest"
        }
        return<div>{message}</div>

        // if(this.state.isLoggedin){
        //     return(
        //         <h1>Welcome Shahad</h1>
        //     )
        // }
        // else{
        //     return(
        //         <h1>Welcome Guest</h1>
        //     )
        // }
        // return(
        //     <div>

        //     </div>
        // )
    }
}

export default Usergreeting
