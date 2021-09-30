import { FC } from 'react';
import { Link } from 'react-router-dom';

const DashboardCard: FC<any> = ({ title, count, icon, path }) => {
  return (
    <Link to={path} className="relative h-48 overflow-hidden bg-green-100 flex px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:md:scale-105 transition ease-in-out duration-300">
      <div className="absolute -top-10 -left-5 z-0 w-56 h-56 text-green-200">
        {icon}
      </div>
      <div className="w-full z-10 flex flex-col items-end space-y-2">
        <h2 className="uppercase font-bold tracking-wider text-2xl text-green-800 select-none">
          {title}
        </h2>
        {count > 0 ? (
          <p className="uppercase font-bold text-3xl text-green-500 select-none">
            {count} entries
          </p>
        ) : (
          <p className="uppercase font-bold text-3xl text-green-500 select-none">
            No data available
          </p>
        )}
      </div>
    </Link>
  );
};

export default DashboardCard;
