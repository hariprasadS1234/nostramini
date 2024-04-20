//adding notification bar
var notification_close = document.getElementById("notification_close")
var notificationbar = document.getElementById("notificationbar")

notification_close.addEventListener("click", function () {

    notificationbar.style.display = "none"

})
// scroll movement
document.addEventListener('DOMContentLoaded', function () {
    // Get the "New Arrival" link and section
    var menu_new = document.getElementById('menu_new');
    var newproduct = document.querySelector('.newproduct');

    // Add click event listener to the link

    menu_new.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Scroll to the "New Arrival" section
        newproduct.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Get the "New Arrival" link and section
    var menu_most = document.getElementById('menu_most');
    var btn12 = document.querySelector('.btn12');

    // Add click event listener to the link

    menu_most.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Scroll to the "New Arrival" section
        btn12.scrollIntoView({ behavior: 'smooth' });
    });
});
var mostwanted = document.getElementById("mostwanted")

mostwanted.addEventListener("click", function () {

    mostwanted.style.border = "2px solid black"


})
document.addEventListener('keydown', function (event) {
    // Replace 'yourElementId' with the ID of your target element
    const scrollSpeed = 30; // Adjust scroll speed as needed\

    if (event.key === 'ArrowLeft') {
        // Scroll left
        var a = mostwanted.scrollLeft -= scrollSpeed;
        a.scrollIntoView({ behavior: 'smooth' });


    } else if (event.key === 'ArrowRight') {
        // Scroll right
        var b = mostwanted.scrollLeft += scrollSpeed;
        b.scrollIntoView({ behavior: 'smooth' });


    }
    const scrollInterval = setInterval(function () {
        if (event.key === 'ArrowLeft') {
            // Scroll left
            mostwanted.scrollLeft -= scrollSpeed;
            mostwanted.scrollIntoView({ behavior: 'smooth' });

        } else if (event.key === 'ArrowRight') {
            // Scroll right
            mostwanted.scrollLeft += scrollSpeed;
            mostwanted.scrollIntoView({ behavior: 'smooth' });

        }
    }, 50); // Adjust interval as needed

    // Stop continuous scrolling when key is released
    document.addEventListener('keyup', function () {
        clearInterval(scrollInterval);
    });
})
//scroll transition
// Get the element to fade
var trans = document.getElementById("trans");
var transthree=document.getElementById("transthree")
// Flag to track if animation has occurred
// Get the element to fade

// Flag to track if animation has occurred
var animationOccurred = false;

// Add scroll event listener to window
window.addEventListener("scroll", function () {
    // If animation has already occurred or if the element is already fully visible, do nothing
    if (animationOccurred || trans.style.opacity || mostwanted.style.opacity || transthree.style.opacity === "1") {
        return;
    }

    // Check if the scrollY position is greater than a certain threshold
    var scrollThreshold = 600; // You can adjust this threshold as needed
    if (window.scrollY > scrollThreshold) {
        // Trigger animation
        trans.style.opacity = 1;        mostwanted.style.opacity = 1;

        transthree.style.opacity = 1;

        trans.style.transition = "opacity 2s ease"; // Change the duration as needed
        mostwanted.style.transition = "opacity 2s ease"; // Change the duration as needed
        transthree.style.transition = "opacity 6s ease"; // Change the duration as needed

        animationOccurred = true; // Set flag to true to indicate animation has occurred
    }
});
//side nav
var sidenav_main=document.getElementById("sidenav")
var sidenav_close=document.getElementById("sidenav_close")
var menu_bar_mobile=document.getElementById("menu_bar_mobile")
menu_bar_mobile.addEventListener("click",function(){
    sidenav_main.style.right=0
})
sidenav_close.addEventListener("click",function(){
    sidenav_main.style.right="-50%"
})


