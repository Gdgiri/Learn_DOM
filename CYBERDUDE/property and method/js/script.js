// object

const person={
    name:"giri",
    place:"devakottai",
    greetuser(){
        return `My name is ${this.name} and I am from ${this.place}`// interpolition
    }
}
person.name="nandhini";

const man=person.greetuser();

document.write(man);

const detail=window.prompt("Enter the name");

document.getElementById('headtwo').innerText=`hi my name is ${detail}`;

