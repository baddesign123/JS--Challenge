let default1=document.getElementsByTagName('input')
let ln=document.getElementsByClassName('group')[4]
window.onload = (event) => {
    default1[0].focus()
  };
let btn=document.createElement('button')
btn.id='btn'
ln.after(btn)
let T=document.createTextNode("Peze")
btn.append(T)
let i=0
btn.addEventListener('click', async function(e){
    i++
    if(i!=5){
    default1[i].focus()
    default1[i-1].blur()
    }else{
        default1[0].focus()
        default1[4].blur()
        i=0
    }    
})
for(let i=0; i<5; i++){
default1[i].addEventListener('focus', async function(e){
    default1[i].style['outline']='0'
    default1[i].style['border-color']='#0275d8'
})
default1[i].addEventListener('blur', async function(e){
    default1[i].style['outline']='0'
    default1[i].style['border']='1px solid #0275d8'
    default1[i].style['border']='1px solid #777'
})
}
