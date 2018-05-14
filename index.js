
//console.log('it werk');


const button = document.getElementById('buttonToClick');

button.addEventListener('click',function(){
    const header = document.querySelector('h2');
    const temp = header.textContent;
    header.textContent = 'The button has been pressed';
    
    setTimeout( function(){
        header.textContent = temp;
    } , 1500);

});

