import { FC, Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import NavbarTabs from '../NavbarTabs/NavbarTabs';
import NavbarButton from '../NavbarButton/NavbarButton';
import NavbarLink from '../NavbarLink/NavbarLink';

const Navbar: FC = () => {
  let location = useLocation();
  let history = useHistory();

  return (
    <>
      <nav className="fixed top-0 bg-white w-full h-16 border-t md:border-t-0 border-gray-100 shadow-sm flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex">
          <div className="flex-1 inline-flex items-center justify-begin">
            {location.pathname !== '/' &&
              <NavbarButton
                label="Back"
                icon={
                  <Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </Fragment>
                }
                action={history.goBack}
              />
            }
          </div>
          <div className="flex-grow flex md:hidden items-center justify-center">
            <h1 className="capitalize font-semibold tracking-wider text-xl text-green-900 select-none mb-1">
              {location.pathname !== "/" ? location.pathname.slice(1).replace("/", " ") : "Dashboard"}
            </h1>
          </div>
          <div className="flex-1 hidden md:flex justify-between md:justify-evenly space-x-2 md:space-x-6">
            <NavbarTabs />
          </div>
          <div className="flex-1 inline-flex items-center justify-end">
            {location.pathname === "/first" &&
              <NavbarLink
                label="Import"
                icon={
                  <Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                  </Fragment>
                }
                path="/first/import"
              />
            }
            {location.pathname === "/second" &&
              <NavbarLink
                label="Import"
                icon={
                  <Fragment>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                  </Fragment>
                }
                path="/second/import"
              />
            }
          </div>
        </div>
      </nav>
      <nav className="flex md:hidden items-center justify-between space-x-2 md:space-x-6 fixed bottom-0 bg-white w-full h-16 border-t border-gray-200 shadow-sm">
        <NavbarTabs />
      </nav>
    </>
  );
};

export default Navbar;
