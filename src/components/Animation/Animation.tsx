// lib
import {LazyMotion} from 'framer-motion';

// Utils
import { lazyLoadAnimateFeatures } from '@/utils';

function LazyMotionDomAnimation({children}: PropsWithChildren) {
  return (
    <LazyMotion features={lazyLoadAnimateFeatures('domAnimation')} strict>
      {children}
    </LazyMotion>
  )
}

function LazyMotionMaxDom({children}: PropsWithChildren) {
  return (
    <LazyMotion features={lazyLoadAnimateFeatures('domMax')} strict>
      {children}
    </LazyMotion>
  )
}

export {
  LazyMotionDomAnimation,
  LazyMotionMaxDom
}