import imageMin from './images/01.jpeg';
import imageMax from './images/02.png';
import counter from './counter';
import number from './number';
import './index.scss';

let imgMin = new Image()
imgMin.src = imageMin
imgMin.classList.add('imgMin')

let imgMax = new Image()
imgMax.src = imageMax
imgMax.classList.add('imgMax')

let root = document.getElementById('root')
root.append(imgMin)
root.append(imgMax)

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