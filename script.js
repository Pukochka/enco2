
$(function(){
        $('.offices').hide();
        $('#map').hide();

        $('#aivazovskiMap').click(function(){
            $('#aivazovskiMap').toggleClass('act_item');
            $('#peobraghenskMap,#peobraghenskMoskMap,#nikolskiMap').removeClass('act_item');
        });
        $('#peobraghenskMap').click(function(){
            $('#peobraghenskMap').toggleClass('act_item');
            $('#aivazovskiMap,#peobraghenskMoskMap,#nikolskiMap').removeClass('act_item');
        });
        $('#peobraghenskMoskMap').click(function(){
            $('#peobraghenskMoskMap').toggleClass('act_item');
            $('#aivazovskiMap,#peobraghenskMap,#nikolskiMap').removeClass('act_item');
        });
        $('#nikolskiMap').click(function(){
            $('#nikolskiMap').toggleClass('act_item');
            $('#peobraghenskMap,#peobraghenskMoskMap,#aivazovskiMap').removeClass('act_item');
        });


        // 

        $('.geo').click(function(){
            $('.geo').toggleClass('actprop');
            $('#map').slideToggle();
            $('.offices').slideToggle();
        });
        $('.mono').click(function(){
            $('.mono').toggleClass('actprop');
        });

        $('#custom-select-options').hide();
        $('#custom-select').click(function(e){
            $('#custom-select-options').slideToggle();
            $('#custom-select').toggleClass('open');
        });

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

                        $('#t2').click(function(e){
                            e.preventDefault();
                            $('.custom-select-vis').slideToggle();
                            $('#t2').toggleClass('open');
                        });

                        $('.custom-select-viss').hide();
                        
                        $('#t1').click(function(e){
                            e.preventDefault();
                            $('.custom-select-viss').slideToggle();
                            $('#t1').toggleClass('open');
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


                                $('.slider-nav').slick({
                                    infinite: true,
                                    dots: false,
                                    slidesToShow:3,
                                    slidesToScroll: 1,
                                    prevArrow: '<div class="prev"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
                                    nextArrow: '<div class="next"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
                                    responsive: [
                                        {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 2,
                                        }
                                        },
                                        {
                                            breakpoint: 640,
                                            settings: {
                                            slidesToShow: 1,
                                            adaptiveHeight:true,
                                            }
                                        },
                                    ]
                                });
                $('.slider-item').slick({
                    infinite: true,
                    dots: false,
                    slidesToShow:5,
                    slidesToScroll: 1,
                    prevArrow: '<div class="prev1"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
                    nextArrow: '<div class="next1"><svg class="svg"  width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.14286 7H7.85714L13 1" stroke="#888888" stroke-width="2"/></svg></div>',
                    responsive: [
                        {
                            breakpoint: 1132,
                            settings: {
                                slidesToShow: 3,
                            }
                            },
                        {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                        },
                        {
                            breakpoint: 640,
                            settings: {
                            slidesToShow: 1,
                            adaptiveHeight:true,
                            }
                        },
                    ]
                });
            $('.first,.second,.third,.forth').hide();   
            $('.filter-hidden-more').hide();
            $('.filter-visible-more').click(function(e){
                $('.filter-hidden-more').slideToggle();
                $('.filter-visible-more').toggleClass('open');
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
    squareInstance.update({to: val});
    $(this).prop("value", val);});
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [57.165705, 65.598890],
        zoom: 11
    }, {
        searchControlProvider: 'yandex#search'
    });
    const iconsPath = [
        {
            passive: './img/aiva.svg',
            active: './img/aivaact.svg'
        },
        {
            passive: './img/preobr.svg',
            active: './img/preobract.svg'
        },
        {
            passive: './img/nikol.svg',
            active: './img/nikolact.svg'
        },
        {
            passive: './img/preobr.svg',
            active: './img/preobract.svg'
        },
    ];
    const icons = [];
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map-icon">$[properties.iconContent]</div>'
    );
    const aivazovsky = new ymaps.Placemark([57.165705, 65.598890], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/aiva.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const peobraghensk = new ymaps.Placemark([57.117535, 65.501678], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/preobr.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const peobraghenskMosk = new ymaps.Placemark([57.123623, 65.470245], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/nikol.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const nikolski = new ymaps.Placemark([57.088936, 65.515488], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/preobr.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    icons.push(aivazovsky, peobraghensk, peobraghenskMosk, nikolski);
        document.querySelector('#aivazovskiMap').addEventListener('click', () => {
            aivazovsky.options.set('iconImageHref', './img/aivaact.svg' )
        });
        document.querySelector('#peobraghenskMap').addEventListener('click', () => {
            peobraghensk.options.set('iconImageHref', './img/preobract.svg' )
        });
        document.querySelector('#peobraghenskMoskMap').addEventListener('click', () => {
            
            peobraghenskMosk.options.set('iconImageHref', './img/preobract.svg' )
        });
        document.querySelector('#nikolskiMap').addEventListener('click', () => {
            nikolski.options.set('iconImageHref', './img/nikolact.svg' )
        });
        $(function(){
            $('#aivazovskiMap').click(function(){
                peobraghensk.options.set('iconImageHref', './img/preobr.svg' );
                peobraghenskMosk.options.set('iconImageHref', './img/preobr.svg' );
                nikolski.options.set('iconImageHref', './img/nikol.svg');
            });
            $('#peobraghenskMap').click(function(){
                aivazovsky.options.set('iconImageHref', './img/aiva.svg' );
                peobraghenskMosk.options.set('iconImageHref', './img/preobr.svg' );
                nikolski.options.set('iconImageHref', './img/nikol.svg');
            });
            $('#peobraghenskMoskMap').click(function(){
                peobraghensk.options.set('iconImageHref', './img/preobr.svg' );
                aivazovsky.options.set('iconImageHref', './img/aiva.svg' );
                nikolski.options.set('iconImageHref', './img/nikol.svg');
            });
            $('#nikolskiMap').click(function(){
                peobraghensk.options.set('iconImageHref', './img/preobr.svg' );
                peobraghenskMosk.options.set('iconImageHref', './img/preobr.svg' );
                aivazovsky.options.set('iconImageHref', './img/aiva.svg');
            });
        });
    
    aivazovsky.events.add('click', () => {
        $(function(){
            $('#aivazovskiMap').toggleClass('act_item');
            $('#peobraghenskMap,#peobraghenskMoskMap,#nikolskiMap').removeClass('act_item');
        });
            aivazovsky.options.set('iconImageHref', './img/aivaact.svg' )
            peobraghensk.options.set('iconImageHref', './img/preobr.svg' )
            nikolski.options.set('iconImageHref', './img/nikol.svg' )
            peobraghenskMosk.options.set('iconImageHref', './img/preobr.svg' )
    })
    peobraghensk.events.add('click', () => {
        $(function(){
            $('#peobraghenskMap').toggleClass('act_item');
            $('#aivazovskiMap,#peobraghenskMoskMap,#nikolskiMap').removeClass('act_item');
        });
            peobraghensk.options.set('iconImageHref', './img/preobract.svg' )
            nikolski.options.set('iconImageHref', './img/nikol.svg' )
            aivazovsky.options.set('iconImageHref', './img/aiva.svg' )
            peobraghenskMosk.options.set('iconImageHref', './img/preobr.svg' )

    })
    peobraghenskMosk.events.add('click', () => {
        $(function(){
            $('#peobraghenskMoskMap').toggleClass('act_item');
            $('#aivazovskiMap,#peobraghenskMap,#nikolskiMap').removeClass('act_item');
        });
            peobraghenskMosk.options.set('iconImageHref', './img/preobract.svg' )
            peobraghensk.options.set('iconImageHref', './img/preobr.svg' )
            nikolski.options.set('iconImageHref', './img/nikol.svg' )
            aivazovsky.options.set('iconImageHref', './img/aiva.svg' )
    })
    nikolski.events.add('click', () => {
        $(function(){
            $('#nikolskiMap').toggleClass('act_item');
            $('#peobraghenskMap,#peobraghenskMoskMap,#aivazovskiMap').removeClass('act_item');
        });
            nikolski.options.set('iconImageHref', './img/nikolact.svg' )
            peobraghensk.options.set('iconImageHref', './img/preobr.svg' )
            aivazovsky.options.set('iconImageHref', './img/aiva.svg' )
            peobraghenskMosk.options.set('iconImageHref', './img/preobr.svg' )
    })
    function clearIcons() {
        icons.forEach((el, index) => {
            el.options.set('iconImageHref', iconsPath[index].passive)
        })
    }
    myMap.geoObjects
        .add(aivazovsky)
        .add(peobraghensk)
        .add(peobraghenskMosk)
        .add(nikolski)
        myMap.behaviors.disable(['scrollZoom']);
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
});



const HiddenFilters = {
    hiddenBlock: null,
    buttonInitiator: null,
    currentText: '',
    init() {
        this.hiddenBlock = document.querySelector('.filter-hidden');
        this.buttonInitiator = document.querySelector('.filter-visible-more');
        this.useDefaultParams();
    },
    useDefaultParams() {
        this.hiddenBlock.style.maxHeight = null
        this.buttonInitiator.addEventListener('click', () => {
            this.toggleHiddenBlock();
        });
        this.currentText = this.buttonInitiator.textContent
    },
    toggleHiddenBlock() {
        if (this.hiddenBlock.style.maxHeight) {
            this.buttonInitiator.classList.remove('open')
            this.hiddenBlock.style.maxHeight = null
            this.toggleButtonInfo()
        } else {
            this.buttonInitiator.classList.add('open')
            this.hiddenBlock.style.maxHeight = `${this.hiddenBlock.scrollHeight}px`
            this.toggleButtonInfo()
        }
    },
    toggleButtonInfo() {
        this.currentText = this.buttonInitiator.textContent
        this.buttonInitiator.innerHTML = this.buttonInitiator.dataset.dinamic
        this.buttonInitiator.dataset.dinamic = this.currentText
    }}
    class CustomSelect {
        constructor(selector) {
            this.select = selector
            this.optionsBlock = this.select.getElementById('custom-select-options');
            this.visibleBlock = this.select.getElementById('custom-select-title');
            this.checkedValues = [];
            this.options = this.optionsBlock.querySelectorAll('input');
            this._init();
        }
        _init() {
            this.options.forEach(el => {
                if (el.checked) {
                    this.checkedValues.push(el.value);
                }
            });
            this.select.addEventListener('click', () => {
                if (!this.select.classList.contains('disable')) {
                    this.toggleOptions();
                }
            });
            this.optionsBlock.style.maxHeight = null;
            this.showSelected();
            this.options.forEach(el => {
                el.addEventListener('change', (e) => {this.changeValues(e)});
            })
        }
        showSelected() {
            this.visibleBlock.innerHTML = this.checkedValues.join(', ');
            this.visibleBlock.dataset.values = this.checkedValues.join(', ');
        }
        changeValues(e) {
            if (e.target.checked) {
                this.checkedValues.push(e.target.dataset.value);
                this.showSelected();
            } else {
                this.checkedValues = this.checkedValues.filter(el => el !== e.target.dataset.value);
                this.showSelected();
            }
        }
        toggleOptions() {
            this.select.classList.toggle('open');
            if (!this.optionsBlock.style.maxHeight) {
                this.optionsBlock.style.maxHeight = `${this.optionsBlock.scrollHeight}px`;
            } else {
                this.optionsBlock.style.maxHeight = null;
            }
        }
    }