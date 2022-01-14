const swiper = new Swiper('.swiper', {
	speed: 600,
	direction: 'horizontal',
	loop: true,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}

});

const btn = document.querySelector('.btn__login'),
	  modal = document.querySelector('.modal'),
	  modalClose = document.querySelector('.modal__close'),
	  modalBack = document.querySelector('.modal__bg');
 




btn.addEventListener('click', (e) => {
	e.preventDefault();
	modal.style.display = 'block';
})

modalClose.addEventListener('click', (e) => {
	e.preventDefault();
	modal.style.display = 'none';
})

modalBack.addEventListener('click', (e) => {
	if(e.target == modalBack) {
		modal.style.display = 'none';
	}
	
})

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
