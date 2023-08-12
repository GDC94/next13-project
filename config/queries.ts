const QUERIES = {
  mobileS: "320px",
  mobileM: "460px",
  mobileL: "670px",
  mobileLPlus: "460px",
  mobileLandscape: "860px",
  tablet: "992px",
  desktopS: "1024px",
  desktopM: "1366px",
  desktopL: "1600px",
};

export const DEVICES = {
  mobileS: `(max-width: ${QUERIES.mobileS})`,
  mobileM: `(max-width: ${QUERIES.mobileM})`,
  mobileL: `(max-width: ${QUERIES.mobileL})`,
  mobileLandscape: `(max-width: ${QUERIES.mobileLandscape})`,
  tablet: `(max-width: ${QUERIES.tablet})`,
  desktopS: `(max-width: ${QUERIES.desktopS})`,
  desktopM: `(max-width: ${QUERIES.desktopM})`,
  desktopL: `(max-width: ${QUERIES.desktopL})`,
};
