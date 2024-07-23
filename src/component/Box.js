import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'

const Box = () => {
    let result = useSelector(state => state.result)
  return (
    <div>
      this is box {result}
      <GrandSonBox />
    </div>
  )
}

export default Box
