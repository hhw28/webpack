import counter from './counter';
import number from './number';

counter()
number()

// 当热模块更新后，需要监听相应需要变更的文件
// css-loader中包含以下代码，所以无需重新再写就可以实现更新
if(module.hot){
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}