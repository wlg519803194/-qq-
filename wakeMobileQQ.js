/*
  手机浏览器唤醒qq的兼容问题
  执行wakeMobileQQ
 */

function checkBrowser () {
  let userAgent = navigator.userAgent /*! 欧朋浏览器 */
  if ((userAgent.substring(userAgent.length - 6, userAgent.length) === '15C202' || userAgent.substring(userAgent.length - 6, userAgent.length) === '15E216') || (userAgent.substring(userAgent.length - 6, userAgent.length).includes('14G60')) || (userAgent.includes('OPiOS') && device.iphone())) { return 0 } /*! iphone 7(15C202) iphone6s(15E216) iphoneSE(OPiOS) iphone5(14G60)不兼容 */
  if (userAgent.includes('Mb2345Browser') && device.iphone() && (userAgent.includes('14A456') || userAgent.includes('15C114'))) { return 0 }/*! iphone 6s 14A456 | iphone715C114 不兼容2345浏览器 */
  if (userAgent.includes('Quark') && device.iphone() && (userAgent.includes('14A456') || userAgent.includes('14F89'))) { return 0 } /*! iphone 6s 14A456 | iphone7 不兼容夸克浏览器 */
  if (userAgent.includes('UCBrowser') && device.iphone() && userAgent.includes('15E216')) { return 0 }/*! iphone 6s 不兼容2345浏览器 */
  if (userAgent.includes('searchBrowser') && device.iphone() && userAgent.includes('12B466')) { return 0 }/*! iphone 5 不兼容 360安全浏览器 */
  if (userAgent.includes('FxiOS') && device.iphone() && (userAgent.includes('15C202') || userAgent.includes('15D100') || userAgent.includes('16A5288q'))) { return 0 } /*! 火狐浏览器 iphone7 15C202不兼容  iphone 6s 不兼容 火狐浏览器 */ else if (userAgent.includes('baiduboxapp')) { return 0 } /*! 二者皆不可以 */ else if (userAgent.includes('baidubrowser')) { return 0 } /*! 二者皆不可以 */ else if (userAgent.includes('MXiOS') && device.iphone()) {
    if (userAgent.includes('MXiOS') && ((device.iphone() && (userAgent.includes('15C202') || userAgent.includes('14G60'))))) { return 1 }/*! iphone 遨游浏览器 不兼容 */
    return 0
  } /*! iphone手机,遨游浏览器 */ else if (userAgent.includes('MicroMessenger')) { return 1 } /*! 微信,在安卓端会识别到Safari,故单独执行,70606 */ else if (userAgent.includes('iPhone 84') && userAgent.includes('MQQBrowser')) { return 2 } /*! SE,QQ,71016 */ else if (userAgent.includes('UCBrowser') || userAgent.includes('MQQBrowser')) { return 2 } /*! 70615 */ else if (userAgent.includes('SogouMobileBrowser')) { return 1 } /*! 70615 */ else if (userAgent.includes('QihooBrowser')) { return 2 } else if (userAgent.includes('iPhone') && userAgent.includes('Safari')) { return 2 } else if (userAgent.toUpperCase().includes('HUAWEI') && userAgent.includes('Safari')) { return 3 } /*! 0228：华为手机其他浏览器 */ else { return 1 }
}
export const wakeMobileQQ = (qq) => {
  let [qqUrl, res] = ['', checkBrowser()]
  qqUrl = device.mobile() || device.ipad() ? (res === 0 ? '/browser?qq=' + qq : res === 2 ? 'mqqwpa://im/chat?chat_type=wpa&uin=' + qq + '&version=1&src_type=web&web_src=yidian51.com' : res === 3 ? 'mqq://im/chat?chat_type=wpa&uin=' + qq + '&version=1&src_type=web' : 'http://wpa.qq.com/msgrd?v=3&uin=' + qq + '&site=qq&menu=yes') : ('http://wpa.qq.com/msgrd?v=3&uin=' + qq + '&site=qq&menu=yes')
  qqUrl && window.open(qqUrl, '_blank')
}
