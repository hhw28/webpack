// import _ from 'lodash';

function getComponent () {
  return import(/* webpackChunkName:"lodash" */'lodash').then(() => {
    let div = document.createElement('div')
    div.innerHTML = _.join(['hello', 'world'], '**')
    return div
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})