import React, { useEffect, useState } from 'react'
import SkeletonLoader from './SkeletonLoader';

const Analytics = () => {
  const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[])
  
  return (
    <div>
      {
        loading?(<SkeletonLoader/>):"Analytics Components"
      }
    </div>
  )
}

export default Analytics
