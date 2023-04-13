// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// var jQuery = require("jquery")
// global.$ = global.jQuery = jQuery
// window.$ = window.jQuery = jQuery

// require("bootstrap")
// require("./includes/properties")

let BtnReadMore = document.getElementById("toggle-details")

BtnReadMore.addEventListener('click', function(){
    let details = document.getElementById("prop-details");
    details.classList.toggle("open");

});
