window.onscroll = function() {myFunction()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

console.log(sticky);

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
