import { useState, useEffect } from 'react'

// const init = () => {
//   console.log('state初始化(類似constructor一部份)')
//   return 0
// }

function FCLifecycle(props) {
  const [total, setTotal] = useState(0)

  // 模擬didMount
  useEffect(() => {
    // didMount
    console.log('模擬didMount')
  }, [])

  // 模擬willUnmount
  useEffect(() => {
    return () => {
      // willUnmount
      console.log('模擬willUnmount')
    }
  }, [])

  useEffect(() => {
    // didMount時加入事件監聽
    document.getElementById('my-button').addEventListener('click', function () {
      alert('hello')
    })

    return () => {
      // willUnmount時移除事件監聽
      document.getElementById('my-button').removeEventListener('click')
    }
  }, [])

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h2 onClick={() => setTotal(total + 1)}>{total}</h2>
      <button id="my-button">按我</button>
    </>
  )
}

export default FCLifecycle
