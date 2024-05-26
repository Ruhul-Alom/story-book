import React from 'react'
import TrendinCard from '../TrendinCard'

const Trending = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
<TrendinCard></TrendinCard>
<TrendinCard></TrendinCard>
    </div>
  )
}

export default Trending