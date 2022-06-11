import { Component } from 'react'

class CCLifecycle extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state.total, prevState.total)

    if (this.state.total === 12) {
      this.setState({ total: 11 })
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')

    return (
      <>
        <h1>類別型元件</h1>
        <h2
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h2>
      </>
    )
  }
}

export default CCLifecycle
