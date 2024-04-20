var notification_close = document.getElementById("notification_close")
var notificationbar = document.getElementById("notificationbar")

notification_close.addEventListener("click", function () {

    notificationbar.style.display = "none"

})

search_icon.addEventListener("click", function () {
    var search = document.getElementById("search").value.toUpperCase()
    var product = document.getElementById("product")
    var productlist = product.querySelectorAll("div")



    for (i = 0; i < productlist.length; i = i + 1) {
        var productName = productlist[i].querySelector("h1").textContent

        if (productName.toUpperCase().indexOf(search) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"

        }
    }


})
document.addEventListener("DOMContentLoaded", function () {
    // Selecting the checkbox and the image to show
    var ones = document.getElementById('one');
    var twos = document.getElementById('two');
    var threes = document.getElementById('three')
    var firsts = document.querySelector('.first');
    var fours = document.getElementById('four')
    var fives = document.getElementById('five')

    var sixs = document.getElementById('six')

    var sevens = document.getElementById('seven')
    var eight = document.getElementById('eight')
    var nine = document.getElementById('nine')

    var firstsones = document.querySelector('.first-ones');
    var firstsones2 = document.querySelector('.first-ones2');

    var firstsones3 = document.querySelector('.first-ones3');

    var firstsones4 = document.querySelector('.first-ones4');


    var seconds = document.querySelector('.second');
    var secondsone = document.querySelector('.second-one');
    var secondsone11 = document.querySelector('.second-one11');

    var thirds = document.querySelector('.third');
    var thirdsone = document.querySelector('.third-one');
    var firstsones11 = document.querySelector('.first-ones11');

    var firstsones12 = document.querySelector('.first-ones12');

    var firstsones13 = document.querySelector('.first-ones13');

    var firstsones14 = document.querySelector('.first-ones14');
    var firstexcept = document.querySelector('.firstexcept')
    var thirdsone1 = document.querySelector(".third-one1")



    // Adding event listener to the checkbox
    ones.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (ones.checked) {
            firsts.style.display = 'block';
            seconds.style.display = 'none';
            secondsone.style.display = 'none';
            thirds.style.display = "none"

            thirdsone.style.display = 'none';

        } else {

            location.reload()

        }
    });
    twos.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (twos.checked) {
            firsts.style.display = 'none';
            firstsones.style.display = 'none';
            firstsones2.style.display = 'none';
            firstsones3.style.display = 'none';
            firstsones4.style.display = 'none';

            seconds.style.display = 'block';
            secondsone.style.display = 'block';
            thirds.style.display = "none"

            thirdsone.style.display = 'none';

        } else {

            location.reload()


        }
    });
    threes.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (threes.checked) {
            firsts.style.display = 'none';
            firstsones11.style.display = 'none';

            firstsones12.style.display = 'none';

            firstsones13.style.display = 'none';

            firstsones14.style.display = 'none';
            secondsone11.style.display = 'none';

            seconds.style.display = 'none';
            thirds.style.display = "block"


        } else {

            location.reload()


        }
    });
    fours.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (fours.checked) {

            firsts.style.display = 'block';
            firstexcept.style.display = "none"
            thirds.style.display = "none"
            firstsones2.style.display = 'none';
            firstsones.style.display = 'none';
            thirdsone.style.display = "none"




        } else {

            location.reload()


        }
    });
    fives.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (fives.checked) {

            firsts.style.display = "none"
            firstsones11.style.display = "block"
            firstsones13.style.display = "none"
            firstsones14.style.display = "none"
            seconds.style.display = "none"
            firstsones12.style.display = "none"
            thirds.style.display = "none"
            thirdsone.style.display = "none"
            secondsone11.style.display = "none"





        } else {

            location.reload()


        }
    });
    sixs.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (sixs.checked) {

            firsts.style.display = "none"
            seconds.style.display = "none"
            thirds.style.display = "none"
            firstsones11.style.display = "none"
            firstsones12.style.display = "none"
            firstsones13.style.display = "none"
            firstsones14.style.display = "none"
            secondsone11.style.display = "none"
            firstexcept.style.display = "block"

        } else {

            location.reload()


        }
    });
    sevens.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (sevens.checked) {

            firsts.style.display = "none"
            seconds.style.display = "none"
            thirds.style.display = "none"
            firstsones11.style.display = "none"
            firstsones12.style.display = "none"
            firstsones13.style.display = "none"
            firstsones14.style.display = "none"
            secondsone11.style.display = "none"
            firstexcept.style.display = "none"
            thirdsone.style.display = "none"
            firstsones12.style.display = "block"
            thirdsone1.style.display = "block"

        } else {

            location.reload()


        }
    });
    eight.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (eight.checked) {

            firsts.style.display = "none"
            seconds.style.display = "none"
            thirds.style.display = "none"
            firstsones11.style.display = "none"
            firstsones12.style.display = "none"
            firstsones13.style.display = "none"
            firstsones14.style.display = "none"
            secondsone11.style.display = "none"
            firstexcept.style.display = "none"
            thirdsone.style.display = "none"
            firstsones12.style.display = "block"
            thirdsone1.style.display = "block"

        } else {

            location.reload()


        }
    });
    nine.addEventListener('change', function () {
        // If checkbox is checked, show the image; otherwise, hide it
        if (nine.checked) {
            firsts.style.display = "none"
            seconds.style.display = "none"
            thirds.style.display = "none"


        } else {

            location.reload()


        }
    });
});

var sidenav_main=document.getElementById("sidenav")
var sidenav_close=document.getElementById("sidenav_close")
var menu_bar_mobile=document.getElementById("menu_bar_mobile")
menu_bar_mobile.addEventListener("click",function(){
    sidenav_main.style.right=0
})
sidenav_close.addEventListener("click",function(){
    sidenav_main.style.right="-50%"
})



