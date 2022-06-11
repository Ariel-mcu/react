//import CCLifecycle from './ex-0607-3/CCLifecycle'
import FCLifecycle from './ex-0607-3/FCLifecycle'
import { useState } from 'react'

function App() {
  const [isShow, setIsShow] = useState(true)

  return (
    <>
      {isShow && <FCLifecycle />}
      <hr />
      <button
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        {isShow ? '移除' : '呈現'}
      </button>
    </>
  )
}

export default App
