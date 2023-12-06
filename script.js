//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

$("#nav a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function () {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});
$('.link').click(function () {
    $('.link').removeClass('active');
    $('.active').removeClass();
    $(this).addClass('active');
});
$('.active').click(function () {
    $('.link').removeClass('active');
    $(this).addClass('active');
});

$('#web').click(function () {
    $('.web').show();
    $('.desain').hide();
    $('.calligraphy').hide();
});

$('#desain').click(function () {
    $('.desain').show();
    $('.web').hide();
    $('.calligraphy').hide();
});

$('#cally').click(function () {
    $('.calligraphy').show();
    $('.desain').hide();
    $('.web').hide();
});

$('#all').click(function () {
    $('.web').show();
    $('.desain').show();
    $('.calligraphy').show();
});
$('#bing').click(function () {
    $('#secing').show();
    $('#bindo').css("font-weight", "normal");
    $('#secindo').hide();
    $(this).css("font-weight", "Bold");
});
$('#bindo').click(function () {
    $('#secing').hide();
    $('#bing').css("font-weight", " normal");
    $('#secindo').show();
    $(this).css("font-weight", "Bold");
});