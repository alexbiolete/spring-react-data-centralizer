import { FC } from 'react';
import { Link } from 'react-router-dom';

const NavbarLink: FC<any> = ({ label, icon, path }) => {
  return (
    <Link to={path} className="hover:bg-green-50 flex items-center space-x-1 text-green-800 hover:text-green-700 px-2 md:px-4 py-2 rounded-xl transition ease-in-out duration-300">
      <span className="w-6 h-6">
        {icon}
      </span>
      <span className="hidden md:inline-block font-semibold tracking-wide mb-1">
        {label}
      </span>
    </Link>
  );
};

export default NavbarLink;
