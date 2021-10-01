import React from 'react';

const FirstTable: React.FC<any> = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Experience',
        accessor: 'experience'
      },
      {
        Header: 'Expected Salary',
        accessor: 'expectedSalary'
      },
      {
        Header: 'Availability',
        accessor: 'availability'
      }
    ],
    []
  );

  return (
    <>

    </>
  );
};

export default FirstTable;
