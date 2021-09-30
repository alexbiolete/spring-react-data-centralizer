import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarTabLink: FC<any> = ({ label, icon, path }) => {
  let location = useLocation();

  return (
    <Link to={path} className="flex-1">
      <p className={`flex flex-col items-center space-y-1
        ${"/".concat(location.pathname.split('/')[1]) !== path ?
          'hover:bg-green-50 text-green-800 hover:text-green-700 transition ease-in-out duration-300'
        :
          'bg-green-50 text-green-700'
        }
        px-2 py-2 rounded-xl
      `}>
        <span className="relative">
          {icon}
        </span>
        <span className="font-semibold tracking-wide text-sm">
          {label}
        </span>
      </p>
    </Link>
  );
};

export default NavbarTabLink;
