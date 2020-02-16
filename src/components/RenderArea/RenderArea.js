import React, { Component } from 'react'
import NameCard from '../NameCard/NameCard'
import './RenderArea.css'

export default class RenderArea extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="renderArea">
        {this.props.count.toString()}
      </section>
    )
  }
}
