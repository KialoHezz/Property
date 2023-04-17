// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// var jQuery = require("jquery")
// global.$ = global.jQuery = jQuery
// window.$ = window.jQuery = jQuery

// require("bootstrap")
// require("fontawesome-free")

// require("./includes/properties")

// import toastr from "toastr";

// toastr.options = {
//     progressBar: true

// }

// globalThis.toastr = toastr;

let BtnReadMore = document.getElementById("toggle-details")

BtnReadMore.addEventListener('click', function(){
    let details = document.getElementById("prop-details");
    console.log(details.classList.toggle("open"));

    // if(details.hasClass("open")){
    //     console.log(this.textContent("Show Less"));
    // }else{
    //     this.classList.toggle("Show More");
    // }

});
