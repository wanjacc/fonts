/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'prudential\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-prudentialnoun_180782_cc': '&#xe900;',
		'icon-prudentialnoun_311716_cc': '&#xe901;',
		'icon-prudentialnoun_311715_cc': '&#xe902;',
		'icon-prudentialnoun_311722_cc': '&#xe903;',
		'icon-prudentialnoun_349960_cc': '&#xe904;',
		'icon-prudentialnoun_175740_cc': '&#xe905;',
		'icon-prudentialcoin-dollar': '&#xe909;',
		'icon-prudentialcredit-card': '&#xe90a;',
		'icon-prudentialkey2': '&#xe90b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-prudential[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
