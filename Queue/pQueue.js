//Priority Queue
function Queue(){
    var collection = [];
    //print collection
    this.print = function(){
        return collection;
    }
    //push input into collection based on their rank if it's not empty
    this.push = function(input){
        if(this.isEmpty()){
            collection.push(input);
        }else{
            var flag = false;
            for(var i=0; i<collection.length; i++){
                if(input[1]<collection[i][1]){
                    collection.splice(i,0,input);
                    flag = true;
                    break;
                }
                }
                if(!flag){
                    collection.push(input);
                }
            }
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
console.log(q.push(["sami",2]))
console.log(q.push(["khan",3]))

console.log(q.push(["ami",1]))
console.log(q.print())
