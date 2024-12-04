import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { data } from 'react-router';
const TaskPieChart = () => {
  return (
    <div className='w-full h-full'>
      <PieChart
        series = {[
          {
            data:[
              {id:0, value:10,label:'Completed Task',color: 'green'},
              {id:1, value:10,label:'Pending Task',color: 'red'},
              {id:2, value:10,label:'In progress',color: 'yellow'}

            ],
            innerRadius: 30,
            outerRadius:60,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 225,
            highlightScope:{fade:'global',highlight:'item'},
            

          }
        ]}
      />
    </div>
  )
}

export default TaskPieChart
