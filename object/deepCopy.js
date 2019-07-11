/**
 * 洗牌算法：随机打乱生成一个新数组
 * @param {*} obj
 * @returns {obj}
 */

export default function deepCopy (obj) {
    if (typeof obj !== 'object') return obj

    let newObj = obj instanceof Array ? [] : {}

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }

    return newObj
}