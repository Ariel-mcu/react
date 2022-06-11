import { useState, useEffect } from 'react'
import './UserList.css'

function UserList() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // 搜尋用
  const [searchWord, setSearchWord] = useState('')

  // 排序 (asc / desc)
  const [order, setOrder] = useState('asc')

  // 錯誤訊息用
  const [error, setError] = useState('')

  // 向server獲取資料(get)
  const fetchUser = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )
      const data = await response.json()

      // 設定到state
      // 如果不是回傳陣列有可能是錯誤或得不到正確資料
      // state users必須保持為陣列，不然map會發生中斷錯誤
      if (Array.isArray(data)) {
        setUsers(data)
      } else {
        setError('伺服器目前無法回傳資料，請稍後重試')
      }
    } catch (e) {
      //console.error(e)
      setError(e.message)
    }
  }

  // 向server獲取資料(get)，用searchWord搜尋
  const fetchUserFilter = async (orderBy) => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' +
          searchWord +
          '&_sort=id&_order=' +
          orderBy
      )
      const data = await response.json()

      // 設定到state
      // 如果不是回傳陣列有可能是錯誤或得不到正確資料
      // state users必須保持為陣列，不然map會發生中斷錯誤
      if (Array.isArray(data)) {
        setUsers(data)
        setOrder(orderBy) //只是反應排序狀態用
      } else {
        setError('伺服器目前無法回傳資料，請稍後重試')
      }
    } catch (e) {
      //console.error(e)
      setError(e.message)
    }
  }

  // 自動2秒後關起載入動畫
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1200)
    }
  }, [isLoading])

  // didMount
  useEffect(() => {
    // 開啟載入指示動畫
    setIsLoading(true)

    // 向伺服器要資料
    fetchUser()
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
          <th>ID {order === 'asc' ? '🔼' : '🔽'}</th>
          <th>姓名</th>
          <th>生日</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  // 有錯誤訊息即呈現錯誤
  const display = error !== '' ? error : displayTable

  return (
    <>
      <h1>User List</h1>
      <div>
        <input
          type="text"
          placeholder="輸入姓名"
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value)
          }}
        />
        <button
          onClick={() => {
            // 開啟指示動畫
            setIsLoading(true)
            // 用searchWord進行向server重要資料
            fetchUserFilter()
          }}
        >
          搜尋
        </button>
        <button
          onClick={() => {
            // 開啟指示動畫
            setIsLoading(true)

            // 用order=asc進行向server重要資料
            fetchUserFilter('asc')

            // 注意: 以下程式寫法會抵觸到setState異步執行
            // 實際上setOrder會比fetch更慢(晚)執行
            // 如果fetch中用到了order會得到舊的order而非/// 最後更新過的order
            //
            // setOrder('asc')
            // fetch('http://xxx/?_order='+order) //如果這裡面有用到order狀態
          }}
        >
          ID從小到大排序
        </button>
        <button
          onClick={() => {
            // 開啟指示動畫
            setIsLoading(true)

            // 用order=asc進行向server重要資料
            fetchUserFilter('desc')
          }}
        >
          ID從大到小排序
        </button>
      </div>
      {isLoading ? spinner : display}
    </>
  )
}

export default UserList
