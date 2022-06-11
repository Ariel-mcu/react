import { Component } from 'react'

class CCLifecycle extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
  }

  render() {
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
