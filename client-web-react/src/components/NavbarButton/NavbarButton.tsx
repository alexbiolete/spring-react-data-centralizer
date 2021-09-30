import { FC } from 'react';

const NavbarButton: FC<any> = ({ label, icon, action }) => {
  return (
    <button className="hover:bg-green-50 flex items-center space-x-0.5 text-green-800 hover:text-green-700 px-2 md:px-4 py-2 rounded-xl transition ease-in-out duration-300" onClick={action}>
      <span className="w-6 h-6">
        {icon}
      </span>
      <span className="hidden md:inline-block font-semibold tracking-wide mb-0.5">
        {label}
      </span>
    </button>
  );
};

export default NavbarButton;
