class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

//adds an element at the end of the list
addLast(element){
    var node1 = new Node(element); //creates a new node
    var current;//to store current node;

    if(this.head==null){
        this.head = node1;
    }else{
        current = this.head;
        
        //iterating to the end of the list
        while (current.next){    //checks if it has next element
            current = current.next;  
        }
        //add node
        current.next = node1;
    }
    this.size++;
}

//adds an element at the begining of the list
addFirst(element){
    var node1= new Node(element);
    node1.next = this.head;
    this.head = node1;
}

// insert element at the position index of the list
insertAt(element,index){
    if(index<0 || index>this.size){
        return console.log("Please enter a valid index");
    }else{
        //creating new node
        var node = new Node(element);
        var curr, prev;

        curr = this.head;

        //adding elemenet to the
        //first index
        if(index===0){
            node.next = this.head; //moving the current value of head to the back using next hand of node(we've created node before)
            this.head = node;
        }else{
            curr = this.head;
            var it = 0;
            //iterate over the list to find the position to insert
            while(it<index){
                it++;
                prev=curr;//current node
                curr=curr.next;//moving to the next node
            }
            //adding an element
            prev.next = node;//linking next node of current node with the new node(insertion)
            node.next = curr//linking it to the previously recorded next node
            
        }
        this.size++;
    }
}

// removes an element from the
// specified location

removeFrom(index){
    //checking input validity
    if(index<0||index>=this.size){
        return console.log("Please Enter a valid index")
    }else{
        var curr,prev,it = 0;
        curr = this.head;
        prev = curr;
    //deleting first element
    if(index===0){
        this.head=curr.next;
    }else{
    //iterate over the list to the position to remove an element
    while(it<index){
        it++;
        prev = curr;
        curr = curr.next;
    }
    //remove the element
    prev.next = curr.next;
    }
    this.size--;

    //return the remove element
    return curr.element;
}
}

//removes a given element from list
removeElement(elemenet){
    var current = this.head;
    var prev = null;

    //iterate over the list
    while(current!=null){
        if(current.elemenet===elemenet){
            if(prev==null){
                this.head = current.next;
            }else{
                prev.next=current.next;
            }
            size--;
            return current.elemenet;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}

// finds the index of element
indexOf(element) {
    var count = 0;
    var current = this.head;

    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }

    // not found
    return -1;
}

// checks the list for empty
isEmpty() {
    return this.size == 0;
}

// gives the size of the list
size_of_list() {
    console.log(this.size);
}


// prints the list items
printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + "->";
        curr = curr.next;
    }
    console.log(str);
}
}


var ll = new linkedList();
console.log(ll.isEmpty());

// adding element to the list
ll.addLast(10);
ll.addLast(9);
ll.addFirst(11);
ll.addFirst(12);


// prints 10
ll.printList();

// // returns 1
// console.log(ll.size_of_list());

// console.log(ll.removeFrom(2));

// ll.printList();