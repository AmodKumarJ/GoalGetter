import React, { useEffect, useState } from 'react'
import SkeletonLoader from './SkeletonLoader';

const Personal = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

return (
  <div>
    {
      loading?(<SkeletonLoader/>):"Personal Tab"
    }
  </div>
)
}

export default Personal
