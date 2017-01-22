$(function(){
	init()
});

function init() {
	utilInput();
}

function utilInput() {
	$('.iptText').each(function(){
		$(this).focusin(function(){
			$(this).closest('li').addClass('active');
		});
		$(this).focusout(function(){
			if (!$(this).val() == '') {
				return false;
			} else {
				$(this).closest('li').removeClass('active');
			}
		});
	});

	$('*[data-row=click]').each(function(){
		$(this).click(function(){
			$(this).addClass('active').siblings('*[data-row=click]').removeClass('active');
		});
	});
}
