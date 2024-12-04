import React from 'react'

const TaskDetails = () => {
  return (
    <div className='h-full w-full cursor-pointer'>
      <div className="flex flex-col justify-start items-center w-full gap-4 p-4">
          {/* Total Task */}
          <div className="flex justify-between w-3/4 items-center p-2">
            <p className="text-xl font-semibold">Total Task</p>
            <p className="text-xl">30</p>
          </div>

          {/* Completed Task */}
          <div className="flex justify-between w-3/4 items-center p-2">
            <p className="text-xl font-semibold text-green-500">Completed Task</p>
            <p className="text-xl text-green-500">10</p>
          </div>

          {/* Pending Task */}
          <div className="flex justify-between w-3/4 items-center p-2">
            <p className="text-xl font-semibold text-red-500">Pending Task</p>
            <p className="text-xl text-red-500">10</p>
          </div>

          {/* In Progress */}
          <div className="flex justify-between w-3/4 items-center p-2">
            <p className="text-xl font-semibold text-yellow-500">In Progress</p>
            <p className="text-xl text-yellow-500">10</p>
          </div>
        </div>
    </div>
  )
}

export default TaskDetails
