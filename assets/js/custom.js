$(function(){

    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 30,
        backDelay: 2000,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }

jQuery(document).ready(function ($) {

    //window.onbeforeunload=null;
    var popup_timer_id = -1;

    $('.before-after-tag').find('.tab-header ul li button').find('div[data-name="mojs-shape"]').css('z-index', 1);
    $('.before-after-tag').find('.tab-header ul li:nth-child(1)').addClass('active');
    $('.before-after-tag').find('.tab-content > div:nth-child(1)').addClass('active');
    $('.before-after-tag').find('.tab-header ul li').click(function() {

        $('.mobile-card-tab > div:last-child p').addClass('active');
        $('.mobile-version .second-face').slideDown('normal');
        $('.mobile-version .first-face').slideUp('normal');

        $('.before-after-tag').find('.tab-header ul li').removeClass('active');
        var selectedName = $(this).attr('class');
        $('.before-after-tag').find('.tab-content > div').removeClass('active');
        $('.before-after-tag').find('.tab-content #' + selectedName + '').addClass('active');

        $(this).addClass('active');

        /*var lastTag = $('.before-after-tag').find('.tab-content #add-ons-tag').attr('class');
         if(lastTag == "active") {
         $('#partner-carousel').css('opacity', 1);
         $('.plug-in').css('margin-top', '0px');
         }
         else {
         $('#partner-carousel').css('opacity', 0);
         $('.plug-in').css('margin-top', '-77px');
         }*/
    });
    var pageWidth = $(window).width();
    if(pageWidth < 1201) {
        $('.navbar-header').find('button').next('ul.mobile-menu-add').css('display', 'inline-flex');
    }
    else {
        $('.navbar-header').find('button').next('ul.mobile-menu-add').css('display', 'none');
    }
    if(pageWidth < 992 ) {
        $('.before-after-tag').find('.tab-header ul li button').find('div').css('display', 'none');
        $('.experience-tag').find('.menu-tab ul li button').find('div').css('display', 'none');
        $('.receipt-supercharge .supercharge-subtitle ul li button').find('div').css('display', 'none');
    }
    else {
        $('.before-after-tag').find('.tab-header ul li button').find('div').css('display', 'block');
        $('.experience-tag').find('.menu-tab ul li button').find('div').css('display', 'block');
        $('.receipt-supercharge .supercharge-subtitle ul li button').find('div').css('display', 'block');
    }
    var superchargeHeight = $('.supercharge-content-txts div.active').outerHeight();
    $('.supercharge-content-txts').css('height', superchargeHeight);
    
    $(window).resize(function() {
        var pageWidth = $(window).width();
        if(pageWidth < 1201) {
            $('.navbar-header').find('button').next('ul.mobile-menu-add').css('display', 'inline-flex');
        }
        else {
            $('.navbar-header').find('button').next('ul.mobile-menu-add').css('display', 'none');
        }
        if(pageWidth < 992 ) {
            $('.before-after-tag').find('.tab-header ul li button').find('div').css('display', 'none');
            $('.experience-tag').find('.menu-tab ul li button').find('div').css('display', 'none');
            $('.receipt-supercharge .supercharge-subtitle ul li button').find('div').css('display', 'none');
        }
        else {
            $('.before-after-tag').find('.tab-header ul li button').find('div').css('display', 'block');
            $('.experience-tag').find('.menu-tab ul li button').find('div').css('display', 'block');
            $('.receipt-supercharge .supercharge-subtitle ul li button').find('div').css('display', 'block');
        }

        var productsCount = $('.modal-body.product-body ul.add-more-content-real > li').length;
        var rowCount = Math.round(productsCount / 2);
        var scrollWidth = rowCount * ($('.modal-body.product-body ul.add-more-content-real > li').outerWidth() + 28);
        $('.modal-body.product-body ul.add-more-content-real').css('column-count', rowCount).css('width', scrollWidth);
        var superchargeHeight = $('.supercharge-content-txts div.active').outerHeight();
        $('.supercharge-content-txts').css('height', superchargeHeight);
    });

    var $wrapper = $('.experience-tag').find('.menu-tab ul');
    $wrapper.find('li').sort(function(a, b) {
        return +a.dataset.percentage - +b.dataset.percentage;
    }).appendTo($wrapper);

    var $wrapper1 = $('.experience-tag').find('.experience-detail');
    $wrapper1.find('.order').sort(function(a, b) {
        return +a.dataset.percentage - +b.dataset.percentage;
    }).appendTo($wrapper1);

    $('.experience-tag').find('.menu-tab ul li:nth-child(1)').addClass('active');
    $('.experience-tag').find('.experience-detail > div:nth-child(1)').addClass('active');

    $('.experience-tag').find('.menu-tab ul li').click(function() {

        $('.experience-tag').find('.menu-tab ul li').removeClass('active');
        var selectedName = $(this).attr('class');
        $('.experience-tag').find('.experience-detail > div').removeClass('active');
        $('.experience-tag').find('.experience-detail .' + selectedName + '').addClass('active');
        $(this).addClass('active');

    });
    $('.receipt-supercharge .supercharge-subtitle ul li').click(function () {
        $('.receipt-supercharge .supercharge-subtitle ul li').removeClass('active');
        var selectedName = $(this).attr('class');
        $('.receipt-supercharge .supercharge-content-txts > div').removeClass('active');
        $('.receipt-supercharge .supercharge-content-txts .' + selectedName).addClass('active');
        $(this).addClass('active');
    });
    $('.solutions-toggles > a').click(function() {
        $('.solutions-toggles > a').removeClass('active');
        $(this).addClass('active');
    });
    window.setInterval(
        function() {
            $('#testemonial-carousel').find('.owl-stage>div').each(function() {
                var hoverTag = $(this).attr('class');
                if(hoverTag == "owl-item active center") {
                    $(this).css('transform', 'scale(1)');
                }
                else {
                    $(this).css('transform', 'scale(0.7)');
                }
            });

            $('.solution-lists').find('.owl-stage>div').each(function() {
                var hoverTag = $(this).attr('class');
                if(hoverTag == "owl-item active center") {
                    $(this).css('transform', 'scale(1)');
                }
                else {
                    $(this).css('transform', 'scale(0.9)');
                }
            });
        }, 100
    );

    $('.navigation').find('p').click(function() {
        $('.navigation').find('p').removeClass('active');
        var selectedClass = $(this).attr('class');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $('.faq-content .' + selectedClass).offset().top - 60
        }, 1000);
    });
    $('.navigation h5 img').click(function() {
        var a = $('.navigation p.cloud-mean').css('display');
        if($('.navigation p').css('display') == 'block') {
            $('.navigation p').css('display', 'none');
        }
        else {
            $('.navigation p').css('display', 'block');
        }
    });

    //var maxScroll = $('.navigation').offset().top;
    if($('.faq-padding').length == 1) {
        var maxScroll = $('.faq-header').position().top + $('.faq-header').outerHeight(true);
    }
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > maxScroll) {
            $('.navigation').css('position', 'fixed').css('top', 0);
        }
        else {
            $('.navigation').css('position', 'relative');
        }

    });
    $('.other.addthis_sharing_toolbox').css('clear', 'initial !important');
    //$('.info .form-group-customizing').find('label[for="industryType"]').closest('div').css('display', 'none');
    $('#count-number .glyphicon-plus').mousedown(function() {
        var value = $(this).prev('input').val();
        value++;
        $(this).prev('input').val(value);
    });

    $('#count-number .glyphicon-minus').mousedown(function() {
        var value = $(this).next('input').val();
        value--;
        if(value < 1) {
            value = 1;
        }
        $(this).next('input').val(value);
    });

    $(window).bind("load", function(index) {

        var items = [];

        $('.service-category-list .footer-menu-category-list').each(function () {
            var categorySlug = $(this).find('p.service-slug').text();
            var categoryList = $(this).find('p.category').text();
            var language = $('html').attr('lang');

            if (language == 'en') {
                items.push('<li class="no-links"><a href="/en/services/' + categorySlug + '">' + categoryList + '</a></li>');
            } else {
                items.push('<li class="no-links"><a href="/fr/services/' + categorySlug + '">' + categoryList + '</a></li>');
            }
            /*$('.footer-content ul.service-list-add').append('<li class="no-links"><a href="">' + categoryList + '</a></li>');*/
        });
        $('.footer-content ul.service-list-add').append( items.join('') );

        $('.before-after-tag').find('.tab-header ul li button').find('div[data-name="mojs-shape"]').css('z-index', 1);

        $('.configurator-steps .pills-customizing').find('li').removeClass('active');
        $('.configurator-steps .pills-customizing').find('li:nth-child(2)').addClass('active');
        $('.configurator-steps .pills-customizing').find('li').removeClass('active');
        $('.configurator-steps .pills-customizing').find('li:nth-child(3)').addClass('active');
        $('.next-step-to-third').find('a').click();
        $('html, body').stop();
        $('.configurator-steps .pills-customizing').find('li').removeClass('active');
        $('.configurator-steps .pills-customizing').find('li:nth-child(2)').addClass('active');

        $('.form-group-customizing .bootstrap-select .dropdown-menu').find('ul li').click(function() {
            setTimeout(
                function() {
                    $('.next-section-btn-customizing').find('a').click();
                    $('html, body').stop();
                    $('.next-step-to-third').find('a').click();
                    $('html, body').stop();
                    $('.configurator-steps .pills-customizing').find('li').removeClass('active');
                    $('.configurator-steps .pills-customizing').find('li:nth-child(2)').addClass('active');

                    var monthlyVal = $('.pricing-totals.border-box h4[data-price-id="MONTHLY"]').attr('data-price');
                    var onetimeVal = $('.pricing-totals.border-box h4[data-price-id="ONE_TIME"]').attr('data-price');
                    $('.price-popup .alert p.new-monthly span.value').empty().text(monthlyVal);
                    $('.price-popup .alert p.new-onetime span.value').empty().text(onetimeVal);
                    $('.price-popup').css('top', 40);
                    $('.price-popup .alert').stop().fadeIn(0);
                    if (popup_timer_id > 0) {
                        clearTimeout(popup_timer_id);
                    }
                    popup_timer_id = setTimeout(function() { $('.price-popup .alert').fadeOut(500); }, 3000);
                },
                200);
        });

        $('.product-individual-settingon').find('.settingon-customizing-action a.active').each(function () {
            var disableConfig = $(this).attr('class');
            if( $(this).hasClass('disabled') ) {
                $(this).parents('.product-individual-settingon').prev('.product-individual').find('.price i').css('opacity', 0.5).mouseover(function () {
                    $(this).css('cursor', 'not-allowed');
                });
                $(this).parents('.product-individual-settingon').prev('.product-individual').find('.price i').click(function (event) {
                    event.stop();
                });
            }
        });

        $('.product-individual .price i').click(function() {
            var iClassname = $(this).attr('class');
            if(iClassname == "fa fa-sliders") {
                $(this).removeClass();
                $(this).addClass('fa fa-times');
                $(this).parents('.product-individual').next('.product-individual-settingon').hide().slideDown(800);
                var activeState = $(this).parents('.product-individual').next('.product-individual-settingon').find('.settingon-customizing-action a.active').hasClass('disabled');
                if(activeState) {
                    $(this).parents('.product-individual').next('.product-individual-settingon').find('.configure-disable').css('display', 'block');
                }
                else {
                    $(this).parents('.product-individual').next('.product-individual-settingon').find('.configure.active').css('display', 'block');
                }
            } else {
                $(this).removeClass();
                $(this).addClass('fa fa-sliders');
                $(this).parents('.product-individual').next('.product-individual-settingon').slideUp(800);
            }
            $('.configurator-steps .pills-customizing').find('li').removeClass('active');
            $('.configurator-steps .pills-customizing').find('li:nth-child(3)').addClass('active');

            var formCount = $(this).parents('.product-individual').next('.product-individual-settingon').find('.configure.active .info .form-group-customizing').length;
            if (formCount == 2) {
                $(this).parents('.product-individual').next('.product-individual-settingon')
                    .find('.configure.active .info .form-group-customizing:nth-child(1)').css('float', 'left').css('margin-right', '8%');
            }
        });
        $('.product-individual-settingon .settingon-content .configure.active .actions .apply-btn').click(function() {
            $('.configurator-steps .pills-customizing').find('li').removeClass('active');
            $('.configurator-steps .pills-customizing').find('li:nth-child(3)').addClass('active');

            $('.next-step-to-third').find('a').click();
            $('html, body').stop();

            $('.configurator-steps .pills-customizing').find('li').removeClass('active');
            $('.configurator-steps .pills-customizing').find('li:nth-child(2)').addClass('active');

            $(this).parents('.product-individual-settingon').slideUp(800);
            $(this).parents('.product-individual-settingon').prev('.product-individual').find('.price i').removeClass();
            $(this).parents('.product-individual-settingon').prev('.product-individual').find('.price i').addClass('fa fa-sliders');
        });

        $('.product-individual-settingon .settingon-content .configure.active .actions .cancelup-btn').click(function () {
            $(this).parents('.product-individual-settingon').slideUp(800);
            $(this).parents('.product-individual-settingon').prev('.product-individual').find('.price i').removeClass();
            $(this).parents('.product-individual-settingon').prev('.product-individual').find('.price i').addClass('fa fa-sliders');
        });

        $('.configurator-solutions-basket .border-box.pricing-totals h4[data-price-id="MONTHLY"]').addClass('col-md-push-6 col-sm-push-6');
        $('.configurator-solutions-basket .border-box.pricing-totals h4[data-price-id="ONE_TIME"]').addClass('col-md-pull-6 col-sm-pull-6');

        $('.configurator-solutions .product-individual .actions.products-services-checked-remove-btn a.remove-btn').click(function () {
            $(this).find('span').addClass('checked').delay(2000).queue(function(){
                $(this).removeClass('checked');;
            });
        });

        var monthlyVal = $('.pricing-totals.border-box h4[data-price-id="MONTHLY"]').attr('data-price');
        var onetimeVal = $('.pricing-totals.border-box h4[data-price-id="ONE_TIME"]').attr('data-price');
        $('.calc-price h4.monthly span').text(monthlyVal);
        $('.calc-price h4.onetime span').text(onetimeVal);

        var monthlytxt = $('.pricing-totals.border-box h4[data-price-id="MONTHLY"]').text();
        var onetimetxt = $('.pricing-totals.border-box h4[data-price-id="ONE_TIME"]').text();
        $('.calc-price h6.monthly').text(monthlytxt);
        $('.calc-price h6.onetime').text(onetimetxt);
    });

    $('.configurator-solutions .show-more-tag a.btn-add-more').click(function () {
        $('.configurator-steps .pills-customizing').find('li').removeClass('active');
        $('.configurator-steps .pills-customizing').find('li:nth-child(3)').addClass('active');

        var monthPay = $('.basket-customizing .border-box h4[data-price-id="MONTHLY"]').attr('data-price');
        if (typeof monthPay !== typeof undefined && monthPay !== false) {
            $('#add-more-products-modal .modal-footer-customizing .sele-payment span.selected-price').text(monthPay + '$');
        } else {
            $('#add-more-products-modal .modal-footer-customizing .sele-payment span.selected-price').text('0$');
        }

        var selectedNum = $('.configurator-solutions.products > div.col-md-10 > div').not('.hidden').length;
        $('#add-more-products-modal .modal-footer-customizing .sele-title span.selected-numer').text(selectedNum);


        var onePay = $('.basket-customizing .border-box h4[data-price-id="ONE_TIME"]').attr('data-price');
        if (typeof onePay !== typeof undefined && onePay !== false) {
            $('#add-more-services-modal .modal-footer-customizing .sele-payment span.selected-price').text(onePay + '$');
        } else {
            $('#add-more-services-modal .modal-footer-customizing .sele-payment span.selected-price').text('0$');
        }

        var selectedSeriveNum = $('.configurator-solutions.services > div.col-md-10 > div').not('.hidden').length;
        $('#add-more-services-modal .modal-footer-customizing .sele-title span.selected-numer').text(selectedSeriveNum);
    });
    $('.modal-content .modal-footer-customizing a').click(function () {
        $('.next-step-to-third').find('a').click();
        $('html, body').stop();

        $('.configurator-steps .pills-customizing').find('li').removeClass('active');
        $('.configurator-steps .pills-customizing').find('li:nth-child(2)').addClass('active');
    });
    $('.configurator-solutions .product-individual .actions.products-services-checked-remove-btn a.remove-btn').click(function () {
        $('.configurator-steps .pills-customizing').find('li').removeClass('active');
        $('.configurator-steps .pills-customizing').find('li:nth-child(3)').addClass('active');
        $('.next-step-to-third').find('a').click();

        setTimeout(
            function() {
                var monthlyVal = $('.pricing-totals.border-box h4[data-price-id="MONTHLY"]').attr('data-price');
                var onetimeVal = $('.pricing-totals.border-box h4[data-price-id="ONE_TIME"]').attr('data-price');
                $('.price-popup .alert p.new-monthly span.value').empty().text(monthlyVal);
                $('.price-popup .alert p.new-onetime span.value').empty().text(onetimeVal);
                var addHeight = $('.growler .growl').height()+40;
                $('.price-popup').css('top', addHeight);
                $('.price-popup .alert').stop().fadeIn(0);
                if (popup_timer_id > 0) {
                    clearTimeout(popup_timer_id);
                }
                popup_timer_id = setTimeout(function() { $('.price-popup .alert').fadeOut(500); }, 3000);
            },
            1500);
        $('html, body').stop();

        $('.configurator-steps .pills-customizing').find('li').removeClass('active');
        $('.configurator-steps .pills-customizing').find('li:nth-child(2)').addClass('active');
    });

    $('.navbar-header').find('button').click(function () {
        var navheader = $(this).attr('class');
        if(navheader == "navbar-toggle collapsed") {
            $(this).next('ul.mobile-menu-add').css('display', 'none');
            $('.navbar-brand-customizing').css('display', 'block');
        }
        else {
            $(this).next('ul.mobile-menu-add').css('display', 'inline-flex');
            $('.navbar-brand-customizing').css('display', 'none');
        }
    });
    $('#testemonial-carousel .owl-item').click(function( event ) {
        event.stopPropagation();
    });

    $('.card-customizing').mouseover(function (e) {
        e.preventDefault();
        $(this).find('.left-right-nav').fadeIn('normal');
    });
    $('.card-customizing').mouseleave(function (e) {
        e.preventDefault();
        $(this).find('.left-right-nav').fadeOut('normal');
    });
    $('.card-customizing').mouseout(function(e) {
        e.preventDefault();
    });

    $('.card-customizing.products-cards .left-right-nav .left-nav').click(function (event) {

        $('.card-customizing.products-cards').animate({scrollLeft : '-=470'}, 'slow');
    });

    $('.card-customizing.products-cards .left-right-nav .right-nav').click(function () {
        $('.card-customizing.products-cards').animate({scrollLeft : '+=470'}, 'slow');
    });
    $('.card-customizing.services-cards .left-right-nav .left-nav').click(function () {
        $('.card-customizing.services-cards').animate({scrollLeft : '-=470'}, 'slow');
    });

    $('.card-customizing.services-cards .left-right-nav .right-nav').click(function () {
        $('.card-customizing.services-cards').animate({scrollLeft : '+=470'}, 'slow');
    });
    
    $('.card-bottom-txt').click(function () {
       $('.mobile-card-tab .card-bottom-txt').removeClass('active');
        $(this).addClass('active');
        if($('.mobile-card-tab > div:first-child p').hasClass('active')) {
            $('.mobile-version .second-face').slideUp('normal');
            $('.mobile-version .first-face').slideDown('normal')
        }
        else {
            $('.mobile-version .second-face').slideDown('normal');
            $('.mobile-version .first-face').slideUp('normal')
        }
    });


    $('.modal-body.product-body ul.add-more-content > li').each(function () {
        $(this).find('ul.configurator-solutions > li').each(function () {
            var title = $(this).find('h4').text();
            var tagline = $(this).find('div.face > p').text();
            var imgSrc = $(this).find('img').attr('src');
            var imgAlt = $(this).find('img').attr('alt');
            var perDescription = $(this).find('.description-tag p').text();
            var perPrice = $(this).find('.solution-footer .price span').text();
            var perMonth = $(this).find('.solution-footer .price label').text();
            var perId = $(this).find('div.product').attr('data-solution-id');
            var perCategory = $(this).find('.solution-footer .price p.sort-alphabet').text();
            $('.product-body ul.add-more-content-real').append(
                '<li class="product-inner"><div class="product" data-solution-id="'+ perId +'"><div class="face"><img src="'+ imgSrc +'" alt="'+ imgAlt +'"><h5>'+ title +'</h5><p>'+ tagline +'</p><div class="description-tag"><p itemprop="description">'+ perDescription +'</p></div><div class="solution-footer">' +
                '<div class="price"><div class="value">$<span>'+ perPrice +'</span><label>'+ perMonth +'</label></div><div class="category-name"><p>'+ perCategory +'</p></div></div></div><div class="product-service-checked"><a class="btn-transparent btn-radio btn-block btn-lg" data-selected="false" type="button" href="#" alt=""><span class="glyphicon"></span></a></div></div></div></li>'
            );
        });
    });

    var productsCount = $('.modal-body.product-body ul.add-more-content-real > li').length;
    var rowCount = Math.round(productsCount / 2);
    var scrollWidth = rowCount * ($('.modal-body.product-body ul.add-more-content-real > li').outerWidth() + 28);
    var listperWidth = $('.modal-body.product-body ul.add-more-content-real > li').outerWidth() + 15;
    var listviewWidth = pageWidth - 39;
    var alignPad = (listviewWidth - listperWidth) / 2;
    $('.modal-body.product-body ul.add-more-content-real').css('column-count', rowCount).css('width', scrollWidth);
    
    var productPage = Math.round(rowCount / 2);
    for(var i = 0; i <productPage; i++) {
        $('#add-more-products-modal .modal-footer-customizing .pagnation-list ul').append('<li class="list-dots"></li>')
    }
    $('#add-more-products-modal .modal-footer-customizing .pagnation-list ul li:first-child').addClass('active');
    $('#add-more-products-modal .modal-footer-customizing .pagnation-list ul li').each(function (index) {
        $(this).click(function () {
            $('#add-more-products-modal .modal-footer-customizing .pagnation-list ul li').removeClass('active');
            $(this).addClass('active');
            var scrollValue = ($('.modal-body.product-body ul.add-more-content-real > li').outerWidth() + 28) * 2 * index;
            $('.modal-body.product-body .product-scroll-tag').animate({scrollLeft : scrollValue}, 'slow');
        });
    });

    var productPagefull = Math.round(rowCount);
    for(var i = 0; i <productPagefull; i++) {
        $('#add-more-products-modal .modal-footer-customizing .pagnation-list-full ul').append('<li class="list-dots"></li>')
    }
    $('#add-more-products-modal .modal-footer-customizing .pagnation-list-full ul li:first-child').addClass('active');
    $('#add-more-products-modal .modal-footer-customizing .pagnation-list-full ul li').each(function (index) {
        $(this).click(function () {
            $('#add-more-products-modal .modal-footer-customizing .pagnation-list-full ul li').removeClass('active');
            $(this).addClass('active');
            var scrollValue = ($('.modal-body.product-body ul.add-more-content-real > li').outerWidth() + 30) * index -alignPad;
            $('.modal-body.product-body .product-scroll-tag').animate({scrollLeft : scrollValue}, 'slow');
        });
    });

    $('.tab-content.add-more-content-real li .product-service-checked a').click(function () {
        var productID = $(this).parents('.product').attr('data-solution-id');
        $('.tab-content.add-more-content .configurator-solutions div.product[data-solution-id = "'+ productID +'"]').find('.product-service-checked a').click();
        var selectStatus = $('.tab-content.add-more-content .configurator-solutions div.product[data-solution-id = "'+ productID +'"]').find('.product-service-checked a').attr('data-selected');
        $(this).attr('data-selected', selectStatus);

        if($(this).attr('data-selected') == 'true') {
            var productPrice = $(this).parent('.product-service-checked').prev('.solution-footer').find('.value span').text().replace(',','');
            var priceNow = $('#add-more-products-modal .modal-footer-customizing .sele-payment span.selected-price').text().replace(',','');
            var calcPrice = parseInt(productPrice) + parseInt(priceNow);
            $('#add-more-products-modal .modal-footer-customizing .sele-payment span.selected-price').text(calcPrice + '$');

            var selectCount = parseInt($('#add-more-products-modal .modal-footer-customizing .sele-title span.selected-numer').text());
            $('#add-more-products-modal .modal-footer-customizing .sele-title span.selected-numer').text(selectCount + 1);
        } else {
            var productPrice = $(this).parent('.product-service-checked').prev('.solution-footer').find('.value span').text().replace(',','');
            var priceNow = $('#add-more-products-modal .modal-footer-customizing .sele-payment span.selected-price').text().replace(',','');
            var calcPrice = parseInt(priceNow) - parseInt(productPrice);
            $('#add-more-products-modal .modal-footer-customizing .sele-payment span.selected-price').text(calcPrice + '$');

            var selectCount = parseInt($('#add-more-products-modal .modal-footer-customizing .sele-title span.selected-numer').text());
            $('#add-more-products-modal .modal-footer-customizing .sele-title span.selected-numer').text(selectCount - 1);
        }
    });

    $('.modal-body.service-body ul.add-more-content > li').each(function () {
        $(this).find('ul.configurator-solutions > li').each(function () {
            var title = $(this).find('h4').text();
            var tagline = $(this).find('div.face > p').text();
            var imgSrc = $(this).find('img').attr('src');
            var imgAlt = $(this).find('img').attr('alt');
            var perDescription = $(this).find('.description-tag p').text();
            var perPrice = $(this).find('.solution-footer .price span').text();
            var perMonth = $(this).find('.solution-footer .price label').text();
            var perId = $(this).find('div.service').attr('data-solution-id');
            var perCategory = $(this).find('.solution-footer .price p.sort-alphabet').text();
            $('.service-body ul.add-more-content-real').append(
                '<li class="product-inner"><div class="product" data-solution-id="'+ perId +'"><div class="face"><img src="'+ imgSrc +'" alt="'+ imgAlt +'"><h5>'+ title +'</h5><p>'+ tagline +'</p><div class="description-tag"><p itemprop="description">'+ perDescription +'</p></div><div class="solution-footer">' +
                '<div class="price"><div class="value">$<span>'+ perPrice +'</span><label>'+ perMonth +'</label></div><div class="category-name"><p>'+ perCategory +'</p></div></div></div><div class="product-service-checked"><a class="btn-transparent btn-radio btn-block btn-lg" data-selected="false" type="button" href="#" alt=""><span class="glyphicon"></span></a></div></div></div></li>'
            );
        });
    });

    var productsCount = $('.modal-body.service-body ul.add-more-content-real > li').length;
    var rowCount = Math.round(productsCount / 2);
    var scrollWidth = rowCount * ($('.modal-body.service-body ul.add-more-content-real > li').outerWidth() + 28);
    var listperWidth = $('.modal-body.service-body ul.add-more-content-real > li').outerWidth() + 15;
    var listviewWidth = pageWidth - 39;
    var alignPad = (listviewWidth - listperWidth) / 2;
    var mobileScroll = ($('.modal-body.service-body ul.add-more-content-real > li').outerWidth() + 30) - alignPad;

    $('.modal-body.service-body ul.add-more-content-real').css('column-count', rowCount).css('width', scrollWidth);

    var productPage = Math.round(rowCount / 2);
    for(var i = 0; i <productPage; i++) {
        $('#add-more-services-modal .modal-footer-customizing .pagnation-list ul').append('<li class="list-dots"></li>')
    }
    $('#add-more-services-modal .modal-footer-customizing .pagnation-list ul li:first-child').addClass('active');
    $('#add-more-services-modal .modal-footer-customizing .pagnation-list ul li').each(function (index) {
        $(this).click(function () {
            $('#add-more-services-modal .modal-footer-customizing .pagnation-list ul li').removeClass('active');
            $(this).addClass('active');
            var scrollValue = ($('.modal-body.service-body ul.add-more-content-real > li').outerWidth() + 28) * 2 * index;
            $('.modal-body.service-body .product-scroll-tag').animate({scrollLeft : scrollValue}, 'slow');
        });
    });

    var productPagefull = Math.round(rowCount);
    for(var i = 0; i <productPagefull; i++) {
        $('#add-more-services-modal .modal-footer-customizing .pagnation-list-full ul').append('<li class="list-dots"></li>')
    }
    $('#add-more-services-modal .modal-footer-customizing .pagnation-list-full ul li:first-child').addClass('active');
    $('#add-more-services-modal .modal-footer-customizing .pagnation-list-full ul li').each(function (index) {
        $(this).click(function () {
            $('#add-more-services-modal .modal-footer-customizing .pagnation-list-full ul li').removeClass('active');
            $(this).addClass('active');
            var scrollValue = ($('.modal-body.service-body ul.add-more-content-real > li').outerWidth() + 30) * index - alignPad;
            $('.modal-body.service-body .product-scroll-tag').animate({scrollLeft : scrollValue}, 'slow');
        });
    });

    $('.modal-body.service-body .tab-content.add-more-content-real li .product-service-checked a').click(function () {
        var serviceID = $(this).parents('.product').attr('data-solution-id');
        $('.modal-body.service-body .tab-content.add-more-content .configurator-solutions div.service[data-solution-id = "'+ serviceID +'"]').find('.product-service-checked a').click();
        var selectStatus = $('.modal-body.service-body .tab-content.add-more-content .configurator-solutions div.service[data-solution-id = "'+ serviceID +'"]').find('.product-service-checked a').attr('data-selected');
        $(this).attr('data-selected', selectStatus);

        if($(this).attr('data-selected') == 'true') {
            if($(this).parent('.product-service-checked').prev('.solution-footer').find('.value label').text() == ' / One time') {
                var servicePrice = $(this).parent('.product-service-checked').prev('.solution-footer').find('.value span').text().replace(',','');
                var priceNow = $('#add-more-services-modal .modal-footer-customizing .sele-payment span.selected-price').text().replace(',','');
                var calcPrice = parseInt(servicePrice) + parseInt(priceNow);
                $('#add-more-services-modal .modal-footer-customizing .sele-payment span.selected-price').text(calcPrice + '$');
            }
            var selectCount = parseInt($('#add-more-services-modal .modal-footer-customizing .sele-title span.selected-numer').text());
            $('#add-more-services-modal .modal-footer-customizing .sele-title span.selected-numer').text(selectCount + 1);
        } else {
            if($(this).parent('.product-service-checked').prev('.solution-footer').find('.value label').text() == ' / One time') {
                var servicePrice = $(this).parent('.product-service-checked').prev('.solution-footer').find('.value span').text().replace(',','');
                var priceNow = $('#add-more-services-modal .modal-footer-customizing .sele-payment span.selected-price').text().replace(',', '');
                var calcPrice = parseInt(priceNow) - parseInt(servicePrice);
                $('#add-more-services-modal .modal-footer-customizing .sele-payment span.selected-price').text(calcPrice + '$');
            }

            var selectCount = parseInt($('#add-more-services-modal .modal-footer-customizing .sele-title span.selected-numer').text());
            $('#add-more-services-modal .modal-footer-customizing .sele-title span.selected-numer').text(selectCount - 1);
        }
    });

    $('.modal-body.product-body .product-scroll-tag').on("swipeleft",function(){
        $('.modal-body.product-body .product-scroll-tag').animate({scrollLeft : '+='+mobileScroll}, 'slow');
    });
    $('.modal-body.product-body .product-scroll-tag').on("swiperight",function(){
        $('.modal-body.product-body .product-scroll-tag').animate({scrollLeft : '-='+mobileScroll}, 'slow');
    });

    var lastScrollLeft = 0;
    $('.product-body .product-scroll-tag').scroll(function() {
        var documentScrollLeft = $('.product-body .product-scroll-tag').scrollLeft();
        if (lastScrollLeft != documentScrollLeft) {
            console.log('scroll x' + documentScrollLeft);
            lastScrollLeft = documentScrollLeft;
            $('#add-more-products-modal .modal-footer-customizing .pagnation-list-full ul li').each(function (index) {
                var unitscroll = ($('.modal-body.product-body ul.add-more-content-real > li').outerWidth() + 0);
                var leftunit = unitscroll * index;
                var rightunit = unitscroll * (index + 1);
                if(documentScrollLeft > leftunit && documentScrollLeft < rightunit ) {
                    $('#add-more-products-modal .modal-footer-customizing .pagnation-list-full ul li').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }
    });

    $('.service-body .product-scroll-tag').scroll(function() {
        var documentScrollLeft = $('.service-body .product-scroll-tag').scrollLeft();
        if (lastScrollLeft != documentScrollLeft) {
            console.log('scroll x' + documentScrollLeft);
            lastScrollLeft = documentScrollLeft;
            $('#add-more-services-modal .modal-footer-customizing .pagnation-list-full ul li').each(function (index) {
                var unitscroll = ($('.modal-body.service-body ul.add-more-content-real > li').outerWidth() + 0);
                var leftunit = unitscroll * index;
                var rightunit = unitscroll * (index + 1);
                if(documentScrollLeft > leftunit && documentScrollLeft < rightunit ) {
                    $('#add-more-services-modal .modal-footer-customizing .pagnation-list-full ul li').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }
    });

    $(".clickable-tb").click(function() {
        $(this).target = '_blank';
        window.document.location = $(this).data("href");
    });
    
    $('.receipt-bank-work-video').click(function () {
       if($('.second-video-control').prev('video').get(0).paused) {
           $('.second-video-control').prev('video').get(0).play();
           //$('.receipt-bank-hero video').get(0).pause();
           $(this).find('.second-video-control .control-btn').fadeOut();
       } else {
           $('.second-video-control').prev('video').get(0).pause();
           //$('.receipt-bank-hero video').get(0).play();
           $(this).find('.second-video-control .control-btn').fadeIn();
       }
    });
    
    /*$('.receipt-bank-hero .mute-control-btn .mute-btn').click(function () {
       if($('.receipt-bank-hero video').prop('muted')) {
           $('.receipt-bank-hero video').prop('muted', false);
           $(this).find('img.mute-icon').css('display', 'none');
           $(this).find('img.unmute-icon').css('display', 'block');
       } else {
           $('.receipt-bank-hero video').prop('muted', true);
           $(this).find('img.mute-icon').css('display', 'block');
           $(this).find('img.unmute-icon').css('display', 'none');
       }
    });

    $('.how-work .mute-control-btn .mute-btn').click(function () {
        if($('.receipt-bank-work-video video').prop('muted')) {
            $('.receipt-bank-work-video video').prop('muted', false);
            $(this).find('img.mute-icon').css('display', 'none');
            $(this).find('img.unmute-icon').css('display', 'block');
        } else {
            $('.receipt-bank-work-video video').prop('muted', true);
            $(this).find('img.mute-icon').css('display', 'block');
            $(this).find('img.unmute-icon').css('display', 'none');
        }
    });*/

    $('body').click(function () {
        $('.configurator-solutions-basket .border-box.pricing-totals h4[data-price-id="MONTHLY"]').addClass('col-md-push-6 col-sm-push-6');
        $('.configurator-solutions-basket .border-box.pricing-totals h4[data-price-id="ONE_TIME"]').addClass('col-md-pull-6 col-sm-pull-6');

        var monthlyVal = $('.pricing-totals.border-box h4[data-price-id="MONTHLY"]').attr('data-price');
        var onetimeVal = $('.pricing-totals.border-box h4[data-price-id="ONE_TIME"]').attr('data-price');
        $('.calc-price h4.monthly span').text(monthlyVal);
        $('.calc-price h4.onetime span').text(onetimeVal);

        var monthlytxt = $('.pricing-totals.border-box h4[data-price-id="MONTHLY"]').text();
        var onetimetxt = $('.pricing-totals.border-box h4[data-price-id="ONE_TIME"]').text();
        $('.calc-price h6.monthly').text(monthlytxt);
        $('.calc-price h6.onetime').text(onetimetxt);
    });

    var pageUrl = window.location.href;
    $('.contact-second-form-content .form-group input.pageurl').attr('value', pageUrl);

    $("body").mouseup(function(e){down=false;});

    window.onbeforeunload = null;
});

