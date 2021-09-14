import React, { Component } from 'react'

class Classclick extends Component {

    clickHandler(){
        console.log("Button is CLicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
                
            </div>
        )
    }
}

export default Classclick
