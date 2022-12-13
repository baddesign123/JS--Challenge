let products = [
    {
        id: 123,
        name: 'USB Flash drive',
        price: 12.56,
        quantity: 1
    },
    {
        id: 456,
        name: 'Laptop Dell',
        price: 892.00,
        quantity: 3
    },
    {
        id: 678,
        name: 'Glasses',
        price: 7.50,
        quantity: 2
    }
]


let style = document.createElement('style')
style.innerText = `table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  table td, table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  table tr:nth-child(even){background-color: #f2f2f2;}
  
  table tr:hover {background-color: #ddd;}
  
  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }
    #btn {
    background-color: #04AA6D;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
    .btn {
    background-color: #04AA6D;
    border: none;
    color: white;
    padding: 3px 5px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }`
document.head.append(style)
let ta = document.getElementById('nameof')
let tablo = ['']
let tablo1 = ['']
for (let i = 0; i < products.length; i++) {
    tablo[i] = document.createElement('tr')
    tablo[i].id = i
    document.getElementsByTagName('tbody')[0].append(tablo[i])
    tablo1[0] = document.createElement('td')
    tablo1[1] = document.createElement('td')
    tablo1[2] = document.createElement('td')
    tablo1[3] = document.createElement('td')
    tablo1[3].className = 'td3'
    tablo1[4] = document.createElement('td')
    tablo1[0].innerHTML = `<td>${products[i].name}</td>`
    tablo[i].append(tablo1[0])
    tablo1[1].innerHTML = `<td>${products[i].price}</td>`
    tablo[i].append(tablo1[1])
    tablo1[2].innerHTML = `<td id='tdsel'> <select id='sel${i}'> </select> </td>`
    tablo[i].append(tablo1[2])
    let option = ['']
    for (let j = 0; j <= products[i].quantity; j++) {
        option[j] = document.createElement('option')
        option[j].setAttribute('value', `${j}`)
        document.getElementById(`sel${i}`).append(option[j])
        let t = document.createTextNode(j)
        option[j].append(t)
    }
    tablo1[3].innerHTML = `<td id='p${i}'>0</td>`
    tablo[i].append(tablo1[3])
    tablo1[4].innerHTML = `<button class='btn' id='rem${i}'>Remove</button>`
    tablo[i].append(tablo1[4])
}
let div = document.createElement('div')
let div1 = document.createElement('div')
let btn = document.createElement('button')
let p = document.createElement('p')

btn.id = 'btn'
btn.innerHTML = 'Kalkile'
p.innerHTML = 'Total 0'
ta.after(div)
div.after(div1)
div.append(btn)
div1.append(p)
div.setAttribute('style', 'display: flex; justify-content:center')
div1.setAttribute('style', 'display: flex; justify-content:center; font-weight:600; font-size: 2em')
let select = document.getElementsByTagName('select')

btn.addEventListener('click', async function (e) {
    let valse
    let j = document.getElementsByClassName('td3')
    let t = 0
    for (let i = 0; i < products.length; i++) {
        valse = document.getElementById(`sel${i}`)
        j[i].innerHTML = `<td id='p${i}'>${products[i].price * valse.value}</td>`
        j[i].id = `pri${i}`
        t += products[i].price * valse.value
    }
    div1.innerHTML = `Total ${t}`
})

for (let i = 0; i < products.length; i++) {
    let sup = document.getElementById(`rem${i}`)
    sup.addEventListener('click', async function (e) {
        let row = document.getElementById(i)
        row.remove()
    })
}