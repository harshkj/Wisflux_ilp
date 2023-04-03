
function animateImage(image, transform) {
	return new Promise(resolve => {
		image.style.transform = transform;
		image.addEventListener('transitionend', resolve, { once: true });
	});
}

// Get the images and animate them sequentially
const images = [
	document.getElementById('image1'),
	document.getElementById('image2'),
	document.getElementById('image3')
];

(async function () {
	for (const image of images) {
		await animateImage(image, 'rotate(360deg) scale(0.5)');
	}
})();

