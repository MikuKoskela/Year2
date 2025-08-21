function sayHello(){
    return 'Hello World!';

}


function add(x,y){
    return x + y;
}


function double(x) {
    return x * 2;
}

const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});