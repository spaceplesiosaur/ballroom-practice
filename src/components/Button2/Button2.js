import React, { Component } from 'react'
import './Button2.css'

export default class Button2 extends Component {
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
      <section className="button2">
        <button onClick={this.countUp}>Down</button>
      </section>
    )
  }
}
