const toggleButton = document.getElementById('botao-mode');
const body = document.body;

if (localStorage.getItem('dark-mode')=== 'enabled'){
    body.classList.add('dark-mode')
} else{
    body.classList.add('lght-mode')
}

toggleButton.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')){
        localStorage.setItem('dark-mode', enabled);
    } else {
        localStorage.setItem('dark-mode', 'disabled')
    }
} )