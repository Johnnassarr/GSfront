const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.onclick = () => {
    wrapper.classList.add('active');
};

loginlink.onclick = () => {
    wrapper.classList.remove('active');
};
btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
};

// Espera que a página esteja totalmente carregada
window.onload = function() {
    // Seleciona o elemento de texto animado
    var animacaotext = document.getElementById('animacaotext');
};
