import React from 'react'
import { useSelector } from 'react-redux'


const GrandSonBox = () => {
    let result = useSelector(state => state.result)
  return (
    <div>
        GrandSonBox {result}
    </div>
  )
}

export default GrandSonBox
