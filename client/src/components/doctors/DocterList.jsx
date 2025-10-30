import React from 'react'
import { doctors } from '../../assets/data/docters'
import DocterCard from './DocterCard'

const DocterList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-[55px]'>
        {
            doctors.map((doct)=>(
                <DocterCard  key={doct.id} doctors={doct}/>
            ))
        }
      
    </div>
  )
}

export default DocterList
