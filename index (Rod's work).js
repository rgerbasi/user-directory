
//console.log('it werk');


/*
previous code that I wrote, instead of making separate
list itesm to add to the list i changed a paragraph
and added everything to that certain paragraph
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
    const userName = form.userName.value;
    const age = form.age.value;
    const userlist = document.querySelector('#users');

    const list = document.createElement('ul');

    const listitem = document.createElement('li');


    const p = document.createElement('p');
    p.textContent = `${userName}, ${age}`;
    //userlist.appendChild(p);

    
    
    const color = form.favoriteColor.value;
    p.style.border = 'thick solid '+`${color}`;
    p.style.textAlign = 'center';
    //p.style.color = `${color}`;

    

    listitem.appendChild(p);
    list.appendChild(listitem);
    userlist.appendChild(list);

    form.reset();
    form.userName.focus();

});

*/
/*
let str = window.location.search;
if(str != undefined){
    str = str.substring(str.indexOf(form.getAttribute('name'))+form.getAttribute('name').length +1, str.length );
    document.querySelector('h2').textContent = str;
}
*/