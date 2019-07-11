/**
 * 判断值是否是对象
 * @param {*} val
 * @returns {boolean}
 * 1、内部使用typeof判断，剔除了null和数组，当值是null和数组时，返回false
 * 2、或者使用 instanceof 判断
 */
export default function isObject (val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
}
