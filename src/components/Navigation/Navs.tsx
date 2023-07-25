// React
import { useState, Fragment } from 'react';

// Framer Motion
import { AnimatePresence, Variants, motion } from 'framer-motion';

// React If
import { If, Then, Else } from 'react-if';

// Hooks
import { useWindowSize } from 'usehooks-ts';

// Utils
import { clsx } from 'clsx';

// Data
import { BREAK_POINT } from '@/data';

const navsVariant: Variants = {
  init: {
    opacity: 0,
    scale: 0,
  },

  open: {
    display: 'flex',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },

  close: {
    scale: 0,
    opacity: 0,
    transition: { 
      duration: 0.3
    },
  },
};

const navItemVariant: Variants = {
  init: {
    opacity: 0,
    y: 30,
  },

  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: custom * 0.1
    }
  }),
};

function Navs({ routes, currentActiveRoute }: NavsProps) {
  const [overlay, setOverlay] = useState(false);
  const { width } = useWindowSize();

  const NavItems = () => {
    return (
      <Fragment>
        {routes.map(({ txt, href }, index) => (
          <motion.a
          custom={index}
          initial={'init'}
          animate={'show'}
          variants={navItemVariant}
          className={`font-medium ${
            currentActiveRoute === href ? 'text-blue-500' : 'text-gray-500'
          }`}
          href={href}
        >
          {txt}
        </motion.a>
        ))}
      </Fragment>
    );
  };

  return (
    <div className="transition-all duration-300 basis-full grow">
      <div className="flex justify-end items-center">
        {/* Navitems */}
        <If condition={width !== 0 && width < BREAK_POINT}>
          {/* Mobile Mode */}
          <Then>
            <AnimatePresence>
              {overlay && (
                <motion.div
                  layout
                  initial={'init'}
                  animate={'open'}
                  exit={'close'}
                  variants={navsVariant}
                  className={clsx(
                    'flex gap-5', // default
                    'sm:static sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 sm:bg-white', // Desktop mode
                    `flex-col fixed top-0 bottom-0 left-0 right-0 justify-center items-center bg-black bg-opacity-80` // Mobile Mode
                  )}
                >
                  <NavItems />
                </motion.div>
              )}
            </AnimatePresence>
          </Then>

          {/* Desktop Mode */}
          <Else>
            <div
              className={clsx(
                'flex gap-5', // default
                'sm:static sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 sm:bg-white', // Desktop mode
                `flex-col fixed top-0 bottom-0 left-0 right-0 justify-center items-center bg-black bg-opacity-80` // Mobile Mode
              )}
            >
              <NavItems />
            </div>
          </Else>
        </If>

        {/* Hamburger */}
        <div
          onClick={() => setOverlay(!overlay)}
          className={clsx(
            'sm:hidden block',
            'cursor-pointer tham tham-e-spin tham-w-6',
            overlay && 'tham-active'
          )}
        >
          <div className="tham-box">
            <div className={clsx(
              "tham-inner",
              overlay && "bg-white"
            )} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Navs };
