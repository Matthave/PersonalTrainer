import React, { Component } from 'react'


class Banner extends Component {
  state = {
    click: false
  }

  clickHandle = () => {
    this.setState({
      click: !this.state.click
    })
  }

  render() {
    return (
      <>
        <div
          onClick={this.clickHandle}
          className={this.props.className}
        >
          <div>{this.props.tittle}</div>
        </div>
        <p className={this.state.click ? null : 'active'}>{this.props.txt}</p>
      </>
    )
  }
}

export default Banner