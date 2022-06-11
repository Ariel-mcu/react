import { useState } from 'react'

function HTML5Form() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <br />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
        />
        <br />
        <label>EMail</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTML5Form
