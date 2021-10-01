import React from 'react';

const SecondTable: React.FC<any> = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Required Experience',
        accessor: 'requiredExperience'
      },
      {
        Header: 'Budget',
        accessor: 'budget'
      }
    ],
    []
  );
  return (
    <>

    </>
  );
};

export default SecondTable;
