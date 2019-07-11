/**
 * 判断一个值是否为空
 * @param {*} val
 */
export default function isEmpty (val) {
    if (val == null) return true;
    if (Array.from(val).length) return false
    if (Object.keys(val).length) return false
    return true
}
