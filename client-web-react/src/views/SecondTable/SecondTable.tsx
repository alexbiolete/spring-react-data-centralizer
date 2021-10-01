import { FC, useMemo } from 'react';
import { Second } from '../../types/Second';
import Table from '../../components/Table/Table';

const SecondTable: FC<any> = ({ data }) => {
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
    <Table columns={columns} data={data} />
  );
};

export default SecondTable;
