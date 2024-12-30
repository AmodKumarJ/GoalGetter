import React, { useEffect, useState } from 'react'
import SkeletonLoader from './SkeletonLoader';

const Completed = () => {
  const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[])
  
  return (
    <div>
      {
        loading?(<SkeletonLoader/>):"Completed Task"
      }
    </div>
  )
}

export default Completed
