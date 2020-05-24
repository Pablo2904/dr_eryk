import React, { useState, useCallback } from 'react'
import { Table } from 'components/Table'
import { TableRow } from 'components/TableRow'

interface Props {
  data: DataStructure[]
  structure: TableStructure[]
}

export const TableList = ({ data, structure }: Props) => {
  const [patientList, setPatientList] = useState(data)

  const sortData = useCallback((sortBy: string): void => {
    const newList = [...patientList].sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)

    setPatientList(newList)
  }, [patientList])

  return (
    <Table structure={structure} onSort={sortData}>
        {data.length ? <TableRow data={patientList} structure={structure}/> : null}
    </Table>
  )
}
