import 'fullpage.js/dist/fullpage.min.css';
import 'fullpage.js/vendors/easings.min';
import 'fullpage.js/vendors/scrolloverflow.min';
import fullpage from 'fullpage.js/dist/fullpage.min';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slick from 'slick-carousel/slick/slick.min';
import $ from 'jquery';

new fullpage('#fullpage', {
    ///key///
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    ///navigation///
    menu: '#menu',
    anchors: ['hero', 'services', 'projects', 'advantages', 'about', 'contacts'],
    onLeave: (origin, destination, direction) => {
        if (destination.anchor === 'advantages') {
            let currentNumber = $('.advantages__block .number');
            [...currentNumber].forEach((el) => {
                let number = parseInt($(el).text().replace(' ', ''));
                 console.log(number);
                $({numberValue: 0}).animate({numberValue: number}, {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $(el).text(Math.ceil(this.numberValue));
                    }
                });
            });

        }
    },
});

///slider///
let projects = document.querySelector('.projects');
$('.bg-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    asNavFor: '.main-slider'
});
$('.main-slider').slick({
    arrow: true,
    centerMode: true,
    centerPadding: '320px',
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.bg-slider'
});
$('.slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    asNavFor: '.slider-word'
});
$('.slider-word').slick({
    arrow: false,
    centerMode: true,
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-img'
});



