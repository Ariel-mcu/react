import { useState, useEffect, useRef } from 'react'

function FCLifecycle(props) {
  const [total, setTotal] = useState(0)

  const didMountRef = useRef(false)

  // 完整模擬didUpdate
  useEffect(() => {
    if (didMountRef.current) {
      console.log('模擬didUpdate(useRef)')
    } else didMountRef.current = true
  }, [total])

  // 模擬didMount+didUpdate
  // 因初始化也算改變，所以didMount也會執行
  useEffect(() => {
    console.log('模擬didUpdate')
  }, [total])
  // 相依性陣列: 會放入 state 或 props，當state/props有改變時，執行其中程式碼

  // 模擬didMount+didUpdate
  // 因初始化也算改變，所以didMount也會執行
  // 用if判斷 略過初始值(只有不會回到初始值時才能用)
  useEffect(() => {
    if (total > 0) {
      console.log('模擬didUpdate')
    }
  }, [total])

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h2 onClick={() => setTotal(total + 1)}>{total}</h2>
    </>
  )
}

export default FCLifecycle
