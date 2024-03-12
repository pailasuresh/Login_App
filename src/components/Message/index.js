// Write your code here
import './index.css'

const Message = props => {
  const {message} = props

  if (message) {
    return (
      <div>
              <h1>Welcome User</h1>

        <img
          src="https://as1.ftcdn.net/v2/jpg/00/87/97/06/1000_F_87970620_Tdgw6WYdWnrZHn2uQwJpVDH4vr4PINSc.jpg"
          alt="welcome"
          className="img"
        />
      </div>
    )
  }
  return <h1>Please Login</h1>
}
export default Message
