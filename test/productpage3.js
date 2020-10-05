let x = document.getElementById('menuicon');
let nm = document.getElementById('navmenu');
let pb = document.getElementById('pagebody');

function openNav() {
    x.classList.toggle('responsive');
    nm.classList.toggle('responsive');
    pb.classList.toggle('responsive');
}