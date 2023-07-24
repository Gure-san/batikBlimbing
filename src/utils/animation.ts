function lazyLoadAnimateFeatures(features: Features) {
  return () => import("@/data").then(feat => feat[features]);
}

export {
  lazyLoadAnimateFeatures
}