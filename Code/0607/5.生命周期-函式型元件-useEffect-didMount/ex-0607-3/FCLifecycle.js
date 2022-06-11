import { useState, useEffect } from 'react'

const init = () => {
  console.log('state初始化(類似constructor一部份)')
  return 0
}

function FCLifecycle(props) {
  const [total, setTotal] = useState(init())

  // 模擬didMount
  useEffect(() => {
    // didMount
    console.log('模擬didMount')
  }, [])


  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h2 onClick={() => setTotal(total + 1)}>{total}</h2>
    </>
  )
}

export default FCLifecycle
