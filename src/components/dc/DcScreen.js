import React from 'react'
import { HeroeList } from '../hero/HeroeList'

export const DcScreen = () => {
  return (
    <div>
      <h1>DC Screen</h1>
      <hr/>

      <HeroeList publisher='DC Comics' />
    </div>
  )
}
