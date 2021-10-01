import { FC, Fragment } from 'react';
import DashboardCard from '../../components/DashboardCard/DashboardCard';

const Dashboard: FC<any> = ({ firstTableData, secondTableData }) => {
  return (
    <div className="px-4 md:px-8 py-4 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <DashboardCard
        title="First Report Data"
        data={firstTableData}
        icon={
          <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Fragment>
        }
        path="/first"
      />
      <DashboardCard
        title="Second Report Data"
        data={secondTableData}
        icon={
          <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Fragment>
        }
        path="/second"
      />
    </div>
  )
};

export default Dashboard;
