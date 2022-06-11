import { useState } from 'react'

function HTML5Form() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // 得到通過驗証的的值

    // 第1種方式: 從state得到輸入的值
    console.log(username, password, email)

    // 第2種方式: 利用FormData
    // 不可控元件用、上傳檔案用、單純的表單用(填完送出...etc)
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('password'),
      formData.get('email')
    )

    // 送到伺服器，例如用fetch
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form onSubmit={handleSubmit}>
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
          minLength={6}
          maxLength={10}
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
