import moment from 'moment'
export function floor_money(value,decimal = 2) {
    let p = Math.pow(10, decimal)
    return Math.floor(value * p) / p
}
export function round_money(value, decimal = 2) {
    let p = Math.pow(10, decimal)
    return Math.round(value * p) / p
}
/**
 * 向上取整
 * @param value
 * @param decimal
 */
export function ceil_money(value, decimal = 2) {
    let p = Math.pow(10, decimal)
    return Math.ceil(value * p) / p
}

/**
 * 舍弃多余
 * @param value
 * @param len
 * @returns {string}
 */
export function more(value, len = 10) {
    return value.toString().substring(0,len)+"..."
}

/**
 *格式化转化为日期
 * @param value
 * @param format
 * @returns {string}
 */
export function datetime(value, format = "YYYY-MM-DD HH:mm:ss") {
    return moment(value).format(format)
}

/**
 * 时间
 * @param value
 * @param format
 * @returns {string}
 */
export  function time(value, format = "HH:mm:ss") {
    return moment(value).format(format)
}

/**
 *补0
 */
export function fillZero(num) {
    return num < 10 ? "0" + num : num;
}

/**
 * 数字格式化
 * @param value
 * @returns {string}
 */
export function numFormat(value){
    return  Number(value).toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,')
}