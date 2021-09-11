import React from "react";
import ChartBar from "./ChartBar"
import "./Chart.css"




const Chart = props => {

   const dataPointsValues = props.dataPoint.map(ExpValue => ExpValue.value)

   const max = Math.max(...dataPointsValues)



return <div className="chart">
   {props.dataPoint.map(datapoint => <ChartBar value={datapoint.value} maxValue={max} label={datapoint.label}/> ) }
</div>
}

export default Chart;