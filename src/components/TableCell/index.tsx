import React, { ReactNode } from 'react'
import styled from 'styled-components'

export enum CellType {
  HEAD = 'th',
  BODY = 'td'
}

interface Props {
  Type: CellType,
  children: ReactNode[] | ReactNode
  width?: number
  slug?: string
  onSort?: Function
}

const Cell = styled.td`
  width: ${({width}) => width}px;
  border: ${({theme}) => theme.borders.standard};
`

export const TableCell = ({ Type, children, width, slug, onSort }: Props) => {
  return (
    <Cell width={width} as={Type as never} onClick={() => onSort && onSort(slug)}>
      {children}
    </Cell>
  )
}
