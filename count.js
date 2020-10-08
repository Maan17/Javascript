let counter=0;
function hello(){
    let heading=document.querySelector('h1');
    if (heading.innerHTML=="Hello"){
        heading.innerHTML="Goodbye";
    }
    else{
        heading.innerHTML="Hello";
    }
}
//display the alert after each 10 clicks
function count(){
    counter++;
    document.querySelector('h1').innerHTML=counter;
    if(counter%10==0){
        alert(`Count is now ${counter}`);
    }
}
//function is triggered only after the entire element of 
//page are done loading 
document.addEventListener('DOMContentLoaded',function(){
    //refers to the button tag in HTML and 
    //assigns function to it
    document.querySelector('button').onclick=count;
});

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit=function(){
        //get the element that has the id of name in form
        const name=document.querySelector('#name').value;
        alert(`Hello, ${name}!`);
    };
});