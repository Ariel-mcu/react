import { useState } from 'react'

function Homework41() {
  // 範例縣市區域資料
  const counties = ['台北市', '桃園市']
  const townships = [
    ['中正區', '大同區', '中山區'],
    ['中壢區', '平鎮區', '龍潭區'],
  ]

  // 記錄陣列被選中的字串值，預設值為 "" 相等於"請選擇"
  // countries與townships的索引值為相匹配
  // 例如countries選中'台北市'時，索引值為0,此時下個下拉選單的值為 townships[0]
  const [country, setCountry] = useState('')
  const [township, setTownship] = useState('')

  return (
    <>
      <h1>郵遞區號連動下拉表單</h1>
      <select
        value={country}
        onChange={(e) => {
          // 保持state的資料類型一致為number(與初始值相同)
          // 注意e.target.value為字串類型
          setCountry(e.target.value)
          // 區域下拉要跳回"請選擇" 預設值''
          setTownship('')
        }}
      >
        <option value="">請選擇縣市</option>
        {counties.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <select
        value={township}
        onChange={(e) => {
          // 保持state的資料類型一致為number(與初始值相同)
          // 注意e.target.value為字串類型
          setTownship(e.target.value)
        }}
      >
        <option value="">請選擇區域</option>
        {/* 確保counties.indexOf(country)回傳必有索引值，否則會發生錯誤 */}
        {country !== '' &&
          counties.indexOf(country) > -1 &&
          townships[counties.indexOf(country)] &&
          townships[counties.indexOf(country)].map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
      </select>
    </>
  )
}

export default Homework41
