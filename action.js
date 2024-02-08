// Grab HTML Elements

const myBody = document.querySelector('body');
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', ()=>{
	myBody.style.backgroundColor = 'red';
	console.log('Dark mode')
})