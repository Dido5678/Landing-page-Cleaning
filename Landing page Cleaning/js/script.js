"use strict"
const body = document.body;
const wrapper = document.querySelector('.wrapper')
function popupController(popupElem, popupBtn) {
	const popup = document.querySelector(popupElem);

	wrapper.addEventListener('click', popupOpen)

	function popupOpen(event) {
		if (event.target.closest(popupBtn)) {
			popup.classList.add('open');
			popup.addEventListener('click', popupClose);
			window.addEventListener('keydown', popupClose);
			scrollController.lockScroll();
			event.preventDefault();
		}
	};

	function popupClose(event) {
		const click = event.target;
		if (click.closest('.close-popup') || !click.closest('.popup__content') || event.code == 'Escape') {
			popup.classList.remove('open');
			window.removeEventListener('keydown', popupClose);
			setTimeout(() => {
				scrollController.unlockScroll();
			}, 300);
			event.preventDefault();
		}
	}
}
popupController('.popup', '.popup-link');


const scrollController = {
	scrollPosition: 0,
	lockScroll: function () {
		scrollController.scrollPosition = window.scrollY;
		let lockPadding = window.innerWidth - body.offsetWidth;
		body.classList.add('lock-scroll');
		body.style.cssText = `
			top: -${scrollController.scrollPosition}px;
			padding-right: ${lockPadding}px;
		`;
		document.documentElement.style.scrollBehavior = 'unset';
	},

	unlockScroll() {
		body.classList.remove('lock-scroll');
		body.style.cssText = '';
		window.scroll({ top: scrollController.scrollPosition });
		document.documentElement.style.scrollBehavior = '';
	}
};


function accordionController(accordionElem){
	const accordion = document.querySelector(accordionElem);
	accordion.addEventListener('click', function (event) {
		const click = event.target;
		const accordionContent = accordion.querySelectorAll('.accordion__content');
		const accordionBtns = accordion.querySelectorAll('.accordion__btn');
		if (click.closest('.accordion__btn')) {
			const accordionBtn = click.closest('.accordion__btn');
			const content = accordionBtn.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				accordionBtn.classList.remove('_active');
			} else if(content.closest(".img-cover")){
				content.style.maxHeight="100vw";
			} else if(accordion.classList.contains(".turn") && !content.style.maxHeight) {
				accordionContent.forEach((el) => { el.style.maxHeight = null });
				content.style.maxHeight = `${content.scrollHeight}px`;
				accordionBtns.forEach((el) => { el.classList.remove('_active') });
				accordionBtn.classList.add('_active')
			} else if(!accordion.classList.contains(".turn") && !content.style.maxHeight) {
				content.style.maxHeight = `${content.scrollHeight}px`;
				accordionBtn.classList.add('_active')
			}
		}
	})
}
accordionController(".accordion");















// function accordionController1(accordionElem) {
// 	const accordion = document.querySelector(accordionElem);
// 	accordion.addEventListener('click', function (event) {
// 		const click = event.target;
// 		const accordionContent = accordion.querySelectorAll('.accordion__content');
// 		const accordionBtns = accordion.querySelectorAll('.accordion__btn');
// 		if (click.closest('.accordion__btn')) {
// 			const content = event.target.closest('.accordion__btn').nextElementSibling;
// 			const accordionBtn = event.target.closest('.accordion__btn');
// 			if (!content.style.maxHeight) {
// 				accordionBtns.forEach((el) => {el.classList.remove('_active')});
// 				accordionBtn.classList.add('_active');
// 				// accordionContent.forEach((el) => { el.classList.remove('_active')});
// 				// content.classList.add('_active');
// 				accordionContent.forEach((el) => { el.style.maxHeight = null });
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 			} else {
// 				content.style.maxHeight = null;
// 				accordionBtn.classList.remove('_active');
// 				// content.classList.remove('_active');
// 			};
// 		}
// 	});
// };

// function accordionController2(accordionElem) {
// 	const accordion = document.querySelector(accordionElem);
// 	accordion.addEventListener('click', function (event) {
// 		const click = event.target;
// 		const accordionContent = accordion.querySelectorAll('.accordion__content');
// 		const accordionBtns = accordion.querySelectorAll('.accordion__btn');
// 		if (click.closest('.accordion__btn')) {
// 			const content = event.target.closest('.accordion__btn').nextElementSibling;
// 			const accordionBtn = event.target.closest('.accordion__btn');
// 			if (!content.style.maxHeight) {
// 				// accordionBtns.forEach((el) => {el.classList.remove('_active')});
// 				accordionBtn.classList.add('_active');
// 				// accordionContent.forEach((el) => { el.classList.remove('_active')});
// 				// content.classList.add('_active');
// 				// accordionContent.forEach((el) => { el.style.maxHeight = null });
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 			} else {
// 				content.style.maxHeight = null;
// 				accordionBtn.classList.remove('_active');
// 				// content.classList.remove('_active');
// 			};
// 		}
// 	});
// };
// accordionController1('.accordion-1');

// accordionController2('.accordion-2');









































// function accordionController1(accordionElem){
// 	const accordion = document.querySelector(accordionElem);
// 	accordion.addEventListener('click', function (event) {
// 		const click = event.target;
// 		const accordionContent = accordion.querySelectorAll('.accordion__content');
// 		const accordionBtns = accordion.querySelectorAll('.accordion__btn');
// 		if (click.closest('.accordion__btn')) {
// 			const content = click.closest('.accordion__btn').nextElementSibling;
// 			const accordionBtn = click.closest('.accordion__btn');
// 			if (content.style.maxHeight) {
// 				content.style.maxHeight = null;
// 				accordionBtn.classList.remove('_active');
// 			} else {
// 				accordionBtns.forEach((el) => { el.classList.remove('_active') });
// 				accordionBtn.classList.add('_active');
// 				accordionContent.forEach((el) => { el.style.maxHeight = null });
// 				content.style.maxHeight = `${content.scrollHeight}px`;
// 			}
// 		}
// 	})
// }
// accordionController1('.accordion-1');


// function accordionController2(accordionElem){
// 	const accordion = document.querySelector(accordionElem);
// 	accordion.addEventListener('click', function (event) {
// 		const click = event.target;
// 		const accordionContent = accordion.querySelectorAll('.accordion__content');
// 		const accordionBtns = accordion.querySelectorAll('.accordion__btn');
// 		if (click.closest('.accordion__btn')) {
// 			const content = click.closest('.accordion__btn').nextElementSibling;
// 			const accordionBtn = click.closest('.accordion__btn');
// 			if (content.style.maxHeight) {
// 				content.style.maxHeight = null;
// 				accordionBtn.classList.remove('_active');
// 			} else {
// 				// accordionBtns.forEach((el) => { el.classList.remove('_active') });
// 				accordionBtn.classList.add('_active');
// 				// accordionContent.forEach((el) => { el.style.maxHeight = null });
// 				content.style.maxHeight = `${content.scrollHeight}px`;
// 			}
// 		}
// 	})
// }
// accordionController2('.accordion-2');



























// const accordion = document.querySelector('.accordion');
// wrapper.addEventListener('click', accordionOpen);
// const accordionContent = accordion.querySelectorAll('.accordion__content');

// function accordionOpen(event) {
// 	if (event.target.closest('.accordion__btn')) {
// 		const content = event.target.closest('.accordion__btn').nextElementSibling;
// 		if (!content.style.maxHeight) {
// 			content.style.maxHeight = content.scrollHeight + 'px';
// 			// accordionContent.forEach((el) => {el.style.maxHeight = null});
// 			const accordionBtn = accordion.querySelectorAll('.accordion__btn')

// 		}

// 	}
// }



// let accordionBtns = document.querySelectorAll('.accordion__btn');
// let accordionContents = document.querySelectorAll('.accordion__content')
// accordionBtns.forEach(accordionBtn => {
// 	accordionBtn.addEventListener('click', function () {
// 		let content = accordionBtn.nextElementSibling;
// 		console.log(accordionContents);
// 		if (content.style.maxHeight) {
// 			accordionContents.forEach((accordionContent) => {
// 				accordionContent.style.maxHeight = null;
// 			});
// 		} else {
// 			accordionContents.forEach((accordionContent) => {
// 				accordionContent.style.maxHeight = null
// 			});
// 			content.style.maxHeight = content.scrollHeight + 'px';
// 		}
// 	})
// });


// function accordionController(accordionElem) {
// 	const accordions = document.querySelectorAll(accordionElem);
// 	for (let index = 0; index < accordions.length; index++) {
// 		const accordion = accordions[index];
// 		const accordionContent = accordion.querySelectorAll('.accordion__content');
// 		accordion.addEventListener('click', function (event) {
// 			if (event.target.closest('.accordion__btn')) {
// 				let content = event.target.closest('.accordion__btn').nextElementSibling;
// 				if (!content.style.maxHeight && content.closest('.accordion__content') || !content.closest('.open')) {
// 					accordionContent.forEach((el) => { el.style.maxHeight = null });
// 					content.style.maxHeight = content.scrollHeight + 'px';
// 					accordionContent.forEach((el) => { el.classList.remove('open') });
// 					content.classList.add('open');
// 				} else {
// 					content.classList.remove('open');
// 					content.style.maxHeight = null;
// 				};
// 			}
// 		});
// 	}
// }

// accordionController('.accordion-1')










// function accordionController1(accordionElem) {
// 	const accordion = document.querySelector(accordionElem);
// 	accordion.addEventListener('click', function (event) {
// 		const click = event.target
// 		if (click.closest('.accordion__btn')) {
// 			const content = event.target.closest('.accordion__btn').nextElementSibling;
// 			const accordionContent = accordion.querySelectorAll('.accordion__content');
// 			if (content.style.maxHeight) {
// 				content.style.maxHeight = null;
// 				content.classList.remove("_active");
// 			} else {
// 				accordionContent.forEach((el) => {el.style.maxHeight = null})
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 				accordionContent.forEach((el) => {el.classList.remove('_active')})
// 				content.classList.add("_active");
// 			}
// 		}
// 	})
// }

// accordionController1('.accordion-1')






// function accordionController2(accordionElem) {
// 		const accordionContent = document.querySelectorAll('.accordion__content');
// 		document.addEventListener('click', function (event) {
// 			if (event.target.closest(accordionElem)) {
// 				if (event.target.closest('.accordion__btn')) {
// 					let content = event.target.closest('.accordion__btn').nextElementSibling;
// 					if (!content.style.maxHeight && content.closest('.accordion__content') || !content.closest('.open')) {
// 						// accordionContent.forEach((el) => { el.style.maxHeight = null });
// 						content.style.maxHeight = content.scrollHeight + 'px';
// 						// accordionContent.forEach((el) => { el.classList.remove('open') });
// 						content.classList.add('open');
// 					} else {
// 						content.classList.remove('open');
// 						content.style.maxHeight = null;
// 					};
// 				}
// 			}
// 		});
// }

// accordionController2('.accordion-2')

// const accordions = document.querySelectorAll('.accordion');
// for (let index = 0; index < accordions.length; index++) {
// 	const accordion = accordions[index];
// 	const accordionContent = accordion.querySelectorAll('.accordion__content');
// 	accordion.addEventListener('click', function (event) {
// 	if (event.target.closest('.accordion__btn')) {
// 		let content = event.target.closest('.accordion__btn').nextElementSibling;
// 		if (!content.style.maxHeight && content.closest('.accordion__content') || !content.closest('.open')) {
// 			accordionContent.forEach((el) => { el.style.maxHeight = null });
// 			content.style.maxHeight = content.scrollHeight + 'px';
// 			accordionContent.forEach((el) => { el.classList.remove('open') });
// 			content.classList.add('open');
// 		}else {
// 			content.classList.remove('open');
// 			content.style.maxHeight = null;
// 		};
// 	}
// });
// }

// accordionController2('.accordion-2')

