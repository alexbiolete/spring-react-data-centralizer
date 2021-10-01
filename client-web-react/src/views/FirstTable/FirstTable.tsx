import { FC, useMemo } from 'react';
import { First } from '../../types/First';
import Table from '../../components/Table/Table';

const FirstTable: FC<any> = ({ data }) => {
  const columns = useMemo(
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
    <Table columns={columns} data={data} />
  );
};

export default FirstTable;
