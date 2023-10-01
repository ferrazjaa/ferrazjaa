// JS para transformar o menu em sanduíche

const menu = document.getElementById('burguer');
const navegacao = document.getElementById('nav');

menu.addEventListener('click', function clickMenu(){
    
    if(navegacao.style.display =='block'){
        navegacao.style.display = 'none';
    }else{
        navegacao.style.display = 'block';

        // navegacao.style.display = 'block';
    }
    
})
