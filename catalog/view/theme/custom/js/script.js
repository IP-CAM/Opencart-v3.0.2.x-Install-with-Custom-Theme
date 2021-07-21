var gl_path = jQuery('#gl_path').attr('data-theme'), scripts = document.getElementsByTagName("script"), scriptsList = []; for (var index in scripts) { if (scripts[index].src && scripts[index].getAttribute('src').split(gl_path + '/').length == 2) { scriptsList.push(scripts[index].getAttribute('src').split(gl_path + '/')[1]); } }
function include(scriptUrl) { if (scriptsList.indexOf(scriptUrl) == -1) { document.write('<script src="catalog/view/theme/' + gl_path + '/' + scriptUrl + '"><\/script>'); scriptsList.push(scriptUrl); } }
function isIE() { var myNav = navigator.userAgent.toLowerCase(); return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false; };; (function ($) { if (isIE() && isIE() < 11) { $('html').addClass('lt-ie11'); } })(jQuery); $(document).ready(function () { if ($('section.top').length) { $('body').find('#page').addClass('common-home'); } });; (function ($) { include('js/jquery.easing.1.3.js'); })(jQuery);; (function ($) { include('js/jquery.matchHeight.js'); })(jQuery);; (function ($) { var o = $('.lazy img'); if (o.length > 0) { include('js/jquery.unveil.min.js'); $(document).ready(function () { $(o).unveil(0, function () { $(this).load(function () { $(this).parent().addClass("lazy-loaded"); }); }); }); $(window).load(function () { $(window).trigger('lookup.unveil'); if ($('.nav-tabs').length) { $('.nav-tabs').find('a[data-toggle="tab"]').click(function () { setTimeout(function () { $(window).trigger('lookup.unveil'); }, 400); }); } }); } })(jQuery);; (function ($) { var o = $('html'); if (o.hasClass('desktop')) { include('js/jquery.ui.totop.min.js'); $(document).ready(function () { $().UItoTop({ easingType: 'easeOutQuart', containerClass: 'ui-to-top fa fa-angle-up' }); }); } })(jQuery);; (function ($) { var o = $('#page-preloader'); if (o.length > 0) { $(window).on('load', function () { $('#page-preloader').removeClass('visible'); }); } })(jQuery);; (function ($) { var o = $('html'); var menu = $('#stuck'); if (o.hasClass('desktop') && menu.length) { include('js/scrollfix.min.js'); $(window).load(function () { menu.scrollFix({ style: false }); }); } })(jQuery);; (function ($) { var o = $('.toggle'); $(document).ready(function () { $('.toggle').click(function (e) { e.preventDefault(); var tmp = $(this); o.each(function () { if ($(this).hasClass('active') && !$(this).is(tmp)) { $(this).parent().find('.toggle_cont').slideToggle(); $(this).removeClass('active'); } }); $(this).toggleClass('active'); $(this).parent().find('.toggle_cont').slideToggle(); }); $(document).on('click touchstart', function (e) { var container = $(".toggle-wrap"); var removeBtnWrap = $('#cart .btn-remove-wrap'); if (!container.is(e.target) && container.has(e.target).length === 0 && container.find('.toggle').hasClass('active')) { container.find('.active').toggleClass('active').parent().find('.toggle_cont').slideToggle(); if (removeBtnWrap.length > 0) { removeBtnWrap.fadeOut(); } } }); }); })(jQuery);; (function ($) { $(document).on('click touchstart', '#cart [data-action]', function () { $this = $(this); switch ($this.data('action')) { case 'show': $this.parent().find('.btn-remove-wrap').fadeIn(); break; case 'cancel': $this.parents('.btn-remove-wrap').fadeOut(); break; } }); })(jQuery);; (function ($) {
    var o = $('#accordion'), o1 = $('select'), o2 = $('.radio'), o3 = $('label.radio-inline'), o4 = $('.checkbox'), o5 = $('input[name=\'agree\'][type=\'checkbox\']'), o6 = $('.checkbox-inline'), o7 = $('textarea'); if (o.length || o1.length) { include('js/jquery.selectbox-0.2.min.js'); }
    $(window).load(function () {
        if (o.length) { $('body').delegate('.accordion-toggle', 'click', replaceForm); $('.accordion-toggle').trigger('click'); }
        if (o2.length) {
            var o2Input; var o2ArrVal = []; o2.each(function (i) {
                o2Input = $(this).find('input[type="radio"]'); if ($.inArray(o2Input.attr('name') + o2Input.attr('value'), o2ArrVal) == -1) {
                    o2Input.attr('id', o2Input.attr('name') + o2Input.attr('value'))
                    o2Input.insertBefore($(this).find('label').attr('for', o2Input.attr('name') + o2Input.attr('value'))); o2ArrVal.push(o2Input.attr('name') + o2Input.attr('value'))
                } else { o2Input.attr('id', o2Input.attr('name') + o2Input.attr('value') + i.toString()); o2Input.insertBefore($(this).find('label').attr('for', o2Input.attr('name') + o2Input.attr('value') + i.toString())); o2ArrVal.push(o2Input.attr('name') + o2Input.attr('value') + i.toString()); }
            });
        }
    }); $(document).ready(function () {
        if (o1.length) { o1.removeClass('form-control'); o1.selectbox({ effect: "slide", speed: 400 }); }
        if (o3.length) {
            var o3Input; o3.each(function () {
                o3Input = $(this).find('input[type="radio"]'); o3Input.attr('id', o3Input.attr('name') + o3Input.attr('value'))
                o3Input.insertBefore($(this).attr('for', o3Input.attr('name') + o3Input.attr('value')));
            });
        }
        if (o4.length) {
            var o4Input; var o4ArrVal = []; o4.each(function (i) {
                o4Input = $(this).find('input[type="checkbox"]'); if ($.inArray(o4Input.attr('name') + o4Input.attr('value'), o4ArrVal) == -1) {
                    o4Input.attr('id', o4Input.attr('name') + o4Input.attr('value'))
                    o4Input.insertBefore($(this).find('label').attr('for', o4Input.attr('name') + o4Input.attr('value'))); o4ArrVal.push(o4Input.attr('name') + o4Input.attr('value'))
                } else {
                    o4Input.attr('id', o4Input.attr('name') + o4Input.attr('value') + o4Input.attr('value') + i.toString())
                    o4Input.insertBefore($(this).find('label').attr('for', o4Input.attr('name') + o4Input.attr('value') + o4Input.attr('value') + i.toString())); o4ArrVal.push(o4Input.attr('name') + o4Input.attr('value') + i.toString());
                }
            });
        }
        if (o5.length) { o5.attr('id', o5.attr('name') + o5.attr('value')); o5.parent().append('<label for="' + o5.attr('name') + o5.attr('value') + '"></label>'); $('label[for="' + o5.attr('name') + o5.attr('value') + '"]').insertAfter(o5); }
        if (o6.length) {
            var o6Input; o6.each(function (i) {
                o6Input = $(this).find('input[type="checkbox"]'); o6Input.attr('id', o6Input.attr('name') + o6Input.attr('value'))
                o6Input.insertBefore($(this).attr('for', o6Input.attr('name') + o6Input.attr('value')));
            });
        }
        if (o7.length) { o7.removeClass('form-control'); }
    });
})(jQuery); function replaceForm() {
    var o = $('.radio'); var input; o.each(function (i) { input = $(this).find('input[type="radio"]'); input.attr('id', input.attr('name') + input.attr('value') + i.toString()); input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value') + i.toString())); }); o = $('label.radio-inline'); o.each(function (i) { input = $(this).find('input[type="radio"]'); input.attr('id', input.attr('name') + input.attr('value') + i.toString()); input.insertBefore($(this).attr('for', input.attr('name') + input.attr('value') + i.toString())); }); o = $('.checkbox'); o.each(function (i) { input = $(this).find('input[type="checkbox"]'); input.attr('id', input.attr('name') + input.attr('value') + i.toString()); input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value') + i.toString())); }); o = $('input[name=\'agree\'][type=\'checkbox\']'); if (o.length) { o.attr('id', o.attr('name') + o.attr('value')); o.parent().append('<label for="' + o.attr('name') + o.attr('value') + '"></label>'); $('label[for="' + o.attr('name') + o.attr('value') + '"]').insertAfter(o); }
    o = $('select'); o.selectbox({ effect: "slide", speed: 400 }); var o = $('textarea'); o.removeClass('form-control');
}
$(document).ready(function () { if ($('.breadcrumb').length) { var o = $('.breadcrumb li:last-child > a'); o.replaceWith('<span>' + o.html() + '</span>'); } });; (function ($) { $(document).ready(function () { var pgurl = window.location.href; $("#top-links a").each(function () { if ($(this).attr("href") == pgurl || $(this).attr("href") == '') { $(this).addClass("current"); } }); }); })(jQuery);; (function ($) {
    var o = $('#productGallery'); var o1 = $('#productZoom'); var o2 = $('#productFullGallery'); if (o.length) { include('js/jquery.bxslider/jquery.bxslider.js'); $(document).ready(function () { o.bxSlider({ mode: 'vertical', pager: false, controls: true, slideMargin: 4, minSlides: 3, maxSlides: 3, slideWidth: o.attr('data-slide-width') ? o.attr('data-slide-width') : undefined, nextText: '<i class="fa fa-angle-down"></i>', prevText: '<i class="fa fa-angle-up"></i>', infiniteLoop: false, adaptiveHeight: true, moveSlides: 1 }).find('li:first-child > a').addClass('zoomGalleryActive'); }); }
    if (o1.length) { o1.elevateZoom({ gallery: 'productGallery', responsive: true, cursor: o1.data('zoom-type') == 1 ? 'crosshair' : 'pointer', zoomType: o1.data('zoom-type') == 1 ? 'inner' : (o1.data('zoom-type') == 2 || o1.data('zoom-type') == 3) ? 'lens' : undefined, lensShape: o1.data('zoom-type') == 2 ? 'round' : undefined, constrainType: o1.data('zoom-type') == 3 ? 'height' : undefined, containLensZoom: o1.data('zoom-type') == 3 ? true : undefined, zoomWindowPosition: $('html[dir="rtl"]').length ? 11 : 1 }).bind("click", function (e) { $.fancybox(o1.data('elevateZoom').getGalleryList()); return false; }); }
    if (o2.length) { include('js/photo-swipe/klass.min.js'); include('js/photo-swipe/code.photoswipe-3.0.5.min.js'); $(document).ready(function () { o2.bxSlider({ pager: false, controls: true, minSlides: 1, maxSlides: 1, infiniteLoop: false, moveSlides: 1 }).find('a').photoSwipe({ enableMouseWheel: false, enableKeyboard: false, captionAndToolbarAutoHideDelay: 0 }); }); }
})(jQuery); var flag = true; function respResize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; if ($('#column-left').length) { var columnLeft = $('#column-left'), columnContent = $('#column-content'); } else if ($('.common-home .column-left').length && $('.common-home .column-content').length) { var columnLeft = $('.common-home .column-left').parent(), columnContent = $('.common-home .column-content').parent(); } else { return false; }
    if (width > 767) { if (!flag) { flag = true; columnLeft.insertBefore(columnContent); if (window.twttr != undefined) { twtrefresher.doRefresh(); } } } else if (flag) { flag = false; columnLeft.insertAfter(columnContent); if (window.twttr != undefined) { twtrefresher.doRefresh(); } }
}
$(window).load(respResize); $(window).resize(function () { clearTimeout(this.id); this.id = setTimeout(respResize, 500); }); var flag1 = true; function respResize1() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; if (width > 767) { if (!flag1) { flag1 = true; $('footer .col-xs-18 .box-heading, #column-left .box-heading').unbind("click"); $('footer .col-xs-18 .box-content, #column-left .box-content').each(function () { if ($(this).is(":hidden")) { $(this).slideToggle(); } }); } } else if (flag1) { flag1 = false; $('footer .col-xs-18 .box-content, #column-left .box-content').each(function () { if (!$(this).is(":hidden")) { $(this).parent().find('.box-heading').addClass('active'); } }); $('footer .col-xs-18 .box-heading, #column-left .box-heading').bind("click", function () { if ($(this).hasClass('active')) { $(this).removeClass('active').parent().find('.box-content').slideToggle(); } else { $(this).addClass('active'); $(this).parent().find('.box-content').slideToggle(); } }); } }
$(window).load(respResize1); $(window).resize(function () { clearTimeout(this.id); this.id = setTimeout(respResize1, 500); });; (function ($) {
    var o1 = $('.date'), o2 = $('.datetime'), o3 = $('.time'); if (o1.length || o2.length || o3.length) { document.write('<script src="catalog/view/javascript/jquery/datetimepicker/moment/moment.min.js"><\/script>'); document.write('<script src="catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js"><\/script>'); }
    $(document).ready(function () {
        if (o1.length) { o1.datetimepicker({ pickTime: false }); }
        if (o2.length) { $('.datetime').datetimepicker({ pickDate: true, pickTime: true }); }
        if (o3.length) { $('.time').datetimepicker({ pickDate: false }); }
        $('.date,.datetime,.time').each(function () { var $this = $(this); $(this).find('.btn').click(function () { var body = $('body'); if (body.hasClass('ajax-overlay-open')) { var open; setTimeout(function () { open = $('body').find('.bootstrap-datetimepicker-widget.picker-open'); if (open.hasClass('top')) { open.css('bottom', $(window).height() - ($this.offset().top - $('.ajax-overlay').offset().top)); } }, 10); } }); });
    }); $(document).ready(function () { $('.date, .datetime, .time').on('dp.show', function () { $('.date, .datetime, .time').not($(this)).each(function () { if ($(this).data("DateTimePicker")) { $(this).data("DateTimePicker").hide(); } }); }); $(this).on('click', function () { $('.date, .datetime, .time').each(function () { if ($(this).data("DateTimePicker")) { $(this).data("DateTimePicker").hide(); } }); }); });
})(jQuery);; (function ($) {
    $(document).on('click', 'button[id^=\'button-upload\']', function () {
        var node = this; $('#form-upload').remove(); $('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>'); $('#form-upload input[name=\'file\']').trigger('click'); if (typeof timer != 'undefined') { clearInterval(timer); }
        timer = setInterval(function () {
            if ($('#form-upload input[name=\'file\']').val() != '') {
                clearInterval(timer); $.ajax({
                    url: 'index.php?route=tool/upload', type: 'post', dataType: 'json', data: new FormData($('#form-upload')[0]), cache: false, contentType: false, processData: false, beforeSend: function () { $(node).button('loading'); }, complete: function () { $(node).button('reset'); }, success: function (json) {
                        $('.text-danger').remove(); if (json['error']) { $(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>'); }
                        if (json['success']) { alert(json['success']); $(node).parent().find('input').attr('value', json['code']); }
                    }, error: function (xhr, ajaxOptions, thrownError) { alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText); }
                });
            }
        }, 500);
    });
})(jQuery);; (function ($) { var o = $('html'); if (o.hasClass('mobile-responsive-off') && !o.hasClass('desktop')) { $('meta[name="viewport"]').prop('content', 'width=1200, initial-scale=1'); } })(jQuery);; (function ($) {
    $(document).on('click', '.counter-minus, .counter-plus', function (e) {
        e.preventDefault(); var input = $(this).parent().find('input[name*="quantity"]'), value = 1; if ($(this).hasClass('counter-minus') && input.val() > 1) { value = parseInt(input.val()) - 1; } else if ($(this).hasClass('counter-plus')) { value = parseInt(input.val()) + 1; }
        input.val(value);
    });
})(jQuery);; (function ($) {
    var selector = $('.quickview'), selector2 = $('#productZoom'); if (selector.length > 0 || selector2.length > 0) { include('js/jquery.selectbox-0.2.min.js'); include('js/fancybox/jquery.fancybox.js'); document.write('<script src="catalog/view/javascript/jquery/datetimepicker/moment/moment.min.js"><\/script>'); document.write('<script src="catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js"><\/script>'); document.write('<link href="catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">'); }
    $(document).ready(function () {
        if (selector.length > 0) {
            $(document).on("click", '.quickview', function (e) {
                e.preventDefault(); $.ajax({
                    type: "POST", cache: false, url: 'index.php?route=extension/module/zemez_ajax_quick_view/ajaxQuickView', data: { product_id: $(this).data('product'), image_width: $(this).data('image-width'), image_height: $(this).data('image-height') }, beforeSend: function () { $('.ajax-quickview-overlay').addClass('visible'); }, success: function (data) {
                        setTimeout(function () {
                            $('.ajax-quickview-overlay').removeClass('visible'); $.fancybox(data, { maxWidth: '90%', maxHeight: '90%', fitToView: false, width: '1070', height: '683', autoSize: false, closeClick: false, openEffect: 'fade', closeEffect: 'fade', openSpeed: 600, closeSpeed: 600, scrolling: 'no', padding: 0 }); var selection = $('.ajax-quickview input[name=\'quantity\']'); if (selection.length > 0) { selection.on('keypress', function (e) { e = e || event; if (e.ctrlKey || e.altKey || e.metaKey) return; var chr = getChar(e); if (chr == null) return; if (chr < '0' || chr > '9') { return false; } }); }
                            replaceForm(); $('.ajax-quickview-images > ul > li:first').addClass('active'); $('.ajax-quickview .date').length > 0 ? $('.ajax-quickview .date').datetimepicker({ pickTime: false }) : null; $('.ajax-quickview .datetime').length > 0 ? $('.ajax-quickview .datetime').datetimepicker({ pickDate: true, pickTime: true }) : null; $('.ajax-quickview .time').length > 0 ? $('.ajax-quickview .time').datetimepicker({ pickDate: false }) : null; $('.bootstrap-datetimepicker-widget').css({ 'z-index': '' });
                        }, 500);
                    }
                });
            });
        }
    }); $(document).on('click', '.prev-img, .next-img', function (e) { e.preventDefault(); }); $(document).on('click', '.prev-img', function (e) { changeImg(-1); }); $(document).on('click', '.next-img', function (e) { changeImg(1); }); function changeImg(index) { var viewBlock = $('.ajax-quickview-images > ul'), viewBlockItems = viewBlock.find('li').size(), visibleImage = viewBlock.find('li.active'), visibleImageIndex = (visibleImage.index() + 1 + index); visibleImage.removeClass('active'); if (visibleImageIndex > viewBlockItems) { viewBlock.find('li:first').addClass('active'); } else if (visibleImageIndex == 0) { viewBlock.find('li:last').addClass('active'); } else { viewBlock.find('li:nth-child(' + visibleImageIndex + ')').addClass('active'); } }
    function getChar(event) {
        if (event.which == null) { if (event.keyCode < 32) return null; return String.fromCharCode(event.keyCode) }
        if (event.which != 0 && event.charCode != 0) { if (event.which < 32) return null; return String.fromCharCode(event.which) }
        return null;
    }
})(jQuery);; (function ($) {
    $(document).ready(function () {
        var mobileCarousel = $('[data-mobile-carousel]'), boxCarousel = $('[data-box-carousel]'); if (mobileCarousel.length) { if ($('html').is('.mobile')) { mobileCarousel.each(function (index) { $this = $(this); createCarousel($this, index); }); } }
        if (boxCarousel.length) { boxCarousel.each(function (index) { $this = $(this); createCarousel($this, index); }); }
        function createCarousel(selector, index) {
            window['ZemezMobileCarousel_carousel'] = window['ZemezMobileCarousel_carousel'] || []; var wrapperClass, slideClass, slider, settings; wrapperClass = selector.attr('class'), slideClass = selector.children().attr('class'), settings = {}; if (selector.data('carousel-settings')) { var properties = selector.data('carousel-settings').split(', '); properties.forEach(function (property) { var settingValue = property.split(':'); settings[settingValue[0].trim()] = settingValue[1].trim(); }); }
            if (selector.parents('aside').length) { settings.items = settings.slides479 = settings.slides767 = settings.slides1199 = "1"; }
            selector.addClass('swiper-container').removeClass(wrapperClass).children().addClass('swiper-slide').removeClass(slideClass).parent().wrapInner('<div class="swiper-wrapper"><\/div>'); selector.append('<div class="swiper-button-next"><\/div><div class="swiper-button-prev"><\/div>'); slider = new Swiper(selector, { effect: settings.effect || 'slide', slidesPerView: parseInt(settings.items) || 4, spaceBetween: parseInt(settings.space) || 0, paginationClickable: true, nextButton: selector.find('.swiper-button-next').length ? selector.find('.swiper-button-next')[0] : null, prevButton: selector.find('.swiper-button-prev').length ? selector.find('.swiper-button-prev')[0] : null, pagination: selector.find('.swiper-pagination').length ? selector.find('.swiper-pagination')[0] : null, scrollbar: selector.find('.swiper-scrollbar').length ? selector.find('.swiper-scrollbar')[0] : null, breakpoints: { 479: { slidesPerView: parseInt(settings.slides479) || 1 }, 767: { slidesPerView: parseInt(settings.slides767) || 2 }, 991: { slidesPerView: parseInt(settings.slides1199) || 4 } } }); $(document).ready(function () { if (selector.data('nav-id') && $('#nav_' + selector.data('nav-id')).length) { slider.prevButton.appendTo($('#nav_' + selector.data('nav-id'))); slider.nextButton.appendTo($('#nav_' + selector.data('nav-id'))); } }); window['ZemezMobileCarousel_carousel'][index] = { slider: slider, wrapperClass: wrapperClass, slideClass: slideClass }; $(document).on('shown.bs.tab', '.nav-tabs a', function (e) { slider.update(); });
        }; function destroyCarousel(selector, index) { var slider = window['ZemezMobileCarousel_carousel'][index]; slider.slider.destroy(true, true); selector.removeClass('swiper-container').addClass(slider.wrapperClass); selector.find('.swiper-slide').removeClass('swiper-slide swiper-slide-duplicate-prev').addClass(slider.slideClass).unwrap(); selector.find('.swiper-button-next, .swiper-button-prev, .swiper-pagination, .swiper-scrollbar').remove(); };
    });
})(jQuery);; (function ($) { $(document).on('shown.bs.tab', '.nav-tabs a', function (e) { $('[id*=nav_single-]').addClass('hidden'); $('#' + $(e.target).data('single-nav-id')).removeClass('hidden'); }); })(jQuery);