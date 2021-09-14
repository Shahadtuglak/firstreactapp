import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {              // use to set the value
            message : "HEllo Bro"
        }
    }

    nameChange(){
        this.setState({             // use to update the value
            message : "Thankyou for Subscribing"
        })
    }


    

    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick= {() => this.nameChange()}>Subscribe</button>
          
        </div>
        ) 
    }




    
}

export default Message;
