import { useState, useEffect } from 'react'
import './UserList.css'

function UserList() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // 向server獲取資料(get)
  const fetchUser = async () => {
    //https://my-json-server.typicode.com/eyesofkids/json-fake-data/users
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    // 設定到state
    setUsers(data)
  }

  // didMount
  useEffect(() => {
    // 開啟載入指示動畫
    setIsLoading(true)

    fetchUser()

    // 2秒後關起
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const displayTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>User List</h1>
      {isLoading ? spinner : displayTable}
    </>
  )
}

export default UserList
