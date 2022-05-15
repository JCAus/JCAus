document.getElementById('container')

document.querySelector('#container')

document.querySelectorAll('.second')

document.querySelector('ol .third')

let containerText = document.querySelector('#container');
containerText.innerText = 'Hello!'

let footer = document.querySelector('div.footer');
footer.className += ' main';

let main = document.querySelector('.main');
main.remove();

const newli = document.createElement('li');

newli.innerText = 'Four';
let ul = document.querySelector('ul');
ul.append(newli);

let ol = document.querySelector('ol');
for(let li of ol){
    li.style.backgroundColor = 'green';
}

let foot = document.querySelector(".footer");
foot.remove();