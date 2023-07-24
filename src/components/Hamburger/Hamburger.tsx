// React
import { useState } from 'react';

// Utils
import { clsx } from 'clsx';

function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={clsx(
        'sm:hidden block',
        'cursor-pointer tham tham-e-spin tham-w-6',
        open && 'tham-active'
      )}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}

export { Hamburger };
