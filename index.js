
//console.log('it werk');


const button = document.getElementById('buttonToClick');

button.addEventListener('click',function(){
    const header1 = document.querySelector('h1');
    header1.textContent = 'The button has been pressed';
    
    setTimeout( function(){
        header1.textContent = 'User Directory';
    } , 1500);

});

