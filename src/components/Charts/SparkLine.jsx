import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, height, width, color, 
  data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      lineWidth={1}
      valueType='numeric'
      fill={color}
      
      >

    </SparklineComponent>
  )
}

export default SparkLine