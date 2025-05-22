function dict(){
    const dictionary = {
        noun:"a name of person,animal,place or thing",
        verb:"an action word",
        pronoun: "a word used in place of a noun"
    }
    const result = document.getElementById("result");
    const input = document.querySelector('input').value;
   
       if(input == ""){
        result.innerHTML = "please enter a keyword"
        result.style = "color:red;"
    }
       else if (!dictionary[input]){
        result.innerHTML ="sorry " + input + " does not exist"
        result.style = "color:red;"

    }
        else{
            result.innerHTML = dictionary[input]
            result.style = "color:green;"

        }

 }

 const btn = document.querySelector("button");

 btn.addEventListener('click', dict);

 document.querySelector('input').addEventListener('keyup', function(e){
    if(e.key=="Enter"){
        dict();
    }
 })