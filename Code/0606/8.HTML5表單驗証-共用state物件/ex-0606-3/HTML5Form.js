import { useState } from 'react'

function HTML5Form() {
  const [fields, setFields] = useState({
    username: '',
    password: '',
    email: '',
  })

  // 欄位有變動時觸發
  const handleFieldsChange = (e) => {
    const newFields = { ...fields, [e.target.name]: e.target.value }

    setFields(newFields)
  }

  // 表單送出時觸發
  const handleSubmit = (e) => {
    e.preventDefault()

    // 得到通過驗証的的值

    // 第1種方式: 從state得到輸入的值
    // 可控元件，立即動態得到值時用
    console.log('state', fields.username, fields.password, fields.email)

    // 第2種方式: 利用FormData
    // 不可控元件用、上傳檔案用、單純的表單用(填完送出...etc)
    const formData = new FormData(e.target)
    console.log(
      'FormData',
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
          value={fields.username}
          onChange={handleFieldsChange}
          required
        />
        <br />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldsChange}
          required
          minLength={6}
          maxLength={10}
        />
        <br />
        <label>EMail</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldsChange}
          required
        />
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTML5Form
