let h1=document.getElementsByTagName('h1')[0]
let p=document.getElementsByTagName('p')[0]
let btn=document.getElementById('copy')


h1.oncopy=e=>{
    e.preventDefault()
}
p.oncopy=e=>{
    e.preventDefault()
}
h1.onmousedown=e=>{
    e.preventDefault()
}
p.onselectstart=e=>{
    e.preventDefault()
}
h1.onselectstart=e=>{
    e.preventDefault()
}




btn.onclick = function(event){
  let range = document.createRange()
  range.setStart(h1.firstChild, 0)
  range.setEnd(h1.firstChild, h1.textContent.length)
  let h1kopi=range.toString()+'\n'
  range.setStart(p.firstChild, 0)
  range.setEnd(p.firstChild, p.textContent.length)
  h1kopi+=range.toString()
  navigator.clipboard.writeText(h1kopi)
}





