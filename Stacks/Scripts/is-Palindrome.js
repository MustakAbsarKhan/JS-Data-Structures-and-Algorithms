
 const isPalindrome=(word)=>{
    //checking the string
    if(!word){
        return alert("Please Input a Word!!")
    }

    let normWord = word.toLowerCase();
    let array = [];
    let reverse = "";
    
    //pushing input into array
    for(let i=0; i<normWord.length; i++){
        array.push(normWord[i])
    }

    //popping the input out to reverse the word
    for(let i = normWord.length; i>0; i--){
        reverse += array.pop()
    }
     //checking palindrome
    if(normWord===reverse){
        alert("This word is a Palindrome");
        return true;
        
    }
        alert("This word is not a Palindrome");
        return false;    
}

const run = ()=>{
    let word = document.getElementById("inputfield").value;
    isPalindrome(word);
}