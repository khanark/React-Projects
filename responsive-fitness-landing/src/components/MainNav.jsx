import { constants } from '../constants/constants';
import styles from '../style';
import { useState } from 'react';

const {
  header: { mainNav },
} = constants;

const MainNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`flex justify-end h-14 ${styles.paddingX}`}>
      <nav className="flex-1 flex justify-end relative">
        {!open ? (
          <mainNav.menu
            className="md:hidden inline w-[50px] h-[50px] text-primary"
            onClick={() => setOpen(prev => !prev)}
          />
        ) : (
          <mainNav.close
            className="md:hidden inline w-[50px] h-[50px] text-primary"
            onClick={() => setOpen(prev => !prev)}
          />
        )}
        <ul className="md:flex hidden sm:flex-row flex-col items-center sm:gap-8 gap-4">
          {mainNav.links.map((link, index) => {
            return (
              <li key={index}>
                <a
                  id={link.id}
                  className="text-white uppercase font-semibold tracking-wider hover:bg-red-500 px-3 py-1"
                  href="#"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        {open && (
          <ul className="flex flex-col absolute top-[100%] p-3 bg-[#333] rounded-md gap-3">
            {mainNav.links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    id={link.id}
                    className="text-white uppercase font-semibold tracking-wider hover:bg-red-500 px-3 py-1"
                    href="#"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default MainNav;
