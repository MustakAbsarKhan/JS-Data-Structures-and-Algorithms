//Regular Queue
function Queue(){
    var collection = [];
    //print collection
    this.print = function(){
        return collection;
    }
    //push input into collection
    this.push = function(input){
        collection.push(input);
    }
    //pull the first portion's data out
    this.pull = function(){
       return collection.shift();
    }
    //print the first data
    this.pFirst = function(){
        return collection[0];
    }
    //return the length
    this.len = function(){
        return collection.length;
    }
    //return true or false if it's empty
    this.isEmpty = function(){
        return (collection.length===0);
    }
}

var q = new Queue();
console.log(q.push("A"))
console.log(q.push("B"))
console.log(q.push("C"))

console.log(q.print())
console.log(q.len())
console.log(q.pFirst())
console.log(q.pull())
console.log(q.print())
console.log(q.pFirst())
console.log(q.pull())
console.log(q.print())
console.log(q.pFirst())
console.log(q.pull())
console.log(q.print())
console.log(q.isEmpty())