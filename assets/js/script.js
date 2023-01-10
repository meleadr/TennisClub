// Toggle menu pour mobile et tablette (responsive)
function toggleMenu() {
	const menuToggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('.nav');
	menuToggle.classList.toggle('active');
	nav.classList.toggle('active');
}