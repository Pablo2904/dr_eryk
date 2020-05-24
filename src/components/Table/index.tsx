import React, { ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

import { TableCell, CellType } from 'components/TableCell'

interface Props {
  children: ReactNode[] | ReactNode
  structure: TableStructure[]
  onSort: Function
}

const StyledTable = styled.table`
  border-collapse: collapse;
`

export const Table = ({ children, structure, onSort }: Props) => {
const controls = useAnimation()

useEffect(() => {
  controls.start(() => ({
    opacity: [0, 0, 0, 1],
    transition: { duration: .5 },
  }))
}, [controls, children])

  return (
    <StyledTable>
      <thead>
        <tr>
          {structure.map(item => {
            return (
              <TableCell key={item.slug} Type={CellType.HEAD} slug={item.slug} onSort={onSort} width={item.width}>
                {item.title}
              </TableCell>
            )
          })}
        </tr>
      </thead>
      <motion.tbody animate={controls}>
        {children}
      </motion.tbody>
    </StyledTable>
  )
}
