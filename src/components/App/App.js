import React, { Component } from 'react';
import Button1 from '../Button1/Button1'
import Button2 from '../Button2/Button2'
import RenderArea from '../RenderArea/RenderArea'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      visibleButton: true
    }
  }
  //no API

  countUp = () => {
    this.setState({counter: this.state.counter + 1})
  }

  changeBeat = () => {
    if (this.state.visibleButton === true) {
      return (
        <div>
          <Button1 count={this.countUp}/>
          <section className="around"></section>
        </div>
      )
    } else {
      return (
        <div>
          <section className="around"></section>
          <Button2 count={this.countUp}/>
        </div>
      )
    }
  }

  changeVisible = () => {
    // if (this.state.visibleButton === 1) {
    //   this.setState({visibleButton: 2})
    // }
    //
    // if (this.state.visibleButton === 2) {
    //   this.setState({visibleButton: 1})
    // }
    this.setState({visibleButton: !this.state.visibleButton})

  }

  startBlinking = async () => {
    setInterval(this.changeVisible, 1000)

  }

  render() {
    return (
      <main className="App">
        <button className="goButton" onClick={this.startBlinking}>Go</button>
        <section className="buttonBox">
          {this.changeBeat()}
        </section>
        <RenderArea
        count={this.state.counter}
        />
      </main>
    )
  }

}
