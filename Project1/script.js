$(document).ready(function() {

    $(".navbar-nav a").on('click', function (event)){
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash
        }
    }
}