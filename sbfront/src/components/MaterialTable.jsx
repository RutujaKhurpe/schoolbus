import React from 'react';
import MaterialTable from '@material-table/core';

const CustomMaterialTable = ({ columns, data, options }) => {
  return (
    <MaterialTable
      title=""
      columns={columns}
      data={data}
      options={options}
      style={{ maxWidth: '100%', overflowX: 'auto' }}
    />
  );
};

export default CustomMaterialTable;