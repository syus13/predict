import React, { ReactNode } from 'react'

import { StyledDashboardCard } from './style'
import { CardTitle } from '../titles'
import DashboardCardValue from '../cardDasboardValue'

type DashboardCardProps = {
  radialBar?: ReactNode
  type: string
  status: string
  description?: string
  value: number
  percentage?: number
  backgroundColor: string
  cardBackground: string
  textColor: string
  titleColor: string
  width: string
  paddingBottom?: string
  boxShadow?: string
}

export function DashboardCard({
  radialBar,
  type,
  status,
  description,
  value,
  percentage,
  backgroundColor,
  cardBackground,
  textColor,
  titleColor,
  width,
  paddingBottom,
  boxShadow
}: DashboardCardProps) {
  const hasPercentage = percentage !== undefined

  return (
    <StyledDashboardCard
      boxShadow={boxShadow}
      paddingBottom={paddingBottom}
      width={width}
      backgroundColor={cardBackground}
    >
      <div>{radialBar}</div>
      <div>
        <CardTitle
          textColor={titleColor}
          description={description}
          type={type}
          status={status}
        />
        <DashboardCardValue
          color={textColor}
          backgroundColor={backgroundColor}
          total={value}
          percentage={hasPercentage ? percentage : 0}
        />
      </div>
    </StyledDashboardCard>
  )
}
