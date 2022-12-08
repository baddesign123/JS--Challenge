let div=document.createElement('div')
div.setAttribute('style','background:#000; width:300px; height:300px')
document.body.append(div)
div.addEventListener('mousemove', function(e){
   let x=logMovement(e)[0], y=logMovement(e)[1]
   div.style['background']=`rgb(${x}, ${y}, ${parseInt((x+y)/2)})`  
})

function logMovement(event) {
    let x=event.offsetX
    let y=event.offsetY
    let tab=[x, y]
    return tab
  }

