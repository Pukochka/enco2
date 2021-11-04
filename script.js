
$(function(){

    $(".large_back_call_input").mask("+7(999)999-99-99");
    $(".__enco_call_conteiner_phone").mask("+7(999)999-99-99");
    
    $('.svg11').addClass('svghide');
    $('.svg22').addClass('svghide');
    $('.svg33').addClass('svghide');
    $('.__enco_question_container_answer_item_add').hide();


    $('#call,.call1,.header-btn').click(function(e){
        e.preventDefault();
        $('.__enco_call_modal').addClass('active_modal');
    });


    $('.modal_mask,.__enco_call_modal_btn').click(function(e){
        e.preventDefault();
        $('.__enco_call_modal').removeClass('active_modal');
    });

    $('.custom-select-vis').hide();
    $('#title').click(function(e){
        e.preventDefault();
        $('.custom-select-vis').slideToggle();
    });

    $('.custom-select-viss').hide();
    $('.slif').click(function(e){
        e.preventDefault();
        $('.custom-select-viss').slideToggle();
    });

$('#q1').click(function(){
    $('#q1').toggleClass('bgc');
    $('#q11').slideToggle(200);
    $('#q33,#q22').hide(200);
    $('#q3,#q2').removeClass('bgc');
    $('#bg1').toggleClass('bgcWhite');
    $('#bg2,#bg3').removeClass('bgcWhite');
    $('.svg1').toggleClass('svghide');
    $('.svg11').toggleClass('svghide');
    $('.svg2,.svg3').removeClass('svghide');
    $('.svg22,.svg33').addClass('svghide');
});
$('#q2').click(function(){
    $('#q2').toggleClass('bgc');
    $('#q22').slideToggle(200);
    $('#q11,#q33').hide(200);
    $('#q1,#q3').removeClass('bgc');
    $('#bg2').toggleClass('bgcWhite');
    $('#bg1,#bg3').removeClass('bgcWhite');
    $('.svg2').toggleClass('svghide');
    $('.svg22').toggleClass('svghide');
    $('.svg1,.svg3').removeClass('svghide');
    $('.svg11,.svg33').addClass('svghide');

});
$('#q3').click(function(){
    $('#q3').toggleClass('bgc');
    $('#q33').slideToggle(200);
    $('#q11,#q22').hide(200);
    $('#q1,#q2').removeClass('bgc');
    $('#bg3').toggleClass('bgcWhite');
    $('#bg1,#bg2').removeClass('bgcWhite');
    $('.svg3').toggleClass('svghide');
    $('.svg33').toggleClass('svghide');
    $('.svg1,.svg2').removeClass('svghide');
    $('.svg11,.svg22').addClass('svghide');

});

$(document).on('scroll', function(e){
    if(window.scrollY  > 2){
        $('.header-desktop').addClass('scrolled');
        $('main').addClass('scrolled');
    }
    if(window.scrollY === 0){
        $('.header-desktop').removeClass('scrolled');
        $('main').removeClass('scrolled');
    }

});

$('.mobile-burger').click(function(){
    $('.mobile-menu').toggleClass('active');
});


            let position = 0;
            
            let slideShow = 3;

            let slideScroll = 1;

            const conteiner = $('.__enco_env_proj');

            const track = $('.__enco_env_proj_track');

            const item = $('.__enco_env_proj_item');

            const itemw = 0;

            const btnNext = $('#next1');

            const btnPrev = $('#prev1');

            const slideWidth = conteiner.width() / slideShow;

            const moveSlide = slideWidth * slideShow;
            let itemcount1 = 0;
            let b = 0;
            btnNext.click(function (e) { 

                // itemw += moveSlide;
                itemcount1++
                b -=32;
                track.css({
            
                    transform:`translateX(${b}%)`
            
                });
                checkBtn();

            });

            
            btnPrev.click(function (e) { 
                
                // itemw -= moveSlide;
                itemcount1--
                b +=32;
                track.css({
                        
                    transform:`translateX(${b}%)`
            
                });
            
                checkBtn();
            });
            
            
            const checkBtn = () => {
            
                btnNext.prop('disabled',
            
                itemcount1 === 3
            
                );
            
                btnPrev.prop('disabled', itemcount1=== 0);
            
            }
            
            checkBtn();

            // item.each(function(index, item){

            //     if($(window).width()===640){
            //         slideShow = 2;
            //         $(item).css({
            
            //             'min-width':'50%'
                
            //         });
            //     }else{
            //         $(item).css({
            
            //             'min-width':'33%'
                
            //         });
            //     }

                
            // });

            let position1 = 0;
            
            let slideShow1 =3;

            let slideScroll1 = 1;

            const conteiner1 = $('.__enco_business_types');

            const track1 = $('.__enco_business_track');

            const item1 = $('.__enco_business_track_item');

            const items1 = item.length;

            const btnNext1 = $('#next');

            const btnPrev1 = $('#prev');

            const slideWidth1 = conteiner1.width() / slideShow1;

            const moveSlide1 = slideWidth1 * slideScroll1;
            let c = 0;

            const checkBtn1 = () => {
            
                btnNext1.prop('disabled', itemcount === 5
            
                );
            
                btnPrev1.prop('disabled', itemcount === -2);
                
                
            }
            let itemcount=0;
            btnNext1.click(function (e) { 

                c -=288;

                itemcount++;
                track1.css({
            
                    transform:`translateX(${c}px)`
            
                });
                checkBtn1();

            });


            
            btnPrev1.click(function (e) { 
                
                position1 += moveSlide1;
                itemcount--;
                c +=288;
                track1.css({
                        
                    transform:`translateX(${c}px)`
            
                });
            
                checkBtn1();
            });
            
            
            
            
            checkBtn1();

            item1.each(function(index, item){
                
                    $(item1).css({
            
                        'min-width':'228px'
                
                    });

            });
            $('.first').hide();
            $('.second').hide();
            $('.third').hide();
            $('.forth').hide();
            $('.filter-hidden-more').hide();
            $('.filter-visible-more').click(function(e){
    $('.filter-hidden-more').slideToggle();
                });

$('.first1').click(function(){
    $('.first').slideToggle();
});
$('.second2').click(function(){
    $('.second').slideToggle();
});
$('.third3').click(function(){
    $('.third').slideToggle();
});
$('.forth4').click(function(){
    $('.forth').slideToggle();
});

$("#online_phone").keyup(function(e){
    this.value = this.value.replace(/[^0-9\.]/g, '');
  });
  var $priceRange = $(".price-range-slider"),
  $priceInputFrom = $("#price-input-from"),
  $priceInputTo = $("#price-input-to"),
  priceInstance,
  priceMin = parseInt($priceInputFrom.data('min').replace( /\s/g, "")),
  priceMax = parseInt($priceInputTo.data('max').replace( /\s/g, "")),
  priceFrom = parseInt($priceInputFrom.data('start').replace( /\s/g, "")),
  priceTo = parseInt($priceInputTo.data('end').replace( /\s/g, ""));
$priceRange.ionRangeSlider({
  skin: "round",
  type: "double",
  min: priceMin,
  max: priceMax,
  from: priceFrom,
  to: priceTo,
  onStart: updatePriceInputs,
  onChange: updatePriceInputs
});
priceInstance = $priceRange.data("ionRangeSlider");
function updatePriceInputs (data) {
  from = splitNumber(data.from)
  to = splitNumber(data.to)
  $priceInputFrom.prop("value", from);
  $priceInputTo.prop("value", to);
}
$priceInputFrom.on("input", function () {
  $(this).val(splitNumber($(this).val()));
  var val = $(this).prop("value").replace( /\s/g, "");
  if (val < priceMin) {
      val = priceMin;
  } else if (val >  priceTo) {
      val =  priceTo;
      console.log(val)
  }
  priceInstance.update({
      from: val
  });
});

$priceInputTo.on("input", function () {
  $(this).val(splitNumber($(this).val()));
  var val = $(this).prop("value").replace( /\s/g, "");
  if (val < from) {
      val = from;
  } else if (val > priceMax) {
      val = priceMax;
  }
  priceInstance.update({
      to: val
  });
});

function splitNumber(val) {
  let num = val.toString();
  num = num.replace(/ /g,"");
  num = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return num;
}

//floor range

var $floorRange = $(".floor-range-slider");
var $floorInputFrom = $("#floor-input-from");
var $floorInputTo = $("#floor-input-to");
var floorInstance;
var floorMin = $floorInputFrom.data('min');
var floorMax = $floorInputTo.data('max');
var floorFrom = $floorInputFrom.data('start');
var floorTo = $floorInputTo.data('end');
$floorRange.ionRangeSlider({
  skin: "round",
  type: "double",
  min: floorMin,
  max: floorMax,
  from: floorFrom,
  to: floorTo ,
  onStart: updateFloorInputs,
  onChange: updateFloorInputs,
  onFinish: updateFloorInputs
});
floorInstance = $floorRange.data("ionRangeSlider");
function updateFloorInputs (data) {
  from = data.from;
  to = data.to;

  $floorInputFrom.prop("value", from);
  $floorInputTo.prop("value", to);
}
$floorInputFrom.on("change", function () {
  var val = $(this).prop("value");
  if (val < floorMin) {
      val = floorMin;
  } else if (val > to) {
      val = to;
  }
  floorInstance.update({
      from: val
  });
  $(this).prop("value", val);

});
$floorInputTo.on("change", function () {
  var val = $(this).prop("value");
  if (val < from) {
      val = from;
  } else if (val > floorMax) {
      val = floorMax;
  }
  floorInstance.update({
      to: val
  });
  $(this).prop("value", val);
});

var $squareRange = $(".square-range-slider");
var $squareInputFrom = $("#square-input-from");
var $squareInputTo = $("#square-input-to");
var squareInstance;
var squareMin = $squareInputFrom.data('min');
var squareMax = $squareInputTo.data('max');
var squareFrom = $squareInputFrom.data('start');
var squareTo = $squareInputTo.data('end');

$squareRange.ionRangeSlider({
  skin: "round",
  type: "double",
  min: squareMin,
  max: squareMax,
  from: squareFrom,
  to: squareTo,
  step: 0.5,
  onStart: updateSquareInputs,
  onChange: updateSquareInputs,
  onFinish: updateSquareInputs
});
squareInstance = $squareRange.data("ionRangeSlider");
function updateSquareInputs (data) {
  from = data.from;
  to = data.to;

  $squareInputFrom.prop("value", from);
  $squareInputTo.prop("value", to);
}
$squareInputFrom.on("change", function () {
  var val = $(this).prop("value");
  if (val < squareMin) {
      val = squareMin;
  } else if (val > to) {
      val = to;
  }
  squareInstance.update({
      from: val
  });
  $(this).prop("value", val);
});
$squareInputTo.on("change", function () {
  var val = $(this).prop("value");
  if (val < from) {
      val = from;
  } else if (val > squareMax) {
      val = squareMax;
  }
  squareInstance.update({
      to: val
  });
  $(this).prop("value", val);
});



class CustomSelect {
    constructor(selector) {
        this.select = selector
        this.optionsBlock = this.select.querySelector('.custom-select-options')
        this.visibleBlock = this.select.querySelector('.custom-select-title')
        this.checkedValues = []
        this.options = this.optionsBlock.querySelectorAll('input')
        this._init()
    }
    _init() {
        this.options.forEach(el => {
            if (el.checked) {
                this.checkedValues.push(el.value)
            }
        });
        this.select.addEventListener('click', () => {
            if (!this.select.classList.contains('disable')) {
                this.toggleOptions()
            }
        });
        this.optionsBlock.style.maxHeight = null
        this.showSelected()
        this.options.forEach(el => {
            el.addEventListener('change', (e) => {this.changeValues(e)})
        })
    }
    showSelected() {
        this.visibleBlock.innerHTML = this.checkedValues.join(', ')
        this.visibleBlock.dataset.values = this.checkedValues.join(', ')
    }
    changeValues(e) {
        if (e.target.checked) {
            this.checkedValues.push(e.target.dataset.value)
            this.showSelected()
        } else {
            this.checkedValues = this.checkedValues.filter(el => el !== e.target.dataset.value)
            this.showSelected()
        }
    }
    toggleOptions() {
        this.select.classList.toggle('open')
        if (!this.optionsBlock.style.maxHeight) {
            this.optionsBlock.style.maxHeight = `${this.optionsBlock.scrollHeight}px`
        } else {
            this.optionsBlock.style.maxHeight = null
        }
    }
}
if (window.innerWidth < 768) {
    SliderMobile.init()
    const car1 = new CarouselTouchScreenNoBtn('.stocks-inner', '.stocks-flex')
    car1.init()
    document.querySelector('.news-info').remove()
    const car2 = new CarouselTouchScreenNoBtn('.news-inner', '.news-items')
    car2.init()
}
Accordions.init()
document.querySelectorAll('.custom-select').forEach(el => {
    new CustomSelect(el)
});
if (document.querySelector('.banner-top')) {
    BannerTop.init()
}
function topAnimate() {
    if (pageYOffset > 1) {
        document.querySelector('main').classList.add('scrolled');
        document.querySelector('.header-desktop').classList.add('scrolled');
        if (document.querySelector('.banner-top')) {
            BannerTop.bannerBlock.remove();
        }
        
    } else {
        document.querySelector('.header-desktop').classList.remove('scrolled');
        document.querySelector('main').classList.remove('scrolled');
    }
}
const SliderMobile = {
    slides: [],
    next: null,
    prev: null,
    init() {
        document.querySelectorAll('.inner-slide').forEach((el, indx) => {
           this.slides.push(el);
           if (indx !== 0) {
               el.classList.add('next');
           } else el.classList.add('active');
        });
        this.next = document.querySelector('.btn-right');
        this.prev = document.querySelector('.btn-left');
        this.updateBtns(0)
        this.next.addEventListener('click', () => {
            this.showNextSlide();
        });
        this.prev.addEventListener('click', () => {
            this.showPrevSlide();
        });
    },
    showNextSlide() {
        const current = this.slides.find(el => el.classList.contains('active'));
        const currentIndex = this.slides.indexOf(current);
        if (currentIndex + 1 < this.slides.length) {
            current.classList.remove('active');
            current.classList.add('prev');
            this.slides[this.slides.indexOf(current) + 1].classList.remove('next');
            this.slides[this.slides.indexOf(current) + 1].classList.add('active');
            this.updateBtns(currentIndex+1)
        }
    },
    showPrevSlide() {
        const current = this.slides.find(el => el.classList.contains('active'));
        const currentIndex = this.slides.indexOf(current);
        if (currentIndex > 0) {
            current.classList.remove('active');
            current.classList.add('next');
            this.slides[this.slides.indexOf(current) - 1].classList.remove('prev');
            this.slides[this.slides.indexOf(current) - 1].classList.add('active');
            this.updateBtns(currentIndex-1)
        }
    },
    updateBtns(index) {
        if (index === 0) {
            this.prev.classList.add('disable');
        } else this.prev.classList.remove('disable');
        if (index === this.slides.length - 1) {
            this.next.classList.add('disable');
        } else this.next.classList.remove('disable');
    }
}
window.addEventListener('scroll',topAnimate)
if (document.querySelector('.filter-hidden')) {
    if (window.innerWidth > 768) {
        HiddenFilters.init()
    } else {
        document.querySelector('.filter-visible-more').addEventListener('click', () => {
            document.body.classList.add('overflow');
            document.querySelector('.filter').classList.add('active');
        });
        document.querySelector('.filter-mobile-close').addEventListener('click', () => {
            document.body.classList.remove('overflow');
            document.querySelector('.filter').classList.remove('active');
        })
    }

}


// initialisation



});