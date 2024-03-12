// Write your code here
import './index.css'
const Logout = props => {
  const {logout} = props

  const changeLog = () => {
    logout()
  }

  return (
    <button type="button" onClick={changeLog}>
      Logout
    </button>
  )
}
export default Logout
