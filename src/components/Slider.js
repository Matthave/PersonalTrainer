import React, { Component } from 'react'
import '../styles/Slider.css'

class Slider extends Component {

    render() {
        return (
            <>
                <div
                    className='slider'
                    style={this.props.color ? { backgroundColor: 'rgba(0,100,100,0.75)' } : { backgroundColor: 'rgba(150,0,0,0.75)' }}>
                    {this.props.txt}
                </div>
            </>
        )
    }
}

export default Slider