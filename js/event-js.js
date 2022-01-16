// click
window.addEventListener("click", function (e) {
    e.preventDefault();
});
window.onclick = function (e) {
    e.preventDefault();
}

// hover
window.addEventListener("mouseover", function (e) {
    e.preventDefault();
});
window.addEventListener("mouseout", function (e) {
    e.preventDefault();
});

// keypress: https://keycode.info/
window.addEventListener("keypress", function (e) {
    e.preventDefault();
    let code = e.keyCode || e.which;
    if (code == 32) {
    }
});

// load
window.addEventListener('load', (e) => {
    console.log('page is fully loaded');
});