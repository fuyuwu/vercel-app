'use client';

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const theme = {
  darkFont: "var(--dark-font)",
  lightFont: "var(--light-font)",
  mainTheme: 'var(--primary-main)',
  heroTeal: 'var(--hero-teal)',
  normalFont: 'var(--primary-default)',
  opacityBg: 'var(--opacity)',
};
export interface ICommonProps {
  className?: string;
}

/** @summary Check whether the browser is IE or Edge */
export const checkIsIEEdge = () => {
  const userBrowser = window.navigator.userAgent;
  const msie = userBrowser.indexOf("MSIE ");
  if (
    userBrowser.indexOf("Edge") !== -1 ||
    msie > 0 ||
    !!navigator.userAgent.match(/Trident.*rv\:11\./)
  ) {
    return true;
  }
  // other browser
  return false;
};

/** @summary Regex list */
export const regxList = {
  phone: /^09\d{8}$/, // mobile number
  number: /^\d{7,8}$/, // landline
  numberWithArea: /0\d{1,3}\-\d{7,8}/, // landline with area code (02-87939000)
  chinese: /^[\u4e00-\u9fa5]+$/, // Chinese only
  chineseAndNum: /^[\u4e00-\u9fa50-9]+$/, // digits + Chinese
  english: /^[a-zA-Z]+$/, // English only
  englishAndNum: /^[0-9a-zA-Z]+$/, // digits + English
  passport: /^[a-zA-z0-9]{1,14}$/, // passport number
  countryCode: /^(\+?\d{1,3}|\d{1,4})$/, // country code
  mail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/,
  dateAndTime: /^\d{4}\/(0?[1-9]|1[0-2])\/((0?[1-9])|((1|2)[0-9])|30|31)\s\d{2}:\d{2}$/, // ex: 2018/05/18 05:18
  time: /^\d{2}:\d{2}$/, // ex: 2018/05/18 05:18,
  ID: /^[A-Z][12]\d{8}$/, //Taiwan national ID number
  spaceStartEnd: /(^\s*)|(\s*$)/, //leading/trailing whitespace
  //exceptSpecial [^`/~=!?@#$%"^\&;',.*():{}[\]<\>\\\|+_-]
  numberFullwidth: /^[\uFF10-\uFF19]$/, //fullwidth digit
  lowerFullwidth: /^[\uFF41-\uFF5A]$/, //fullwidth lowercase letter
  upperFullwidth: /^	[\uFF21-\uFF3A]$/, //fullwidth uppercase letter
};
