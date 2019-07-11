import isObject from './isObject'
/**
 * 深拷贝
 * @param {*} data
 */
export default function deepClone (data) {
    let undef;
    if (data === null) return null
    if (data === undef) return undef
    let copiedData
    if (Array.isArray(data)) {
        copiedData = []
        for (let i = 0; i < data.length; i++) {
            copiedData[i] = deepClone(data[i])
        }
    } else if (isObject(data)) {
        copiedData = {}
        Object.entries(data).forEach(e => {
            const [key, value] = e
            copiedData[key] = deepClone(value)
        })
    } else {
        return data
    }

    return copiedData
}
