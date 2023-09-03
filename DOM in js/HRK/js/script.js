





const name=window.prompt("what is your name");

const wish=window.prompt("Enter your wishes")



document.body.children[0].innerText=`HAPPY BIRTHDAY TO YOU ${name} `;


var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);
};

const id=document.getElementById('names');

id.innerHTML=`Happy birthday to you ${name}`;

const ids=document.getElementById('get');

ids.innerHTML=`HI! ${wish}`;
