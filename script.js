const image = document.getElementById('THIS');
let links = [];

fetch('links.txt')
	.then(response => response.text())
	.then(data => links = data.split('\n'))
	.catch(error => console.error(error));

image.addEventListener('click', () => {
	if (links.length > 0) {
		const randomIndex = Math.floor(Math.random() * links.length);
		const randomLink = links[randomIndex];
		window.open(randomLink, '_blank');
	}
});
