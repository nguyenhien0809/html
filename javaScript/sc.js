
const btnScrollToTop = document.getElementById('scroll_top');

window.addEventListener('scroll',() => {
    if (window.scrollY >500) {
        btnScrollToTop.style.display = "block";
    }else{
        btnScrollToTop.style.display = "none";
    }
})
btnScrollToTop.addEventListener("click", function(){
    console.log(window.scrollY);
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

function showSearch() {
    var Share = document.getElementById('_Search');
    Share.classList.toggle("search")
}
function show_tb_login() {
    var tb_lg = document.getElementById('tb_lg');
    tb_lg.classList.toggle("tb-Login");
}

function ShowNav(){
    var a = document.getElementById('ul_chuc_nang');
    a.classList.toggle("ul_chuc_nang");
}
function showDanh_muc(){
    var a = document.getElementById('ul_danh_muc');
    a.classList.toggle("ul_danh_muc_h");
}

function showMenu_User(){
    var a = document.getElementById('User_info');
    a.classList.toggle("User_info_h");
}

function formatText(){
    
}
