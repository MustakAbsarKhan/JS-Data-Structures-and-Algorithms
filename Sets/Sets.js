function mySet(){
    var collection = [];
    //this method checks the presense of an element and returns true or false
    this.has = function(element){
        return(collection.indexOf(element) !== -1);
    }

    //this method will return all the values in the set
    this.values = function(){
        return collection;
    }

    //this method will add an element to the set after checking whether it's already in the array
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    //this method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            let index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    //this method will return the size of the collection array
    this.size = function(){
        return collection.length;
    }
    //this method will return the union of two sets
    this.union = function(otherset){
        var unionset = new mySet();
        var firstset = this.values();//first array values
        var secondset = otherset.values();//second and new array values
        firstset.forEach(function(e){
            unionset.add(e); //adding all non-duplicate values from first set to union set
        });
        secondset.forEach(function(e){
            unionset.add(e); //adding all non-duplicate values from second set to union set
        });
        return unionset;
    }

    //this method will return the intersection of two sets as a new set
    this.intersection = function(otherset){
        var intersectionSet = new mySet();
        var firstset = this.values();
        firstset.forEach(function(e){
            if(otherset.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    //this method will return the difference of two sets as a new set
    this.difference = function(otherset){
        var differenceSet = new mySet();
        var firstset = this.values();
        firstset.forEach(function(e){
            if(!otherset.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    //this method will test if the set is a subset of a different set
    this.subset = function(otherset){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherset.has(value);
        })
    }
};

var setA = new mySet();
var setB = new mySet();
var setC = new mySet();

console.log(setA.has("Sami"));//checks if it has Sami
console.log(setA.values());//shows values of the collection array
//adds value to the array
console.log(setA.add("Sami"));
console.log(setA.add("Khan"));
console.log(setA.add("Mustak"));
console.log(setB.add(1));
console.log(setB.add("Khan"));
console.log(setB.add(3));
console.log(setC.add("Sami"));
console.log(setC.add("Khan"));
console.log(setC.add("Mustak"));

console.log(setA.values());//shows values of the collection array
console.log(setB.values());//shows values of the collection array
console.log(setC.values());//shows values of the collection array
console.log(setA.remove("Sami"));//removes sami from the array
console.log(setA.values());//shows values of the collection array
console.log(setA.size());//shows size of the collection array

console.log(setA.subset(setB))//checking the subset between A and B
console.log(setA.subset(setC));//checking the subset between A and C
//running the union
console.log(setA.union(setB).values());
//Checking the intersection
console.log(setA.intersection(setB).values());
console.log(setA.intersection(setC).values());
//finding the difference
console.log(setB.difference(setA).values());
console.log(setA.difference(setC).values());








