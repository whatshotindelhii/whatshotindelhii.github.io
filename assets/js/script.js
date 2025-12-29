// JavaScript Document
$(document).ready(function(){
	
	
	
	document.addEventListener("DOMContentLoaded", function(){

if (window.innerWidth < 992) {


  document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
    everydropdown.addEventListener('hidden.bs.dropdown', function () {

        this.querySelectorAll('.submenu').forEach(function(everysubmenu){

          everysubmenu.style.display = 'none';
        });
    })
  });

  document.querySelectorAll('.dropdown-menu a').forEach(function(element){
    element.addEventListener('click', function (e) {
        let nextEl = this.nextElementSibling;
        if(nextEl && nextEl.classList.contains('submenu')) {	
         
          e.preventDefault();
          if(nextEl.style.display == 'block'){
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
    });
  })
}

}); 
	

  $('.filterTrigger').click(function(e){ 
    e.stopPropagation();    
    $('body').toggleClass('filter-open');   
  });
  $('.closeFilter').click(function(){ 
    $('body').removeClass('filter-open');    
  });
    
    
$('.collapse').on('shown.bs.collapse', function(e) {
	var $card = $(this).closest('.accordion-item');
	$('html,body').animate({
		scrollTop: $card.offset().top - 80
	}, 500);
});

	
$('.footerTitle').click(function(){
    $(this).parent('.footerNav').toggleClass('open');
  });
  $('.toggle-btn').click(function(e){ 
    e.stopPropagation();    
    $('body').toggleClass('open');   
  });
  $('.backdrop').click(function(){ 
    $('body').removeClass('open');    
  });

$('.accordion .collapse').on('shown.bs.collapse', function () {
		$(this).prev().parent().addClass('active');
			var $panel = $(this).closest('.card');
		$('html,body').animate({
			scrollTop: $panel.offset().top -80
		}, 700);
});
	
	
// Home Slider
	var mySwiper = new Swiper('.home-swiper', {
  	loop: true,
	speed:800,	
	navigation: {
        nextEl: '.home-swiper .swiper-button-next',
        prevEl: '.home-swiper .swiper-button-prev',
      },	
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});


// swiperSuccessStory
	var mySwiper = new Swiper('.swiperSuccessStory', {
  	loop: false,
	speed:800,
	spaceBetween: 20,	
	navigation: {
        nextEl: '.swiperSuccessStory .swiper-button-next',
        prevEl: '.swiperSuccessStory .swiper-button-prev',
      },	
	breakpoints: {
		0: {
			slidesPerView: 1.2,	
		},
		575: {
			slidesPerView: 1.5,	
		},
		768: {
			slidesPerView: 2,	
		},
		980: {
			slidesPerView: 3,	
		},		
	}
});


// swiperClient
	var mySwiper = new Swiper('.swiperClient', {
  	loop: false,
	speed:800,
	spaceBetween: 20,	
	navigation: {
        nextEl: '.swiperClient .swiper-button-next',
        prevEl: '.swiperClient .swiper-button-prev',
      },	
	breakpoints: {
		0: {
			slidesPerView: 2,	
		},
		575: {
			slidesPerView: 2,	
		},
		768: {
			slidesPerView: 3,	
		},
		980: {
			slidesPerView: 6,	
		},		
	}
});


// swiperSuccessStory
	var mySwiper = new Swiper('.DoctorSwiper', {
  	loop: false,
	speed:800,
	spaceBetween: 20,	
	navigation: {
        nextEl: '.DoctorSwiper .swiper-button-next',
        prevEl: '.DoctorSwiper .swiper-button-prev',
      },	
	breakpoints: {
		0: {
			slidesPerView: 1.2,	
		},
		575: {
			slidesPerView: 1.5,	
		},
		768: {
			slidesPerView: 2,	
		},
		980: {
			slidesPerView: 3,	
		},		
	}
});





// swiperSuccessStory
	var mySwiper = new Swiper('.swiperDoctorprofile', {
  	loop: false,
	speed:800,
	spaceBetween: 20,	
	navigation: {
        nextEl: '.swiperDoctorprofile .swiper-button-next',
        prevEl: '.swiperDoctorprofile .swiper-button-prev',
      },	
	breakpoints: {
		0: {
			slidesPerView: 1.2,	
		},
		575: {
			slidesPerView: 1.5,	
		},
		768: {
			slidesPerView: 2,	
		},
		980: {
			slidesPerView: 3.5,	
		},		
	}
});


// swiperSuccessStory
	var mySwiper = new Swiper('.swiperTestimonial', {
  	loop: false,
	speed:800,
	spaceBetween: 22,	
	navigation: {
        nextEl: '.swiperTestimonial .swiper-button-next',
        prevEl: '.swiperTestimonial .swiper-button-prev',
      },	
	breakpoints: {
		0: {
			slidesPerView: 1,	
		},
		575: {
			slidesPerView: 1,	
		},
		768: {
			slidesPerView: 2,	
		},
		980: {
			slidesPerView: 2,	
		},		
	}
});

// swiper New Matches
	var mySwiper = new Swiper('.swiperNewMatch', {
  	loop: false,
	speed:800,
	spaceBetween: 20,	
	navigation: {
        nextEl: '.swiperNewMatch .swiper-button-next',
        prevEl: '.swiperNewMatch .swiper-button-prev',
      },	
    pagination: {
    el: ".swiperNewMatch .swiper-pagination",
    clickable: true,
  },
        
	breakpoints: {
		0: {
			slidesPerView: 1.1,	
            spaceBetween: 5,
		},
		575: {
			slidesPerView: 1.5,	
		},
		768: {
			slidesPerView: 2,	
		},
		980: {
			slidesPerView: 3,	
		},		
	}
});

// swiperProfile
	var mySwiper = new Swiper('.profileSlide', {
  	loop: false,
	speed:800,
	spaceBetween: 20,	
	navigation: {
        nextEl: '.profileSlide .swiper-button-next',
        prevEl: '.profileSlide .swiper-button-prev',
      },
	  pagination: {
		el: ".sliderProfile .swiper-pagination",
		clickable: true,
	  },	
	breakpoints: {
		0: {
			slidesPerView: 1,	
		},
		575: {
			slidesPerView: 2,	
		},
		768: {
			slidesPerView: 1,	
		},
		980: {
			slidesPerView: 1,	
		},		
	}
});


// Special Slider
var mySwiper = new Swiper('.sepcial-swiper', {
	loop: false,
  speed:800,
  spaceBetween: 15,
  slidesPerView: 5,
  navigation: {
	  nextEl: '.sepcial-swiper .swiper-button-next',
	  prevEl: '.sepcial-swiper .swiper-button-prev',
	},	
  breakpoints: {
	  0: {
		  slidesPerView: 2.2,	
	  },
	  575: {
		slidesPerView: 2.8,	
	},
	  768: {
		  slidesPerView: 4,	
	  },
	  1024: {
		  slidesPerView: 5,	
	  },		
  }
});
// Special Slider
var mySwiper = new Swiper('.swiperPractise', {
	loop: false,
  speed:800,
  spaceBetween: 20,
  slidesPerView: 5,
  navigation: {
	  nextEl: '.swiperPractise .swiper-button-next',
	  prevEl: '.swiperPractise .swiper-button-prev',
	},	
  breakpoints: {
	  0: {
		  slidesPerView: 1,	
	  },
	  575: {
		slidesPerView: 1,	
	},
	  768: {
		  slidesPerView: 1,	
	  },
	  1024: {
		  slidesPerView: 2,	
	  },		
  }
});
// Single Trip Hero Slider
var mySwiper = new Swiper('.tripSingleHeroBanner', {
  loop: true,
  speed:800,
  spaceBetween: 10,
  slidesPerView: 1.3,	
  navigation: {
	  nextEl: '.tripSingleHeroBanner .swiper-button-next',
	  prevEl: '.tripSingleHeroBanner .swiper-button-prev',
	}
});
// highlightSwiper
var mySwiper = new Swiper('.highlightSwiper', {
	loop: false,
	speed:800,
	spaceBetween: 10,
	slidesPerView: 4,	
	pagination: {
		el: ".highlightSwiper .swiper-pagination",
		clickable: true,
	  },
  });

  // tripOverviewSwiper
  var mySwiper = new Swiper('.tripOverviewSwiper', {
	loop: false,
	speed:800,
	spaceBetween: 10,
	slidesPerView: 1,	
	pagination: {
		el: ".tripOverviewSwiper .swiper-pagination",
		clickable: true,
	  },
  });
   // tripGravityCarousel
   var mySwiper = new Swiper('.tripGravityCarousel', {
	loop: false,
	speed:800,
	spaceBetween: 10,
	slidesPerView: 4,
	pagination: {
		el: ".tripGravityCarousel .swiper-pagination",
		clickable: true,
	  },
  });
  // tripGravitySpecial
  var mySwiper = new Swiper('.tripGravitySpecial', {
	loop: false,
	speed:800,
	spaceBetween: 10,
	slidesPerView: 3,	
	navigation: {
		nextEl: '.tripGravitySpecial .swiper-button-next',
		prevEl: '.tripGravitySpecial .swiper-button-prev',
	  }
  });
// heroSwiper
var mySwiper = new Swiper('.heroSwiper', {
	loop: false,
	speed:800,
	slidesPerView: 1,	
	pagination: {
		el: ".heroSwiper .swiper-pagination",
		clickable: true,
	  },
  });
  
  //swiperShortWeekend
  var mySwiper = new Swiper('.swiperShortWeekend', {
	loop: false,
	speed:800,
	slidesPerView: 1,	
	pagination: {
		el: ".swiperShortWeekend .swiper-pagination",
		clickable: true,
	  },
  });


// OTP
$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));			
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
	
	});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var firstOpen = true;
        var time;

        $('#timePicker').datetimepicker({
            useCurrent: false,
            format: "hh:mm A"
        }).on('dp.show', function() {
            if(firstOpen) {
                time = moment().startOf('day');
                firstOpen = false;
            } else {
                time = "01:00 PM"
            }        
            $(this).data('DateTimePicker').date(time);
        });


});

