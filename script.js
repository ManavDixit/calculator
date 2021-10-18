//Html elements
//1) Input tag for screen
let screen=document.querySelector('.container input');
//2)buttons for input
let buttons=document.querySelectorAll('button');
//for of loop on buttons
for(button of buttons){
  //click event listener on every element of buttons
  button.addEventListener('click',(event)=>{
  screen.style.color="black";
    let buttonText=event.target.innerText;
    console.log(buttonText);
    //if clear button is pressed
    if(buttonText=='C'){
      screen.value="";
    }
    //if X button is pressed
    else if(buttonText=="X"){
      buttonText="*";
      screen.value+=buttonText;
    }
    //if bakspace(erase) button is pressed
    else if(buttonText=="⇽"){
    screen.value=screen.value.substring(0,screen.value.length-1)
    }
    //if = is pressed
    else if(buttonText=="="){
      try{
      screen.value=eval(screen.value);
      }
      catch(error){
        screen.style.color="red";
        screen.value=error;
      }
    }
    //if and other button is pressed
    else{
      screen.value+=buttonText;
    }
  })
}