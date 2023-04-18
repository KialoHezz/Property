// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// var jQuery = require("jquery")
// global.$ = global.jQuery = jQuery
// window.$ = window.jQuery = jQuery

// require("bootstrap")
// require("fontawesome-free")
// require("jquery")
// require("./includes/properties")

// import toastr from "toastr";

// toastr.options = {
//     progressBar: true

// }

// globalThis.toastr = toastr;

// show more for user to read the details.
// let BtnReadMore = document.getElementById("toggle-details")

// BtnReadMore.addEventListener('click', function(){
//     let details = document.getElementById("prop-details");
//     console.log(details.classList.toggle("open"));
    

// });


// show telephone number
let show = document.getElementById("show-tel");

console.log(show);

show.addEventListener("click", function(){
    let $this = $(this);

    $this.text($this.data("telephone"));
});



// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
//   })
