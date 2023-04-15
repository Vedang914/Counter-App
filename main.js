let count = document.querySelector('#counter');

function increment(){
    let value = parseInt(count.textContent);
    value = value+1;
    count.textContent = value;


}


function decrement(){
    let value = parseInt(count.textContent);
    value = value-1;
    count.textContent = value;
    
}