var AS = {};

$(document).ready(function(){
	$('#loading2').hide();
})

$(function() {
    window.addEventListener('message', function(event) {
        if (event.data.type == done) {
            AS.DoneLoading()
		}
    });
});

AS.DoneLoading = function() {
	setTimeout(function() {
		$.when($(#loading).animate({
			bottom '1000px'
		})).done(function() {
			$.when($(html).fadeOut(200)).done(function() {
				$.post('httpAS-loadingscreendone');
			}, 1)
		})
	}, 1)
}