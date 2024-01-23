document.addEventListener('DOMContentLoaded', () => {

	const imageNames = ['1.png', '20.jpg', '21.jpg'];

	Array.from(document.querySelectorAll('.distortion')).forEach((item, index) => {
		const images = Array.from(item.querySelectorAll('img'))
		const imageIndex = index % imageNames.length;
		let distorion = new hoverEffect({
			parent: item,
			intensity: 0.3,
			imagesRatio: 347 / 257,
			image1: images[0].getAttribute('src'),
			image2: images[1].getAttribute('src'),
			displacementImage: `assets/images/distortion-effect/${imageNames[imageIndex]}`,
		});

		const canvas = item.querySelector('canvas')

		canvas.classList.add('storiesSlider__slide-topImg')

		const mouseEnterEvent = new MouseEvent('mouseenter', {
			bubbles: true,
			cancelable: true,
			view: window
		});

		const mouseLeaveEvent = new MouseEvent('mouseleave', {
			bubbles: true,
			cancelable: true,
			view: window
		});

		const observer = new MutationObserver(function (mutationsList) {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
					const canvas = mutation.target;
					if (canvas.classList.contains('storiesSlider__slide-topImg--Active')) {
						canvas.dispatchEvent(mouseEnterEvent);
					} else {
						canvas.dispatchEvent(mouseLeaveEvent);
					}
				}
			}
		});
		
		observer.observe(canvas, { attributes: true });
	})

	// var distortionEffect = new hoverEffect({
	// 	parent: document.querySelector('.distortion'),
	// 	intensity: 0.3,
	// 	imagesRatio: 347 / 257,
	// 	image1: 'components/stories/img/2.png',
	// 	image2: 'components/stories/img/2.png',
	// 	displacementImage: 'assets/images/distortion-effect/10.jpg'
	// });

})