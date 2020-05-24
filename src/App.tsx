import React from 'react'

import { TableList } from 'components/TableList'
import { Layout } from 'layout/layout'
import { patientStructure, mockData } from 'utils/constants'

export default function App() {
  return (
    <Layout>
      <TableList data={mockData} structure={patientStructure}/>
    </Layout>
  );
}
