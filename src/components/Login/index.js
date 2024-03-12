// Write your code here
import './index.css'

const Login = props => {
  const {login} = props

  const changeLog = () => {
    login()
  }

  return (
    <button type="button" onClick={changeLog}>
      Login
    </button>
  )
}
export default Login
