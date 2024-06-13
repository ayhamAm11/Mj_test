import React from 'react'
import Sectionown from './Sectionown'
import Sectiontow from './Sectiontow'

function SectionX() {
  return (
    <div className='flex bg-grey flex-col  items-center justify-between p-5'>
        <Sectionown/>
        <Sectiontow/>
    </div>
  )
}

export default SectionX