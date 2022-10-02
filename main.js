// programming our hamburger



var hamburger = document.querySelector(".hamburger")

var mobilelinks = document.querySelector(".mobile-linkhold")

console.log(mobilelinks)

console.log(hamburger)

// hamburger.classList.toggle('showburger')

function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinks.classList.toggle('show-mobilelink') 
}

