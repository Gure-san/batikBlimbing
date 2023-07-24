// React
import { useState } from 'react';

// Components
import { Hamburger, LazyMotionDomAnimation } from '@/components';

// Types

// Lib
import { m, AnimatePresence, Variants } from 'framer-motion';

// Utils
import { clsx } from 'clsx';

function Navs({ children }: PropsWithChildren) {
  const [overlay, setOverlay] = useState(false);
  const navsVariant: Variants = {
    init: {
      opacity: 0,
      scale: 0,
    },
    open: {
      display: 'flex',
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    closed: { 
      opacity: 0, 
      scale: 0,
      transition: { duration: 0.3 },
      display: 'none'
    }
  }

  return (
    <div className="transition-all duration-300 basis-full grow">
      <div className="flex justify-end items-center">
        {/* Navitems */}
        <AnimatePresence>
          <LazyMotionDomAnimation>
            <m.div 
            initial={'init'}
            animate={'open'}
            exit={'closed'} 
            variants={navsVariant} 
            className={clsx(
            'gap-5', // default
            'sm:static sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 sm:bg-white', // Desktop mode
            `flex-col fixed top-0 bottom-0 left-0 right-0 justify-center items-center bg-black bg-opacity-80` // Mobile Mode
          )}>
            {children}
            </m.div>
          </LazyMotionDomAnimation>
        </AnimatePresence>

        {/* Hamburger */}
        <Hamburger/>
      </div>
    </div>
  );
}

export { Navs };
