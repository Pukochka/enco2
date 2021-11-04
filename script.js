$(function(){

    $('.svg11').hide();
$('.svg22').hide();
$('.svg33').hide();
$('.__enco_question_container_answer_item_add').hide();



$('#q1').click(function(){
    $('#q1').toggleClass('bgc');
    $('#q11').slideToggle(200);
    $('.svg1').slideToggle();
    $('.svg11').slideToggle();
    $('#q33,#q22').hide(200);
    $('#q3,#q2').removeClass('bgc');
    $('.svg2,.svg3').show();
    $('.svg22,.svg33').hide();
    $('#bg1').toggleClass('bgcWhite');
    $('#bg2,#bg3').removeClass('bgcWhite');
});
$('#q2').click(function(){
    $('#q2').toggleClass('bgc');
    $('#q22').slideToggle(200);
    $('.svg2').slideToggle();
    $('.svg22').slideToggle();
    $('#q11,#q33').hide(200);
    $('#q1,#q3').removeClass('bgc');
    $('.svg3,.svg1').show();
    $('.svg11,.svg33').hide();
    $('#bg2').toggleClass('bgcWhite');
    $('#bg1,#bg3').removeClass('bgcWhite');
});
$('#q3').click(function(){
    $('#q3').toggleClass('bgc');
    $('#q33').slideToggle(200);
    $('.svg3').slideToggle();
    $('.svg33').slideToggle();
    $('#q11,#q22').hide(200);
    $('#q1,#q2').removeClass('bgc');
    $('.svg2,.svg1').show();
    $('.svg22,.svg11').hide();
    $('#bg3').toggleClass('bgcWhite');
    $('#bg1,#bg2').removeClass('bgcWhite');
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



// initialisation



});