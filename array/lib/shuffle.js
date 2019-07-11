/**
 * 洗牌算法：随机打乱生成一个新数组
 * @param {*} originArr
 * @returns {array}
 */
export default function shuffle (originArr) {
    const target = originArr.slice()
    let len = target.length;
    while (len) {
        const idx = Math.floor(Math.random() * len--)
        const tmp = target[idx]
        target[idx] = target[len]
        target[len] = tmp
    }
    return target;
}


