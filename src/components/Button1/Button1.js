import React, { Component } from 'react'
import './Button1.css'

export default class Button1 extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  countUp = () => {
    this.props.count()
  }

  render() {
    return (
      <section className="button1">
        <button onClick={this.countUp}>Up</button>
      </section>
    )
  }
}
