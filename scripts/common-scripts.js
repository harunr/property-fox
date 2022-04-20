/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */
if(navigator.appName == 'Microsoft Internet Explorer' ){
	if( ( navigator.userAgent.indexOf('MSIE 6.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 7.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 8.0') >= 0 ) ){
		document.createElement('header')
		document.createElement('nav')
		document.createElement('section')
		document.createElement('aside')
		document.createElement('footer')
		document.createElement('article')
		document.createElement('hgroup')
		document.createElement('figure')
		document.createElement('figcaption')
	}
}


;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
        
        
        
        if( $(".include-content, .listing-page, .listing-list-content").length){
            $("body").addClass("black-header")
        }
		
        if( $(window).width() < 768 ){
            $('div.property-detailes p').click(function(){
                $(this).parent().toggleClass('show')
                $(this).parent().find('div.property-coll').slideToggle();
            })
        }
            
        if($(window).width() < 768){
            $(".listing-service-item h6").click(function(){
                $(this).parent().toggleClass('show')
                $(this).parent().find(".listing-item-wraper").slideToggle()
            })
        }
        
        
        //this function for scroll down 
        $("div.scroll-down").bind('click', function(){
            if($(window).width() < 767 ){
                $('body, html').stop(true, true).animate({
                    scrollTop: $("#get-started-wrap").offset().top -560
                }, 1500, "easeInOutCubic")
            }
            else{
                $('body, html').stop(true, true).animate({
                    scrollTop: $("#get-started-wrap").offset().top - 560
                }, 1500, "easeInOutCubic")
            }
        })
        
        
        if($("#customer-slider").length){
            $('.customer-slider').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '10px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 766,
                        settings: {
                            dots: true,
                            arrows: false,
                            centerMode: true,
                            centerPadding: '20px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        
        if($("#listing-slider").length){
            $('.customer-slider').slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '10px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 766,
                        settings: {
                            dots: true,
                            arrows: true,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        
        
        if($(window).width() < 768){
            if($("#floating-brand-item-wrap").length){
                $('#floating-brand-item-wrap').slick({
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 766,
                            settings: {
                                dots: true,
                                arrows: true,
                                //centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 3
                            }
                        }
                    ]
                });
            }
        }
        
            
        if( $("div.property-price-info").length){
            // Traditional Agent Commission slider function
            $(function() {
                var progresSliderElement = $("#progressRange")
                var progressRangehandle = $("#progressRangehandle");
                progresSliderElement.slider({
                      range: "min",
                      min: 0,
                      max: 10,
                      value: 7,
                      create: function() {
                          progressRangehandle.text( progresSliderElement.slider( "value") + "%" );

                      },
                      slide: function( event, ui ) {
                        progressRangehandle.text( ui.value + "%");
                      },
                    change: function(){
                        var propertyPrice = $("#pricingRange").slider("value")
                        var tacPrcnt = $("#progressRange").slider( "value") / 100
                        var taCommission = tacPrcnt  * propertyPrice
                        var pfcPrcnt = 1.5 / 100
                        var pfCommision = pfcPrcnt * propertyPrice
                        var savePrice = Math.floor(taCommission -  pfCommision)
                        
                        netPrice.text( "R" +  savePrice)
                        
                    }
                });
       
                // Property price slider 
                var sliderElement = $("#pricingRange")
                var handle = $( "#custom-handle" );
                var netPrice = $("#netPrice")
                
                
                sliderElement.slider({
                  range: "max",
                  min: 1000000,
                  max: 10000000,
                  value: 1000000,
                  create: function() {
                      handle.text("R" + sliderElement.slider( "value" ) );

                  },
                  slide: function( event, ui ) {

                    $("#minRange").text( "R" + ui.value );
                    handle.text( "R" + ui.value );
                   
                                      
                  },
                    change: function(){
                        var propertyPrice = $("#pricingRange").slider("value")
                        var tacPrcnt = $("#progressRange").slider( "value") / 100
                        var taCommission = tacPrcnt  * propertyPrice
                        var pfcPrcnt = 1.5 / 100
                        var pfCommision = pfcPrcnt * propertyPrice
        
                        var savePrice = Math.floor(taCommission -  pfCommision)
                        netPrice.text( "R" +  savePrice)
                        
                    }
                });
                $("#minRange").text("R" + sliderElement.slider("value") ); 
                
                var propertyPrice = $("#pricingRange").slider("value")
                var tacPrcnt = $("#progressRange").slider( "value") / 100
                var taCommission = tacPrcnt  * propertyPrice
                var pfcPrcnt = 1.5 / 100
                var pfCommision = pfcPrcnt * propertyPrice

                var savePrice = Math.floor(taCommission -  pfCommision)
                netPrice.text( "R" +  savePrice)
                
            });
                 
            
        }

        if($('.listing-list-content').length){
            $('body').addClass('listing-list-content-body');
        }


        //this function for selectric
        if ($("select.styled-select").length) {
            $('select.styled-select').selectric();
        }

        //this function for custom scroll bar
        if($('.input-field-wrap').length){

            $(".input-field-wrap").getNiceScroll().resize();
            $(".input-field").niceScroll({
                grabcursorenabled: false,
            });
            
            
            if( $(window).width() < 992 ){
               $(".property-type-item-wrap").niceScroll({
                    grabcursorenabled: false,
                }); 
            }
        }
        
                
        if($(window).width() < 768 ){
            $(".main-wrap").getNiceScroll().resize();
            $(".navigation-wrap, .refine-search-wrap").niceScroll({
                grabcursorenabled: false,
            });
        }

        //this function for add class to input
        $('.input-row input[type="text"], .input-row textarea').focus(function(){
            $(this).parent().addClass('active');
        });

        $('.input-row input[type="text"], .input-row textarea').blur(function(){
            $(this).parent().removeClass('active');
        });

        $('.input-row input').keyup(function(){
            $(this).parent().addClass('value-adding');
        });

        $('div.input-row input, .input-row textarea').blur(function(){
            if(!this.value){this.value=this.defaultValue;}
            if(this.value==this.defaultValue){
                $(this).parent().removeClass('value-adding');
            }
        });

        //this function for tab
        $('#tab ul li').eq(0).addClass('active');
        $('.listing-service-item-wrap').hide();
        $('.listing-service-item-wrap') .eq(0) .show();

        $('#tab ul li').click(function(e){
            e.preventDefault();   
        })
        $('#tab ul li').each(function(i){
            $(this).click(function(){
                if($(this).hasClass('active')) return false;
                else{
                    $('#tab ul li').removeClass('active');
                    $(this).addClass('active');
                    $('.listing-service-item-wrap').hide();
                    $('.listing-service-item-wrap') .eq(i) .show();
                }
            });
        });

        if($('section.home-content').length){
            $('body').addClass('home-content-body')
        }

        $(window).on("scroll", function(){

            if($(window).width() > 767 ){

                if($(window).scrollTop() > 10){
                    $("div.header-wrap").addClass("fixedTop")
                }
                else{
                    $("div.header-wrap").removeClass("fixedTop")
                }
            } // End if function


        });

         
       if($(window).width() > 767){
            $("#nav-icon-wrap").click(function(e){
                e.stopPropagation()
                $("body").addClass("navOpened")
                $(this).hide()
            })

            $(".navigation-wrap .close-btn, body").click(function(e){
                $("body").removeClass("navOpened")
                $("#nav-icon-wrap").show()
            })
           
            $(".main-nav, .login-link-wrap").click(function(e){
                e.stopPropagation()
            })
           
           
           
       }
        
        if($(window).width() < 768 ){
            $("#nav-icon-wrap .nav-icon.orange").click(function(){
                $(".navigation-wrap").slideDown()  
                $("body").addClass("phoneNavopened")
            })
            
            $("#nav-icon-wrap .close-btn.brown").click(function(){
                $(".navigation-wrap").slideUp() 
                $("body").removeClass("phoneNavopened")
            })
            
        }
        
        if( $(window).width() < 768 ){

            $(".footer-widget").find("ul.dropdown-menu").parent().addClass("subnav")

            $(".footer-widget.subnav span").bind('click', 'touchend', function(e){
                $(".footer-widget.subnav span").parent().find("ul:visible").slideUp()
                $(".footer-widget.subnav span").removeClass("active")
                if($(this).parent().find("ul:visible").length){
                    $(this).removeClass("active")
                    $(this).parent().find("ul:visible").slideUp()
                }
                else{
                    $(this).addClass("active")
                    $(this).parent().find("ul").slideDown()
                }
            })
        }
        
        
        if( $(".listing-page").length){
            $('body').addClass("listing-page-body")
        }
        
        $(".enqueri-triger").click(function(){
            $("#mobi-enquire-modal").fadeIn()
        })
        
        $(".enquire-close").click(function(){
            $("#mobi-enquire-modal").fadeOut()
        })
        
    
        if( $(window).width() > 767 ){
            var propertyWrap = $(".property-wrap.list-property").outerHeight()
            $(".map-wrap").height(propertyWrap)
        }
                
        $(".selectric-dropdown-style .label").click(function(){
            $(this).parents(".form-inner .input-row").toggleClass("selectrick-opened")
        })
        
        $(".selectric-dropdown-style .selectric-items li").click(function(){
            $(".form-inner .input-row").removeClass("selectrick-opened")
        })
    
        $(".expand-btn").click(function(e){
            e.preventDefault()
            $(this).parent().toggleClass("paragraph-shown")
        })
        
        $(".refine-search").click(function(e){
            e.preventDefault()
            $(".map-wrap").hide()
            $("#refine-search-wrap").slideDown()
        })
        
        $("#refine-search-wrap div.close-btn").click(function(){
            $("#refine-search-wrap").slideUp()
        })
        
        if( $(window).width() < 768 ){
            $(".listing-search-content .search-feature-wrap > ul > li:first-child").click(function(e){
                e.stopPropagation()
                $(this).find("ul").parent().slideToggle()
            })

            
            $(".search-feature-wrap > ul > li:first-child .input-field-wrap").click(function(e){
                e.stopPropagation()
            })

            $("body").click(function(){
                $(".listing-search-content .search-feature-wrap > ul > li > span").parent().find("ul").parent().hide()
            })
            
        }
                
        
        $(".map-triger").click(function(e){
            e.preventDefault()
            $(".listing-list-content .list-menu-wrap").hide()
            $(".map-wrap").slideToggle()
            $(this).parent().toggleClass("mapviewed")
        })
        
        $(".enqueri-triger").click(function(e){
            e.preventDefault()
            $("#mobi-enquire-modal").slideDown()
        })

        
        var $howWeSlide = $('div.how-we-slider')
        
        $howWeSlide.each(function(){
            var itemTotal = $(this).find('ul.slides > li').length
            $("div.how-we-slider-wrap").find('div.total-slide').html(itemTotal)
            $("div.how-we-slider-wrap").find('div.active-slide-no').html(1)
        })
        
        var $modalWeSlide = $('div.modal-slider-wrap')
        
        $modalWeSlide.each(function(){
            var itemTotal = $(this).find('ul.slides > li').length
            $("div.modal-wrap").find('div.total-slide').html(itemTotal)
            $("div.modal-wrap").find('div.active-slide-no').html(1)
        })
        
        $(".carousel-item-inner").find("div.read-btn").parents(".carousel-item-inner").addClass("large-content")
        
        if( $(".tol-tip-triger").length){
            $( document ).tooltip({
              position: {
                my: "center bottom-20",
                at: "center top",
                using: function( position, feedback ) {
                  $( this ).css( position );
                  $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
                }
              }
            });
        }
                
        $(".tool-tip-triger").each(function(){
            var self = $(this)
            self.mouseenter(function(){
                self.find(".tooltip-info").stop(true, true).fadeIn()
            })
            
            self.mouseleave(function(){
                self.find(".tooltip-info").stop(true, true).delay(200).fadeOut()
            })
        })
        
        
        $(".hero-link-wrap a, .heart-icon").click(function(e){
            e.preventDefault()
            $(this).addClass("active")
        })
        
        $(".search-feature-wrap > ul > li").click(function(e){
            e.stopPropagation()
            if( $(this).hasClass("active") ) return true
            else{
                $(".search-feature-wrap > ul > li").removeClass("active")
                $(this).addClass("active")
            }
        })
        
        $("body").click(function(){
            $(".search-feature-wrap > ul > li").removeClass("active")
        })
        
        $(".bottom-fixed-btn a").find("span").parent().addClass("withIcon")
        
        if( $(window).width() < 768 ){
            $(".property-type-wrap ul li").click(function(){
                $(this).find(".input-field-wrap").slideToggle()
            })
        }
        
        if( $(window).width() < 992 ){
            $(".property-triger").click(function(){
                $(this).parent().find(".input-field-wrap").slideToggle()
            })
        }
        
	})// End ready function.


    $(window).load(function(){
            
        if ( $('div.how-we-slider').length == 0 ) return false
        
        var $howSlide = $('div.how-we-slider')
        $('div.how-we-slider').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            manualControls: "#sliderControler ol li",
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {
                $('div.how-we-slider').each(function(){
                    $("div.how-we-slider-wrap").find('div.active-slide-no').html($(this).find('ul.slides > li.flex-active-slide div.slide-no').html())
                })
            }
            
            
        })
        
        $('#Next, a.next-slider-triger').click(function(e){
            e.preventDefault()
            $howSlide.flexslider("next");
        });

        $('#Previous').click(function(e){
            e.preventDefault()
            $howSlide.flexslider("prev");
        });

        //$('div.slider-wrap video').trigger('play');

    })
    
    
    $(window).load(function(){
        if ( $('div.modal-slider-wrap').length == 0 ) return false

        $('div.modal-slider-wrap').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: true,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {
                $('div.modal-slider-wrap').each(function(){
                    $("div.modal-wrap").find('div.active-slide-no').html($(this).find('ul.slides > li.flex-active-slide div.slide-no').html())
                })
            }
        })


    })
    
    

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})