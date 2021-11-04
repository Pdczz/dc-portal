import Vue from 'vue'

console.log("commom.js里的process.client")
if (process.client) {
  console.log("执行了吗")
  Vue.prototype.$isPC = (() => {
    let userAgentInfo = navigator.userAgent
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
    let flag = true
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false
        break
      }
    }
    return flag
  })()
}
export const a=1;
