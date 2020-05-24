import React, { useCallback} from 'react'
import { TableCell, CellType } from 'components/TableCell'

interface Props {
  data: DataStructure[]
  structure: TableStructure[]
}

export const TableRow = ({ data, structure }: Props) => {
  const parseData = useCallback((value: unknown) => {
    return value ? String(value): 'Brak danych'
  }, [])

  return (
    <>
      {data.map((row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {structure.map((cell, index) => {
              return (
                <TableCell key={`${rowIndex}${index}`} Type={CellType.BODY} width={cell.width}>
                  {parseData(row[cell.slug])}
                </TableCell>
              )
            })}
          </tr>
        )
      })}
    </>
  )
}
