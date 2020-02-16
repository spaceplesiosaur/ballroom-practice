import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      status: "",
      interests: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addNewMember = () => {
    this.props.makeNewCard({name: this.state.name, status: this.state.status, interests: this.state.interests})
  }

  render() {
    return (
      <section className="form">
        <div className="formBox">
          <label for="name">Name</label>
          <input className="formInput" type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
        </div>
        <div>
          <button onClick={this.addNewMember}>button 1</button>
        </div>
        <div>
          <button onClick={this.addNewMember}>button 2</button>
        </div>
        <button onClick={this.addNewMember}>Submit Band Member</button>
      </section>
    )
  }
}
