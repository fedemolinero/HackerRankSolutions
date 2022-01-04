import foo, * as bar from './baz.js';

function Candidate(name, age, stream, grad, school) {
    this.name = name;
    this.age = age;
    this.stream = stream
    this.grad = grad;
    this.display = function (p) {
        console.log("first name" + p.name.firstName);
        console.log('age' + p.age)
        console.log('stream' + p.stream)
        console.log('sch' + p.school.name)
        console.log('grad' + p.grad)

    }
}


const ob = new Candidate("Ashley", 21, "Science", "btech", "st. Jones");
ob.display(ob)