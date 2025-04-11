import React, { useState } from 'react'

export default function Counter() {
  const [first, setFirst] = useState(0)

  const handleMinusClick = () => {
    setFirst((prevState) => prevState - 1)
  }

   function handlePlusClick() {
     setFirst((prevState) => prevState + 1)
     console.log(this, 'this')
   }

  return (
    <div>
      <p>{first}</p>
      <button onClick={handleMinusClick}>minus</button>
      <button onClick={handlePlusClick}>plus</button>
    </div>
  )
}
