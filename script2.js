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