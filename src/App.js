// import { data } from './data/student'

//直接導入json檔，直接會轉換為js的資料格式
import products from './products.json'

import React from 'react'

function App() {
  console.log(products)

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* <div>
        {products.map((v, i) => {
          return (
            <React.Fragment key={v.id}>
              <p>{v.picture}</p>
              <p>{v.stock}</p>
              <p>{v.name}</p>
              <p>{v.price}</p>
              <p>{v.tags}</p>
            </React.Fragment>
          )
        })}
      </div> */}
    </>
  )
}

export default App
