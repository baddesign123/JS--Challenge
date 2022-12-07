const countryArray = ["Haiti", "France", "United States", "Belgium", "Canada",
    "Jamaica", "Mexico", "Brazil", "Nigeria"];

let div=document.createElement('div')
countryArray.map((el)=>{
    div.innerHTML+= `<ul> <li> <input type="checkbox" name="country" value="${el}" /> ${el} </li> </ul>`
})
let btn=document.createElement('button')
btn.append(document.createTextNode('Soumet'))
document.body.append(div)
div.append(btn)
function j(){
    let tab =[]
    let t=0
var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var i of checkboxes) {
    tab[t] = i.value;
    t++;
  }
  return tab;
}
btn.addEventListener('click', async function(e){
    j()
})
