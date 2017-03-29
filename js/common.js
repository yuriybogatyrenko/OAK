$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}

	$('select').niceSelect();

	/*$('.slides__item').each(function(){
		$('.slides-nav__dots').append('<div class="slides-nav__dot"></div>')
	});*/



	var slides = $('.slides').owlCarousel({
		loop: true,
		dotsContainer: '.slides-nav__dots',
		nav: false,
		dots: true,
		items: 1,
		autoplayTimeout: 5000,
		autoplay: true,
		autoplaySpeed: 500
	})
	$('.slides-nav__prev').click(function() {
		slides.trigger('prev.owl.carousel');
	})
	$('.slides-nav__next').click(function() {
		slides.trigger('next.owl.carousel');
	})

	$('.card__slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 1
	})
	$('.card__nav-prev').click(function() {
		$(this).closest('.card').find('.card__slides').trigger('prev.owl.carousel');
	})
	$('.card__nav-next').click(function() {
		$(this).closest('.card').find('.card__slides').trigger('next.owl.carousel');
	})

	$('.card-pansions__slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 1
	})
	$('.card-pansions__nav-prev').click(function() {
		$(this).closest('.card-pansions').find('.card-pansions__slides').trigger('prev.owl.carousel');
	})
	$('.card-pansions__nav-next').click(function() {
		$(this).closest('.card-pansions').find('.card-pansions__slides').trigger('next.owl.carousel');
	})





	var client = $('.client').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 5
	})
	$('.client-slider__prev').click(function() {
		client.trigger('prev.owl.carousel');
	})
	$('.client-slider__next').click(function() {
		client.trigger('next.owl.carousel');
	})

	var client_content = $('.client_content').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 4
	})

	$('.main-news__link_news').click(function () {
		$('.main-news__link').removeClass('active');
		$(this).addClass('active');
		$('.main-news__section').removeClass('open');
		$('.main-news__section_news').addClass('open');

	});

	$('.main-news__link_posts').click(function () {
		$('.main-news__link').removeClass('active');
		$(this).addClass('active');
		$('.main-news__section').removeClass('open');
		$('.main-news__section_posts').addClass('open');
	});

	var datein = new Date();
	datein.setDate((new Date()).getDate()+1);
	$.datetimepicker.setLocale('ru');
	$('#datein, #datein-book').datetimepicker({
		i18n:{
			ru:{
				months:[
					'Январь','Февраль','Март','Апрель',
					'Май','Июнь','Июль','Август',
					'Сентябрь','Октябрь','Ноябрь','Декабрь',
				],
				dayOfWeek:[
					"Пн", "Вт", "Ср", "Чт", 
					"Пт", "Сб", "Вс",
				]
			}
		},
		timepicker:false,
		format:'d.m.Y',
		value: datein
	});


	dateout = new Date();
	dateout.setDate(datein.getDate()+10);
	$('#dateout, #dateout-book').datetimepicker({
		i18n:{
			ru:{
				months:[
					'Январь','Февраль','Март','Апрель',
					'Май','Июнь','Июль','Август',
					'Сентябрь','Октябрь','Ноябрь','Декабрь',
				],
				dayOfWeek:[
					"Пн", "Вт", "Ср", "Чт", 
					"Пт", "Сб", "Вс",
				]
			}
		},
		timepicker:false,
		format:'d.m.Y',
		value: dateout
	});

	var date = new Date(),
			day = date.getDate(),
			mounth = date.getMonth(),
			oldhours = hours = date.getHours(),
			oldminutes = minutes = date.getMinutes(),
			months = [
					'Январь','Февраль','Март','Апрель',
					'Май','Июнь','Июль','Август',
					'Сентябрь','Октябрь','Ноябрь','Декабрь',
				];
	if (oldhours < 10) hours = "0" + oldhours;
	if (oldminutes < 10) minutes = "0" + oldminutes;
	$("#time").text(hours + ":" + minutes);
	$("#date").text(day + ' ' +months[mounth]);

	setInterval(function () {
		var date = new Date(),
				hours = date.getHours(),
				minutes = date.getMinutes();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if( oldminutes < minutes || oldhours < hours){
			oldminutes = minutes; oldhours = hours;
			$("#time").text(hours + ":" + minutes);
		}
	}, 1000);


	ymaps.ready(initMap);
	function initMap(){   
		$('.maps').each(function () {
			var map = new ymaps.Map( $(this).attr('id') , {
				center: [56.11601016, 37.57489343],
				zoom: 12,
				controls: ["smallMapDefaultSet"]
			});

			map.behaviors.disable(['scrollZoom']);

			var Placemark = new ymaps.Placemark([56.11524292, 37.58553644], {
				hintContent: '',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map-marker.png',
				iconImageSize: [29, 46],
				iconImageOffset: [-15, -46]
			});

			map.geoObjects.add(Placemark);
		});
		
	}




	$('.header__search').click(function () {
		if($('.search-header').is(':visible')){
			$('.header__main-menu').fadeToggle(0);
			$('.search-header').slideToggle(0);
			$(this).removeClass('header__search_close');
			$(this).find('.icon_close').removeClass('icon_close').addClass('icon_search');
		}else{
			$('.header__main-menu').fadeToggle(0);
			$('.search-header').slideToggle(100);
			$(this).addClass('header__search_close');
			$(this).find('.icon_search').removeClass('icon_search').addClass('icon_close');
		}
		return false;
	});


	$('.nav__item').click(function () {
		$('.nav__item.active').removeClass("active");
		$(this).addClass("active");
		$('.tab.active').removeClass("active");
		$('.tab').eq($(this).index()).addClass("active");
	});

	$('.cam').click(function () {
		$('.nav__item.active').removeClass("active");
		$('.tab.active').removeClass("active");
		$('.tab_video').addClass('active');
	});



	$('._book-popup-link').magnificPopup({
		items: {
			src: '.book-popup',
			type: 'inline'
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close icon icon_close-popup"></button>'
	});


	$('._room-popup-link').magnificPopup({
		items: {
			src: '.room-popup',
			type: 'inline'
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close icon icon_close-popup"></button>',
		callbacks: {
			open: function() {
				$('.similar-room__items').owlCarousel({
					loop: true,
					nav: false,
					dots: false,
					items: 3,
				});

				$('.room-slider__carousel_stage').jcarousel('reload',{ vertical: true });
				$('.room-slider__carousel_navigation').jcarousel('reload',{ vertical: true });
			}
		}
	});

	$('.similar-room__prev').click(function() {
		$(this).closest('.similar-room').find('.similar-room__items').trigger('prev.owl.carousel');
	});
	$('.similar-room__next').click(function() {
		$(this).closest('.similar-room').find('.similar-room__items').trigger('next.owl.carousel');
	});


	$('.accordion__slide').click(function () {
		var th = $(this),
				el = th.closest('.accordion__item');
		if(!$(this).hasClass('open')){
			el.find('.maps').show();
			el.find('.contact__body').addClass('active');
			el.find('.contact').css('width','50%');
			var curHeight = el.height(),
					autoHeight = el.css('height', 'auto').outerHeight();

			el.height(curHeight).animate({height: autoHeight - 50}, 500,function(){
				th.text('Свернуть');
				el.addClass('active');
				th.addClass('open');
			});
			//el.find('.product-popup__dropdown-before').slideUp(500);

		}else{
				el.animate({height: 130}, 500,function(){
				th.text('Подробнее');
				el.removeClass('active');
				th.removeClass('open');
				el.find('.maps').hide();
				el.find('.contact__body').removeClass('active');
				el.find('.contact').css('width','100%');
			});
			//el.find('.product-popup__dropdown-before').slideDown(500);

		}
	});



});

/*	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}*/



