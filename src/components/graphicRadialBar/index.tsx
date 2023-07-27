// import { RadialBarChart, RadialBar, Legend } from 'recharts'
import { colors } from '../../themeColors'
import Chart from 'react-apexcharts'

type GraphicDashboardProps = {
  series: number
}

// export default function GraphicRadialBar({ series }: GraphicDashboardProps) {
//   const data = [
//     {
//       value: series,
//       fill: colors.blue2
//     }
//   ]

//   return (
//     <RadialBarChart
//       width={70}
//       height={70}
//       cx={35}
//       cy={35}
//       innerRadius="45%"
//       outerRadius="100%"
//       data={data}
//     >
//       <RadialBar startAngle={15} background dataKey="value" />
//       <Legend iconSize={0} verticalAlign="bottom" height={1} />
//     </RadialBarChart>
//   )
// }
const GraphicDashboard: ApexCharts.ApexOptions = {
  fill: { colors: [colors.blue2] },
  grid: { padding: { top: -8, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '45%' },
      track: { background: `${colors.blue5}` },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '12px',
          color: colors.white,
          fontWeight: 'bold'
        }
      }
    }
  }
}

export function GraphicRadialBar({ series }: GraphicDashboardProps) {
  return (
    <Chart
      series={[series]}
      width={70}
      height={70}
      options={GraphicDashboard}
      type="radialBar"
    />
  )
}
