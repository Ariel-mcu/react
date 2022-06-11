import { useRef } from 'react'

function RefsForm() {
  const inputEl = useRef(null)

  return (
    <>
      <h1>使用refs的表單元素</h1>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          inputEl.current.focus()
        }}
      >
        Focus(聚焦)
      </button>
      <button
        onClick={() => {
          inputEl.current.blur()
        }}
      >
        Blur(失焦)
      </button>
      <button
        onClick={() => {
          const inputValue = inputEl.current.value
          console.log(inputValue)
        }}
      >
        獲得輸入值
      </button>
    </>
  )
}

export default RefsForm
