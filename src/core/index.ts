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
  normalFont: 'var(--primary-default)',
  opacityBg: 'var(--opacity)',
};
export interface ICommonProps {
  className?: string;
}

/** @summary 檢查瀏覽器是否為 IE 或 Edge */
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

/** @summary 正規式清單 */
export const regxList = {
  phone: /^09\d{8}$/, // 手機號碼
  number: /^\d{7,8}$/, // 室內電話
  numberWithArea: /0\d{1,3}\-\d{7,8}/, // 室內電話(02-87939000)
  chinese: /^[\u4e00-\u9fa5]+$/, // 純中文
  chineseAndNum: /^[\u4e00-\u9fa50-9]+$/, // 數字+中文
  english: /^[a-zA-Z]+$/, // 純英文
  englishAndNum: /^[0-9a-zA-Z]+$/, // 數字+英文
  passport: /^[a-zA-z0-9]{1,14}$/, // 護照號碼
  countryCode: /^(\+?\d{1,3}|\d{1,4})$/, // 國碼
  mail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/,
  dateAndTime: /^\d{4}\/(0?[1-9]|1[0-2])\/((0?[1-9])|((1|2)[0-9])|30|31)\s\d{2}:\d{2}$/, // ex: 2018/05/18 05:18
  time: /^\d{2}:\d{2}$/, // ex: 2018/05/18 05:18,
  ID: /^[A-Z][12]\d{8}$/, //身分證字號
  spaceStartEnd: /(^\s*)|(\s*$)/, //首尾空格
  //exceptSpecial [^`/~=!?@#$%"^\&;',.*():{}[\]<\>\\\|+_-]
  numberFullwidth: /^[\uFF10-\uFF19]$/, //全形數字
  lowerFullwidth: /^[\uFF41-\uFF5A]$/, //全型英文小寫
  upperFullwidth: /^	[\uFF21-\uFF3A]$/, //全型英文大寫
};
