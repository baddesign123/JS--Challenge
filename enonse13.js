let btn = document.getElementsByTagName('button')[0],
    div = document.querySelector('.data-wrapper')
async function getText() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos');
    let y = await x.json();
    return y
}
btn.onclick = async function () {
    let fet = await getText()
    for (let i = 0; i < fet.length; i++) {
        let h3 = document.createElement('h3'),
            h3T = document.createTextNode(fet[i].title)
        let input = document.createElement('input')
        if (fet[i].completed === true) {
            input.setAttribute('type', 'checkbox'), input.setAttribute('checked', '')
        } else {
            input.setAttribute('type', 'checkbox')
        }
        let id = document.createElement('label')
        let inputT = document.createTextNode(fet[i].title)
        h3.append(h3T)
        input.append(inputT)
        div.append(h3)
        div.append(input)
        div.append(document.createTextNode(fet[i].id))
        div.append(document.createElement('hr'))
    }
}
