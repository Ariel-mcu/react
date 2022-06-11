import { useState, useEffect } from 'react'
import './UserList.css'

function UserList() {
  const [users, setUsers] = useState([])

  // 向server獲取資料(get)
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    // 設定到state
    setUsers(data)
  }

  // didMount
  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <h1>User List</h1>
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
    </>
  )
}

export default UserList
