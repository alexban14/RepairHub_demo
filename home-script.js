let slides = ['assets/slideshow/unsplash1.png', 'assets/slideshow/unsplash2.png', 'assets/slideshow/unsplash3.jpg',
'assets/slideshow/unsplash4.jpg', 'assets/slideshow/unsplash5.jpg', 'assets/slideshow/unsplash6.jpg'];
let alts = ['man repairing a phone', 'broken phone taken to the service', 'another guy repairing a phone',
'a ryzen processor inside a PC', 'man repair a PC', 'opened phone for repair'];
const slide = document.querySelector('#slide');
let i = 0;

function slideShow() {
    slide.setAttribute('src', slides[i]);
    slide.setAttribute('alt', alts[i]);

    if (i < slides.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('slideShow()', 4000);
}

window.onload = slideShow;