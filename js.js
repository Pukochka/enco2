$(function() {
    $('[data-form-recaptcha]').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var action = $(form).find('input[name="action"]').val();
        if (typeof action === 'undefined') {
            action = 'call';
        }
        console.log(action);

        grecaptcha.ready(function() {
            grecaptcha.execute('6LdjfPMZAAAAAFRAbzdWJztFWg88sJ6SVutOnY1h', {action: action})
                .then(function(token) {
                    console.log(form);
                    console.log(action);
                    console.log(token);

                    if ($(form).find('[name="token"]').length > 0) {
                        $(form).find('[name="token"]').val(token);
                        $(form).find('[name="action"]').val(action);
                    } else {
                        $(form).prepend('<input type="hidden" name="token" value="' + token + '">');
                        $(form).prepend('<input type="hidden" name="action" value="' + action + '">');
                    }
                    // $(form).unbind('submit').submit(); 
                })
                .then(function() {
                    sendFormAjax(form);
                });
        });
    });
});

function getSuccessMag() {
    var d = new Date();
    var n = d.getDay();
    var h = d.getHours();
    var successMsg;
    if (d == 7) {
        successMsg = 'Р‘Р»Р°РіРѕРґР°СЂРёРј Р’Р°СЃ Р·Р° РѕР±СЂР°С‰РµРЅРёРµ! Р’ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ СЂР°Р±РѕС‡РёР№ РґРµРЅСЊ Р·Р°РєРѕРЅС‡РµРЅ Рё РЅР°С€Рё РѕС„РёСЃС‹ РїСЂРѕРґР°Р¶ Р·Р°РєСЂС‹С‚С‹. РњС‹ СЃ СѓРґРѕРІРѕР»СЊСЃС‚РІРёРµРј РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј Рё РѕС‚РІРµС‚РёРј РЅР° Р’Р°С€ РІРѕРїСЂРѕСЃ РІ СЂР°Р±РѕС‡РµРµ РІСЂРµРјСЏ.';
    } else if (d == 6) {
        if (h > 8 || h < 16) {
            successMsg = 'Р”РѕСЂРѕРіРѕР№ РєР»РёРµРЅС‚! РЎРїР°СЃРёР±Рѕ Р·Р° РёРЅС‚РµСЂРµСЃ Рє РЅР°С€РёРј РїСЂРѕРµРєС‚Р°Рј. РњС‹ РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј РІ С‚РµС‡РµРЅРёРµ 24 С‡Р°СЃРѕРІ. Р“СЂСѓРїРїР° РєРѕРјРїР°РЅРёР№ "Р­РќРљРћ".';
        } else {
            successMsg = 'Р‘Р»Р°РіРѕРґР°СЂРёРј Р’Р°СЃ Р·Р° РѕР±СЂР°С‰РµРЅРёРµ! Р’ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ СЂР°Р±РѕС‡РёР№ РґРµРЅСЊ Р·Р°РєРѕРЅС‡РµРЅ Рё РЅР°С€Рё РѕС„РёСЃС‹ РїСЂРѕРґР°Р¶ Р·Р°РєСЂС‹С‚С‹. РњС‹ СЃ СѓРґРѕРІРѕР»СЊСЃС‚РІРёРµРј РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј Рё РѕС‚РІРµС‚РёРј РЅР° Р’Р°С€ РІРѕРїСЂРѕСЃ РІ СЂР°Р±РѕС‡РµРµ РІСЂРµРјСЏ.';
        }
    } else {
        if (h > 8 || h < 20) {
            successMsg = 'Р”РѕСЂРѕРіРѕР№ РєР»РёРµРЅС‚! РЎРїР°СЃРёР±Рѕ Р·Р° РёРЅС‚РµСЂРµСЃ Рє РЅР°С€РёРј РїСЂРѕРµРєС‚Р°Рј. РњС‹ РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј РІ С‚РµС‡РµРЅРёРµ 24 С‡Р°СЃРѕРІ. Р“СЂСѓРїРїР° РєРѕРјРїР°РЅРёР№ "Р­РќРљРћ".';
        } else {
            successMsg = 'Р‘Р»Р°РіРѕРґР°СЂРёРј Р’Р°СЃ Р·Р° РѕР±СЂР°С‰РµРЅРёРµ! Р’ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ СЂР°Р±РѕС‡РёР№ РґРµРЅСЊ Р·Р°РєРѕРЅС‡РµРЅ Рё РЅР°С€Рё РѕС„РёСЃС‹ РїСЂРѕРґР°Р¶ Р·Р°РєСЂС‹С‚С‹. РњС‹ СЃ СѓРґРѕРІРѕР»СЊСЃС‚РІРёРµРј РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј Рё РѕС‚РІРµС‚РёРј РЅР° Р’Р°С€ РІРѕРїСЂРѕСЃ РІ СЂР°Р±РѕС‡РµРµ РІСЂРµРјСЏ.';
        }
    }

    return successMsg;
}

function sendFormAjax(form) {
    // let formDataExtra = $('#calc-flat').serializeArray();
    // var formData = $(this).serializeArray().concat(formDataExtra);
    var formData = $(form).serializeArray();
    console.log(formData);
    
    $.ajax({
        url: $(form).attr('action'),
        method: 'post',
        data: formData,
        // dataType: 'json',
        beforeSend: function() {
            $(form).find('button[type="submit"]').addClass("loading");
            $(form).find('button[type="submit"]').addClass("hold");
        },
        success: function(responseText) {
            $(form).find('button[type="submit"]').removeClass("loading");
            $(form).find('button[type="submit"]').removeClass("hold");
            // console.log(responseText);
            data = JSON.parse(responseText);
            // console.log(data);
            if (data.response.result == "success") {
                $(form).html('<div class="large_back_call_info">' + getSuccessMag() + '</div>');
                ym(26247744,'reachGoal','all_forms');
                gtag('event', 'forms', { 'event_category': 'all', 'event_label': 'forms' });
            } else {
                $(form).find('.error').removeClass('error__show');
                $.each(data.response.error, function(index, error_name) {
                    console.log(index);
                    console.log(error_name);
                    $(form).find('input[name="'+error_name+'"]').siblings('.error').addClass('error__show');
                });
                // $(form).find("button[type=submit]").html("<span>РћС€РёР±РєР°!</span><div class='loading_enco color-fff'><div><div></div><div></div><div></div></div></div>");
            }
        }
    });
    
}

/*
$(function() {
    $(document).on('submit', '#back_call_header', function() {
        console.log('focus');

        var check_cookie;
        check_cookie = getCookie('recaptcha_token');
        console.log(check_cookie);

        if (!check_cookie) {
            grecaptcha.ready(function() {
                grecaptcha.execute('6LdjfPMZAAAAAFRAbzdWJztFWg88sJ6SVutOnY1h', {action: 'formId'}).then(function(token) {
                    var now = new Date(),
                        cookie_live = new Date(now);
                    cookie_live.setMinutes(now.getMinutes() + 2);            
                    document.cookie = "recaptcha_token="+token+"; path=/; expires=" + cookie_live.toUTCString();
                });
            });
        }
    });
});
*/

/*

// 'use strict';

function httpGet(form) {
    return new Promise(function(resolve, reject) {
		$.ajax({
			url: $(form).attr('action'),
			data: $(form).serializeArray(),
            type: $(form).attr('method'),
			success: function(response) {
				response = JSON.parse(response);
                resolve(response);
			},
            error: function(jqXHR, exception) {
                var error = new Error(jqXHR.statusText);
                error.code = this.status;
                reject(error);
            }
		});
    });
}

function getRecaptchaToken() {
    return new Promise(function(resolve, reject) {
        grecaptcha.ready(function() {
            grecaptcha.execute('6LdjfPMZAAAAAFRAbzdWJztFWg88sJ6SVutOnY1h', {action: 'formId'}).then(function(token) {
                resolve(token);
            });
        });
    });
}

$(function() {
    $('[data-form-recaptcha]').on('submit', function(e) {
        e.preventDefault();
        var form = this;
        var error;

        getRecaptchaToken()
        // 1. РїРѕР»СѓС‡РµРЅРёРµ С‚РѕРєРµРЅР°
            .then(token => {
                // $(form).prepend('<input type="hidden" name="token" value="' + token + '">');
                // $(form).prepend('<input type="hidden" name="action" value="' +$(form).attr('id')+ '">');
                $(form).find('[name="token"]').val(token);
                return token;
            })
            // 2. РѕС‚РїСЂР°РІРєР° С„РѕСЂРјС‹
            .then(token => {
                httpGet(form)
                    // 3. РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ РІ html
                    .then(
                        response => {
                            console.log(response);
                            response = response.response;
                            $(form).find('input').removeClass('error');
                            if (response.result=='success') {
                                $(form).html('<div class="large_back_call_info success">'+getSuccessMag()+'</div>');
                                $(form).parent().addClass('success');
                            } else {
                                for (const [key, value] of Object.entries(response.error)) {
                                    $(form).find('[name="'+value+'"]').addClass('error');
                                }
                            }
                            
                        },
                        error => alert(`Rejected: ${error}`)
                    );
            })
    });
});

*/
/* End */
;
; /* Start:"a:4:{s:4:"full";s:47:"/local/templates/new/js/main.js?163169909323802";s:6:"source";s:31:"/local/templates/new/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

const BannerTop = {
    bannerBlock: null,
    closeBtn: null,
    logoNew: null,
    logoOld: null,
    init () {
        this.bannerBlock = document.querySelector('.banner-top');
        this.closeBtn = this.bannerBlock.querySelector('.banner-top-close');
        this.logoOld = this.bannerBlock.querySelector('#logo-old');
        this.logoNew = this.bannerBlock.querySelector('#logo-new')
        this.logoNew.classList.add('active')
        this.closeBtn.addEventListener('click', () => {
            this.bannerBlock.remove();
        });
        setInterval(() => {
          this.toggleLogo()
        }, 3000)
    },
    toggleLogo() {
        if (this.logoNew.classList.contains('active')) {
            this.logoNew.classList.remove('active')
            this.logoOld.classList.add('active')
        } else {
            this.logoNew.classList.add('active')
            this.logoOld.classList.remove('active')
        }
    }
}
/**
 * Class of custom select, based on checkbox.
 * params: { selector } - HTML element (select block)
 * if you want to init but not use, add too your select class - 'disable'
 */
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
    }
}
const Accordions = {
    officeBlocks: null,
    init() {
        this.officeBlocks = document.querySelectorAll('.accordion');
        this.officeBlocks.forEach(el => {
            el.addEventListener('click', (el) => {
                if (el.currentTarget.classList.contains('active')) {
                    this.hideContent(el.currentTarget)
                } else {
                    this.showContent(el.currentTarget)
                }

            });
        })
    },
    showContent(element) {
        this.officeBlocks.forEach(el => {
            if (el.classList.contains('active')) {
                el.querySelector('.accordion-block').style.maxHeight = null
                el.classList.remove('active')
            }
        });
        const content = element.querySelector('.accordion-block');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = `${content.scrollHeight}px`
            element.classList.add('active')
        }
    },
    hideContent(element) {
        element.classList.remove('active');
        element.querySelector('.accordion-block').style.maxHeight = null
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
class Carousel {
    constructor(innerBlock, movedBlock) {
        this.visibleBlock = document.querySelector(innerBlock);
        this.movedBlock = document.querySelector(movedBlock);
        this.margin = null;
        this.slides = null;
        this.slideWidth = null;
        this.startX = null;
        this.currentPos = null;
        this.event = (e) => {this.liveMoving(e)}
    }
    init() {
        this.slides = Array.from(this.movedBlock.children);
        this.slideWidth = this.slides[1].clientWidth;
        this.margin = (this.movedBlock.clientWidth - this.slides.length * this.slideWidth) / (this.movedBlock.children.length - 1);
        this.movedBlock.addEventListener('transitionend', () => {
            this.hideSlides();
        });
        this.movedBlock.addEventListener('mousedown', (e) => this.createMovingStructure(e));
        this.hideSlides();
    }
    hideSlides() {
        this.slides.forEach((el) => {
            if (el.getBoundingClientRect().left >= this.visibleBlock.getBoundingClientRect().right ||
                el.getBoundingClientRect().right <= this.visibleBlock.getBoundingClientRect().left) {
                el.classList.add('invisible');
            } else {
                el.classList.remove('invisible');
            }
        });
    }
    liveMoving(e) {

        if (this.slides[0].getBoundingClientRect().left >= this.visibleBlock.getBoundingClientRect().left + 1) {
            this.movedBlock.style.left = '0px';
        }
        if (this.slides[this.slides.length-1].getBoundingClientRect().right <= this.visibleBlock.getBoundingClientRect().right + 1){
            this.movedBlock.style.left = `-${this.movedBlock.clientWidth - this.visibleBlock.clientWidth}px`;
        }
        this.hideSlides();
    }
    createMovingStructure(e) {
        e.preventDefault()
        this.startX = e.pageX;
        this.currentPos = this.movedBlock.offsetLeft;
        this.movedBlock.style.transition = 'none';
        this.movedBlock.addEventListener('mousemove', this.event);
        this.clear();
    }
    clear() {
        this.movedBlock.addEventListener('mouseleave', () => {
            this.movedBlock.removeEventListener('mousemove', this.event);
            this.movedBlock.style.transition = '';
            this.movedBlock.style.left = `-${Math.abs(Math.round(this.movedBlock.offsetLeft / (this.slideWidth + this.margin))) * (this.slideWidth + this.margin)}px`
        }, {once: true});
    }
}
class CarouselTouchScreenNoBtn extends Carousel{
    constructor(innerBlock, movedBlock) {
        super(innerBlock, movedBlock);
    }
    init() {
        super.init();
        this.movedBlock.addEventListener('touchstart', (e) => this.createMovingStructure(e));
        this.hideSlides();
    }
    createMovingStructure(e) {
        this.startX = e.touches[0].pageX;
        this.currentPos = this.movedBlock.offsetLeft;
        this.movedBlock.style.transition = 'none';
        this.movedBlock.addEventListener('touchmove', this.event);
        this.clear();
    }
    clear() {
        this.movedBlock.addEventListener('touchend', () => {
            this.movedBlock.removeEventListener('touchmove', this.event);
            this.movedBlock.style.left = `-${Math.abs(Math.round(this.movedBlock.offsetLeft / (this.slideWidth + this.margin))) * (this.slideWidth + this.margin)}px`
        }, {once: true});
        super.clear();
    }
    liveMoving(e) {
        this.movedBlock.style.left = `${this.currentPos + (e.touches[0].pageX - this.startX)}px`;
        super.liveMoving(e);
        this.hideSlides();
    }
}


// initialisation
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
        document.querySelector('.header-desktop').classList.add('scrolled');
        if (document.querySelector('.banner-top')) {
            BannerTop.bannerBlock.remove();
        }
        document.querySelector('main').classList.add('scrolled');
    } else {
        document.querySelector('.header-desktop').classList.remove('scrolled');
        document.querySelector('main').classList.remove('scrolled');
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

// Rages

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
document.querySelector('.mobile-burger').addEventListener('click', () => {
    document.querySelector('.mobile-burger').classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.body.classList.toggle('overflow');
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
            passive: 'local/templates/new/images/icon/aivazovski-map.svg',
            active: 'local/templates/new/images/icon/aivazovski-map-active.svg'
        },
        {
            passive: 'local/templates/new/images/icon/peobraghensk-map.svg',
            active: 'local/templates/new/images/icon/peobraghensk-map-active.svg'
        },
        {
            passive: 'local/templates/new/images/icon/peobraghensk-mosk-map.svg',
            active: 'local/templates/new/images/icon/peobraghensk-mosk-map-active.svg'
        },
        {
            passive: 'local/templates/new/images/icon/nikolski-map.svg',
            active: 'local/templates/new/images/icon/nikolski-map-active.svg'
        },
    ];
    const icons = [];
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map-icon">$[properties.iconContent]</div>'
    );
    const aivazovsky = new ymaps.Placemark([57.165705, 65.598890], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/aivazovski-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const peobraghensk = new ymaps.Placemark([57.117535, 65.501678], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/peobraghensk-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const peobraghenskMosk = new ymaps.Placemark([57.123623, 65.470245], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/peobraghensk-mosk-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const nikolski = new ymaps.Placemark([57.088936, 65.515488], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/nikolski-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    icons.push(aivazovsky, peobraghensk, peobraghenskMosk, nikolski)
    document.querySelector('#aivazovskiMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                aivazovsky.options.set('iconImageHref', 'local/templates/new/images/icon/aivazovski-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#peobraghenskMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                peobraghensk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#peobraghenskMoskMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                peobraghenskMosk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-mosk-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#nikolskiMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                nikolski.options.set('iconImageHref', 'local/templates/new/images/icon/nikolski-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#clearMap').addEventListener('click', () => {
        clearIcons()
    })
    aivazovsky.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#aivazovskiMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#aivazovskiMap'))
            aivazovsky.options.set('iconImageHref', 'local/templates/new/images/icon/aivazovski-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#aivazovskiMap'))
        }
    })
    peobraghensk.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#peobraghenskMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#peobraghenskMap'))
            peobraghensk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#peobraghenskMap'))
        }
    })
    peobraghenskMosk.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#peobraghenskMoskMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#peobraghenskMoskMap'))
            peobraghenskMosk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-mosk-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#peobraghenskMoskMap'))
        }
    })
    nikolski.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#nikolskiMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#nikolskiMap'))
            nikolski.options.set('iconImageHref', 'local/templates/new/images/icon/nikolski-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#nikolskiMap'))
        }
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
    myMap.behaviors.disable('scrollZoom')
});

jQuery(function($){
    $(document).mouseup(function (e){
        const arr = [$('.view-form'), $('.plan-form'), $('.frame-form'), $(".deadline-form")]
        arr.forEach(el => {
            if (!el.is(e.target)
                && el.has(e.target).length === 0) {
                const block = document.querySelector(`.${$(el).attr("class")}`);
                block.querySelector('.custom-select').classList.remove('open')
                block.querySelector('.custom-select-options').style.maxHeight = null;
            }
        })
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/local/templates/new/js/general.js?16316990931304";s:6:"source";s:34:"/local/templates/new/js/general.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {

  let inputmask_option = {
    placeholder: 'вЂ“',
    clearMaskOnLostFocus: !1,
    undoOnEscape: !1,
    oncomplete: function() {
      $('#' + $(this).data('buttonSend')).removeClass('hold')
    },
    onBeforeMask: function(a, b) {
      return a.replace(/^1/, '')
    },
    onKeyDown: function() {
      $(this).inputmask('isComplete') || $('#' + $(this).data('buttonSend')).addClass('hold')
    }
  };
  $('.large_back_call_input[name="phone"]').inputmask('+7 (999) 999 99 99', inputmask_option);

  $(document).on('keyup change', '.js-filter-flat-form input', function() {
    flat_search_serialize()
  })

});

let xhr_filter = false;
function flat_search_serialize() {
  let form = $('.js-filter-flat-form');

  console.log(form.serialize());

  // if (!$('.filter_standart_show_results').hasClass('loading')){
  $('.filter_standart_show_results').addClass('loading');

  if (xhr_filter) {
    xhr_filter.abort();
    console.log('abort');
  }

  xhr_filter = $.ajax({
    url: '/ajax/filter_new_main.php',
    data: form.serialize(),
    success: function(data){
      $('.filter_standart_show_results').html(data);
      $('.filter_standart_show_results').removeClass('loading');
    },
    complete: function() {
      xhr_filter = false
    }
  });
  // }
}