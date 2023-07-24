import { useEffect, useRef } from 'react'
import * as ApexCharts from 'apexcharts'
import { colors } from '../../themeColors'

type CircleBarProps = {
  value: number
}

const CircleBar: React.FC<CircleBarProps> = ({ value }) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, getOptions(value))
      chart.render()
    }
  }, [value])

  return <div ref={chartRef} />
}

function getOptions(value: number) {
  return {
    chart: {
      type: 'circleBar',
      width: 70,
      height: 70,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      circleBar: {
        hollow: {
          size: '45%'
        },
        track: {
          background: colors.blue5
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 5,
            fontSize: '12px',
            color: colors.white,
            fontWeight: 'bold'
          }
        }
      }
    },
    fill: {
      colors: [colors.blue2]
    },
    series: [value]
  }
}

export default CircleBar
