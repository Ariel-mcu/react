function IdForm() {
  return (
    <>
      <h1>使用id的表單元素</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        Focus(聚焦)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        Blur(失焦)
      </button>
      <button
        onClick={() => {
          const inputValue = document.getElementById('my-input').value
          console.log(inputValue)
        }}
      >
        獲得輸入值
      </button>
    </>
  )
}

export default IdForm
