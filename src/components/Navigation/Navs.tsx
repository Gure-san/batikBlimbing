// React
import { useState, useEffect, Fragment } from 'react';

// Framer Motion
import { AnimatePresence, Variants, motion } from 'framer-motion';

// useHooks
import { useWindowSize } from 'usehooks-ts';

// Components
import { buttonVariants } from '@/components/ui/button';

// Utils
import { clsx } from 'clsx';

// Data
import { BREAK_POINT } from '@/data';

const navsVariant: Variants = {
  init: {
    opacity: 0,
  },

  open: {
    display: 'flex',
    opacity: 1,

    transition: {
      duration: 0.3,
    },
  },

  close: {
    opacity: 0,
    transition: {
      duration: 0.3,
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
      delay: custom * 0.1,
    },
  }),

  hide: (custom: number) => ({
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: custom * 0.1,
    },
  }),
};

function Navs({ routes, currentActiveRoute }: NavsProps) {
  const [overlay, setOverlay] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= BREAK_POINT) {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
  }, [width]);

  const NavItems = () => {
    return (
      <div className="flex flex-col gap-8 sm:gap-6 sm:flex-row">
        <div className="flex flex-col gap-6 items-center sm:flex-row">
          {routes.map(({ id, txt, href }, index) => {
            return (
              <motion.a
                key={id}
                custom={index}
                initial={width >= BREAK_POINT ? false : 'init'}
                animate={'show'}
                exit={'hide'}
                variants={navItemVariant}
                className={clsx(
                  'text-neutral-fg border-b-2',
                  width <= BREAK_POINT && 'text-xl',
                  currentActiveRoute === href
                    ? 'border-accent'
                    : 'border-transparent'
                )}
                href={href}
              >
                {txt}
              </motion.a>
            );
          })}
        </div>

        <a
          className={buttonVariants({
            variant: 'custom',
            className: 'bg-primary',
          })}
          target="_blank"
          href=""
        >
          Hubungi Kami
        </a>
      </div>
    );
  };

  return (
    <div className="transition-all duration-300 basis-full grow">
      <div className="flex justify-end items-center">
        {/* Navitems */}
        <AnimatePresence>
          {overlay && (
            <motion.div
              layout
              initial={'init'}
              animate={'open'}
              exit={'close'}
              variants={navsVariant}
              className={clsx(
                'flex gap-5 bg-neutral-bg', // default
                'sm:static sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5', // Desktop mode
                `flex-col fixed top-0 bottom-0 left-0 right-0 justify-center items-center` // Mobile Mode
              )}
            >
              <NavItems />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hamburger */}
        <div
          onClick={() => setOverlay(!overlay)}
          className={clsx(
            'sm:hidden block',
            'cursor-pointer tham tham-e-squeeze tham-w-6',
            overlay && 'tham-active'
          )}
        >
          <div className="tham-box">
            <div
              className={clsx('tham-inner transition-all bg-neutral-fg')}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Navs };
