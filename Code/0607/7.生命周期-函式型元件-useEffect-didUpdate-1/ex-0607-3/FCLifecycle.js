import { useState, useEffect } from 'react'

function FCLifecycle(props) {
  const [total, setTotal] = useState(0)

  // 模擬didMount+didUpdate
  // 因初始化也算改變，所以didMount也會執行
  useEffect(() => {
    // didUpdate
    console.log('模擬didMount+模擬didUpdate')
  }, [total])
  // 相依性陣列: 會放入 state 或 props，當state/props有改變時，執行其中程式碼

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h2 onClick={() => setTotal(total + 1)}>{total}</h2>
    </>
  )
}

export default FCLifecycle
