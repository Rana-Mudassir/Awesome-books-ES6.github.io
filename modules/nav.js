/* eslint-disable */
export const show = (display, hide, hideToo) => {
	document.getElementById(display).style.display = 'block';
	document.getElementById(hide).style.display = 'none';
	document.getElementById(hideToo).style.display = 'none';
	return false;
};