class FlatEr {
  flatten(obj, agg = {}, pth = '') {
    const pthPrefix = `${pth}${pth ? '.' : ''}`
    if(obj === null || obj === undefined) {
      agg[pth] = obj
    } else if(Array.isArray(obj)) {
      obj.forEach((item, i) => {
        const newPth = `${pthPrefix}${i}`
        this.flatten(item, agg, newPth)
      })
      return agg
    } else if(typeof obj === 'object') {
      Object.keys(obj).forEach((key, i) => {
        const item = obj[key]
        const newPth = `${pthPrefix}${key}`
        this.flatten(item, agg, newPth)
      })
      return agg
    } else {
      agg[pth] = obj
      return agg
    }
  }
}
export default new FlatEr()