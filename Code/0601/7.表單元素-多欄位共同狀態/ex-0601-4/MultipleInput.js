import { useState } from 'react'

function MultipleInput(props) {
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
  })

  const handleChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)

    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
    const newUserData = { ...userData, [e.target.name]: e.target.value }

    setUserData(newUserData)
  }

  return (
    <>
      <div>
        <label>姓名</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>電話</label>
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default MultipleInput
