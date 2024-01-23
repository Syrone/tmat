document.addEventListener('DOMContentLoaded', () => {

	/** (Start) Hover Distortion Effect **/
	Array.from(document.querySelectorAll('.distortion')).forEach((item, index) => {
		const images = Array.from(item.querySelectorAll('img'))
		let distorion = new hoverEffect({
			parent: item,
			intensity: 0.3,
			imagesRatio: 347 / 257,
			image1: images[0].getAttribute('src'),
			image2: images[1].getAttribute('src'),
			displacementImage: `assets/images/distortion-effect/21.jpg`,
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
	/** (End) Hover Distortion Effect **/

	/** (Start) Slider Distortion Effect **/

	const distortionEffectSliders = document.querySelectorAll('.slider-distortion-effect')

	if (distortionEffectSliders.length > 0) {
		distortionEffectSliders.forEach((slider) => {
			const btnPrev = slider.querySelector('[data-nav="previous"]'),
				btnNext = slider.querySelector('[data-nav="next"]'),
				sliderWrapper = slider.querySelector('.slider-wrapper'),
				images = sliderWrapper.querySelectorAll('img'),
				interval = slider.dataset.intervalTransition
				
			const arraySlide = {};
			const arraySrcImage = []

			let currentIndex = 0

			let aspectRatioY = images[0].naturalHeight
			let aspectRatioX = images[0].naturalWidth

			images.forEach((image) => {
				const srcImage = image.getAttribute('src')
				arraySrcImage.push(srcImage)
			})

			arraySrcImage.forEach((src, index) => {
				const nextIndex = (index + 1) % arraySrcImage.length;
				const key = `distortionEffect${index + 1}`;
				arraySlide[key] = new hoverEffect({
					parent: sliderWrapper,
					intensity: 0.3,
					imagesRatio: aspectRatioY / aspectRatioX,
					image1: arraySrcImage[nextIndex],
					image2: src,
					displacementImage: 'assets/images/distortion-effect/21.jpg',
					hover: false,
				});
			});

			let canvases,
				isAnimate

			function nextDistortionEffect() {
				if (isAnimate) {
					return;
				}
				stopAutoNext()
				isAnimate = true
				let prevIndex = currentIndex
				currentIndex = (currentIndex + 1) % arraySrcImage.length
				const prevKey = `distortionEffect${prevIndex + 1}`;
				arraySlide[prevKey].next();
				setTimeout(() => {
					canvases = sliderWrapper.querySelectorAll('canvas')
					sliderWrapper.appendChild(canvases[0])
					arraySlide[prevKey].previous();
					isAnimate = false
					startAutoNext()
				}, 600)
			}

			function prevDistortionEffect() {
				if (isAnimate) {
					return;
				}
				stopAutoNext()
				isAnimate = true
				currentIndex = currentIndex - 1 < 0 ? arraySrcImage.length - 1 : currentIndex - 1
				const currentKey = `distortionEffect${currentIndex + 1}`;
    		arraySlide[currentKey].next();
				setTimeout(() => {
					canvases = sliderWrapper.querySelectorAll('canvas')
					sliderWrapper.insertBefore(canvases[canvases.length - 1], sliderWrapper.firstChild)
					arraySlide[currentKey].previous();
					isAnimate = false
					startAutoNext()
				}, 1200)
			}

			btnNext.addEventListener('click', () => {
				nextDistortionEffect()
			})

			btnPrev.addEventListener('click', () => {
				prevDistortionEffect()
			})

			let intervalId;

			function startAutoNext() {
				intervalId = setInterval(nextDistortionEffect, interval);
			}

			function stopAutoNext() {
				clearInterval(intervalId);
			}

			startAutoNext();
		})
	}

	/** (End) Slider Distortion Effect **/

})