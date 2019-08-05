import imageMin from './images/01.jpeg'
import imageMax from './images/02.png'
import './index.css'

let imgMin = new Image()
imgMin.src = imageMin
imgMin.classList.add('imgMin')

let imgMax = new Image()
imgMax.src = imageMax
imgMax.classList.add('imgMax')

let root = document.getElementById('root')
root.append(imgMin)
root.append(imgMax)