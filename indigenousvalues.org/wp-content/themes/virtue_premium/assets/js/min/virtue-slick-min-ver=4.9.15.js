jQuery(document).ready(function(t){function e(s){var a=parseInt(s.data("slider-speed")),i=s.data("slider-fade"),l=parseInt(s.attr("data-slider-anim-speed")),o=s.data("slider-arrows"),r=s.data("slider-auto"),d=s.attr("data-slider-type"),n=s.attr("data-slider-center-mode"),p=parseInt(s.attr("data-slider-xxl")),c=parseInt(s.attr("data-slider-xl")),u=parseInt(s.attr("data-slider-md")),h=parseInt(s.attr("data-slider-sm")),S=parseInt(s.attr("data-slider-xs")),f=parseInt(s.attr("data-slider-ss")),T=parseInt(s.attr("data-slider-scroll")),k=s.attr("data-slider-thumbid"),w=s.attr("data-slider-thumbs-showing"),v=s.attr("id"),y=parseInt(s.attr("data-slides-to-show")),g=!1,m=p,I=c,b=u,H=h,O=S,x=f;"true"==n&&(n=!0),1<=t("body.rtl").length&&(g=!0),1===T&&(m=1,I=1,b=1,H=1,O=1,x=1),s.on("init",function(t,e){s.removeClass("loading"),s.parent(".loading").removeClass("loading")}),"carousel"===d?(null===y&&(y=1),s.slick({slidesToScroll:1,slidesToShow:y,centerMode:n,variableWidth:!0,arrows:o,speed:l,autoplay:r,autoplaySpeed:a,fade:i,pauseOnHover:!1,rtl:g,dots:!0})):"content-carousel"===d?(s.slick({slidesToScroll:m,slidesToShow:p,arrows:o,speed:l,autoplay:r,autoplaySpeed:a,fade:i,pauseOnHover:!1,dots:!1,rtl:g,responsive:[{breakpoint:1499,settings:{slidesToShow:c,slidesToScroll:I}},{breakpoint:1199,settings:{slidesToShow:u,slidesToScroll:b}},{breakpoint:991,settings:{slidesToShow:h,slidesToScroll:H}},{breakpoint:767,settings:{slidesToShow:S,slidesToScroll:O}},{breakpoint:543,settings:{slidesToShow:f,slidesToScroll:x}}]}),s.on("beforeChange",function(a,i,l,o){s.find(".kt-slickslider:not(.slick-initialized)").each(function(){e(t(this))})})):"thumb"===d?(s.slick({slidesToScroll:1,slidesToShow:1,arrows:o,speed:l,autoplay:r,autoplaySpeed:a,fade:i,pauseOnHover:!1,adaptiveHeight:!0,dots:!1,rtl:g,asNavFor:k}),t(k).slick({slidesToShow:w,slidesToScroll:1,asNavFor:"#"+v,dots:!1,rtl:g,centerMode:!1,focusOnSelect:!0})):s.slick({slidesToShow:1,slidesToScroll:1,arrows:o,speed:l,autoplay:r,autoplaySpeed:a,fade:i,pauseOnHover:!1,rtl:g,adaptiveHeight:!0,dots:!0})}t(".kt-slickslider").each(function(){var s=t(this),a=parseInt(s.attr("data-slider-initdelay"));null===a||0===a?e(s):setTimeout(function(){e(s)},a)}),t(".init-infinit").each(function(){t(this).on("append.infiniteScroll",function(s,a,i,l){var o;jQuery(l).find(".kt-slickslider").each(function(){var s=t(this),a=parseInt(s.attr("data-slider-initdelay"));null===a||0===a?e(s):setTimeout(function(){e(s)},a)})})})});