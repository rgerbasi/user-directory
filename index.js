
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

const form = document.getElementById('form');

form.addEventListener('submit', function(ev){
    ev.preventDefault();
    document.querySelector('h2').textContent = document.querySelector('input').value;
});

/*
let str = window.location.search;
if(str != undefined){
    str = str.substring(str.indexOf(form.getAttribute('name'))+form.getAttribute('name').length +1, str.length );
    document.querySelector('h2').textContent = str;
}
*/