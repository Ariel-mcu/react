import React from 'react'

function RadioButton(props) {
  const { name, value, checkedValue, handleFieldChange, ...otherProps } = props

  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checkedValue === value}
        onChange={handleFieldChange}
        {...otherProps}
      />
      <label>{value}</label>
    </>
  )
}

export default RadioButton
