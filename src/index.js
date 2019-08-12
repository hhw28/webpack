// split-chunk-plugin 代码分割
// 同步引入
import _ from 'lodash';
let div = document.createElement('div')
div.innerHTML = _.join(['hello', 'world'], '**')

// 异步引入
// function getComponent () {
//   return import(/* webpackChunkName:"lodash" */'lodash').then(() => {
//     let div = document.createElement('div')
//     div.innerHTML = _.join(['hello', 'world'], '**')
//     return div
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element)
// })