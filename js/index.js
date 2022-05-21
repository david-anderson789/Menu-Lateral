const btnMenu = document.getElementById("btn-menu"); 

function handleMenu(){
    const nav = document.getElementById('nav');
    const section = document.getElementById('section');

    nav.classList.toggle('active');

    section.classList.toggle('active');
}

btnMenu.addEventListener('click', handleMenu);