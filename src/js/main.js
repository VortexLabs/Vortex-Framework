require('./sticky-footer/sticky-footer.js');
require('./overlay/overlay.js');

window.onload = function(){
	if(document.getElementsByClassName('v-adjust-height').length > 0)
	{
		v_adjust_height();
	}

	if(document.getElementsByClassName('v-sticky-footer').length > 0)
	{
		v_sticky_footer();
	}

	if(document.getElementsByClassName('v-overlay').length > 0)
	{
		v_overlay();
	}

};
