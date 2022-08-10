function next() {
    index++
    if(index === 4) index = 0 
    clearInterval(timer)
    setStyle()
    run()
}
function prev() {
    index--
    if(index === -1) index = 3 
    clearInterval(timer)
    setStyle()
    run()
}
//下面是图片的地址链接
let arr = [
    "http://p1.music.126.net/hnqSRbszgnc_MbQGdVr4TQ==/109951165173153454.jpg?imageView&quality=89",
    "http://p1.music.126.net/Du30OlKbv2x6w281-lDt-Q==/109951165172606426.jpg?imageView&quality=89",
    "http://p1.music.126.net/NiybvzBGHBgo4Wuv8AH-Kw==/109951165173370457.jpg?imageView&quality=89",
    "http://p1.music.126.net/vrnul_FolP2EbCZboVhcrQ==/109951165173292989.jpg?imageView&quality=89"
]
var demo1 = document.getElementById('demo1')
			
			
let indexes = document.getElementsByClassName('indexes')[0].children
let timer = -1
for (let i = 0; i < indexes.length; i++) {
    indexes[i].onmouseenter = function () {
					
        index = i
        clearInterval(timer)
        setStyle("display:inline;float:left;position:center;margin-left:15%;")
    }
    indexes[i].onmouseleave = function () {
        run()
    }
}
var index = 0
function run() {
    timer = setInterval(() => {
        index++
				
        if(index === 4) index = 0
				
   setStyle("display:inline;float:left;position:center;margin-left:15%;")
}, 1000);
}
function setStyle() {
    demo1.src = arr[index]
				 
    let active = document.getElementsByClassName('active')[0]
    active.classList.remove('active')
    indexes[index].classList.add("active")
}
run()