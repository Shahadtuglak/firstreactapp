import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props){
        super(props);
        this.state = {
            message:"Hello Brother"

        }

    }

  buttonHandler = () =>{
      this.setState({
          message : "Goodbye"
      })

  }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                <button onClick={this.buttonHandler}>Click</button>
                
            </div>
        )
    }
}

export default Eventbind
