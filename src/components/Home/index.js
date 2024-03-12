// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {LogCheck: false}

  LogChange = () => {
    const {LogCheck} = this.state
    if (LogCheck === true) {
      this.setState({LogCheck: false})
    } else {
      this.setState({LogCheck: true})
    }
  }

  render() {
    const {LogCheck} = this.state
    return (
      <div className="main">
        <div className="sub-main">
          <Message message={LogCheck} />
          
          {LogCheck ? (
            <Logout logout={this.LogChange} />
          ) : (
            <Login login={this.LogChange} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
