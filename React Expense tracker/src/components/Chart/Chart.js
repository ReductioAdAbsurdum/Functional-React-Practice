import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = (props) => 
{
    const dataPontValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPontValues);

    console.log("Chart data points" , props.dataPoint);
    console.log("Chart max" , totalMaximum);
    
    return (
        <div className='chart'>
          {props.dataPoints.map(dataPoint => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
          ))}
        </div>
      );
};

export default Chart;