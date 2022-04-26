// Select elements
let container = document.querySelector('.container');
let toggle = document.querySelector('.burger');
// Event Listener
container.onclick = ()=>{
    // Toggle class
    toggle.classList.toggle('active');
}