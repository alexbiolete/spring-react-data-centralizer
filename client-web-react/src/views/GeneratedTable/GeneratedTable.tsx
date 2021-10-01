import { FC, useMemo } from 'react';
import { Generated } from '../../types/Generated';
import Table from '../../components/Table/Table';

const GeneratedTable: FC<any> = ({ data }) => {
  const columns = useMemo(
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
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Required Experience',
        accessor: 'requiredExperience'
      },
      {
        Header: 'Experience',
        accessor: 'experience'
      },
      {
        Header: 'Budget',
        accessor: 'budget'
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

export default GeneratedTable;
